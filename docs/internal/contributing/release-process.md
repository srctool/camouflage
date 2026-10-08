---
sidebar_label: Release process
title: Release and versioning workflow
---

This page describes how we cut releases and what automation runs.

Overview
- Daily work happens in forks. Create feature/bugfix branches from develop and open PRs to develop at the upstream repository.
- For a release, create a `release/<version>` branch from develop in your fork, stabilize it, and open a PR to main.
- After the PR is merged to main, tag the merge commit with the release tags below (for example, `v1.2.3` for Kotlin).
- The tag triggers automation to generate changelogs and publish the language libraries. The root repo updates documentation and its changelog.

Branches
- develop: integration branch and default PR target for features/bugfixes.
- main: production branch. Only release PRs and hotfix PRs should target main.
- release/*: short‑lived branches used to stabilize a release from develop.
- hotfix/*: urgent fixes branched from main and merged back to main (then back‑merge to develop).

Version tags
- Kotlin: `vX.Y.Z` (SemVer). One tag releases core, the skins and the BOM together.
- Dart: one tag per package, `<package>-vX.Y.Z` (for example `camouflage_core-v0.1.0`), the pattern pub.dev's automated publishing expects.
- Tags are applied on the main branch merge commit.
- The core set (core, skins, navigation) shares the **minor** version across Kotlin and Dart: 0.3 means the same milestone and features on both. **Patch** versions are independent, so a fix on one platform doesn't force a release on the other. See [Publishing](/guide/delivery/publishing).

What the tag triggers
- Changelog and GitHub Release: auto-generate release notes and publish a GitHub Release for vX.Y.Z.
- Library deploys:
  - kotlin-lib: a single macOS job runs `check`, then publishes to Maven Central (a macOS host is needed for the iOS artifacts).
  - dart-lib: GitHub Actions publishes to pub.dev through OIDC, with no stored secrets.
- Documentation and changelog (root): build docs and prepare/update the root CHANGELOG.md. If write permissions/secrets are not configured, the job will no‑op with a clear log message.

Manual fallback
- If automation is not configured for your fork or secrets are missing:
  - Create the tag vX.Y.Z on the merge commit in main and push it.
  - Manually create a GitHub Release (Generate release notes helps).
  - Publish kotlin-lib and dart-lib using their standard tools if you have permissions.
  - Open a follow‑up PR updating CHANGELOG.md files and any docs.

Notes
- Squash & Merge only is enforced on the upstream repository for main and develop. Keep your PR title/body clear as they become the squashed commit message.
- Keep breaking changes and migration notes clearly called out in the PR body; they will be surfaced in the release notes.
