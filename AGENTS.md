# Rhonen design-system requirements

Before changing any user-facing interface:

1. Read `design-system/PRODUCT.md`, `design-system/DESIGN.md`, and `design-system/SKILL.md`.
2. Treat `DESIGN.md` as authoritative for color, typography, spacing, layout, components, motion, and voice.
3. Load `design-system/colors_and_type.css`; do not recreate or approximate its tokens.
4. Reuse patterns from `design-system/ui_kits/app/` and source assets from `design-system/assets/`.
5. Inspect the relevant focused cards in `design-system/preview/` before implementation.
6. Preserve one primary action per viewport, square controls, visible focus states, local imagery, and responsive four-column behavior.
7. Do not introduce rounded SaaS cards, decorative gradients, glass surfaces, ambient shadows, or unsupported metrics.
8. Verify desktop, mobile, keyboard, hover, focus, and reduced-motion states before completion.