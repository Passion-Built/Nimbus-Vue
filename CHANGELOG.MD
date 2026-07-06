# Changelog

## [1.0.0] - 2026-07-05

### Added
- Initial project setup with `PxAvatar`, `PxBox`, `PxButton`, `PxDialog`, `PxHeading`, `PxIconContainer`, `PxInput`, `PxLink`, `PxSelect`, `PxText`, `PxTextarea`
- Token categories: Typography, Spacing, Color, Elevation
- Global component plugin
- **Accordion + AccordionItem**: `allowMultiple`, `defaultOpen` props; CSS grid expand animation
- **Box**: Hover shadow token
- **Button**: `fullWidth` and `type` props
- **Input**: `helperMessage` prop
- **Textarea**: `helperMessage` and `resize` props (`auto`, `vertical`, `horizontal`, `both`)
- **Dialog**: Native focus trap; overlay click to close; `Teleport` to body
- **Checkbox**: `modelValue`, `isRequired`, `isInvalid`, `indeterminate`, `name`, `value` props
- **DataTable**: `columns` and `rows` props; neumorphic raised rows with hover effect; custom cell rendering via `col.type`
- **Radio**: `modelValue`, `isRequired`, `isInvalid`, `name`, `value` props
- **Tag**: `shape` (`rounded`, `square`, `pill`) and `isDecorative` props
- **Tabs + Tab**: `v-model` for active tab; provide/inject architecture
- **Menu + MenuItem**: Floating UI powered; arrow key nav; `url` prop renders as `<a>` or `<button>`; `useMenuFloating` composable
- **Link**: `current` prop to set the `aria-current` page accessibility attribute
- **Text**: `medium` (500) font-weight token; `weight` prop now supports `light`, `medium`
- **Image**: new `PxImage` component
- **Form + FormSection**: new container components
- **Box**: `as` prop for rendering as a semantic HTML element

### Changed
- **Select**: Rewrote with Floating UI; removed `vue-select`; full keyboard nav; proper combobox ARIA; `helperMessage` prop; height now matches Input
- **Tabs**: Added `#content` named slot; horizontal scroll with reactive arrow buttons when tabs overflow
- **Tab**: Shadow pattern now matches Button (raised → inset hover → inset active)
- **Tag**: Shadow pattern now matches Button
- **Button**: Fixed swapped hover/active shadow token names
- **Dialog**: Replaced CSS visibility toggle with `v-if`; removed `focus-trap-vue`
- **IconContainer**: Renders as `<button>` when `isClickable`
- **Link**: Updated tokens for text-decoration
- **Text**: Headings now default to bold, with the `weight` prop overriding
- **AccordionItem**: Updated styling with tokens and more defined title
- **Tab + Tabs**: Better accessibility — full keyboard navigation (arrow keys, Home/End), roving tabindex, and tabpanel/aria-controls/aria-labelledby associations per the ARIA tabs pattern
- **Menu + MenuItem**: Better accessibility
- **Menu + Dialog**: Moved custom focus trap to a shared composable
- **Button**: Replaced `getElement` helper with an inline ternary; standardized prop definitions on inline `defineProps`
- Fonts: Switched Sora and Lora to self-hosted, subset variable `woff2` fonts with `font-display: swap`
- Storybook: Grouped stories into categories (Layout, Typography, Forms, Overlays, Elements)
- Package: `@floating-ui/vue` and `vite-plugin-css-injected-by-js` moved to `devDependencies`; `vue-select` removed

### Removed
- **Text**: `size` prop. Size comes from `as`; override `font-size` with the exposed scale tokens (e.g. `var(--px-font-size-heading-04)`)

### Fixed
- **Text**: Now reacts to `as`, `align`, and `weight` changes (props were captured once at setup; now derived via `computed`)
- **Input, Textarea**: Added `font-family: inherit` so inputs use the design system font instead of the browser default
- **Input, Textarea, Select**: Required asterisk no longer renders when no label is present
- **Select**: Added `ariaLabel` prop, wired to the search input and listbox for label-less accessible usage
