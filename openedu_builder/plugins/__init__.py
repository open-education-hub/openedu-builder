from openedu_builder.plugins.command import CommandPlugin
from openedu_builder.plugins.docusaurus import DocusaurusPlugin
from openedu_builder.plugins.embed_reveal import EmbedRevealPlugin
from openedu_builder.plugins.revealmd import RevealMdPlugin
from openedu_builder.plugins.quizify import QuizifyPlugin

plugins = {
    "command": CommandPlugin,
    "revealmd": RevealMdPlugin,
    "reveal_embed": EmbedRevealPlugin,
    "docusaurus": DocusaurusPlugin,
    "quizify": QuizifyPlugin,
}
