import logging
import os
import subprocess
from typing import Any, Mapping

from openedu_builder.plugins.plugin import Plugin, PluginRunError

log = logging.getLogger(__name__)


class RevealMdPlugin(Plugin):
    def __init__(self, input_dir: str, output_dir: str, config: Mapping[str, Any]):
        super().__init__(input_dir, output_dir, config)

        self.command = config.get("command", "reveal-md")
        self.args = []
        self.args.extend(config.get("extra_args", []))

    def run(self):
        # TODO emit warning and keep going with each directory in the input directory
        if self.config.get("build") is None:
            raise PluginRunError("build option is required for this plugin")

        for name, location in self.config["build"].items():
            # Both self.input_dir and self.output_dir are absolute
            output_dir = os.path.join(self.output_dir, name)

            if os.path.isabs(location):
                input_location = location
            else:
                input_location = os.path.join(self.input_dir, location)

            command = [
                self.command,
                input_location,
                "--static",
                f"{output_dir}",
                *self.args,
            ]
            log.info(f"Running command {' '.join(command)}")

            proc = subprocess.run(command, capture_output=True)

            if proc.returncode != 0:
                log.error(f"Command failed with code {proc.returncode}")
                log.error(f"STDOUT: \n{proc.stdout.decode()}")
                log.error(f"STDERR: \n{proc.stderr.decode()}")
                raise PluginRunError("Command execution failed")

            log.info(f"Command finished with code {proc.returncode}")
            log.info(f"Command output: \n{proc.stdout.decode()}")
