---
slug: /
title: Introduction
sidebar_position: 1
---

# Open Education Builder

This project's goal is to provide a simple, yet powerful way to reorganize, transform and output 
Open Educational Resources in various formats, regardless of the original structure.

## Installation and usage
The project is built with Docker usage in mind, but it can also be run outside of Docker for local
development.

### Local install
This project uses Poetry for dependency management. To install Poetry follow the instructions 
[here](https://python-poetry.org/docs/#installation).

Once Poetry is installed, clone this repo and run `poetry install` to install the dependencies.
```bash
git clone https://github.com/open-education-hub/openedu_builder
cd openedu_builder
poetry install
```
To start using the builder run `poetry shell` to activate the virtual environment and get access to 
the `oe_builder` command.

To install the builder as a command line tool, run the following commands:
```bash
poetry build
pip install dist/*.whl
```

If the output of your build is a static website you can use a Python server
```bash
python3 -m http.server 8080
```
then visit http://localhost:8080 to view your content.

### Docker container
You can build the container using the included Dockerfile, or you can pull the published images
using the following command:
```bash
docker pull ghcr.io/open-education-hub/openedu_builder:latest
```

Note that the container only contains the builder, and not the dependencies for the plugins. The
intended usecase is to build a Docker container on top of the builder container, and install the
required dependencies as to not have a huge container.

Details about this can be found in the full documentation.

## Architecture
The structure of the builder is very simple. The main thing a user needs to worry about is the
configuration file. The configuration file is in the YAML format, should be placed at the root of
your project, and should be named `config.yaml`.

It contains a few general options, and a list of tasks to run. Each task is represented by a plugin.

A sample configuration file can be seen below:

```yaml
stages:
  - make_assets
  - embed_reveal
  - docusaurus

output_type: last
build_dir: /build
output_dir: /output

make_assets:
  plugin: command
  options:
    command: make
    locations:
      - content/chapters/compute/lecture
    args:
      - all

embed_reveal:
  plugin: reveal_embed
  options:
    target: docusaurus
    extension: mdx
    build:
      Compute: Compute

docusaurus:
  plugin: docusaurus
  options:
    course_name: Example Course
    sidebar: js
    structure:
      - Lecture:
        - Compute:
            name: Compute
            location: /build/embed_reveal/Compute
      - Lab:
        - Compute:
            location: content/chapters/compute/lab
            name: README
    static_assets:
      - Compute: /build/make_assets/content/chapters/compute/lecture/_site
    config_meta:
      title: Operating Systems
      url: http://localhost/
      baseUrl: /
      onBrokenLinks: warn
      onBrokenMarkdownLinks: warn
```

### Plugins
Plugins are the main building blocks of the builder. They are responsible for transforming the
content step by step into the final output. The builder comes with a few plugins, but it is also
recommended and encouraged to contribute your own plugins.

Plugins are written in Python, and should be placed in the `plugins` directory. They are simple 
classes that perform a specific task, having a set of predefined options (input and output 
directories), and a varying set of plugin specific options.

To find out what a plugin does, what options it has, and how to use it, you can check the full
documentation.
