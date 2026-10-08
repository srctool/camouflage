---
sidebar_label: Release process
title: Release and versioning workflow
---

This page describes how we cut releases and what automation runs.

Overview
- Daily work happens in forks. Create feature/bugfix branches from develop and open PRs to develop at the upstream repository.
- The libraries are released in their own repositories: `camouflage-kotlin` and `camouflage-dart`. Pushing a release tag there publishes the packages and creates that repository's GitHub Release.
- This repository has no release of its own. After the libraries are released, open a `release/<version>` PR from develop to main here, and merge it to deploy the docs sites.
- Submodule pointers move only when you run **Update submodules** (Actions → Update submodules → Run workflow → target `develop` or `main`). It moves `kotlin-lib` and `dart-lib` to the latest commit of the same branch in their repositories and opens a PR into the target (or updates the open one). It never moves a pointer backwards: if a library's branch is behind, it keeps the pointer and warns. Run it after the library PRs it should include are merged, and merge its PR last. For a release, run it with `main` after the libraries are tagged on their main.

Branches
- develop: integration branch and default PR target for features/bugfixes.
- main: production branch. Only release PRs and hotfix PRs should target main.
- release/*: short‑lived branches used to stabilize a release from develop.
- hotfix/*: urgent fixes branched from main and merged back to main (then back‑merge to develop).

Version tags (in the library repositories)
- Kotlin (`camouflage-kotlin`): `vX.Y.Z` (SemVer). One tag releases core, the skins and the BOM together. A single macOS job runs `check`, then publishes to Maven Central (a macOS host is needed for the iOS artifacts).
- Dart (`camouflage-dart`): one tag per package, `<package>-vX.Y.Z` (for example `camouflage_core-v0.1.0`), the pattern pub.dev's automated publishing expects. GitHub Actions publishes to pub.dev through OIDC, with no stored secrets. Tag `camouflage_core` before the skins.
- Tags are applied on the main branch merge commit of each library repository; the publish workflows stop if the tag isn't on main.
- The core set (core, skins, navigation) shares the **minor** version across Kotlin and Dart: 0.3 means the same milestone and features on both. **Patch** versions are independent, so a fix on one platform doesn't force a release on the other. See [Publishing](/guide/delivery/publishing).

Docs
- The docs sites aren't versioned with the libraries: `docs.yml` deploys them whenever `docs/` changes on main.

Manual fallback
- If automation isn't configured or secrets are missing:
  - Publish kotlin-lib and dart-lib using their standard tools if you have permissions.
  - Create the tag on the published commit in that library repository and a GitHub Release for it (Generate release notes helps).
  - Open a follow‑up PR updating CHANGELOG.md files and any docs.

Notes
- Squash & Merge only is enforced on the upstream repository for main and develop. Keep your PR title/body clear as they become the squashed commit message.
- Keep breaking changes and migration notes clearly called out in the PR body; they will be surfaced in the release notes.
