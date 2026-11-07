import { type CaseStudyCopy } from "@/content/types/caseStudy";

export const loreforge: CaseStudyCopy = {
  meta: {
    title: "Loreforge case study · Pablo Felipe",
    description:
      "An AI-first tabletop RPG platform with live multiplayer tactical maps, where the server keeps the rules and the AI only suggests.",
  },
  eyebrow: "Case study · Loreforge",
  heading: { text: "The server", accent: "keeps the rules." },
  lead: "An AI-first tabletop RPG platform: campaign worlds, story graphs and live multiplayer sessions on tactical maps, with a copilot that remembers the campaign and never changes it on its own.",
  facts: [
    { value: "346", label: "tests, with no database or network" },
    { value: "1", label: "grid engine, shared by server and browser" },
    { value: "3", label: "fog states: unexplored, explored, visible" },
    { value: "0", label: "AI changes without the game master's accept" },
  ],
  sections: [
    {
      heading: "The problem",
      blocks: [
        {
          type: "paragraph",
          text: "Running a campaign online asks for three things at once: a map everyone shares, rules nobody can bend from their own browser, and a memory of everything that happened at the table.",
        },
      ],
    },
    {
      heading: "One engine, two places",
      blocks: [
        {
          type: "paragraph",
          text: "The tactical rules are pure functions in one module: grid, pathfinding, line of sight, fog and area templates. The Socket.IO server and the browser run the same code, so the move a player previews is the move the server will accept.",
        },
        {
          type: "list",
          items: [
            "Every move runs the same pipeline: validate, persist, broadcast, recompute what the party sees, and store the newly explored tiles.",
            "Explored tiles are stored; what the party sees right now is always recomputed. So an old row can never leak a token's live position.",
            "The isometric view is a projection of the same square grid, not a second engine.",
            "Tokens are real buttons over the canvas, so the map works with a keyboard and a screen reader.",
          ],
        },
      ],
    },
    {
      heading: "The copilot",
      blocks: [
        {
          type: "paragraph",
          text: "The copilot reads the campaign timeline, open quests and the last recap to prepare sessions and suggest NPCs, quests and story beats. It never writes to the database: it returns validated suggestions, and the game master accepts, edits or dismisses each one.",
        },
        {
          type: "paragraph",
          text: "Players get their own copilot, with a context built for them. Secrets, GM-only content and places they haven't found are removed before the model sees anything, and “your party hasn't learned that” is a valid answer.",
        },
      ],
    },
    {
      heading: "Decisions",
      blocks: [
        {
          type: "entries",
          items: [
            {
              name: "Canvas2D, not PixiJS",
              body: "A few thousand flat tiles don't need a WebGL scene graph. Layering the renderer that already existed was the smaller change with the smaller bundle.",
            },
            {
              name: "Campaign memory is events, not recaps",
              body: "A typed timeline is the source of truth. Recaps, by hand or by the AI, are summaries of it.",
            },
            {
              name: "Combat state lives on the server",
              body: "Clients render one broadcast of the full state, so there's one source of truth and nothing to drift.",
            },
            {
              name: "Runs offline by default",
              body: "A deterministic mock provider answers when no model is configured, which keeps demos reproducible and tests stable.",
            },
          ],
        },
      ],
    },
  ],
  lessons: [
    "Put the rules in pure functions first. The server, the interface and the tests all reuse them.",
    "Let the AI propose and a person accept. It keeps the copilot useful without trusting it with the data.",
    "Write down why a decision was made, especially when the code used to contradict it.",
  ],
  credit:
    "Built with AI assistance for implementation and review, in the workflow described under “How I work”. The design decisions on this page are mine.",
  more: {
    body: "How the app is put together, and every notable trade-off, is documented in the repository.",
    links: [
      { label: "Architecture", href: "https://github.com/PabloFLPs/loreforge/blob/main/ARCHITECTURE.md" },
      { label: "Decisions", href: "https://github.com/PabloFLPs/loreforge/blob/main/DECISIONS.md" },
    ],
  },
};
