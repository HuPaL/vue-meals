# Vuex Conventions

- Keep the store split across `state.js`, `getters.js`, `mutations.js`, `actions.js` as it is today — don't collapse them into `store/index.js`.
- Mutations are the only place that assigns to `state`; actions call mutations via `commit`, never mutate `state` directly.
- Mutation names are `SCREAMING_SNAKE_CASE` (e.g. `SET_MEALS`), action and getter names are `camelCase`.
- Async work (API calls) belongs in `actions.js`; `getters.js` stays pure/derived, no side effects.
- If the store grows beyond the meal-search domain, split into namespaced modules under `src/store/modules/` rather than growing the flat files indefinitely — but don't do this preemptively while the store is still a single small domain.
