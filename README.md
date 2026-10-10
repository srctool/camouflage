[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/docs-Website-blue.svg)](docs/)

# Camouflage - SRC Tool

Welcome to **Camouflage**, part of the **SRC Tool** — a set of libraries and tools to accelerate UI development and documentation workflows.

This repository is the umbrella for documentation, conceptual design, and language-specific implementations included as Git submodules. The libraries live under kotlin-lib/ and dart-lib/. The documentation site is built with Docusaurus under docs/.

---

## Repository Structure
```
├── README.md                  # This overview
├── LICENSE                    # Main repo license (MIT)
├── docs/                      # Two Docusaurus sites, deployed separately
│   ├── internal/              # Contributor docs: design, architecture, implementation
│   └── usage/                 # Usage docs: for developers using Camouflage in an app
├── kotlin-lib/                # Kotlin implementation of Camouflage
│   ├── README.md
│   ├── LICENSE
│   └── src/
└── dart-lib/                  # Dart implementation of Camouflage
    ├── README.md
    ├── LICENSE
    └── lib/
```
---

## Documentation

There are two documentation sites, each its own Docusaurus project, built and deployed separately:

- **Contributor docs** (`docs/internal/`): concepts, architecture, the theme and skin contract, every component's API, and the Kotlin and Flutter implementation of each, plus Contributing. The Guide and Components pages are generated from the Camouflage design notes by `docs/internal/scripts/sync_vault.py`; don't edit them by hand.
- **Usage docs** (`docs/usage/`): installing Camouflage, setting up a theme, and using the components in an app. Written by hand; they start with the first release.

The usage site doesn't link to the contributor docs directly: its **Contributing** link goes to the contributor site's Contributing section, which leads into the Guide and Components. The contributor site doesn't link to the usage site. Set `CAMOUFLAGE_INTERNAL_URL` (default `http://localhost:3000`) when building the usage site, and each site's own address with `CAMOUFLAGE_INTERNAL_URL` / `CAMOUFLAGE_USAGE_URL`.

Run a site locally (Node 20+), from `docs/internal/` or `docs/usage/`:
- Install deps: `npm install`
- Start dev server: `npm run start` (the contributor site runs on port 3000, the usage site on 3001)
- Build: `npm run build`

### Deployment

Both sites are deployed to Cloudflare Pages by `.github/workflows/docs.yml` when `docs/` changes on `main` in `srctool/camouflage`. Pull requests (including from forks) only build them.

| Site | Folder | Cloudflare Pages project | Domain |
|---|---|---|---|
| Contributor docs | `docs/internal/` | `camouflage-dev` | https://camouflage-dev.srctool.com |
| Usage docs | `docs/usage/` | `camouflage` | https://camouflage.srctool.com |

The workflow needs two repository secrets: `CLOUDFLARE_API_TOKEN` (a token with *Account → Cloudflare Pages → Edit*) and `CLOUDFLARE_ACCOUNT_ID`.

The sites include a Kotlin/Dart language switcher. Wrap language-specific content in `KotlinOnly` / `DartOnly`, or code examples in `LangTabs`, so readers keep their preferred language across pages.

---

## Submodules

Submodule pointers are moved by Dependabot: it checks the libraries' `main` daily and opens a PR that updates `kotlin-lib` and `dart-lib` (see `.github/dependabot.yml`). The submodule URLs use HTTPS, so cloning needs no SSH key:

```bash
git clone --recurse-submodules https://github.com/srctool/camouflage.git
```

### Kotlin Implementation (`kotlin-lib/`)

- Contains the Kotlin version of Camouflage.
- Contributors working with Kotlin should submit changes here.
- Upstream repository: https://github.com/srctool/camouflage-kotlin
- License: [Apache 2.0](./kotlin-lib/LICENSE)

### Dart Implementation (`dart-lib/`)

- Contains the Dart version of Camouflage.
- Contributors working with Dart should submit changes here.
- Upstream repository: https://github.com/srctool/camouflage-dart
- License: [Apache 2.0](./dart-lib/LICENSE)

---

## Contributing

- Follow the Code of Conduct in each submodule repository (see kotlin-lib/CODE_OF_CONDUCT.md and dart-lib/CODE_OF_CONDUCT.md).
- Contributions should focus on one language per submodule.
- For documentation contributions, see the section paths and local dev instructions above.
- Open issues or pull requests in the respective submodule repository when the change only affects that implementation; otherwise use the root repo.

---

## License

- Main repository (docs & conceptual overview): MIT License
- Kotlin/Dart submodules: Apache 2.0 License

---

## Contact

- Questions or feedback: contact@srctool.com
- Contributor-related inquiries: follow instructions in each submodule’s README.