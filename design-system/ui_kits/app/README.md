# Applied portfolio UI kit

`index.html` is the canonical applied interface for the Rhonen Portfolio system. It is a complete responsive portfolio page, not a generic component gallery.

## Source basis

The kit is grounded in `PRODUCT.md`, `DESIGN.md`, `brand-spec.md`, `DESIGN.json`, `portfolio-design-system.html`, and the three preserved project images. Project descriptions and the dated GitHub snapshot remain source-backed; no outcomes or destinations were invented.

## Structure

The page progresses through a ruled navigation index, an eight-plus-four-column hero, selected work, public contribution evidence, operating history, and contact. Wide layouts use twelve columns. Compact layouts use four columns and retain the project-record edge rails.

## Component files

- `index.html`: self-contained semantic markup, page-specific CSS, and inline disclosure behavior.
- `../../colors_and_type.css`: required shared tokens and reusable type utilities.
- `../../assets/`: required local project imagery.
- `components/PortfolioHero.jsx`: reusable hero and operating-context rail.
- `components/ProjectRecord.jsx`: reusable indexed work record with inline disclosure.
- `components/ContributionTicker.jsx`: reusable dated activity row.

## Included patterns

- Ruled wordmark and visible four-link navigation.
- Eight-column hero argument with four-column operating-context rail.
- One Bright Indigo primary action plus a text path.
- Three indexed project records using the preserved local images and semantic category colors.
- Inline project-note disclosure controls with `aria-expanded` and visible focus.
- Dated, directly sourced GitHub activity row with manual horizontal scrolling.
- Operating-history section and compact contact footer.

## Usage

1. Copy `index.html` with `colors_and_type.css` and the three referenced images.
2. Keep the shared stylesheet link before page-specific styles.
3. Replace project copy only with verified content and keep image paths local.
4. Preserve the category mapping: Canary for creative tools, Indigo for product engineering, Coral for product design.
5. If project destinations become available, convert arrow controls to real links and retain the 44px target.
6. Verify focus, hover, expanded notes, narrow-width wrapping, and reduced motion.

## Design notes

The layout uses the shared color and typography tokens to keep the hero, index, and evidence rows aligned to the source system. The hero contains the page's only solid primary action. Navigation and contact paths remain text actions. Project records carry the system's signature hierarchy and invert completely on hover while their inline notes open without a modal. The contribution row is manually scrollable and explicitly dated so it does not imply live data.

## Reuse guide

- **Source basis:** `PRODUCT.md`, `DESIGN.md`, `brand-spec.md`, `DESIGN.json`, the preserved HTML, and local project images.
- **Applied kit structure:** ruled navigation, hero and context rail, indexed work, contribution evidence, operating history, and contact.
- **Component files:** `index.html` for the assembled surface, `components/PortfolioHero.jsx`, `components/ProjectRecord.jsx`, and `components/ContributionTicker.jsx` for composition, `../../colors_and_type.css` for shared foundations, and `../../assets/` for project media.
- **Usage workflow:** copy the listed files, update only verified content, preserve local paths and category mappings, then verify states and narrow layouts.
- **Design notes:** retain one solid primary action, complete record inversion, inline disclosure instead of modals, dated metrics, square geometry, and flat resting surfaces.

The page uses no build step. Open `index.html` directly or embed it through `preview/applied-portfolio.html`.
