import logging
import os
from jinja2 import Environment, PackageLoader
from typing import Any, Mapping

from openedu_builder.plugins.plugin import Plugin, PluginRunError

log = logging.getLogger(__name__)


class EmbedRevealPlugin(Plugin):
    def __init__(self, input_dir: str, output_dir: str, config: Mapping[str, Any]):
        super().__init__(input_dir, output_dir, config)
        self.template_params = {
            "frontmatter": self.config.get("frontmatter"),
            "width": self.config.get("width", "100%"),
            "height": self.config.get("height", "500px"),
            "link": self.config.get("link"),
        }
        self.template = self.config.get("target")

    def run(self):
        # TODO emit warning and keep going with each directory in the input directory
        if self.config.get("build") is None:
            raise PluginRunError("build option is required for this plugin")
        if self.template is None:
            raise PluginRunError("No build target specified")

        env = Environment(
            loader=PackageLoader("openedu_builder.plugins", "embed_reveal_templates")
        )
        template = env.get_template(f"{self.template}.jinja2")

        for name, location in self.config["build"].items():
            output_dir = os.path.join(self.output_dir, name)
            os.makedirs(output_dir, exist_ok=True)

            filename = (
                name
                if self.config.get("extension") is None
                else f"{name}.{self.config['extension']}"
            )
            with open(os.path.join(output_dir, filename), "w") as f:
                f.write(template.render(**self.template_params, deck_location=location, title=name))

            log.info(f"""Created {filename} in {output_dir}""")
