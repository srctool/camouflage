Title: <type>(<scope>): <short description>

<!--
PR title must follow Conventional Commits:
  <type>(<scope>): <short description>

- type: one of feat, fix, docs, style, refactor, test, chore
- scope: affected module/package (e.g., kotlin-lib, dart-lib, ui-generator)
- short description: concise summary of the change

Examples:
- feat(kotlin-lib): add redact() helper for masked logging
- fix(dart-lib): handle null input in Parser.fromJson
- docs(root): clarify setup and supported SDK versions

GitKraken users: GitKraken uses the first line of the commit message as the PR title. You can copy this PR title format directly when committing.
-->

## Description
- What does this PR change and why?
- Link related issue(s): Fixes #<issue_number> (or) Relates to #<issue_number>

## Type of change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactor/Chore
- [ ] Breaking change (fix or feature that would cause existing functionality to change)

## Screenshots / Demos (if applicable)
Add images, GIFs, or terminal output that demonstrates the change.

## How Has This Been Tested?
Describe the tests you ran to verify your changes (commands, test files, manual steps). Include relevant details so reviewers can reproduce.

## Checklist
- [ ] I have read the Code of Conduct in the submodule(s) I modified
- [ ] I have run linters/formatters for affected projects
- [ ] I added/updated tests where appropriate
- [ ] I updated documentation (README/docs) where appropriate
- [ ] I have linked related issues (if any)
- [ ] I have considered backward compatibility and documented any breaking changes below

## Breaking changes
Describe any breaking changes and migration steps for users.

## Additional context
Anything else reviewers should know.

---
For sensitive disclosures, contact contact@srctool.org.