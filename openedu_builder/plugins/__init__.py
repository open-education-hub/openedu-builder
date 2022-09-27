from openedu_builder.plugins.command import CommandPlugin
from openedu_builder.plugins.revealmd import RevealMdPlugin
from openedu_builder.plugins.embed_reveal import EmbedRevealPlugin
from openedu_builder.plugins.docusaurus import DocusaurusPlugin

plugins = {
    "command": CommandPlugin,
    "revealmd": RevealMdPlugin,
    "reveal_embed": EmbedRevealPlugin,
    "docusaurus": DocusaurusPlugin
}
