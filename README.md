# Stonewall on Stonewall

A one-page event site for **Stonewall on Stonewall** — a neighborhood block party reclaiming the name "Stonewall Avenue" to commemorate the Stonewall Uprising.

Built with Next.js (static export) + Chakra UI, with all copy editable through [Decap CMS](https://decapcms.org/docs).

## Commands

```bash
npm install
npm run dev      # dev server at http://localhost:3000
npm run build    # static export to /out
npm run lint     # ESLint
```

## Editing content

All site copy lives in `content/` and is editable two ways:

1. **Directly** — edit the Markdown / YAML / JSON files in `content/`.
2. **Through the CMS** — visit `/admin` on the deployed site (see setup below).

| Section / setting | File |
| --- | --- |
| Site title, tagline, email, social text | `content/settings/site.json` |
| Hero (title, date, location, intro, button) | `content/pages/home/sections/hero.md` |
| Parade callout | `content/pages/home/sections/parade.md` |
| Schedule of events | `content/pages/home/schedule.yml` |
| About / history | `content/pages/home/sections/about.md` |
| Performers & voices | `content/pages/home/lineup.json` |
| Community partners | `content/pages/home/partners.json` |
| Get involved | `content/pages/home/sections/get-involved.md` |

Images uploaded through the CMS land in `public/images/uploads/`.

## CMS setup (for deployment)

The CMS uses the **git-gateway** backend, which is wired up by Netlify Identity:

1. Deploy this repo (Netlify works out of the box; the build command is
   `npm run build` and the publish directory is `out`).
2. In Netlify, enable **Identity** and **Git Gateway**.
3. Invite yourself as a user. Logging in at `/admin` then lets you edit content,
   which commits changes back to the repo and triggers a rebuild.

### Editing the CMS locally (no Netlify)

```bash
npx decap-server          # in one terminal
# uncomment `local_backend: true` in public/admin/config.yml
npm run dev               # in another terminal, then open /admin
```

## Project layout

- `src/pages/` — Next.js pages (`index.tsx` assembles the section components).
- `src/sections/` — one folder per page section; each imports its own content.
- `src/layouts/` — shared layout + footer.
- `src/theme/` — Chakra theme; brand colors live in `src/theme/colors.ts`.
- `public/admin/` — Decap CMS (`index.html` + `config.yml`).
