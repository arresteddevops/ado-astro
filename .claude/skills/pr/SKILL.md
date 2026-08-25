---
name: pr
description: Open or update a PR for the current branch's changes. Snapshots the diff once, confirms the build is green, fans out security/accessibility review in parallel only when the diff actually touches sensitive surfaces, writes a structured PR body, and opens as a draft. Never marks ready or merges without asking.
---

Run this from a feature branch with committed changes, ready to open or
update a PR. Never invoke this while on `main`/`master` — stop and say so
instead (there's nothing to PR from main, and the push hooks would block it
anyway).

## Steps

1. **Guard.** Confirm the current branch isn't `main`/`master`. If it is,
   stop.

2. **Snapshot the diff once.** Run `git diff origin/main...HEAD` and save it
   to a scratch file. Every later step reads this file — never re-run `git
   diff` mid-skill; the diff must not shift under you between steps.

3. **Confirm the build is green.** Run `pnpm run build`. If it fails, stop
   and fix it before opening anything — don't hand the reviewers or CI a
   broken build.

4. **Decide what review this diff actually needs**, by reading the snapshot:
   - **security-reviewer**: dispatch when the diff touches forms, redirects,
     external fetches, the podcast feed endpoint, env vars, or anything
     handling user input.
   - **accessibility-reviewer**: dispatch when the diff touches `.astro`/
     `.html` markup, or `class`/`aria`/`style` attributes.
   - Skip whichever doesn't apply — say in one line why, don't run it
     anyway "just in case." Most PRs will trigger zero or one of these.

5. **Dispatch what step 4 selected, in parallel** (one message, one Agent
   call per selected subagent — `security-reviewer` and/or
   `accessibility-reviewer`), each pointed at the diff snapshot's file path.
   They must not run `git diff` themselves.

6. **Assemble the PR body:**
   - **Summary** — what changed and why, in plain language.
   - **Test plan** — what you actually verified (build, browser check,
     etc.), not a checklist of things you didn't do.
   - **Security review** — only if dispatched: its findings, or "no
     security-sensitive changes in this diff."
   - **Accessibility review** — only if dispatched: same treatment.

7. **Push and open as a draft**: `git push -u origin <branch>`, then
   `gh pr create --draft`. Never push to `main` from here (the pre-push hook
   and branch protection would reject it anyway).

8. **Wait for the required check** (`deploy/netlify`) to resolve. Report
   its result plainly — don't call the PR ready if it's still pending or
   failed.

9. **Stop and ask before marking ready or merging.** This skill's job ends
   at a green draft PR with a real body. `gh pr ready` and any merge are the
   user's call, always — never do either without being told to.
