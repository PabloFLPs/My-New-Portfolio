import { type WorkCopy } from "@/content/types/work";

export const work: WorkCopy = {
  label: "Projects",
  heading: { text: "Selected", accent: "work" },
  partLabel: "My part:",
  kinds: { caseStudy: "Case study", code: "Code", live: "Live" },
  featured: {
    marksage: {
      tagline: "The Markdown editor that notices.",
      description:
        "A local-first Markdown editor that suggests fixes as you write: rules plus two 385 KB models trained for it, running in the browser. Your files never leave it.",
      part: "Solo project · product, models, measurement and code",
      fact: "385 KB models · ~0.1 ms per decision",
    },
    zollama: {
      tagline: "Treat model output like an untrusted HTTP body.",
      description:
        "A typed SDK for structured output from AI models, local-first through Ollama or with any major provider. A Zod schema is the contract: output that breaks it is repaired or retried, never silently trusted.",
      part: "Author and maintainer · open source",
      fact: "2 runtime dependencies · 6 providers",
    },
    loreforge: {
      tagline: "Campaigns, maps and a copilot that remembers.",
      description:
        "An AI-first tabletop RPG platform: campaign worlds, story graphs and live multiplayer sessions on tactical maps, with a copilot that remembers the whole campaign.",
      part: "Author · from the grid engine to the AI copilot",
      fact: "346 tests · 1 grid engine on server and browser",
    },
    "route-flyover-studio": {
      tagline: "Your run, as a cinematic flyover.",
      description:
        "Turns a GPS activity file into a cinematic 9:16 flyover video with an animated stats HUD. Parsing, 3D map rendering and MP4 encoding all run in the browser.",
      part: "Author · rebuilt a prototype into a full app",
      fact: "1080 × 1920 MP4 · encoded in the browser",
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
