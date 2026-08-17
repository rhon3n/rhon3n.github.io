---
name: apply-rhonen-portfolio-system
description: Apply the Rhonen Portfolio design system to portfolio, case-study, hiring, and personal-brand web interfaces. Use when creating or refining Joel Rhine surfaces that need the ivory field-manual palette, Swiss grid, indexed project rows, functional color signals, square controls, or the established portfolio voice.
user-invocable: true
---

# Apply the Rhonen Portfolio system

## What is inside

- `DESIGN.md`: complete design rules and product context.
- `colors_and_type.css`: reusable source and canonical color values, type classes, spacing, radius, shadow, and motion tokens.
- `portfolio-design-system.html`: substantial preserved system implementation.
- `preview/`: focused review cards for foundations, components, assets, and applied UI.
- `ui_kits/app/`: complete responsive portfolio interface and reuse notes.
- `assets/`: three preserved project images.

## Source context

The source is the Tech Brutalist Portfolio System project documented in `context/source-context.md` and `context/provenance.md`. Treat `PRODUCT.md`, `brand-spec.md`, `DESIGN.json`, the three local project images, and the preserved HTML as evidence. Do not invent brand assets, outcomes, metrics, or destinations that are absent from those sources.

## When to use

Use this system for Joel Rhine portfolio, case-study, hiring, about, and contact surfaces. Use it when an existing Rhonen interface needs refinement or when a new portfolio surface must match the established ivory field-manual identity.

## How to use

1. Read `PRODUCT.md` and `DESIGN.md` in full before editing.
2. Load `colors_and_type.css` or copy its canonical tokens into the first style block.
3. Reuse `assets/` and the substantial reference in `portfolio-design-system.html` before inventing substitutes.
4. Use `ui_kits/app/index.html` as the applied structural reference for portfolio pages.
5. Review only the relevant focused cards in `preview/`; use `preview/README.md` to choose them.

## Design-system highlights

Ivory is the dominant field; Midnight Violet provides type and rules. Archivo Black carries compressed arguments while Source Sans 3 keeps narrative calm. Twelve-column wide layouts collapse to four columns. Square controls, full-width indexed project records, hard state changes, and sparse Indigo, Canary, and Coral signals make structure the primary expression.

## Build rules

- Keep the page Ivory-first with Midnight Violet type and rules.
- Align wide layouts to twelve columns and compact layouts to four.
- Use Archivo Black for one dominant statement per section; use Source Sans 3 for narrative.
- Keep paragraph measure at 65 characters or fewer.
- Use one solid Bright Indigo action per viewport; render alternatives as bordered controls or text links.
- Keep corners square, surfaces flat, and shadows absent at rest.
- Map Canary to creative tools or selected metadata, Indigo to product engineering, and Coral to product design, validation, or exceptions.
- Use indexed full-width work records instead of equal-card grids.
- Preserve 44px targets, clear `:focus-visible` rings, honest dated metrics, and reduced-motion fallbacks.

## Reject

- Rounded SaaS cards, soft gradients, glass surfaces, ambient shadows, terminal cosplay, gradient text, and colored side stripes.
- Canary or Coral paragraph text on Ivory.
- Duplicate solid calls to action in one viewport.
- Motion that changes layout properties or continues when content is off-screen, hovered, focused, hidden, or reduced motion is requested.

## Verify

- Check all foreground/background pairs in default, hover, focus, active, and disabled states.
- Check 320px width for horizontal overflow and short orphan lines.
- Confirm every source image is local and every meaningful region has a stable `data-od-id`.
- Run the Open Design design-system package audit with warnings treated as failures.
