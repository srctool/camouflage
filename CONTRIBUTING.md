# Contributing to Camouflage

Thanks for your interest in contributing! This repository is the umbrella for docs, design, and links to the language-specific implementations of Camouflage. Code changes generally happen in the submodules.

- Kotlin implementation: `kotlin-lib/`
- Dart implementation: `dart-lib/`

If your contribution affects only one language, please work in that submodule. If it affects documentation or cross-cutting design, open an issue/PR here in the root repo.

## Ways to contribute
- Report bugs and request features using the issue templates: .github/ISSUE_TEMPLATE
- Improve docs (docs/internal, docs/usage)
- Implement features or fixes in `kotlin-lib/` or `dart-lib/`
- Improve tests, CI, and developer experience

## Workflow
1. Fork the repository and create a feature branch from `main`.
   - Branch name suggestion: `feat/<scope>-<short-desc>` or `fix/<scope>-<short-desc>`
2. Make changes with clear, concise commits.
3. Ensure formatting and basic checks pass (see submodule CONTRIBUTING for language specifics).
4. Open a Pull Request using the provided template: .github/PULL_REQUEST_TEMPLATE.md
5. Link related issues (e.g., "Fixes #123").

## Where to open issues and PRs
- Changes to Kotlin library code → open in `kotlin-lib/` and target that path.
- Changes to Dart library code → open in `dart-lib/` and target that path.
- Docs, design, or multi-language coordination → open at the root repository.

We may ask you to move an issue/PR to the correct submodule if needed.

## Code of Conduct
Participation in this project is governed by the Code of Conduct found in each submodule:
- Kotlin: kotlin-lib/CODE_OF_CONDUCT.md
- Dart: dart-lib/CODE_OF_CONDUCT.md

For sensitive reports, contact: contact@srctool.org

## License
- Root repo (docs & concepts): MIT (see LICENSE)
- Kotlin/Dart libraries: Apache 2.0 (see licenses in each submodule)

By contributing, you agree that your contributions will be licensed under the respective project licenses.

## Questions
If you’re unsure where something belongs or how to start, please open a discussion/issue or email contact@srctool.org. Happy contributing!