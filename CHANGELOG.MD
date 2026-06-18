# Changelog

## [Unreleased] - 2026-05-21 - feature passion v0.1.0
### Added
- Added `current` prop to `PxLink` to set the `aria-current` page accessibility. [#11]
- Added `medium` (500) font-weight token; `weight` prop on `PxText` now supports `light`, `medium`. [#16]
- Added 'PxImage' component. [#12]
- Added `PxForm` and `PxFormSection` container components. [#13]
- Added `as` prop to `PxBox` for rendering as a semantic HTML element. [#14]

### Updated
- Updated `PxLink` tokens for text-decoration. [#11]
- Switched Sora and Lora to self-hosted, subset variable `woff2` fonts with `font-display: swap`. [#16]
- `PxText` headings now default to bold, with the `weight` prop overriding. [#16]
- Updated `PxAccordionItem` styling with tokens and more defined title. [#15]
- Updated `PxTab` and `PxTabs` to have better accessibilty. [#19]
  - full keyboard navigation (arrow keys, Home/End), roving tabindex, and tabpanel/aria-controls/aria-labelledby associations per the ARIA tabs pattern.
- Updated `PxMenu` and `PxMenuItem` to have better accessibility. [#18]
- Moved custom focus trap to composable for `PxMenu` and `PxDialog` [#18]
- Replaced `getElement` helper with an inline ternary in `PxButton`; standardized prop definitions on inline `defineProps`. [#14]
- Grouped Storybook stories into categories (Layout, Typography, Forms, Overlays, Elements). [#13]

### Removed
- Removed the `size` prop from `PxText`. Size comes from `as`; override `font-size` with the exposed scale tokens (e.g. `var(--px-font-size-heading-04)`). [#16]

### Fixed
- `PxText` now reacts to `as`, `align`, and `weight` changes (props were captured once at setup; now derived via `computed`). [#16]
- `PxInput`, `PxTextarea` — added `font-family: inherit` so inputs use the design system font instead of the browser default. [#17]
- `PxInput`, `PxTextarea`, `PxSelect` — required asterisk no longer renders when no label is present. [#17]
- `PxSelect` — added `ariaLabel` prop, wired to the search input and listbox for label-less accessible usage. [#17]

## [Unreleased] - 2026-05-21

### Changed
- **Select**: Rewrote with Floating UI; removed `vue-select`; full keyboard nav; proper combobox ARIA; `helperMessage` prop; height now matches Input
- **Tabs**: Added `#content` named slot; horizontal scroll with reactive arrow buttons when tabs overflow
- **Tab**: Shadow pattern now matches Button (raised → inset hover → inset active)
- **Tag**: Shadow pattern now matches Button
- **Package**: `@floating-ui/vue` and `vite-plugin-css-injected-by-js` moved to `devDependencies`; `vue-select` removed

## [Unreleased] - 2026-05-19

### Added
- **Checkbox**: `modelValue`, `isRequired`, `isInvalid`, `indeterminate`, `name`, `value` props
- **DataTable**: `columns` and `rows` props; neumorphic raised rows with hover effect; custom cell rendering via `col.type`
- **Radio**: `modelValue`, `isRequired`, `isInvalid`, `name`, `value` props
- **Tag**: `shape` (`rounded`, `square`, `pill`) and `isDecorative` props
- **Tabs + Tab**: `v-model` for active tab; provide/inject architecture
- **Menu + MenuItem**: Floating UI powered; arrow key nav; `url` prop renders as `<a>` or `<button>`; `useMenuFloating` composable

## [Unreleased] - 2026-05-17

### Added
- **Accordion + AccordionItem**: `allowMultiple`, `defaultOpen` props; CSS grid expand animation
- **Box**: Hover shadow token
- **Button**: `fullWidth` and `type` props
- **Input**: `helperMessage` prop
- **Textarea**: `helperMessage` and `resize` props (`auto`, `vertical`, `horizontal`, `both`)
- **Dialog**: Native focus trap; overlay click to close; `Teleport` to body

### Changed
- **Button**: Fixed swapped hover/active shadow token names
- **Dialog**: Replaced CSS visibility toggle with `v-if`; removed `focus-trap-vue`
- **IconContainer**: Renders as `<button>` when `isClickable`

## [Initial]

### Added
- Initial project setup with Avatar, Box, Button, Dialog, Heading, IconContainer, Input, Link, Select, Text, Textarea
- Token categories: Typography, Spacing, Color, Elevation
- Global component plugin
