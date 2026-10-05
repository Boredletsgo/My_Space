# Mahima Sahu — Portfolio

Personal portfolio site built with **Vite + React 19 + TypeScript + Tailwind CSS v4**,
deployed to **GitHub Pages**.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
```

| Script              | Purpose                                         |
| ------------------- | ----------------------------------------------- |
| `npm run dev`       | Dev server with HMR                             |
| `npm run build`     | Type-check, bundle, emit `404.html`/`.nojekyll` |
| `npm run preview`   | Serve the production build locally              |
| `npm run lint`      | oxlint                                          |
| `npm run typecheck` | TypeScript only                                 |
| `npm run format`    | Prettier (+ Tailwind class sorting)             |

## Project structure

```
src/
  components/
    layout/      Navbar, Footer, Layout shell, theme toggle
    sections/    Home page sections (Hero, About, Experience, …)
    ui/          Reusable primitives (Section, Card, Badge, Button, Container)
  content/blog/  Markdown blog posts (the only place posts live)
  data/          Typed site content — edit here, not in components
  hooks/         useTheme, useActiveSection, usePageMeta
  lib/           blog loader, small utilities
  pages/         Route components (Home, BlogList, BlogPost, NotFound)
  types/         Shared content types
```

### The one rule that keeps this maintainable

**Components never hardcode content.** Everything renders from `src/data/*` and
`src/content/blog/*`, typed by `src/types/content.ts`. To update the site you edit data,
not JSX.

## Editing content

| What                                      | Where                           |
| ----------------------------------------- | ------------------------------- |
| Name, role, summary, socials, nav, resume | `src/data/site.ts`              |
| Work history                              | `src/data/experience.ts`        |
| Projects                                  | `src/data/projects.ts`          |
| Skill groups                              | `src/data/skills.ts`            |
| Education, certifications, publications   | `src/data/education.ts`         |
| Resume PDF                                | `public/Mahima_Sahu_Resume.pdf` |

### Adding a blog post

Drop a markdown file into `src/content/blog/` — it is picked up automatically, sorted by
date, and gets its own route at `/blog/<filename>`.

```markdown
---
title: My Post Title
description: One-line summary shown in the blog list.
date: 2026-04-01
tags: [Agentic AI, MCP]
---

Body content in markdown.
```

## Contact form

The form posts to [Formspree](https://formspree.io) when an id is configured, and falls
back to opening the visitor's mail client otherwise.

```bash
# .env.local
VITE_FORMSPREE_ID=xxxxxxxx
```

In CI, set the same value as a repository secret named `VITE_FORMSPREE_ID`.

## Deployment (GitHub Pages)

**Live site: <https://boredletsgo.github.io/My_Space/>**

`.github/workflows/deploy.yml` builds and publishes on every push to `main`, so
updating the site is just `git push` — the URL never changes.

One-time setup (already done for this repo):

1. Push the repository to GitHub.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions**. This step
   cannot be automated — `GITHUB_TOKEN` is not permitted to create a Pages site, so
   `configure-pages` with `enablement: true` fails with
   `Resource not accessible by integration`.
3. Push to `main`.

The workflow sets `VITE_BASE` automatically:

- `<user>.github.io` repo → base `/`
- any other repo → base `/<repo>/`

`scripts/postbuild.mjs` copies `index.html` to `404.html` so client-side routes such as
`/blog/my-post` survive a hard refresh, and writes `.nojekyll`.

### Custom domain

Add a `public/CNAME` file containing the domain, point a `CNAME` DNS record at
`boredletsgo.github.io`, then set the domain under **Settings → Pages**.

### Manual deploy

```bash
VITE_BASE=/<repo>/ npm run build
npx gh-pages -d dist --dotfiles
```

## Theming

The design is neo-brutalist: heavy `border-2 border-ink` outlines, hard offset shadows
(`shadow-hard` / `shadow-hard-lg`) and flat accent colours. All tokens live in the
`@theme` block of `src/index.css`:

| Token                                | Purpose                                   |
| ------------------------------------ | ----------------------------------------- |
| `--color-ink`                        | Outlines, shadows, body text              |
| `--color-canvas` / `--color-surface` | Page and card backgrounds                 |
| `--color-muted`                      | Secondary text                            |
| `--color-sun-*`                      | Yellow accent (eyebrows, active nav pill) |
| `--color-cobalt-*`                   | Blue accent (links, focus ring)           |
| `--color-coral-*`                    | Red accent (status pills, highlights)     |

Dark mode simply overrides `--color-ink`, `--color-canvas`, `--color-surface` and
`--color-muted` under `.dark`; because every border and shadow references `var(--color-ink)`,
the entire theme flips with those four lines. The mode is class-based, persisted in
`localStorage`, and applied before first paint by an inline script in `index.html` to
avoid a flash.
