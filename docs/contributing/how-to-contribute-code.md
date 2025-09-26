---
sidebar_label: Contribute code
title: How to contribute code
---

This guide explains how to propose changes to Camouflage code or docs.

Choose the right scope
- Kotlin implementation → kotlin-lib/
- Dart implementation → dart-lib/
- Documentation website → docs/
- Cross‑cutting design or multi‑module changes → root repo PR touching multiple paths

Branch and commit
- Branch from main. Suggested names: `feat/<scope>-<desc>` or `fix/<scope>-<desc>`
- Use small, focused commits.
- Follow Conventional Commits for PR titles (also a good pattern for commit headers):

```
<type>(<scope>): <short description>
```

  - type: feat | fix | docs | style | refactor | test | chore
  - scope: kotlin-lib | dart-lib | docs | tooling | etc.

Style and tooling
- Kotlin: standard Kotlin style; apply ktfmt/ktlint if configured. Build/tests via ./gradlew build test.
- Dart: dart format ., dart analyze, and dart test (or Flutter equivalents).
- Keep public APIs documented; update README/docs when behavior changes.

Docs contributions
- Docs live in docs/development/* (guide, components, api, architecture). Update the relevant section and its sidebars.ts for ordering.
- For code examples that exist in both languages, prefer the LanguageSwitcher and LangTabs components to keep examples in sync with the user’s language preference.

Design and discussion
- For sizeable feature changes, open an issue first to discuss design/architecture trade‑offs.
- Link the discussion/issue inside your PR description and commit messages when pertinent.

Security and conduct
- Follow the Code of Conduct in each submodule.
- For sensitive matters, email contact@srctool.org instead of opening a public issue.

Next steps
- When ready, open a pull request (see How to open a pull request) and ensure all checks pass.