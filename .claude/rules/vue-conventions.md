# Vue Conventions

- Always use `<script setup>` — never the Options API or the plain `setup()` function.
- Order SFC blocks as `<script setup>`, `<template>`, `<style>` (only add `<style>` if the component needs scoped CSS beyond Tailwind utility classes).
- Component files: `PascalCase.vue` in `src/components/`. View files: `PascalCase.vue` in `src/views/`.
- Define props with `defineProps` using the object/type syntax (not the array-of-strings shorthand) so each prop is typed.
- Emit events via `defineEmits` declared at the top of `<script setup>`, named `camelCase` and prefixed with a verb (`update:modelValue`, `select`, `close`).
- Prefer `computed` over methods for derived state; prefer composables (`src/composables/useX.js`) over duplicating logic across components.
- Use the `ref`/`reactive` from `vue` directly — no external state-management helpers beyond Vuex (see `vuex-conventions.md`).
