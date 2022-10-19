# Getting started

## Overview
The structure of the builder is very simple. The main thing a user needs to worry about is the configuration file. The configuration file is in the YAML format, should be placed at the root of your project, and should be named `config.yaml`.

Based on the steps defined in the configuration file, the builder will construct plugins and run them in the order specified. Each step has an associated input directory and output directory. By default, the input directory is the root of the project and the outout directory is a a directory with the same name under the `build` directory.

For example, in the below configuration, the output directory for the `demo_stage` step is `/build/demo_stage`.
```yaml
stages:
  - demo_stage

build_dir: /build

demo_stage:
  plugin: command
  options:
    command: echo
    args:
      - "Hello World"
```

The builder is designed to be extensible. It comes with a few plugins, but the user can also create their own plugins. The plugins are defined in the `plugins` directory. For further details check the [plugins](plugins/index.md) section.

Most plugins will have a set of dependencies that need to be installed in order to run. The builder does not install these dependencies. The recommended way to install these dependencies is to create a Docker container that extends the builder container and installs the dependencies. The example below installs the dependencies needed to run the revealmd and docusaurus plugins.

```dockerfile
FROM ghcr.io/open-education-hub/openedu_builder:latest

# Install curl
RUN apt-get update && \
    apt-get install -y curl

# Install node LTS (16)
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get install -y nodejs

# Install reveal md
RUN npm install -g reveal-md

# Install docusaurus
RUN npm install create-docusaurus@2.1.0

WORKDIR /content

ENTRYPOINT ["oe_builder"]
```

The `ENTRYPOINT` should always be `oe_builder`. The `WORKDIR` can be whatever you want as long as you [mount](https://docs.docker.com/storage/bind-mounts/) the root of your project (containing the `config.yaml` file) to `WORKDIR` in the container.

## Configuration

The main configuration options are as follows:
| option | type | required | default | description |
| --- | --- | --- | --- | --- |
| `stages` | list[str] | `true` | `N\A` | The list of stages to run, in order. |
| `build_dir` | str | `false` | `/build` | The directory to use for the build. |
| `output_dir` | str | `false` | `/output` | The directory to use for the output. |
| `output_type` | str | `false` | `last` | The type of output to use. Can be `last` or `all`. `last` keeps only the output of the lat stage, while `all` keeps the output of all stages (basically outputs the build directory). |
| `<stage_name>` | dict | `false` | `N\A` | The configuration for a specific stage. |

Each stage is required to have the `plugin` option that specifies what plugin to run.
Additionally, the `input_dir` and `output_dir` options can be specified to override the default input and output directories.
