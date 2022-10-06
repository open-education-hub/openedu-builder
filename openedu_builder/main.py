import logging
import os
import sys
from pprint import pprint

import yaml

import openedu_builder.path_utils as path_utils
from openedu_builder.config import CONFIG_FILE, LOG_LEVEL
from openedu_builder.plugins import plugins

BUILD_DIR = "_build"
CWD = os.getcwd()

logging.basicConfig(level=LOG_LEVEL)
log = logging.getLogger(__name__)


def generate_plugins(stages):
    for name, config in stages.items():
        plugin = plugins[config["plugin"]]

        # If not specified, default input directory to CWD
        input_dir = os.path.realpath(config.get("input", CWD))
        if not os.path.isdir(input_dir):
            raise ValueError(f"Input directory {input_dir} does not exist")

        # If not specified, default output directory to build/<stage_name>
        output_dir = path_utils.real_join(BUILD_DIR, config.get("output", name))
        if not os.path.exists(output_dir):
            os.mkdir(output_dir)

        yield plugin(input_dir, output_dir, config=config.get("options", {}))


def main():
    global BUILD_DIR

    config_file = sys.argv[1] if len(sys.argv) > 1 else CONFIG_FILE
    config = yaml.safe_load(open(config_file))

    # If not specified, default build directory to _build
    BUILD_DIR = os.path.realpath(config.get("build_dir", BUILD_DIR))
    if not os.path.exists(BUILD_DIR):
        os.mkdir(BUILD_DIR)

    # Should be ordered as of Python 3.7
    stages = {name: config[name] for name in config["stages"]}
    for plugin in generate_plugins(stages):
        plugin.run()
        os.chdir(CWD)


if __name__ == "__main__":
    main()
