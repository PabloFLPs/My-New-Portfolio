import { type WorkCopy } from "@/content/types/work";

export const work: WorkCopy = {
  label: "Projects",
  heading: { text: "Selected", accent: "work" },
  partLabel: "My part:",
  kinds: { caseStudy: "Case study", code: "Code", live: "Live" },
  featured: {
    marksage: {
      description:
        "A local-first Markdown editor that suggests fixes as you write: rules plus two 385 KB models trained for it, running in the browser. Your files never leave it.",
      part: "Solo project · product, models, measurement and code",
      visualAlt: "Marksage's editor suggesting a language for a code block",
    },
    zollama: {
      description:
        "A typed SDK for structured output from AI models, local-first through Ollama or with any major provider. Model output is treated like an untrusted HTTP body: a Zod schema is the contract, and failures are repaired or retried.",
      part: "Author and maintainer · open source",
      visualAlt: "Zollama example: a Zod schema and a typed generate() call",
    },
    loreforge: {
      description:
        "An AI-first tabletop RPG platform: campaign worlds, story graphs and live multiplayer sessions on tactical maps, with a copilot that remembers the whole campaign.",
      part: "Author · from the grid engine to the AI copilot",
      visualAlt: "Loreforge's line-of-sight function",
    },
    "route-flyover-studio": {
      description:
        "Turns a GPS activity file into a cinematic 9:16 flyover video with an animated stats HUD. Parsing, 3D map rendering and MP4 encoding all run in the browser.",
      part: "Author · rebuilt a prototype into a full app",
      visualAlt: "Route Flyover Studio: cinematic flyover videos from GPS activities",
    },
  },
  moreTitle: "Earlier projects",
  more: {
    diversight: { description: "Back-end for a diversity analytics product, ioasys CAMP 2021" },
    "send-email-api": { description: "Email API behind my first portfolio's contact form" },
    pokedex: { description: "Every Pokémon, searchable, via PokéAPI" },
    podcastr: { description: "Podcast player, Rocketseat NLW 5" },
    letmeask: { description: "Live Q&A rooms, Rocketseat NLW 6" },
    ignite: { description: "Game discovery with RAWG.io" },
  },
};
