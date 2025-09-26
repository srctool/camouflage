---
slug: /
title: Contributing to Camouflage
---

Welcome! This section explains how to contribute to the Camouflage project, including the docs site and the Kotlin/Dart library implementations.

Camouflage is organized as a single umbrella repository with two language submodules and a Docusaurus documentation site:

- Kotlin library: kotlin-lib/
- Dart library: dart-lib/
- Documentation site: docs/

Where to contribute
- If your change affects only one language, open an issue/PR targeted to that submodule path (kotlin-lib/ or dart-lib/).
- If it affects cross-cutting design or the documentation website, open it in the root repository and/or the docs/ folder as appropriate.

Quick links
- How to report a bug → /contributing/how-to-report-a-bug
- How to contribute code → /contributing/how-to-contribute-code
- How to open a pull request → /contributing/how-to-open-a-pull-request
- How to run and write tests → /contributing/how-to-run-and-write-test
- Versioning policy → /contributing/versioning-policy

Docs authoring tips
- Documentation lives under docs/development/* (guide, components, api, architecture). Each section has its own manual sidebar.ts.
- Use the LanguageSwitcher and LangTabs components for Kotlin/Dart examples so readers can keep their preferred language across pages.

Code of Conduct
Participation is governed by the Code of Conduct files in each submodule. For sensitive reports, email contact@srctool.org.