---
name: Rhonen Portfolio
description: An ivory-led tech-brutalist system organized with Swiss-grid discipline.
colors:
  midnight-violet: "#0c0326"
  bright-indigo: "#2132f3"
  canary-yellow: "#f3f576"
  ivory: "#fcfdea"
  vibrant-coral: "#f16f68"
  ivory-surface: "#f6f7df"
typography:
  display:
    fontFamily: "Archivo Black, Arial Black, Impact, sans-serif"
    fontSize: "clamp(3.5rem, 8vw, 7rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Archivo Black, Arial Black, Impact, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Source Sans 3, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Source Sans 3, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0"
  label:
    fontFamily: "Source Sans 3, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  none: "0"
spacing:
  1: "4px"
  2: "8px"
  4: "16px"
  6: "24px"
  10: "40px"
  16: "64px"
  24: "96px"
components:
  button-primary:
    backgroundColor: "{colors.bright-indigo}"
    textColor: "{colors.ivory}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.midnight-violet}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.none}"
  button-secondary:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.midnight-violet}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 20px"
    height: "48px"
  field:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.midnight-violet}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
    height: "48px"
---

# Design System: Rhonen Portfolio

## Product Context

The system supports a hiring-focused portfolio for Joel Rhine, a software engineer and product builder whose work connects coffee, field operations, integrations, and software. Hiring teams need to identify his role, range, judgment, and strongest evidence quickly. Every surface therefore favors shortlist scanning, concrete proof, and clear paths into selected work or contact.

## Overview

**Creative North Star: "The Operator's Field Manual"**

This system treats Joel's portfolio as a precise working document rather than a polished sales shell. An ivory canvas evokes technical paper; heavy grotesk headlines, coordinate labels, exposed rules, and a visible 12-column grid turn structure into the signature. The result is direct, resourceful, and easy for a hiring lead to scan under time pressure.

The expression is tech-brutalist, but never chaotic. Hierarchy is decisive, alignment is strict, and moments of broken-grid emphasis are controlled. The system rejects generic SaaS polish, decorative gradients, soft rounded cards, and terminal cosplay.

**Key Characteristics:**

- Ivory-first canvas with Midnight Violet structure.
- Strict Swiss grid with occasional one-column offsets.
- Blunt display typography paired with calm, readable body copy.
- Square controls, exposed borders, and hard state shifts.
- Functional color signals rather than ambient decoration.

**The Twelve-Column Rule.** Desktop compositions align to twelve columns; every intentional break must still resolve to the grid at its edges.

## Colors

The palette combines a warm technical-paper neutral with saturated signals that feel printed, not glowing.

### Primary

- **Bright Indigo:** The interactive accent for the single primary action, active controls, high-value links, and the product-engineering category signal.

### Secondary

- **Canary Yellow:** A high-attention signal for selection, status, short metadata labels, and the creative-tools category signal.

### Tertiary

- **Vibrant Coral:** Reserved for validation errors, urgent notes, rare editorial emphasis, and the product-design category signal.

### Neutral

- **Ivory:** The canonical page background and dominant field.
- **Ivory Surface:** A subtle tonal step for inputs, code samples, and bounded specimens.
- **Midnight Violet:** Primary text, rules, dark sections, and inverted controls.

**The Two-Signal Rule.** Bright Indigo may appear as one primary interaction and one supporting signal per viewport. Canary and Coral are semantic colors, not extra accents.

**The Contrast-Pair Rule.** Indigo is paired with Ivory; Canary is paired with Midnight; Coral is paired with Midnight. Never place Canary or Coral body text on Ivory.

## Typography

**Display Font:** Archivo Black (with Arial Black and Impact fallbacks)

**Body Font:** Source Sans 3 (with Helvetica Neue and Arial fallbacks)

**Label/Mono Font:** Source Sans 3 for interface labels; SFMono-Regular only for literal token values and code.

