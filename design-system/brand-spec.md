# Rhonen Portfolio Brand Spec

The system is an ivory field manual: Midnight Violet supplies structure, Bright Indigo carries interaction, and Canary Yellow and Vibrant Coral appear only as functional signals.

## Canonical OKLCH tokens

```css
:root {
  --bg: oklch(98.82% 0.0249 109.29);
  --surface: oklch(96.6% 0.031 109.29);
  --fg: oklch(14.97% 0.0705 288.74);
  --muted: oklch(43% 0.045 288.74);
  --border: oklch(14.97% 0.0705 288.74 / 0.24);
  --accent: oklch(47.59% 0.2748 267.09);
}
```

## Supporting supplied colors

- Canary Yellow: `oklch(94.38% 0.1495 109.77)`
- Vibrant Coral: `oklch(69.63% 0.1618 25.24)`

## Font stacks

- Display: `"Archivo Black", "Arial Black", Impact, sans-serif`
- Body: `"Source Sans 3", "Helvetica Neue", Arial, sans-serif`
- Mono: `"SFMono-Regular", Consolas, "Liberation Mono", monospace`

## Visual language

1. Use a visible 12-column grid, exposed rules, and controlled asymmetry; structure is the primary visual expression.
2. Keep corners square, shadows hard and rare, and surfaces flat by default.
3. Reserve Bright Indigo for one primary interaction and one supporting signal per viewport.
4. Use Canary Yellow for attention or selected metadata and Vibrant Coral for warnings, errors, or editorial emphasis, never as ambient decoration.
5. Pair dense, uppercase metadata with large blunt headlines and relaxed body copy capped at 65 characters per line.
