---
sidebar_label: Versioning policy
title: Versioning policy
---

We follow Semantic Versioning (SemVer) for the library submodules, and we keep the docs site aligned with released features.

Scope
- Kotlin library (kotlin-lib/): versioned independently
- Dart library (dart-lib/): versioned independently
- Docs site (docs/): not versioned like the libraries; it documents the latest released and in‑progress features. When necessary, we call out version‑specific behavior.

SemVer summary
- MAJOR (x.0.0): incompatible API changes
- MINOR (x.y.0): backwards‑compatible feature additions
- PATCH (x.y.z): backwards‑compatible bug fixes

Breaking changes
- Require a MAJOR bump and must include migration notes in the PR description and in the CHANGELOG/release notes.
- Communicate deprecations ahead of time where feasible (add @Deprecated annotations in Kotlin or documentation notes in Dart) and provide alternatives.

Release cadence
- We release as needed rather than on a fixed schedule. Multiple small changes may batch into a MINOR release; urgent fixes may trigger PATCH releases.

Changelogs and release notes
- Each submodule maintains its own release notes or changelog (e.g., GitHub Releases). The PR author should draft the notes for user‑visible changes.

Compatibility guarantees
- Within a MAJOR version, we avoid breaking public APIs and behavior. Internal APIs may change without notice.
- We attempt to maintain consistent behavior across Kotlin and Dart where feature parity exists; language‑specific constraints may lead to small differences that will be documented.

Docs versioning
- The docs site reflects the current state of the project. If we later adopt formal docs versioning, we will document the process here and in the site configuration.

Questions
- If you’re unsure how to categorize a change or what version to target, open an issue or ask in your PR. For sensitive topics, email contact@srctool.org.