**Character:** Archivo Black has the force of an equipment label without relying on faux-terminal aesthetics. Source Sans 3 brings open counters and practical readability, keeping the interface human at text sizes.

### Hierarchy

- **Display** (400, `clamp(3.5rem, 8vw, 7rem)`, 0.92): One dominant statement per major page.
- **Headline** (400, `clamp(2.25rem, 5vw, 4.5rem)`, 0.98): Section-level arguments and case-study titles.
- **Title** (600, `clamp(1.5rem, 2.4vw, 2rem)`, 1.15): Project rows, roles, and component headings.
- **Body** (400, `1.0625rem`, 1.55): Explanations and narrative, capped at 65 characters per line.
- **Label** (600, `0.75rem`, 0.08em, uppercase): Navigation, coordinates, tags, and compact metadata.

**The Compressed-Top Rule.** Display text is tight and blunt; body text is relaxed. Never use display leading for paragraph copy.

**The Caps Rule.** Every uppercase label uses `0.08em` tracking. Body copy is never uppercase.

## Elevation

The system is flat by default. Depth comes from borders, color inversion, and rare hard-offset shadows during interaction; soft ambient shadows and glass surfaces are prohibited.

### Shadow Vocabulary

- **Tactile offset** (`4px 4px 0 #0c0326`): Hover feedback for bounded controls and selected specimens only.

**The Flat-at-Rest Rule.** If an element needs a shadow to be understandable before interaction, its border, hierarchy, or placement is wrong.

## Spacing

The spacing system uses a four-pixel base with named steps at `4`, `8`, `16`, `24`, `40`, `64`, and `96px`. Use `24–40px` inside bounded specimens, `64–96px` between major arguments, and smaller `4–16px` steps only for related labels, metadata, and inline controls. Vary vertical space to distinguish chapters from records; do not give every section identical padding.

## Layout

Wide compositions resolve to a visible twelve-column grid inside a ruled shell. Major arguments typically occupy eight columns with a four-column evidence rail. Section headers use a three-column coordinate field and nine-column content field. At compact widths, the grid resolves to four columns, navigation becomes a two-column index, detail cells stack, and the two edge columns of indexed project records remain visible. Content must never depend on horizontal scrolling.

## Components

### Buttons

- **Shape:** Square and exact (`0px` radius), at least `48px` tall.
- **Primary:** Bright Indigo fill, Ivory label, `14px 20px` padding, uppercase with `0.08em` tracking.
- **Hover / Focus:** Shift to Midnight Violet and move up `2px`; use a Canary focus ring with `3px` width and `3px` offset.
- **Secondary:** Ivory fill, Midnight border and label; hover inverts both foreground and background.
- **Text action:** Underlined Midnight label with a directional arrow; never styled as a second primary button.

### Chips

- **Style:** Square, transparent, one-pixel Midnight border, uppercase label.
- **State:** Selected chips use Canary with Midnight text; tags remain unfilled.

### Cards / Containers

- **Corner Style:** Square (`0px`).
- **Background:** Ivory or Ivory Surface only.
- **Shadow Strategy:** Flat at rest; no shadow on informational containers.
- **Border:** One-pixel Midnight rules define rows and sections.
- **Internal Padding:** Responsive `24px` to `40px`, aligned to the eight-pixel spacing system.

Project work uses full-width indexed records rather than a generic equal-card grid. Each record gives the project title its own parent header row, then places description and category in a ruled detail row beneath it.

### Inputs / Fields

- **Style:** Ivory Surface, one-pixel Midnight border, square shape, and `48px` minimum height.
- **Focus:** Three-pixel Bright Indigo outline with `3px` offset; border remains Midnight.
- **Error / Disabled:** Errors use a Coral border plus explicit text. Disabled controls reduce opacity and remove movement.

### Navigation

Navigation is a ruled horizontal index. Labels use the uppercase label style; active state uses a two-pixel Midnight underline and `aria-current`. On mobile, the navigation becomes a compact two-column index beneath the wordmark, never a hidden hamburger by default.

