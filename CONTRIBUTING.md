# Contributing to Nimbus UI

Thanks for your interest in contributing! This guide covers how to set up the
project, the conventions we follow, and how to submit changes.

## Getting started

1. **Fork** the repository and clone your fork.
2. Install dependencies (Node `^20.19.0` or `>=22.12.0`):

   ```bash
   npm install
   ```

3. Start a dev environment:

   ```bash
   npm run dev          # Vite playground (src/App.vue)
   npm run storybook    # Storybook component explorer on :6006
   ```

## Project structure

```
src/
  components/     # Px* single-file components + index.js (public exports)
  composables/    # Reusable logic (useFocusTrap, useMenuFloating)
  styles/         # base.css + design tokens (typography, spacing, color, elevation)
  stories/        # Storybook stories (the component docs)
  App.vue         # Local playground — add a working example for every new component
  index.js        # Library entry point
  plugin.js       # Vue plugin that globally registers all components
```

## Conventions

- **Component naming**: all components are prefixed with `Px` (e.g. `PxButton`)
  and live in `src/components/PxName.vue`. Export them from
  `src/components/index.js`.
- **Styling**: use the CSS custom-property design tokens (e.g.
  `var(--px-border-radius)`) rather than hard-coded values, so components stay
  themeable across light/dark.
- **Accessibility**: components should use semantic HTML and follow the relevant
  ARIA pattern (keyboard nav, focus management, labels). Accessibility is a
  first-class requirement, not an afterthought.
- **Stories**: every component needs a story in `src/stories/` — this is our
  documentation. The Storybook a11y addon should pass.
- **Playground**: when adding a new component, also add a working example to
  `src/App.vue`.

## Adding to the changelog

Update [CHANGELOG.md](./CHANGELOG.md) under the unreleased section, noting what
you **Added**, **Changed**, **Removed**, or **Fixed**, and reference the issue
or PR number.

## Submitting a pull request

1. Create a branch off `main` (e.g. `feature/short-description`).
2. Make your change, including a story and a changelog entry.
3. Verify the build and Storybook still pass:

   ```bash
   npm run build
   npm run build-storybook
   ```

4. Open a PR against `main` using the PR template. Describe the change, link any
   related issues, and include screenshots for visual changes.

## Reporting bugs & requesting features

Use the GitHub issue templates. For bugs, include reproduction steps, expected
vs. actual behavior, and your environment. For features, describe the use case.

By contributing, you agree your contributions are licensed under the project's
[MIT License](./LICENSE).
