# AGENTS.md — Pablo Felipe's portfolio

Guidance for AI coding agents (and humans) working on this repo. Read it before changing anything.

## What this is

A static, bilingual (EN + PT-BR) portfolio for Pablo Felipe, live at https://pablofelps.vercel.app. Every page is
prerendered at build time; there is no backend, no database and no form. Analytics is Vercel Web Analytics:
cookieless, no personal data, served from this origin, and only rendered on Vercel. The one dynamic part is the
Writing list, which the server fetches from DEV's public API and Vercel refreshes once a day (ISR).

The visual design comes from an approved Claude Design session (Turn 3, "content + colour pass"): an editorial
dark layout with serif display type, a warm taupe accent and numbered sections ("01 — About").

## Rules (non-negotiable)

- **Copy lives in `src/content`, never in components.** A component receives its strings as props.
- **Both languages, always.** Any copy change lands in `copy/en` and `copy/pt` in the same commit. `npm test` fails
  when the two differ in shape, when their numbers differ, or when an id in `data/` has no copy.
- **English is the source of truth for facts.** Every number, name and claim in PT-BR matches EN, in Brazilian
  format (0,1 ms; 270.000; 1,7–2,2×).
- **Only claims Pablo can back up.** Project numbers come from each project's own README/docs; work history from
  his LinkedIn. If a fact isn't in a source, ask instead of writing it.
- **Design tokens only.** Use the colour and font names defined in `src/app/globals.css` (`canvas`, `surface`,
  `ink`, `muted`, `accent`, `accent-soft`, `font-serif`…). No raw hex values or default Tailwind hues in components.
- **Contact is LinkedIn only.** No email address, no form, anywhere on the site.
- **No project screenshots.** Projects are presented in type only, in the site's own visual language; the hero
  photo and the GitHub avatar are the only images. Share images (`opengraph-image.tsx` next to each page, drawn by
  `lib/og`) are type-only too, generated at build time in the site's tokens and fonts.
- **No third-party requests from the visitor's browser.** Fonts are self-hosted via Fontsource, and the GitHub avatar
  goes through Next's image optimizer, so it's served from this origin. The Content-Security-Policy
  (`lib/securityHeaders.ts`) enforces it: a new origin needs a deliberate change there. Server-side fetches (only DEV,
  today) validate the response with Zod and fall back to local data.
- **Every hover effect that moves something uses a transform**, never padding or margin, so text never re-wraps.

## Map

```
src/
  app/
    globals.css            design tokens (@theme) + base styles — the only place colours and fonts are defined
    (en)/                  English root layout: /, /projects/[slug]
    (pt)/pt-br/            Portuguese root layout: /pt-br, /pt-br/projects/[slug]
    sitemap.ts, robots.ts
  components/
    ui/                    primitives: Container, SectionLabel, Display (serif + italic accent), UnderlineLink,
                           Chip, ToolIcon (tool logos), ExternalLink (always use it for target="_blank")
    layout/                RootShell (<html lang>), SiteHeader, MobileMenu (client), LanguageSwitch, SiteFooter
    home/                  one component per home section + HomePage, which composes them in `homeSections` order
    case-study/            CaseStudyPage + CaseStudyBlocks: one generic page for every project
  content/
    sections.ts            home section order; the "01 —" numbers are derived from it
    data/                  language-independent facts: site links, stack, projects, journey, posts
    types/                 one copy type per section; `types/index.ts` aggregates them into `Dictionary`
    copy/en, copy/pt       one file per section; `index.ts` assembles the `Dictionary` for that language
      caseStudies/         one file per project + `index.ts` with the labels shared by every case study
    content.test.ts        EN/PT parity, numbers, sentence length, PT-BR playbook terms, copy for every id
  i18n/                    locales, paths (homePath, projectPath, sectionHref), date formatting
  lib/                     page metadata (hreflang, Open Graph), case study lookup and the [slug] route factory,
                           devArticles (DEV feed: Zod validation, daily refresh, fallback), securityHeaders (CSP)
    og/                    share images: renderer, fonts (.woff from Fontsource), colour tokens mirrored from
                           globals.css (a test keeps them equal), and the per-locale factories the routes re-export
public/images/             the hero photo
```

## How to…

- **Add a featured project:** add its slug to `projectSlugs` and an entry to `featuredProjects` in
  `content/data/projects.ts`. Then, in both languages, add `work.featured[slug]` (tagline, description, part, fact)
  and a case study in `copy/<locale>/caseStudies/<name>.ts`, registered in that folder's `index.ts`. The types
  require all of it; the page at `/projects/<slug>` and its sitemap entry are generated.
- **Write a case study:** sections are lists of blocks — `paragraph`, `list`, `table` (first column is the row
  label) or `entries` (name + body). Every fact needs a source in the project's own repo; link to it under `more`.
