# Rhonen portfolio

Joel Rhine's portfolio, rebuilt as a static-first Astro site.

## Stack

- Astro 5 with strict TypeScript
- Tailwind CSS 4 via the Vite plugin
- Typed local content collections
- Vitest schema tests and post-build public contract checks
- GitHub Actions CI

## Development

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Run every quality gate:

```sh
pnpm check
```

The production build is emitted to `dist/`. The site is fully static and requires no runtime environment variables or client-side framework JavaScript.

## Deployment

GitHub Actions publishes `dist/` to GitHub Pages at <https://rhon3n.github.io>. Production deployment is triggered by pushes to `master`; do not use a manual deployment command in the normal workflow.
