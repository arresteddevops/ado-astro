#!/usr/bin/env bash
# PreToolUse guard: block `git push` directly to main/master.
# Belt-and-suspenders on top of GitHub branch protection, which already
# requires a PR into main — this just stops the agent from attempting it.
input="$(cat)"
command="$(printf '%s' "$input" | jq -r '.tool_input.command // ""')"

if [[ "$command" == *"git push"* ]]; then
  branch="$(git rev-parse --abbrev-ref HEAD 2>/dev/null)"
  if [[ "$branch" == "main" || "$branch" == "master" ]]; then
    echo "Blocked: direct 'git push' while on '$branch' isn't allowed. Open a PR instead (branch protection requires it anyway)." >&2
    exit 2
  elif [[ "$command" =~ :(main|master)([[:space:]]|$) ]]; then
    echo "Blocked: this push targets main/master via refspec. Open a PR instead (branch protection requires it anyway)." >&2
    exit 2
  fi
fi

exit 0