### Indexed Project Row

The signature portfolio component is a three-tier ruled record framed by two full-height edge columns. The index column spans the title, detail, and media rows on the left; the directional arrow column spans all three rows on the right. Between them, the large project title occupies its own header row, followed by a wide description column and narrower category column, then a full-width project media highlight. The complete media cell, including its caption, is capped at two row units: `264px` on desktop and `224px` on mobile. The image fills the remaining space with `object-fit: cover`, and its caption sits in a separate row rather than over the image. On mobile, the center detail columns stack while both edge columns remain intact. Hover inverts the complete record to Midnight and keeps all text at equal or higher contrast.

The category cell carries the project's only persistent color signal. Creative tools use Canary with Midnight text, product engineering uses Bright Indigo with Ivory text, and product design uses Coral with Midnight text. This mapping keeps color tied to information rather than decoration while preserving the title and description as a stable reading plane.

### GitHub Contribution Ticker

The Individual Contributor section uses a full-width, Midnight-inverted ticker to turn verified public GitHub activity into a concise proof signal. Each statistic is a fixed-width ruled cell with a display value and two-part metadata label. Values are always presented as a dated snapshot with a direct source link; never imply that embedded values update live.

Motion is a constant-speed, transform-only GSAP loop at `48px/s` with `ease: none`. The track duplicates one complete statistic set for a seamless join, rebuilds when its measured width changes, pauses while off-screen, hovered, focused, or hidden in a background tab, and becomes a manually scrollable static row when reduced motion is requested or JavaScript is unavailable.

## Motion

Use `140ms cubic-bezier(0.22, 1, 0.36, 1)` for direct hover and press feedback and up to `220ms` for larger navigation or panel changes. Animate only transforms, opacity, color, border, and shadow. Standard controls may rise by `2px` on hover and settle by `1px` on active. Do not use bounce, elastic easing, or motion that competes with reading. Honor `prefers-reduced-motion` by removing automatic movement and smooth scrolling.

## Voice

Write like an experienced operator documenting useful work: direct, concrete, and human. Lead with the constraint, decision, or outcome that matters. Prefer plain verbs such as build, connect, measure, ship, and operate. Keep headings blunt and compact; keep body copy in sentence case. Avoid empty technical theater, unsupported claims, inflated adjectives, and invented metrics.

## Anti-patterns

- Rounded cards, pills, glass surfaces, soft ambient shadows, and decorative gradients.
- Equal-card feature grids when a ruled index or editorial sequence communicates hierarchy better.
- Colored side stripes, gradient text, decorative terminal prompts, and meaningless coordinates.
- Multiple solid calls to action for one goal in a viewport.
- Canary or Coral paragraph text on Ivory, or state changes that reduce contrast.
- Undated public metrics, implied live data, fabricated outcomes, and placeholder project content.
- Oversized display type that crowds its column, hidden mobile navigation, or horizontal overflow.

## Do's and Don'ts

### Do:

- **Do** use Ivory as the dominant background and Midnight Violet for primary type and structural rules.
- **Do** align page regions to a 12-column desktop grid and a four-column mobile grid.
- **Do** keep one primary-styled action per viewport and render other paths as borders or text links.
- **Do** preserve 44px minimum targets, visible focus rings, reduced-motion support, and semantic HTML.
- **Do** let real project constraints and decisions carry the portfolio's authority.
- **Do** date public activity snapshots and link directly to their source.

### Don't:

- **Don't** use chaotic brutalism that mistakes disruption for hierarchy.
- **Don't** use generic SaaS polish built from rounded cards, soft gradients, and interchangeable marketing patterns.
- **Don't** use terminal cosplay or decorative technical language that is not supported by the content.
- **Don't** use Bright Indigo more than twice in a single viewport.
- **Don't** use a colored side stripe, gradient text, glassmorphism, or soft ambient shadows.
- **Don't** use Canary Yellow or Vibrant Coral for paragraph text on Ivory.
