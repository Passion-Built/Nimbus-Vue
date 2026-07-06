# Nimbus UI

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

Nimbus is a minimalist, neumorphism-inspired **Vue 3** UI kit for developers and
designers who want clean, soft, tactile interfaces. It ships design foundations
— typography, color tokens, spacing, soft shadows — plus a set of accessible,
ready-to-use components. Perfect for portfolios, prototypes, and projects.

> **Status:** Nimbus is in active early development (`0.x`) and is **not yet
> published to npm**. For now, explore the components in Storybook or run it
> locally (see [Development](#development)). Install instructions will land here
> once the package is public.

## Features

- **Foundations** — typography scale, color tokens, spacing, border-radius, and soft elevation shadows, all driven by CSS custom properties with light/dark themes.
- **Components** — buttons, inputs, textareas, selects, checkboxes, radios, dialogs, menus, tabs, accordions, data tables, tags, avatars, images, links, and layout primitives (Box, Text).
- **Accessibility** — focus states, semantic HTML, ARIA patterns (tabs, menus, combobox), focus traps, and full keyboard navigation.
- **Lightweight & themeable** — Vue is a peer dependency, styles are token-based, and components are easy to customize and extend.

## Components

| Component | Description |
| --- | --- |
| `PxBox` | Layout primitive / container with elevation |
| `PxText` | Typographic text & headings (via `as`) |
| `PxButton` | Button, supports `variant`, `fullWidth`, `as`, link rendering |
| `PxLink` | Accessible link with `aria-current` support |
| `PxInput` / `PxTextarea` | Form fields with `helperMessage`, validation states |
| `PxSelect` | Floating UI combobox with full keyboard nav |
| `PxCheckbox` / `PxRadio` | Form controls with `v-model`, validation states |
| `PxDialog` | Modal with focus trap and overlay-to-close |
| `PxMenu` / `PxMenuItem` | Floating UI menu with arrow-key navigation |
| `PxTabs` / `PxTab` | ARIA tabs with roving tabindex |
| `PxAccordion` / `PxAccordionItem` | Expandable panels with grid animation |
| `PxDataTable` | Neumorphic table with `columns` / `rows` |
| `PxTag` | Status/label tag with `shape` variants |
| `PxAvatar` / `PxImage` / `PxIconContainer` | Media & icon primitives |

See the [Storybook](#documentation) for the full prop reference and live examples.

## Documentation

Component documentation, props, and interactive examples live in Storybook. Run
it locally:

```bash
npm run storybook
```

## Development

```bash
git clone https://github.com/Passion-Built/Nimbus-Vue.git
cd Nimbus-Vue
npm install

npm run dev              # Vite dev server (src/App.vue playground)
npm run storybook        # Storybook on :6006
npm run build            # Build the library to dist/
npm run build-storybook  # Static Storybook build
```

Contributions are welcome — please read [CONTRIBUTING.md](./CONTRIBUTING.md)
first. By participating you agree to the [Code of Conduct](./CODE_OF_CONDUCT.md).

## License

[MIT](./LICENSE) © Passion Built
