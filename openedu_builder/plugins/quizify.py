import glob
import itertools
import logging
import os
import random
import re
from shutil import copytree
from typing import Any, Mapping
import uuid

from jinja2 import Environment, PackageLoader

import openedu_builder.path_utils as path_utils
from openedu_builder.plugins.plugin import Plugin

log = logging.getLogger(__name__)


class QuizifyPlugin(Plugin):
    def __init__(self, input_dir: str, output_dir: str, config: Mapping[str, Any]):
        super().__init__(input_dir, output_dir, config)

        self.locations = config.get("locations")
        self.parser_type = config.get("parser_type")  # regex or python
        # regex expression with specific capture groups or python file name
        self.parser = config.get("parser")

        # in case of regex quiz_type, regex with a single capture group
        self.quiz_regex = config.get("quiz_regex")
        self.quiz_type = config.get("quiz_type")  # link or regex
        # iframe_inline, iframe_link, md_link or replace
        self.quiz_embed = config.get("quiz_embed")
        self.quiz_extension = config.get("quiz_extension")  # optional?

        if self.quiz_embed == "iframe_inline":
            self.iframe_template = config.get("iframe_template", "docusaurus_iframe")

        self.template = config.get("template")

    def run(self):
        def ignore_build(dir, files):
            ret = []
            for file in files:
                path = path_utils.real_join(dir, file)
                if path == path_utils.real_join(
                    self.output_dir, ".."
                ) and os.path.isdir(path):
                    ret.append(file)

            return ret

        copytree(
            self.input_dir,
            self.output_dir,
            ignore=ignore_build,
            dirs_exist_ok=True,
        )
        os.chdir(self.output_dir)

        # Identify all the files that need to be processed
        files = itertools.chain.from_iterable([glob.iglob(x, recursive=True) for x in self.locations])

        for file in files:
            log.info(f"Processing {file}")

            if not os.path.isfile(file):
                log.debug(f"Skipping {file} because it's not a file")
                continue

            if not os.path.isabs(file):
                file = path_utils.real_join(self.output_dir, file)

            # Determine type of quiz (if it's a link or written in the file)
            # Parse accordingly
            #   - if it's a link, the regex will have one capture group with the location of the
            #     quiz. The quiz will be read from that file.
            #   - if it's directly written in the file, the regex will have a single capture group
            #     with the quiz content.
            f = open(file, "r+")
            content = f.read()

            quizes = []

            if self.quiz_type == "link":
                for match in re.finditer(self.quiz_regex, content):
                    quiz_path = match.group(1)
                    if not os.path.isabs(quiz_path):
                        quiz_path = path_utils.real_join(
                            os.path.dirname(file), quiz_path
                        )
                    quiz_file = open(quiz_path, "r")
                    quiz_content = quiz_file.read()
                    quiz_file.close()

                    quizes.append(
                        {
                            "path": quiz_path,
                            "content": quiz_content,
                            "match": match.group(0),
                        }
                    )
            elif self.quiz_type == "regex":
                raise NotImplementedError(
                    "Parsing quiz links using regex is not implemented"
                )

            if len(quizes) == 0:
                log.debug(f"Skipping {file} because it doesn't contain any quizes")
                continue

            # Determine how to parse the quiz content
            #   - if it's a regex, the regex will have multiple NAMED capture groups as follows:
            #     - question: the question text
            #     - correct_answers[1..n] (e.g. correct_answers1, correct_answers2 etc.): the correct answers
            #     - wrong[1..n] (e.g. wrong1, wrong2 etc.): the wrong answers
            #     - (optional) feedback: the feedback for the question
            #   - if it's a python file, it will be dynamically imported. it should contain a
            #     function called parse_quiz that takes the quiz content as a string and returns a
            #     dictionary with the following keys: question, answer, wrong, feedback; wrong is
            #     a list of wrong answers (strings), the other are strings. feedback is optional.
            #     Alternatively, if you also have a custom template, you can return a dictionary
            #     with the keys from your custom template (the dictionary will be passed as is to
            #     the `render_template` function).
            if self.parser_type == "python":
                if not self.parser.startswith(".") or not self.parser.startswith("/"):
                    parser_path = path_utils.real_join(
                        os.path.dirname(__file__), "quizify_parsers", self.parser
                    )
                elif os.path.isabs(self.parser):
                    parser_path = self.parser
                else:
                    parser_path = path_utils.real_join(
                        os.path.dirname(__file__), self.parser
                    )

                parser_name = path_utils.stem(parser_path)

                ###################################
                # Begin hacky dynamic import part #
                ###################################
                import importlib.util
                import sys

                spec = importlib.util.spec_from_file_location(parser_name, parser_path)
                parser = importlib.util.module_from_spec(spec)
                sys.modules[parser_name] = parser
                spec.loader.exec_module(parser)
                ###################################
                # End hacky dynamic import part   #
                ###################################

                for quiz in quizes:
                    log.info("Parsing quiz: " + quiz["path"])
                    try:
                        # content, the first parameter, is given as a named parameter inside the
                        # quiz dictionary
                        parsed = parser.parse_quiz(**quiz)
                    except Exception as e:
                        log.error(f"Failed to parse quiz {quiz['path']}: {e}")
                        continue
                    quiz.update({"parsed": parsed})
            elif self.parser_type == "regex":
                raise NotImplementedError("Regex parsing is not implemented")

            # Generate quiz content
            for quiz in quizes:
                if quiz.get("parsed") is None:
                    continue

                log.info("Processing quiz: " + quiz["path"])

                correct_ids = [str(uuid.uuid4())
                               for x in quiz["parsed"]["correct_answers"]]

                template_args = {
                    "question": {
                        "text": quiz["parsed"]["question"],
                        "id": str(uuid.uuid4()),
                        "feedback": quiz["parsed"].get("feedback", "Good job!"),
                    },
                    "answers": random.sample(
                        [
                            *[
                                {"text": x, "id": str(uuid.uuid4())}
                                for x in quiz["parsed"]["wrong"]
                            ],
                            *[
                                {"text": x, "id": correct_ids[i]}
                                for (i, x) in enumerate(quiz["parsed"]["correct_answers"])
                            ],
                        ],
                        len(quiz["parsed"]["wrong"]) +
                        len(quiz["parsed"]["correct_answers"]),
                    ),
                    "answers_ids": correct_ids,
                }

                # Pass the quiz content to the template and render it
                env = Environment(
                    loader=PackageLoader("openedu_builder.plugins", "quizify_templates")
                )
                template = env.get_template(f"{self.template}.jinja2")
                quiz["final_content"] = template.render(**template_args)

            # Determine how to embed the quiz
            #   - iframe_inline will use the srcdoc attribute of the iframe to embed pure html
            #     (WARNING: escaping of characters is pretty rough)
            #   - iframe_link will use the src attribute of the iframe to embed a link to the quiz
            #     This implies that the generated quiz is an html file with the same name as the
            #     original file, in the same location. `quiz_extension` will be ignored, `html`
            #     will be used.
            #   - md_link will embed a link to the quiz in markdown format. unless set,
            #     `quiz_extension` will be `md` and the generated quiz will be in the same
            #     directory with the string `_generated` appended to the name. The original link
            #     will be replaced to reflect this.
            #   - replace will replace the original quiz (as found by `quiz_regex`) with the
            #     generated quiz.
            if self.quiz_embed == "iframe_link":
                raise NotImplementedError(
                    "Embedding using an iframe with a link (src) is not implemented"
                )
            elif self.quiz_embed == "replace":
                for quiz in quizes:
                    if quiz.get("parsed") is None:
                        continue

                    log.info("Processing quiz: " + quiz["path"])

                    content = content.replace(
                        quiz["match"], f"\n{quiz['final_content']}\n"
                    )
            elif self.quiz_embed == "iframe_inline":
                for quiz in quizes:
                    if quiz.get("parsed") is None:
                        continue

                    log.info("Processing quiz: " + quiz["path"])

                    # Delete useless whitespace
                    quiz["final_content"] = re.sub(
                        r"^\s+",
                        lambda m: m.group(0)[0],
                        quiz["final_content"],
                        flags=re.MULTILINE,
                    )
                    # Delete useless newlines after and before tags
                    quiz["final_content"] = re.sub(
                        r">\n", ">", quiz["final_content"], flags=re.MULTILINE
                    )
                    quiz["final_content"] = re.sub(
                        r"\n<", "<", quiz["final_content"], flags=re.MULTILINE
                    )
                    # Replace newlines with <br /> tags
                    quiz["final_content"] = re.sub(
                        r"\n\n", "<br />", quiz["final_content"]
                    )
                    # Escape quotes and ampersands
                    quiz["final_content"] = re.sub(
                        r'(["&])',
                        lambda m: "&quot;" if m.group(1) == '"' else "&amp;",
                        quiz["final_content"],
                    )

                    env = Environment(
                        loader=PackageLoader(
                            "openedu_builder.plugins", "quizify_templates"
                        )
                    )
                    template = env.get_template(f"{self.iframe_template}.jinja2")

                    content = content.replace(
                        quiz["match"],
                        template.render(
                            {
                                "iframe_id": uuid.uuid4(),
                                "quiz_content": quiz["final_content"],
                            }
                        ),
                    )

            f.seek(0)
            f.truncate(0)
            f.write(content)

            f.close()

        log.info("Done processing quizes")
