# fixlang-docpage-generator

This script clones all of your Fix projects in your Fixlang registry, generates the documentation for those projects, and generates a static site using [mkdocs](https://www.mkdocs.org/).

## Prerequisites

1. Install [Fixlang](https://github.com/tttmmmyyyy/fixlang). This script assumes that the Fix compiler is installed as the `fix` command.
2. `pip install mkdocs`
3. `pip install mkdocs-material`

## Usage

- `fix run` at the root of this repository to generate markdown files.
  - This will clone all Fix projects listed in `fix deps list` and so may take a long time.
- `mkdocs serve` to serve the documentation locally.
- `mkdocs build` to build the static site.