---
sidebar_label: Release process
title: Release and versioning workflow
---

This page describes how we cut releases and what automation runs.

Overview
- Daily work happens in forks. Create feature/bugfix branches from develop and open PRs to develop at the upstream repository.
- For a release, create a `release/<version>` branch from develop in your fork, stabilize it, and open a PR to main.
- After the PR is merged to main, run the **Release** workflow by hand: Actions → Release → Run workflow, branch `main`, and enter the tag (for example `v1.2.3`). If the tag doesn't exist yet, the workflow creates it on the latest commit of main, which is the release merge commit.
- Pushing a tag on its own doesn't start a release.

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

What the Release workflow does
- Checks the tag looks like `vX.Y.Z` and that it's run from main.
- GitHub Release: creates the tag if needed, then publishes a GitHub Release for it with generated release notes.
- Library deploys:
  - kotlin-lib: a single macOS job runs `check`, then publishes to Maven Central (a macOS host is needed for the iOS artifacts).
  - dart-lib: GitHub Actions publishes to pub.dev through OIDC, with no stored secrets.
  - Each publish job runs only when its repository variable (`KOTLIN_PUBLISH_ENABLED`, `DART_PUBLISH_ENABLED`) is `true`; otherwise it's skipped.
- Root changelog: appends the release notes to CHANGELOG.md on main. If main is protected against the workflow's push, it logs that the push was skipped.
- The docs sites aren't part of the release: `docs.yml` deploys them whenever `docs/` changes on main.

Manual fallback
- If automation is not configured for your fork or secrets are missing:
  - Create the tag vX.Y.Z on the merge commit in main and push it (the Release workflow can then be run with that existing tag).
  - Manually create a GitHub Release (Generate release notes helps).
  - Publish kotlin-lib and dart-lib using their standard tools if you have permissions.
  - Open a follow‑up PR updating CHANGELOG.md files and any docs.

Notes
- Squash & Merge only is enforced on the upstream repository for main and develop. Keep your PR title/body clear as they become the squashed commit message.
- Keep breaking changes and migration notes clearly called out in the PR body; they will be surfaced in the release notes.
