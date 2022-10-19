# Command

## Description
The `command` plugin simply runs a command in the specified directories. This is useful for running arbitrary commands, such as `make`, or custom scripts.

The plugin copies the entire content of the `input_dir` in the `output_dir` before running the command. This is done in order to avoid modifying the original content in case it is needed by other plugins in further steps. This is also why the plugin does not accept absolute paths as locations.

## Options
| parameter | type | required | default | description |
| --- | --- | --- | --- | --- |
| `locations` | list[str] | `false` | `[]` | The locations to run the command in, relative to the input directory. |
| `command` | str | `true` | `N\A` | The command to run. |
| `args` | list[str] | `false` | `[]` | The arguments to pass to the command, similar to how they are passed to `subprocess.run`. |

Example: 
```yaml
make_assets:
  plugin: command
  options:
    command: make
    locations:
      - path/to/chapters/compute/lecture
    args:
      - all
```
