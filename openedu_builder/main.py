import logging
import os
import yaml
import sys
import openedu_builder.plugins

from openedu_builder.config import CONFIG_FILE
from openedu_builder.plugins import plugins
from pprint import pprint

BUILD_DIR = "build"
CWD = os.getcwd()

logging.basicConfig(level=logging.INFO)
log = logging.getLogger(__name__)


def generate_plugins(stages):
    for name, config in stages.items():
        plugin = plugins[config["plugin"]]

        input_dir = os.path.realpath(config.get("input", CWD))
        if not input_dir.startswith(CWD):
            input_dir = CWD
        if not os.path.isdir(input_dir):
            raise ValueError(f"Input directory {input_dir} does not exist")

        output_dir = os.path.realpath(
            os.path.join(BUILD_DIR, config.get("output", name))
        )
        if not output_dir.startswith(BUILD_DIR):
            output_dir = os.path.join(BUILD_DIR, name)
        if not os.path.exists(output_dir):
            os.mkdir(output_dir)

        yield plugin(input_dir, output_dir, config=config.get("options", {}))


def main():
    global BUILD_DIR

    config_file = sys.argv[1] if len(sys.argv) > 1 else CONFIG_FILE
    config = yaml.safe_load(open(config_file))

    BUILD_DIR = os.path.realpath(config.get("build_dir", BUILD_DIR))
    if not BUILD_DIR.startswith(CWD):
        BUILD_DIR = os.path.join(CWD, "build")
    if not os.path.exists(BUILD_DIR):
        os.mkdir(BUILD_DIR)

    # Should be ordered as of Python 3.7
    stages = {name: config[name] for name in config["stages"]}
    for plugin in generate_plugins(stages):
        # os.chdir(CWD)
        plugin.run()
        os.chdir(CWD)

if __name__ == "__main__":
    main()
    # main(sys.argv[1] if len(sys.argv) > 1 else CONFIG_FILE)
