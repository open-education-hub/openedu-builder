import json
import logging
import os
import re
import shutil
import sys
import tempfile
from pprint import pprint

import yaml

import openedu_builder.path_utils as path_utils
from openedu_builder.config import CONFIG_FILE, LOG_LEVEL
from openedu_builder.plugins import plugins

BUILD_DIR = tempfile.mkdtemp()
OUTPUT_DIR = "/output"
OUTPUT_DIRS = {}
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

        output_dir = OUTPUT_DIRS[name]

        yield plugin(input_dir, output_dir, config=config.get("options", {}))


def parse_output_dirs(stages):
    global OUTPUT_DIRS

    for name, config in stages.items():
        # If not specified, default output directory to build/<stage_name>
        output_dir = path_utils.real_join(BUILD_DIR, config.get("output", name))
        if not os.path.exists(output_dir):
            os.mkdir(output_dir)

        OUTPUT_DIRS[name] = output_dir


def main():
    global BUILD_DIR
    global OUTPUT_DIR

    config_file = sys.argv[1] if len(sys.argv) > 1 else CONFIG_FILE
    config = yaml.safe_load(open(config_file))
    pprint(config)

    # If not specified, default build directory to a temporary directory
    BUILD_DIR = os.path.realpath(config.get("build_dir", BUILD_DIR))
    if not os.path.exists(BUILD_DIR):
        os.mkdir(BUILD_DIR)

    # If not specified, default output directory to /output
    # It is highly encouraged to specify this, as the default is intended for use in Docker
    OUTPUT_DIR = os.path.realpath(config.get("output_dir", OUTPUT_DIR))
    if not os.path.exists(OUTPUT_DIR):
        os.mkdir(OUTPUT_DIR)

    # Should be ordered as of Python 3.7
    stages = {name: config[name] for name in config["stages"]}

    # Parse output directories and save them for replacements
    parse_output_dirs(stages)

    # serialize the config to a string and replace $$output_dir$$ with the actual output directory
    serialized_config = json.dumps(config)
    serialized_config = re.sub(
        r"\$\$(.*?)\$\$", lambda m: OUTPUT_DIRS[m.group(1)], serialized_config
    )
    config = json.loads(serialized_config)

    stages = {name: config[name] for name in config["stages"]}

    for plugin in generate_plugins(stages):
        plugin.run()
        os.chdir(CWD)

    # Make sure to not overwrite plugin before running this
    match config.get("output_type", "last"):
        case "last":
            shutil.copytree(
                plugin.output_dir,
                OUTPUT_DIR,
                dirs_exist_ok=True,
            )
        case "all":
            shutil.copytree(
                BUILD_DIR,
                OUTPUT_DIR,
                dirs_exist_ok=True,
            )
        case _:
            raise ValueError(f"Invalid output_type: {config['output_type']}")


if __name__ == "__main__":
    main()
