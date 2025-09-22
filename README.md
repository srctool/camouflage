[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/docs-Usage-blue.svg)](./docs/usage/)

# Camouflage - SRC Tool

Welcome to **Camouflage**, part of the **SRC Tool** — a set of libraries and tools to accelerate UI development and documentation workflows.

This repository is the umbrella for documentation, conceptual design, and language-specific implementations included as Git submodules. The libraries live under kotlin-lib/ and dart-lib/ in this repo and mirror their own upstream repositories. Documentation and design foundations are under docs/* (see docs/internal/*).

---

## Repository Structure
```
├── README.md                  # This overview
├── LICENSE                    # Main repo license (MIT)
├── docs/                      # Docusaurus documentation sites
│   ├── internal/             # Internal conceptual & design docs
│   └── usage/                # User-facing usage documentation
├── kotlin-lib/               # Kotlin implementation of Camouflage
│   ├── README.md
│   ├── LICENSE
│   ├── CODE_OF_CONDUCT.md    # Optional for Kotlin submodule
│   └── src/
└── dart-lib/                 # Dart implementation of Camouflage
    ├── README.md
    ├── LICENSE
    ├── CODE_OF_CONDUCT.md    # Optional for Dart submodule
    └── lib/
```
---

## Documentation

### Internal Docs (for contributors)

- **Purpose:** Share conceptual design, architecture, and implementation guides.  
- **Access:** [Internal Docs Site](./docs/internal/)  
- **Notes:** Use this to understand Camouflage’s structure, architecture, and implementation patterns before contributing.

### Usage Docs (for users)

- **Purpose:** Introduce Camouflage, provide “Getting Started,” and code references.  
- **Access:** [Usage Docs Site](./docs/usage/)  

---

## Submodules

### Kotlin Implementation (`kotlin-lib/`)

- Contains the Kotlin version of Camouflage.  
- Contributors working with Kotlin should submit changes here.  
- Upstream repository: https://github.com/srctool/camouflage-kotlin  
- **Documentation:** See internal docs under `docs/internal/kotlin/`.  
- **License:** [Apache 2.0](./kotlin-lib/LICENSE)

### Dart Implementation (`dart-lib/`)

- Contains the Dart version of Camouflage.  
- Contributors working with Dart should submit changes here.  
- Upstream repository: https://github.com/srctool/camouflage-dart  
- **Documentation:** See internal docs under `docs/internal/dart/`.  
- **License:** [Apache 2.0](./dart-lib/LICENSE)

---

## Contributing

- Follow the Code of Conduct in each submodule repository (see kotlin-lib/CODE_OF_CONDUCT.md and dart-lib/CODE_OF_CONDUCT.md).  
- Contributions should focus on **one language per submodule**.  
- Refer to internal docs for architecture, design, and implementation guidelines.  
- Open issues or pull requests in the respective submodule repository.

---

## License

- **Main repository (docs & conceptual overview):** MIT License  
- **Kotlin/Dart submodules:** Apache 2.0 License

---

## Contact

- Questions or feedback: **contact@srctool.org**  
- Contributor-related inquiries: follow instructions in each submodule’s README.