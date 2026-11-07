# AGENTS.md — Pablo Felipe's portfolio

Guidance for AI coding agents (and humans) working on this repo. Read it before changing anything.

## What this is

A static, bilingual (EN + PT-BR) portfolio for Pablo Felipe, live at https://pablofelps.vercel.app. Every page is
prerendered at build time; there is no backend, no database, no analytics and no form.

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
- **Contact goes through LinkedIn first.** Email stays available, one step down. No contact form.
- **No third-party requests at runtime** besides the GitHub avatar. Fonts are self-hosted via Fontsource.

## Map

```
src/
  app/
    globals.css            design tokens (@theme) + base styles — the only place colours and fonts are defined
    (en)/                  English root layout: /, /projects/marksage
    (pt)/pt-br/            Portuguese root layout: /pt-br, /pt-br/projects/marksage
    sitemap.ts, robots.ts
  components/
    ui/                    primitives: Container, SectionLabel, Display (serif + italic accent), UnderlineLink,
                           Chip, ExternalLink (always use it for target="_blank")
    layout/                RootShell (<html lang>), SiteHeader, MobileMenu (client), LanguageSwitch, SiteFooter
    home/                  one component per home section + HomePage, which composes them in `homeSections` order
    case-study/            MarksageCaseStudy
  content/
    sections.ts            home section order; the "01 —" numbers are derived from it
    data/                  language-independent facts: site links, stack, projects, journey, posts
    types/                 one copy type per section; `types/index.ts` aggregates them into `Dictionary`
    copy/en, copy/pt       one file per section; `index.ts` assembles the `Dictionary` for that language
    content.test.ts        EN/PT parity, numbers, sentence length, PT-BR playbook terms
  i18n/                    locales, routes (every page × language), date formatting
  lib/                     page metadata (hreflang, Open Graph), the code-panel highlighter
public/images/             hero photo and project visuals (prepared at 4:3, so cards never crop them)
```

## How to…

- **Add or edit a featured project:** add it to `content/data/projects.ts` (slug, stack, href, a 4:3 visual), then
  add `work.featured[slug]` in both `copy/en/work.ts` and `copy/pt/work.ts`. Images go in `public/images/projects/`
  at exactly 4:3 — extend the canvas rather than crop.
- **Add a journey item:** `content/data/journey.ts` (oldest first; omit `to` for the current role), then
  `journey.items[id]` in both languages. The desktop timeline shows two rows of four; keep the count a multiple of 4
  or adjust `rows` in `Journey.tsx`.
- **Add a post:** `content/data/writing.ts`, newest first. Titles stay in the language they were published in.
- **Add a home section:** create `components/home/<Name>.tsx`, its copy type in `content/types/`, copy in both
  locales, register it in `types/index.ts` and both `copy/*/index.ts`, add its id to `content/sections.ts` and to
  the `sections` map in `HomePage.tsx`.
- **Add a page:** add it to `i18n/routes.ts` first, then create the route file under both `(en)` and `(pt)/pt-br`,
  using `pageMetadata()` for metadata. The sitemap picks it up from `routes`.

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
npm run build        # production build; every page must stay "○ (Static)"
npm run format       # Prettier (sorts Tailwind classes too)
```

## Commits

Conventional Commits with a scope (`feat(work): …`, `fix(i18n): …`, `docs(agents): …`), one change per commit, each
commit building and passing `npm run check`. Husky runs lint-staged on commit and commitlint on the message.

## Never

- Hard-code user-facing text in a component, or change one language without the other.
- Add a dependency for something a few lines of code can do, or a runtime call to a third-party service.
- Crop a project visual with `object-cover` on an image that isn't 4:3.
- Invent metrics, roles or dates. Mark anything uncertain and ask.
- Push. Pablo reviews and pushes himself.
