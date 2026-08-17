# Rhonen Portfolio Design System

An ivory-led tech-brutalist system for Joel Rhine's portfolio. It uses Swiss-grid discipline, blunt Archivo Black display type, readable Source Sans 3 body copy, square controls, and restrained functional color.

## Product Overview

The source product is a hiring-focused portfolio for a software engineer and product builder whose work connects coffee, operations, integrations, and field experience. Its primary surfaces are the portfolio introduction, selected-work index, individual-contributor proof, operating history, and contact path. The system helps hiring teams scan role and range quickly, inspect concrete project evidence, and continue to verified public work without decoding decorative interface patterns.

## Source and context references

- `PRODUCT.md`: audience, purpose, personality, strategic principles, and accessibility requirements.
- `brand-spec.md`: canonical OKLCH tokens, font stacks, and observed visual rules.
- `DESIGN.json`: structured components, tonal ramps, motion values, and narrative rules.
- `context/source-context.md`: copied-file manifest and source project metadata.
- `context/provenance.md`: preservation notes and interpretation boundaries.

## Package contents

- `DESIGN.md`: product context, foundations, layout, component rules, motion, voice, and anti-patterns.
- `colors_and_type.css`: reusable OKLCH, typography, spacing, radius, shadow, and motion tokens.
- `portfolio-design-system.html`: preserved source example and interactive system reference.
- `ui_kits/app/index.html`: applied responsive portfolio interface.
- `ui_kits/app/README.md`: reuse guidance for the applied kit.
- `preview/README.md`: focused review order and preview manifest.
- `context/provenance.md`: source lineage and evidence notes.
- `assets/`: preserved project imagery used by records and previews.

## Preview manifest

1. `preview/colors-primary.html`
2. `preview/typography-specimens.html`
3. `preview/spacing-tokens.html`
4. `preview/radius-shadows.html`
5. `preview/components-buttons.html`
6. `preview/brand-assets.html`
7. `preview/applied-portfolio.html`

## Preserved assets, fonts, and build artifacts

The package preserves `assets/project-shader-studio.png`, `assets/project-measure-coffee.png`, and `assets/project-california-storm.png`. No source logo files, icons, avatars, local font binaries, or runtime build icons were present, so no `fonts/` or `build/` directory was fabricated. Archivo Black and Source Sans 3 load from Google Fonts with named system fallbacks.

## Review Workflow

1. Read `PRODUCT.md`, `DESIGN.md`, and `context/provenance.md`.
2. Load `colors_and_type.css` before page-specific styles.
3. Start from `ui_kits/app/index.html` for a portfolio surface or reuse patterns from `portfolio-design-system.html`.
4. Replace only source-backed content and keep local assets in `assets/`.
5. Inspect the focused previews relevant to the change, then inspect `preview/applied-portfolio.html` for the assembled result.
6. Check keyboard states, 320px width, reduced motion, and the single-primary-action rule.
7. Run the package audit with warnings treated as failures.

## Package reuse guide

Use `PRODUCT.md`, `DESIGN.md`, `brand-spec.md`, and `context/provenance.md` as the source context. Load the foundations from `colors_and_type.css`, then reuse either the full `ui_kits/app/index.html` applied surface or components from `portfolio-design-system.html`. Review changes through the seven `preview/*.html` cards listed above. Keep the three source images in `assets/`; do not create `fonts/` or `build/` substitutes unless real source files become available. Finish with the applied UI preview and the package audit.

## Non-negotiables

- Keep Ivory dominant and Midnight Violet structural.
- Use Bright Indigo for one primary action and one supporting signal per viewport.
- Keep every corner square and every resting surface flat.
- Build desktop layouts on twelve columns and compact layouts on four.
- Use full-width indexed project records instead of generic equal-card grids.
- Preserve visible focus, 44px targets, reduced-motion fallbacks, and complete foreground/background state changes.

The package is self-contained except for Google Fonts and the optional GSAP CDN used by the preserved reference example.
