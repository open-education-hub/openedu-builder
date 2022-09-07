from abc import ABC, abstractmethod
from typing import Any, Mapping


class Plugin(ABC):
    @abstractmethod
    def __init__(
        self,
        input_dir: str,
        output_dir: str,
        config: Mapping[str, Any],
    ):
        self.input_dir = input_dir
        self.output_dir = output_dir
        self.config = config

    @abstractmethod
    def run(self):
        pass

class PluginRunError(Exception):
    pass