# Plugins

## Introduction
Plugins are small building blocks that execute a single step from the build process. For example, from the default plugins, the `revealmd` plugin will run the `reveal-md` command in the specified directories, in order to build slides.

## Usage
To use a plugin simply specify its name in the `plugin` option of a stage. The name of a plugin can be found in the documentation or in the `plugins/__init__.py` file; this is usually the name of the python file that implements the plugin, but without the extension.

Each plugin has its own set of options that can be specified in the `options` field of the stage. Be sure to check the documentation of the plugin to see your available options and examples on how to use them.

If a plugin takes paths as options, they can be either absolute or relative in most cases. If relative, the specified path will be relative to the `input_dir` option.

## Plugin development
To implement a plugin, create a class that extends the base `Plugin` class. The class should have a `run` method that will be called by the builder. The `run` method should take no arguments. In order to register the plugin, add the class to the `plugins` dictionary in the `plugins/__init__.py` file. We recommend sticking to the name of the file without the extension as the key in the dictionary. 

Documentation for a plugin should be placed in the `docs/plugins` directory, and should have the same name as the plugin.

If your plugin needs additional files, you can create a directory containing the name of the plugin and place the files in there.

Please refer to a simple existing plugin (like `command`) for an example.
