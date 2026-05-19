# Changelog

## [Unreleased] - 2026-05-19

### Added
- **Checkbox**: new component with `modelValue` (boolean or array), `isRequired`, `isInvalid`, `indeterminate`, `name`, and `value` props; neumorphic sunken shadow unchecked, surface bg when checked; `aria-describedby` error message support
- **DataTable**: new component with `columns` and `rows` props; neumorphic raised rows with scale + overlay shadow on hover; `col.type` for custom Vue component cell rendering
- **Radio**: new component with `modelValue`, `isRequired`, `isInvalid`, `name`, and `value` props; neumorphic sunken shadow, inner dot on checked state
- **Tag**: new component with `shape` (`rounded`, `square`, `pill`) and `isDecorative` props; slot-based content; neumorphic raised shadow
- **Tabs + Tab**: new components with provide/inject architecture; `v-model` on `PxTabs` for active tab; neumorphic raised shadow on active tab, ghost hover shadow on inactive; `border-radius` top corners for tab shape
- **Menu + MenuItem**: new components powered by Floating UI (`@floating-ui/vue`); `placement` and `offset` props on `PxMenu`; `url` prop on `PxMenuItem` renders as `<a>` or `<button>`; arrow key navigation, Escape closes with focus return to trigger, Tab closes with focus return to trigger; `preventScroll: true` on auto-focus to prevent page jump on open; `useMenuFloating` composable added to `src/composables/`

## [Unreleased] - 2026-05-17

### Added
- **Accordion + AccordionItem**: new components with `allowMultiple` and `defaultOpen` props, full ARIA wiring, CSS grid expand animation, and neumorphic inset shadow on trigger hover/active
- **Box**: `--px-box-shadow-hover` token referencing `--px-btn-shadow-active` for clickable hover state
- **Button**: `fullWidth` and `type` props
- **Input**: `helperMessage` prop; `aria-describedby` linking input to message wrapper
- **Textarea**: `helperMessage` prop; `aria-describedby` linking textarea to message wrapper; `resize` prop with `auto` (grow on input), `vertical`, `horizontal`, and `both` options
- **Dialog**: Native focus trap (Tab/Shift+Tab cycles within dialog, Escape closes); focus returns to trigger on close; overlay click to close; `Teleport` to body

### Changed
- **Button**: Corrected swapped `--px-btn-shadow-hover` and `--px-btn-shadow-active` token names in both light and dark themes
- **Dialog**: Replaced CSS visibility toggle with `v-if`; body scroll lock moved to JS; removed dependency on `focus-trap-vue`
- **IconContainer**: Renders as `<button type="button">` when `isClickable` instead of `div` with `tabindex`; icon now centered with `inline-flex`

## [Initial]

### Added
- Initial project setup
- Components:
  - Avatar
  - Box
  - Button
  - Dialog
  - Heading
  - IconContainer
  - Input
  - Link
  - Select
  - Text
  - Textarea
- Token categories:
  - Typography
  - Spacing
  - Color
  - Elevation
- Plugin setup to globally register all components
