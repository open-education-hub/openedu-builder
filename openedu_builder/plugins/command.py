import logging
import os
import subprocess
from shutil import copytree
from typing import Any, Mapping

import openedu_builder.path_utils as path_utils
from openedu_builder.plugins.plugin import Plugin, PluginRunError

log = logging.getLogger(__name__)


class CommandPlugin(Plugin):
    def __init__(self, input_dir: str, output_dir: str, config: Mapping[str, Any]):
        super().__init__(input_dir, output_dir, config)

        self.locations = config.get("locations")
        if any([os.path.isabs(location) for location in self.locations]):
            log.error(f"One or more absolute locations: \n {self.locations}")
            raise PluginRunError(
                "The locations to run commands must be relative to the input directory"
            )

    def run(self):
        # The command plugin copies the input directory in the output directory so it can run the
        # command in an isolated manner. We need to avoid copying the build directory if it is
        # situated inside the input directory because that would create a cycle.
        # TODO: Is there a way to figure this out for Docker container mappings as well?
        # Currently, if the build output directory is under the input directory, but it is mapped
        # inside a container somewhere outside the input directory, this will still cause a cycle.
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

        if self.locations is None:
            self.locations = ["."]

        for location in self.locations:
            # self.output_dir is absolute
            if os.path.isabs(location):
                path = location
            else:
                path = os.path.join(self.output_dir, location)

            os.chdir(path)

            cmd = [self.config["command"], *self.config["args"]]
            log.info(f"""Running command {" ".join(cmd)}""")
            proc = subprocess.run(cmd, capture_output=True)

            if proc.returncode != 0:
                log.error(f"Command failed with code {proc.returncode}")
                log.error(f"STDOUT: \n{proc.stdout.decode()}")
                log.error(f"STDERR: \n{proc.stderr.decode()}")
                raise PluginRunError("Command execution failed")

            log.info(f"Command finished with code {proc.returncode}")
            log.info(f"Command output: \n{proc.stdout.decode()}")