- **Add a journey item:** `content/data/journey.ts` (oldest first; omit `to` for the current role; `kind` is one of
  technical, internship, degree, extension, fullTime), then `journey.items[id]` in both languages. The desktop
  timeline shows two rows of four; keep the count a multiple of 4 or adjust `rows` in `Journey.tsx`.
- **Add a tool to the stack:** `content/data/stack.ts`, in the group it belongs to; give it a logo in
  `components/ui/ToolIcon.tsx` (react-icons `si` set) or it falls back to a neutral glyph.
- **Add a post:** nothing to do. Articles come from DEV (`lib/devArticles.ts`) and appear within a day. Refresh
  `fallbackPosts` in `content/data/writing.ts` now and then; it's only used when DEV can't be reached.
- **Add a home section:** create `components/home/<Name>.tsx`, its copy type in `content/types/`, copy in both
  locales, register it in `types/index.ts` and both `copy/*/index.ts`, add its id to `content/sections.ts` and to
  the `sections` map in `HomePage.tsx`.
- **Add a page:** add a path helper to `i18n/routes.ts`, create the route file under both `(en)` and `(pt)/pt-br`,
  use `pageMetadata()` for metadata, add an `opengraph-image.tsx` beside it (a factory in `lib/og/routes.tsx`), and
  add it to `app/sitemap.ts`.
- **Change a colour token:** update `src/app/globals.css` and the same value in `lib/og/tokens.ts`; the test fails
  until both match.

## PT-BR voice

Follows Pablo's PT-BR Writing Playbook (Obsidian vault, `_Playbooks/PT-BR Writing Playbook.md`). In short:

- Written as a Brazilian engineer would say it, from the meaning, not sentence by sentence. "Você"; imperative in UI.
- Short sentences (one idea each, ~16 words on average, never over 40), active voice, every claim says why.
- No marketing words. "Para", not "pra". Headings are nouns, not English "-ing" forms.
- Glossary: training → **treinamento** (never "treino"); held-out / dev set → **conjunto de teste / de
  desenvolvimento**; measurement bar → **critério de aprovação**; ship / don't-ship call → **decidir o que entra ou
  não no app**; small model → **modelo pequeno**; AI models → **modelos de IA**; heuristics → **regras
  heurísticas**; engine → **engine**; open-weight → **open weight**; run (code) → **executar**, never "rodar".
- Stay in English: build, commit, deploy, diff, spec, skill, prompt, pipeline, README, app, link, download,
  local-first, trade-off, open source.
- `content.test.ts` greps the playbook's banned terms; add new ones there when the playbook grows.

## Commands

```bash
npm run dev          # http://localhost:3000
npm run check        # format:check + lint + typecheck + test — run before every commit
npm run build        # production build; every page must stay static (○ or ●); the home pages show "1d"
npm run format       # Prettier (sorts Tailwind classes too)
npm run version:list # every version and the commit that made it
```

## Dependencies

- Node.js: `.nvmrc` pins 26 (current LTS, Vercel's default); `engines` accepts 24+.
- Dependabot opens a grouped minor/patch pull request every Monday; CI must pass before merging.
- Held back on purpose: **ESLint 10** (eslint-plugin-react, -import and -jsx-a11y inside eslint-config-next don't
  support it yet) and **TypeScript 7** (typescript-eslint supports up to 6.0). Revisit when those ship support.
- `overrides.@typescript-eslint/typescript-estree.minimatch` in `package.json` patches a dev-only advisory
  (GHSA-g3hv-75wg-m249). Remove it once typescript-eslint depends on minimatch 11.

## Commits

Conventional Commits with a scope (`feat(work): …`, `fix(i18n): …`, `docs(agents): …`), one change per commit, each
commit building and passing `npm run check`, with the docs it affects updated in the same commit. Commits go
straight to `master`, under `PabloFLPs <pablofelipe1999@hotmail.com>`, like Pablo's other repos; Husky runs
lint-staged on commit and commitlint on the message.

## Versioning (since 2026-11-12)

Same scheme as Marksage. The version comes from the git history (`scripts/version.ts`): `feat` → minor, `fix` /
`perf` → patch, other types don't change it; majors only at the commits in `MAJORS`, the portfolio's generations
(1.x is the separate My-Portfolio-Page repo, 2.x the 2022 Create React App site, 3.x this rebuild). For every
commit: `npm run version:next -- "<the commit message>"` before committing (writes `package.json`,
`package-lock.json`'s two version fields and `CHANGELOG.md`; include them in the commit), then
`npm run version:check` after it; CI runs the check too. Git tags only for the generations (`v2.0.0`, `v3.0.0`) and
versions shown publicly (annotated; Pablo pushes them with `git push --tags`).

## Never

- Hard-code user-facing text in a component, or change one language without the other.
- Add a dependency for something a few lines of code can do, or a runtime call to a third-party service.
- Add project screenshots, an email address or a contact form.
- Invent metrics, roles or dates. Mark anything uncertain and ask.
- Push. Pablo reviews and pushes himself.
