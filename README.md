# Pablo Felipe — portfolio

My personal site, live at **[pablofelps.vercel.app](https://pablofelps.vercel.app)**, in English and Brazilian
Portuguese ([/pt-br](https://pablofelps.vercel.app/pt-br)).

It started in 2022 as a Create React App project. This version rebuilds it on the current stack, with the design
approved in a Claude Design session: an editorial dark layout, serif display type and numbered sections. Projects,
work history and writing are up to date, plus a section on how I work with AI and a case study for
[Marksage](https://github.com/PabloFLPs/Marksage).

## Stack

- **Next.js 16** (App Router; every page prerendered as static HTML)
- **React 19**, **TypeScript** (strict)
- **Tailwind CSS 4**, with the design tokens in `src/app/globals.css`
- **Newsreader**, **Hanken Grotesk** and **JetBrains Mono**, self-hosted via Fontsource
- **Vitest** for content and helper tests; **ESLint**, **Prettier**, **Husky**, **commitlint**

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # format, lint, typecheck and tests
npm run build
```

Node 20.9 or newer (`.nvmrc` pins 22).

## How it's organized

Copy and data live in `src/content`, separate from the components that render them:

- `content/data/` — facts that don't change with the language: links, stack, projects, journey, posts
- `content/copy/en`, `content/copy/pt` — every piece of text, one file per section, typed by `content/types/`
- `components/home/` — one component per home section, composed in the order set by `content/sections.ts`

Tests keep both languages in sync: same shape, same numbers, no missing copy. The full map and conventions are in
[AGENTS.md](AGENTS.md), written for AI agents and humans alike.

## Deploy

Vercel, with the **Next.js** framework preset and default build settings. No environment variables.
