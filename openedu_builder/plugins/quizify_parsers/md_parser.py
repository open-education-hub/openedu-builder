import mimetypes
import os
import re
import requests
import logging
import markdown
from base64 import b64encode
from markdown.extensions.codehilite import CodeHiliteExtension

from openedu_builder import path_utils

md = markdown.Markdown(
    extensions=[CodeHiliteExtension(use_pygments=False, guess_lang=True), "fenced_code"]
)

log = logging.getLogger(__name__)

mimetypes.init()


def gen_base64_code_image(language, code):
    url = "https://kod.so/gen"
    data = {
        "lang": language,
        "code": code,
        "watermark": "",
        "theme": "github-light",
        "borderRadius": 0,
        "tabSize": 4,
        "header": 0,
        "paddingtb": 0,
        "paddinglr": 0,
    }

    r = requests.get(url, params=data)
    if r.status_code == requests.codes.ok:
        return f"""<img width="80%" src="data:image/png;base64,{b64encode(r.content).decode('utf-8')}" />"""

    return f"```{language}\n{code}```"


def replace_image_with_base64(content, match, path):
    with open(path, "rb") as f:
        img_content = f.read()
        base64_img_content = b64encode(img_content).decode("utf-8")

    ext = os.path.splitext(path)[1]
    mt = mimetypes.types_map[ext]

    return content.replace(
        match,
        f"""<img src="data:{mt};base64,{base64_img_content}" />""",
    )


def replace_code(content):
    code_regex = r"```(?P<lang>.*?)?\n(?P<code>.*)```"
    return re.sub(
        code_regex,
        lambda m: gen_base64_code_image(m.group("lang"), m.group("code")),
        content,
        flags=re.MULTILINE | re.DOTALL,
    )


def parse_quiz(content, **kwargs):
    question_regex = r"^## Question Text\n\n(.*?)\n\n## "
    answers_regex = r"^## Question Answers\n\n((?:[-\+].*?\n\n?)+)"
    correct_answer_regex = r"^\+ (.*?)$"
    feedback_regex = r"^## Feedback\n\n(.*)"

    if "path" in kwargs:
        for image in re.finditer(r"!\[(?P<alt>.*?)\]\((?P<path>.*?)\)", content):
            if image.group("path").startswith("http"):
                continue

            log.info(f"image: {image.group('path')}")
            content = replace_image_with_base64(
                content,
                image.group(0),
                path_utils.real_join(
                    os.path.dirname(kwargs["path"]), image.group("path")
                ),
            )

    # content = replace_images(content)
    content = replace_code(content)

    answers = re.search(answers_regex, content, re.MULTILINE).group(1)
    # correct_answer = re.search(correct_answer_regex, answers, re.DOTALL).group(1)
    answers = answers.split("\n\n")
    if answers[-1] == "":
        answers = answers[:-1]

    # answers = list(map(lambda a: marko.convert(a), answers))
    log.info(f"answers: {answers}")
    correct_answer = md.convert([a for a in answers if a.startswith("+")][0][2:])
    log.info(f"correct_answer: {correct_answer}")
    answers = [md.convert(a[2:]) for a in answers]

    wrong_answers = [a for a in answers if a != correct_answer]

    question = re.search(question_regex, content, re.DOTALL | re.MULTILINE).group(1)
    question = md.convert(question)
    try:
        feedback = (
            re.search(feedback_regex, content, re.DOTALL | re.MULTILINE)
            .group(1)
            .strip()
        )
        feedback = md.convert(feedback)
    except Exception as e:
        log.debug(f"no feedback found: {e}")
        feedback = None

    log.info(f"question: {question}")
    log.info(f"feedback: {feedback}")

    return {
        "question": question,
        "wrong": wrong_answers,
        "answer": correct_answer,
        "feedback": feedback,
    }
