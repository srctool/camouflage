---
sidebar_label: Release process
title: Release and versioning workflow
---

This page describes how releases are cut and what automation runs. The branching model behind it is in [Git workflow](./git-workflow): `main` is the only long-lived branch in every repository, and a release is a tag on `main`.

Overview
- The libraries are released in their own repositories, `camouflage-kotlin` and `camouflage-dart`. Pushing a release tag on `main` there publishes the packages and creates that repository's GitHub Release.
- This repository has no release of its own: merging to `main` deploys the docs sites. After a library release, merge the Dependabot PR that moves the `kotlin-lib` / `dart-lib` pointer to the released commit.

Cutting a library release
1. Make sure `main` in the library repository has everything for the release and its checks are green.
2. Update the version and changelog in a PR (for example `chore(release): 0.3.0`) and merge it.
3. Tag the merge commit on `main` and push the tag:
   - Kotlin: `git tag v0.3.0 && git push origin v0.3.0`
   - Dart: one tag per package, core first: `git tag camouflage_core-v0.3.0 && git push origin camouflage_core-v0.3.0`, then the skins once core is on pub.dev.
4. Follow the publish workflow run in the Actions tab. It stops if the tag isn't on `main` (and, for Dart, if the `pubspec.yaml` version doesn't match the tag).
5. In this repository, merge the Dependabot submodule PR (or ask Dependabot to check for updates).

Version tags (in the library repositories)
- Kotlin: `vX.Y.Z` (SemVer). One tag releases core, the skins and the BOM together, from a single macOS job (a macOS host is needed for the iOS artifacts) to Maven Central.
- Dart: `<package>-vX.Y.Z` (for example `camouflage_core-v0.1.0`), the pattern pub.dev's automated publishing expects. Published through OIDC, with no stored secrets.
- The core set (core, skins, navigation) shares the **minor** version across Kotlin and Dart: 0.3 means the same milestone and features on both. **Patch** versions are independent, so a fix on one platform doesn't force a release on the other. See [Publishing](/guide/delivery/publishing).

Fixes to a released version
- An ordinary PR into `main`, then a patch tag. There are no maintenance branches while the version is `0.x`; if one is ever needed, branch `release/X.Y` from the tag and cherry-pick fixes onto it.

Docs
- The docs sites aren't versioned with the libraries: `docs.yml` deploys them whenever `docs/` changes on `main`.

Manual fallback
- If automation isn't configured or secrets are missing:
  - Publish kotlin-lib and dart-lib using their standard tools if you have permissions.
  - Create the tag on the published commit in that library repository and a GitHub Release for it (Generate release notes helps).
  - Open a follow‑up PR updating CHANGELOG.md files and any docs.

Notes
- Squash & Merge only. Keep PR titles and descriptions clear: they become the squashed commit message, and the release notes are generated from them.
- Call out breaking changes and migration notes in the PR body.
