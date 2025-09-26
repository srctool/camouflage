#!/usr/bin/env bash
# Sync submodules to latest commit on the corresponding branch for the current repo branch.
# - If current branch is 'main'  -> update submodules to origin/main
# - If current branch is 'develop' -> update submodules to origin/develop
# - Otherwise: just initialize and update to recorded commits
#
# Usage: scripts/sync-submodules.sh [--force-branch=<branch>]
# Example: scripts/sync-submodules.sh --force-branch=develop

set -euo pipefail

# Determine desired branch
DESIRED_BRANCH=""
for arg in "$@"; do
  case "$arg" in
    --force-branch=*) DESIRED_BRANCH="${arg#*=}" ;;
  esac
done

if [[ -z "$DESIRED_BRANCH" ]]; then
  # Try to get current branch name
  if git rev-parse --abbrev-ref HEAD >/dev/null 2>&1; then
    CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
    if [[ "$CURRENT_BRANCH" == "HEAD" ]]; then
      CURRENT_BRANCH=""
    fi
  else
    CURRENT_BRANCH=""
  fi
  case "$CURRENT_BRANCH" in
    main|develop) DESIRED_BRANCH="$CURRENT_BRANCH" ;;
    *) DESIRED_BRANCH="" ;;
  esac
fi

echo "[sync-submodules] Initializing submodules..."
git submodule sync --recursive || true
git submodule update --init --recursive

if [[ -z "$DESIRED_BRANCH" ]]; then
  echo "[sync-submodules] Non-main/develop branch detected. Keeping recorded submodule commits."
  exit 0
fi

update_to_branch() {
  local path="$1"; local branch="$2"
  if [[ ! -d "$path" ]]; then
    echo "[sync-submodules] Skipping missing submodule path: $path"
    return
  fi
  echo "[sync-submodules] Updating $path to origin/$branch"
  git -C "$path" fetch origin "$branch" --quiet || {
    echo "[sync-submodules] Warning: could not fetch origin/$branch for $path; leaving as-is"; return; }
  if git -C "$path" show-ref --verify --quiet "refs/remotes/origin/$branch"; then
    git -C "$path" checkout -B "$branch" "origin/$branch" --quiet || true
    NEW_SHA=$(git -C "$path" rev-parse --short HEAD)
    echo "[sync-submodules] $path at $NEW_SHA"
    git add "$path"
  else
    echo "[sync-submodules] origin/$branch not found for $path; leaving as-is"
  fi
}

# Update known submodules
update_to_branch "kotlin-lib" "$DESIRED_BRANCH"
update_to_branch "dart-lib" "$DESIRED_BRANCH"

# Do not auto-commit; let the developer review and commit if desired
if [[ -n $(git status --porcelain=kotlin-lib dart-lib) ]]; then
  echo "[sync-submodules] Submodule pointers changed. Review and commit if this is desired:"
  echo "  git commit -m 'chore(submodules): sync to latest $DESIRED_BRANCH' kotlin-lib dart-lib"
else
  echo "[sync-submodules] No changes to submodule pointers."
fi
