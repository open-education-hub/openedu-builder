# Reveal Embed

## Description
This plugin creates various embeds for slides generated using reveal.js. It currently supports embeding into a Docusaurus site. In order to add support for other platforms or site generators, you can add a new Jinja template into the `plugins/embed_reveal_templates` directory. 

## Options
| parameter | type | required | default | description |
| --- | --- | --- | --- | --- |
| `frontmatter` | Mapping[str, str] | `false` | `N\A` | The frontmatter to add to the output file. |
| `width` | str | `false` | `100%` | The width of the embed. |
| `height` | str | `false` | `500px` | The height of the embed. |
| `link` | str | `false` | `N\A` | The text for the hyperlink to the presentation. If not specified, no link will be rendered. |
| `target` | str | `true` | `N\A` | The target template to use. |
| `extension` | str | `false` | `N\A` | The extension of the output file. |
| `build` | Mapping[str, str] | `true` | `N\A` | What slides to embed as a mapping of name to final static location. |

Example:

```yaml
embed_slides:
  plugin: reveal_embed
  options:
    target: docusaurus
    extension: mdx
    link: Open the slides in a new tab
    width: 100%
    height: 300px
    frontmatter:
      title: Lecture 1
      id: lecture1
    build:
      Compute: Compute
```