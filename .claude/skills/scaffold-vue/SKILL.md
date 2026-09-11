---
name: scaffold-vue
description: Scaffold a new Vue 3 component or view for the vue-search-meals project, following this repo's conventions (script setup, Tailwind v4, file placement). Use when the user asks to create a new component, new view/page, or new route.
---

# Scaffold a Vue component or view

Ask (or infer from the user's request) two things if not already clear:

1. Is this a **component** (`src/components/`) or a **view** (`src/views/`)?
2. Its `PascalCase` name.

Then:

1. Read `.claude/rules/vue-conventions.md` and `.claude/rules/tailwind-conventions.md` for the current conventions — don't rely on this skill's memory of them, they may have changed.
2. Create the file at `src/components/<Name>.vue` or `src/views/<Name>.vue` using this shape:

```vue
<script setup>
defineProps({
  // typed props here, e.g.:
  // title: { type: String, required: true },
})
</script>

<template>
  <div>
    <!-- content -->
  </div>
</template>
```

3. If it's a **view**, also add a route for it in `src/router/index.js` (`path`, `name`, lazy `component: () => import('../views/<Name>.vue')`) — follow the existing route entries' shape rather than inventing a new pattern.
4. If the component needs store data, use `mapState`/`mapActions`/`mapGetters` or the `useStore()` composable per `.claude/rules/vuex-conventions.md` — never reach into `store.state` directly.
5. Don't add a `<style>` block, test file, or Storybook story unless asked — this project has no test runner configured yet (see root `CLAUDE.md`).
6. After creating the file, run `npm run lint` to confirm it passes before reporting done.
