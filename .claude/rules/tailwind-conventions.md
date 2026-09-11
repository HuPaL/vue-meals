# Tailwind Conventions

- This project uses Tailwind CSS v4 via `@tailwindcss/vite` — there is no `tailwind.config.js`. Theme tokens and custom utilities go in `src/style.css` using `@theme` / `@utility` (v4 CSS-first config), not a JS config file.
- Style with utility classes directly in templates; only add a `<style>` block for things utilities can't express (complex animations, `:deep()` overrides).
- Don't reintroduce a `tailwind.config.js` or `postcss.config.js` for Tailwind — that would fight the v4 Vite plugin setup already in `vite.config.js`.
- Keep class lists readable: group by layout → spacing → typography → color → state (`hover:`/`focus:`) roughly in that order.
