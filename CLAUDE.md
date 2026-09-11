# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm install` — install dependencies
- `npm run dev` — start the Vite dev server
- `npm run build` — production build
- `npm run preview` — preview the production build locally
- `npm run lint` — check code with ESLint (flat config, `eslint.config.js`)
- `npm run lint:fix` — same, applying safe auto-fixes
- `npm run format` — format the codebase with Prettier

There is no test script configured in `package.json` yet. `.claude/settings.json` runs Prettier automatically after every file write/edit via a `PostToolUse` hook, and blocks `git commit` via a `PreToolUse` hook if `npm run lint` fails.

## Conventions

@.claude/rules/vue-conventions.md
@.claude/rules/tailwind-conventions.md
@.claude/rules/vuex-conventions.md

## Architecture

Vue 3 (`<script setup>` SFCs) + Vite + Vue Router + Vuex, styled with Tailwind CSS v4 via the `@tailwindcss/vite` plugin (`vite.config.js`) — there is no `tailwind.config.js`; Tailwind v4 is configured through CSS (`src/style.css`) and the Vite plugin instead.

- `src/main.js` — app entry point; creates the Vue app and installs the router and the Vuex store.
- `src/router/index.js` — route table (currently a single `/` route rendering `src/views/Home.vue`).
- `src/store/` — Vuex store split across `state.js`, `getters.js`, `mutations.js`, `actions.js`, wired together in `store/index.js`. This is an early scaffold: `actions.js`, `mutations.js`, and `getters.js` are currently empty, and `state.js` only holds a placeholder `meals` array.
- `src/App.vue` — root component, just renders `<router-view />`.

The project name (`vue-search-meals`) and the existing `meals` state imply the intended feature is a meal-search app (likely against a public recipes API such as TheMealDB), but that integration is not yet implemented.
