# Pablo Felipe — portfolio

My personal site, live at **[pablofelps.vercel.app](https://pablofelps.vercel.app)**, in English and Brazilian
Portuguese ([/pt-br](https://pablofelps.vercel.app/pt-br)).

It started in 2022 as a Create React App project. This version rebuilds it on the current stack, with the design
approved in a Claude Design session: an editorial dark layout, serif display type and numbered sections. Projects,
work history and writing are up to date, plus a section on how I work with AI and a case study for each featured
project: [Marksage](https://github.com/PabloFLPs/Marksage), [Zollama](https://github.com/PabloFLPs/Zollama),
[Loreforge](https://github.com/PabloFLPs/loreforge) and
[Route Flyover Studio](https://github.com/PabloFLPs/activies-flyover-studio).

## Stack

- **Next.js 16** (App Router; every page prerendered as static HTML)
- **React 19**, **TypeScript** (strict)
- **Tailwind CSS 4**, with the design tokens in `src/app/globals.css`
- **Newsreader**, **Hanken Grotesk** and **JetBrains Mono**, self-hosted via Fontsource
- **Zod** to validate the DEV articles feed, refreshed daily with ISR
- **next/og** for share images, one per page and language, drawn at build time in the site's own type
- **Vercel Web Analytics**, cookieless (enable it in the project's Analytics tab)
- **Vitest** for content and helper tests; **ESLint**, **Prettier**, **Husky**, **commitlint**; **Dependabot**

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # format, lint, typecheck and tests
npm run build
```

Node 24 or newer; `.nvmrc` pins 26, the current LTS and Vercel's default.

## How it's organized

Copy and data live in `src/content`, separate from the components that render them:

- `content/data/` — facts that don't change with the language: links, stack, projects, journey, posts
- `content/copy/en`, `content/copy/pt` — every piece of text, one file per section, typed by `content/types/`
- `components/home/` — one component per home section, composed in the order set by `content/sections.ts`
- `components/case-study/` — one generic page, `/projects/[slug]`, built from each project's case study copy

Tests keep both languages in sync: same shape, same numbers, no missing copy. The full map and conventions are in
[AGENTS.md](AGENTS.md), written for AI agents and humans alike.

## Versions

The version is computed from the git history, the same way as in Marksage: `feat` → minor, `fix` → patch, and a
major for each generation of the portfolio. See [CHANGELOG.md](CHANGELOG.md) or run `npm run version:list`.

## Deploy

Vercel, with the **Next.js** framework preset and default build settings, on Node.js 26. No environment variables.
New DEV articles appear on the site within a day without a deploy.
