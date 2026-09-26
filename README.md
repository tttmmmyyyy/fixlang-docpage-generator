# fixlang-docpage-generator

This program generates documentation for every version of every Fix project found in `fix deps list`, and for the `Std` module at the `main` branch of Fix and at each release.
The generated Markdown files are built into a static website with [mkdocs](https://www.mkdocs.org/).

The documentation for modules in the [default registry](https://github.com/tttmmmyyyy/fixlang-registry/blob/main/registry.toml) (and `Std`) is deployed [here](https://tttmmmyyyy.github.io/fixlang-docpage-generator/).

If you add registries other than the default one in [.fixconfig.toml](https://github.com/tttmmmyyyy/fixlang/blob/main/Document.md#configuration-file), this program will also generate documentation for modules registered in them.

## How the documentation is kept

The documentation of each version is kept in the directory `store/`, which the deployment keeps on the branch `docs-store` of this repository.

- The latest version of each project is generated again on every run. When that fails, the documentation saved by an earlier run stays, and the site shows the failure with its log.
- Every other version is attempted once. Most old versions require an older compiler than the one installed, so the documentation of a version is kept from the time it could be generated.
- `Std` is taken from `std_doc/Std.md` of the Fix repository: `main` on every run, and each release from 1.0.0 on once.

What went wrong in a run is written into `failures.txt`. The deployment reports a non-empty `failures.txt` by failing, after the site is deployed.

## Prerequisites

1. Install [Fixlang](https://github.com/tttmmmyyyy/fixlang). This program assumes that the Fix compiler is installed as the `fix` command.
2. `pip install -r requirements.txt`

## Usage

- `git clone https://github.com/tttmmmyyyy/fixlang-docpage-generator.git && cd fixlang-docpage-generator`
- To start from the documentation the deployment keeps: `git fetch origin docs-store && git worktree add store FETCH_HEAD`
  - Without `store/`, the first run attempts every version of every project, which takes a long time.
- `fix run --allow-preliminary-commands` to generate markdown files into `docs/` and the mkdocs configuration `mkdocs.site.yml`.
- `mkdocs serve -f mkdocs.site.yml` to serve the documentation page locally.
- `mkdocs build -f mkdocs.site.yml` to build the static website.
