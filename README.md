# fixlang-docpage-generator

This script generates documentation for all Fix projects found in `fix deps list` and for the `Std` module.
The generated markdown files can be easily convertible into a static website using [mkdocs](https://www.mkdocs.org/).

The documentation for modules in the [default registry](https://github.com/tttmmmyyyy/fixlang-registry/blob/main/registry.toml) (and `Std`) is deployed [here](https://tttmmmyyyy.github.io/fixlang-docpage-generator/).

If you add registries other than the default one in [.fixconfig.toml](https://github.com/tttmmmyyyy/fixlang/blob/main/Document.md#configuration-file), this script will also generate documentation for modules registered in them.

## Prerequisites

1. Install [Fixlang](https://github.com/tttmmmyyyy/fixlang). This script assumes that the Fix compiler is installed as the `fix` command.
2. `pip install mkdocs`
3. `pip install mkdocs-material`

## Usage

- `git clone https://github.com/tttmmmyyyy/fixlang-docpage-generator.git && cd fixlang-docpage-generator` 
- `fix run` to generate markdown files.
  - This will clone all Fix projects listed in `fix deps list` and so may take a long time.
- `mkdocs serve` to serve the documentation page locally.
- `mkdocs build` to build the static website.