# Contributing to Camouflage

Thank you for your interest in Camouflage! This root repository coordinates the documentation site, design/architecture, and the language-specific implementations. Most code changes happen in the submodules, while the documentation lives under docs/.

- Kotlin implementation: `kotlin-lib/`
- Dart implementation: `dart-lib/`
- Documentation website: `docs/`

If your contribution affects only one language, work in that submodule. If it affects documentation or cross-cutting design, open an issue/PR in the root repo.

## How you can contribute
- Use the issue templates in `.github/ISSUE_TEMPLATE` to report bugs or request features.
- Improve docs in `docs/` (see “Contributing to Docs” below).
- Implement features or fixes in `kotlin-lib/` or `dart-lib/`.
- Improve tests, CI, and developer experience.

## Where to open issues and PRs
- Kotlin library changes → open in `kotlin-lib/` and scope your PR to that path.
- Dart library changes → open in `dart-lib/` and scope your PR to that path.
- Docs, design, or multi-language coordination → open at the root repository.

We may ask you to move an issue/PR to the correct submodule if needed.

## Contributing to Docs (Docusaurus)
The site is built with Docusaurus and exposes four top-level sections at the website root:
- Guide → /guide
- Components → /components
- API → /api
- Architecture → /architecture

Source structure:
- docs/development/guide/ (sidebar at docs/development/guide/sidebars.ts)
- docs/development/components/ (sidebar at docs/development/components/sidebars.ts)
- docs/development/api/ (sidebar at docs/development/api/sidebars.ts)
- docs/development/architecture/ (sidebar at docs/development/architecture/sidebars.ts)

Adding a new page:
- Create an .md or .mdx file in the appropriate folder above.
- Register it in that section’s sidebars.ts to control ordering and categories.
- For code examples in Kotlin/Dart, prefer using:
  - `LanguageSwitcher` for a small toggle button (optional), and
  - `LangTabs` with two `TabItem` blocks (values: `kotlin` and `dart`) to keep examples in sync with user preference.

Run the docs locally:
- Requirements: Node 20+
- From docs/:
  - Install deps: `npm install` (or `yarn`)
  - Start dev server: `npm run start`
  - Build static site: `npm run build`

## Workflow
1. Fork the repository and create a branch from `main`.
   - Suggested branch names: `feat/<scope>-<short-desc>` or `fix/<scope>-<short-desc>`
2. Make changes with small, focused commits.
3. Ensure formatting and checks pass (see each submodule’s CONTRIBUTING for language specifics).
4. Open a Pull Request using the template (`.github/PULL_REQUEST_TEMPLATE.md`) and link related issues (e.g., "Fixes #123").

### PR title format (Conventional Commits)
Use Conventional Commit style for PR titles. Format:

```
<type>(<scope>): <short description>
```

- type: one of `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- scope: affected module/package (e.g., `kotlin-lib`, `dart-lib`, `docs`)
- short description: concise summary of the change

Examples:
- feat(kotlin-lib): add redact() helper for masked logging
- fix(dart-lib): handle null input in Parser.fromJson
- docs(docs): add getting started guide for components

Tip for GitKraken users: GitKraken uses the first line of the commit message as the PR title. You can copy the PR title format directly when committing.

## Code of Conduct
Participation in this project is governed by the Code of Conduct in each submodule:
- Kotlin: `kotlin-lib/CODE_OF_CONDUCT.md`
- Dart: `dart-lib/CODE_OF_CONDUCT.md`

For sensitive reports, email contact@srctool.org.

## License
- Root repo (docs & concepts): MIT (see LICENSE)
- Kotlin/Dart libraries: Apache 2.0 (see licenses in each submodule)

By contributing, you agree your contributions are licensed under the respective project licenses.

## Questions
If you’re unsure where something belongs or how to start, please open a discussion/issue or email contact@srctool.org. Thanks for contributing!