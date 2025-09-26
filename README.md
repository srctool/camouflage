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
├── docs/                      # Docusaurus website (Guide, Components, API, Architecture)
│   ├── docusaurus.config.ts   # Site config
│   └── development/
│       ├── guide/             # Source for /guide
│       ├── components/        # Source for /components
│       ├── api/               # Source for /api
│       └── architecture/      # Source for /architecture
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

The documentation website exposes four top-level sections:
- Guide → /guide
- Components → /components
- API → /api
- Architecture → /architecture

Source files live under docs/development/<section>, each with its own manual sidebar file at:
- docs/development/guide/sidebars.ts
- docs/development/components/sidebars.ts
- docs/development/api/sidebars.ts
- docs/development/architecture/sidebars.ts

Run the docs locally:
- Node 20+
- From docs/:
  - Install deps: npm install (or yarn)
  - Start dev server: npm run start
  - Build: npm run build

Notes for examples: the site includes a language preference switcher for Kotlin and Dart. Authors can use the `LanguageSwitcher` button and wrap examples with `LangTabs` to sync examples across pages.

---

## Submodules

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

- Questions or feedback: contact@srctool.org
- Contributor-related inquiries: follow instructions in each submodule’s README.