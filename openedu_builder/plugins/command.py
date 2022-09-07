import logging
import os
import subprocess
from shutil import copytree, ignore_patterns
from typing import Any, Mapping

from openedu_builder.plugins.plugin import Plugin, PluginRunError

log = logging.getLogger(__name__)

class CommandPlugin(Plugin):
    def __init__(self, input_dir: str, output_dir: str, config: Mapping[str, Any]):
        super().__init__(input_dir, output_dir, config)
        self.locations = config.get("locations")

    def run(self):
        def ignore_build(dir, files):
            ret = []
            for file in files:
                path = os.path.realpath(os.path.join(dir, file))
                if path == os.path.realpath(
                    os.path.join(self.output_dir, "..")
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

        if self.locations is None:
            self.locations = ["."]

        for location in self.locations:
            os.chdir(os.path.join(self.output_dir, location))
            log.info(
                f"""Running command {" ".join([self.config['command'], *self.config['args']])}"""
            )
            proc = subprocess.run(
                [self.config["command"], *self.config["args"]], capture_output=True
            )

            if proc.returncode != 0:
                log.error(f"Command failed with code {proc.returncode}")
                log.error(f"STDOUT: \n{proc.stdout.decode()}")
                log.error(f"STDERR: \n{proc.stderr.decode()}")
                raise PluginRunError("Command execution failed")

            log.info(f"Command finished with code {proc.returncode}")
            log.info(f"Command output: \n{proc.stdout.decode()}")
