# dlt

A tiny, experimental version-control CLI built with Bun + TypeScript. It is intentionally minimal and focuses on learning how core VCS primitives (repo metadata, config, simple staging) fit together.

> ⚠️ **Status:** This project is actively under development. Interfaces and behaviours may change without notice, and some commands (like `add`) are still being wired up.

## Requirements

- Bun 1.2+ (for running the CLI and building)
- Node.js 18+ (runtime target for the compiled output)

Install dependencies once:

```bash
bun install
```

## Running the CLI during development

Use `bun dev` and pass the subcommand you want to execute:

```bash
bun dev init
bun dev config set user.name "Ada Lovelace"
bun dev config --global set user.email ada@example.com
```

To build a distributable version (emits `dist/index.js`):

```bash
bun run build
```

Then run it with Node:

```bash
node dist/index.js --help
```

## Available commands

| Command                          | Description                                                                                                                       |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `init`                           | Creates `.dlt`, `.dlt/objects`, and `.dlt/HEAD` in the current directory. Safe to rerun; it will warn if the repo already exists. |
| `config set <scope.key> <value>` | Writes config to `.dltconfig` (local) or `$HOME/.dltconfig` when `--global` is supplied. Backed by standard INI formatting.       |
| `add <paths...>` _(WIP)_         | Stages files into `.dlt/index.json` and stores blobs in `.dlt/objects`. Service logic lives in `src/services/addService.ts`.      |

> ℹ️ A staging workflow (`dlt add`) is being prototyped in `src/services/addService.ts`. Once it is wired into the CLI you will be able to hash file contents into `.dlt/objects` and track them via an `index.json`.

## Repository layout

```
.dlt/
├── HEAD             # points to the current branch (defaults to refs/heads/master)
└── objects/         # blob storage, keyed by SHA-1 of file contents
.dltconfig           # per-repo config (INI format)
$HOME/.dltconfig     # global config
```

## Tips

- Run `bun dev --help` to see the top-level Commander help output.
- Configuration scopes follow the `section.key` format (e.g., `user.email`).
- The project uses plain JSON for its staging index (`.dlt/index.json`) to make experimentation easy.

## License

MIT © Vishal
