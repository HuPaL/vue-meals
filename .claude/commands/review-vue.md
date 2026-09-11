---
description: Review changed Vue files against this project's conventions using the vue-reviewer agent.
---

Find the Vue files (`*.vue`) currently changed in the working tree (`git diff --name-only` and `git status --porcelain`, filtered to `*.vue`). If there are none, fall back to reviewing whichever `.vue` files the user just mentioned or most recently edited in this session.

Delegate the review to the `vue-reviewer` agent for those files, then present its findings to the user as-is — don't silently fix anything yourself unless the user asks you to act on the findings afterward.
