# Changelog

## [Unreleased] - 2026-05-17

### Added
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
