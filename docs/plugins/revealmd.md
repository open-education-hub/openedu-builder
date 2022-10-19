# RevealMD

## Description
This plugin generates [reveal.js](https://revealjs.com/) slides from Markdown files using the [reveal-md](https://github.com/webpro/reveal-md) tool.

## Options
| parameter | type | required | default | description |
| --- | --- | --- | --- | --- |
| `command` | str | `false` | `reveal-md` | Used to customize the command used to build the slides. |
| `extra_args` | list[str] | `false` | `[]` | Extra arguments to pass to the command. |
| `build` | Mapping[str, str] | `true` | `N\A` | The slides to build as a mapping of  name to location. This also accepts the location as a shorthand, using the basename of the file as the name. |

Example:
```yaml
build_slides:
  plugin: revealmd
  options:
    command: reveal-md
    extra_args: 
      - --static-dirs
      - static
    build:
      Lecture1: /path_to_slides/lecture1.md
      Lecture2: /path_to_slides/lecture2.md
```