---
description: Run lint, format check, and build before committing — a manual gate in addition to the automatic PreToolUse lint hook on git commit.
---

Run these three checks in this repo, in order, and report the real output of each (don't summarize away errors):

1. `npm run lint`
2. `npx prettier --check .` (the `format` script only supports `--write`, so use `npx prettier --check .` for a non-mutating check)
3. `npm run build`

If any step fails, stop and report the failure — don't proceed to the next step or claim the repo is commit-ready. If all three pass, say so plainly and remind the user that committing/pushing still needs their explicit go-ahead.
