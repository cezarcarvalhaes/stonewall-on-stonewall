# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # static export (outputs to /out)
npm run lint     # ESLint
```

No test suite is configured.

## Architecture

A **Next.js 13 static-export site** (Pages Router, `output: 'export'`) for *Stonewall on
Stonewall*, a single-day neighborhood event reclaiming the name "Stonewall Avenue" in
commemoration of the Stonewall Uprising. It is a single scrolling landing page. Content is
managed via Decap CMS at `/admin`.

### Content pipeline

All site content lives in `content/` and is loaded at **build time** via webpack loaders
configured in `next.config.js`:
- `.md` files → `frontmatter-markdown-loader` (returns `{ attributes, html }`)
- `.yml` files → `yaml-loader` (returns the parsed object)
- `.json` files → native import

Each section component imports its own content file directly (no `getStaticProps` is needed
since everything is build-time static). Type declarations for `*.md` / `*.yml` imports live
in `src/globals.d.ts`.

### Pages and sections

`src/pages/index.tsx` assembles the section components in order and wraps them in
`RootLayout` (footer only). `src/pages/_app.tsx` provides the `ChakraProvider`, page `<Head>`
metadata (pulled from `content/settings/site.json`), and global styles.

`src/sections/` has one folder per section (hero, parade, schedule, about, lineup, partners,
get-involved). Adding a section = create `src/sections/<name>/index.tsx`, add its content file
under `content/`, import it in `index.tsx`, and (if it should be editable) add it to
`public/admin/config.yml`.

### CMS

`public/admin/config.yml` defines the Decap collections. Every editable content file has a
matching entry there — **keep field names in sync with the frontmatter/JSON/YAML keys** the
section components read. Backend is `git-gateway` (Netlify Identity). Media uploads go to
`public/images/uploads/`.

### Styling

**Chakra UI** is the primary styling system; Tailwind is available but rarely used. The theme
is in `src/theme/` — brand (pride-inspired) colors are in `src/theme/colors.ts`, type scale in
`globalStyles.ts`. Headings use the `BobbyJones` display font; body uses Roboto Condensed
(both loaded in `src/style/font.css`). Markdown bodies are rendered with
`dangerouslySetInnerHTML` and styled via the `.markdown` / `.markdown-subdued` classes in
`src/style/globals.css`.

### Path aliases (tsconfig.json)

- `@sections/*` → `src/sections/*`
- `@layouts/*` → `src/layouts/*`
- `@util/*` → `src/util/*`
- `@content/*` → `content/*`
- `@ui/*` → `src/ui/*`
