import { type AiCopy } from "@/content/types/ai";

export const ai: AiCopy = {
  label: "How I work",
  heading: { text: "A team,", accent: "not a tool." },
  intro:
    "Everyone has three AI tools. What makes them useful is giving each one a role, the way you'd structure a team: one writes, a different one reviews, and a memory keeps the context so no session starts from zero.",
  roles: [
    {
      kicker: "implementer",
      title: "Writes the code",
      tools: "Cursor",
      body: "Driven by versioned skills tuned to the stack: spec-writer turns an informal ticket into a spec, and debug-helper and code-reviewer keep the loop honest.",
    },
    {
      kicker: "reviewer",
      title: "Reviews every diff",
      tools: "Codex",
      body: "A different model, on purpose: the one that wrote the code shouldn't be the one grading it.",
    },
    {
      kicker: "memory",
      title: "Keeps the context",
      tools: "Claude + Obsidian",
      body: "A structured vault of skills, playbooks and project notes that feeds context back into every session. When sources disagree, code beats tests, tests beat specs, and everything beats an AI summary.",
    },
  ],
  loopTitle: "The loop, for every non-trivial change",
  loop: [
    {
      step: "Spec",
      body: "Goal, constraints, edge cases and acceptance criteria before any code. A constraints audit checks what the project already has configured.",
    },
    { step: "Plan", body: "The AI proposes an approach; I approve it or send it back." },
    { step: "Generate", body: "The implementer writes the code against the spec, not against a guess." },
    {
      step: "Critique",
      body: "Models defend their own code, so self-review isn't enough. A checklist looks for fabricated references, tests that don't test and happy-path-only logic.",
    },
    {
      step: "Test",
      body: "Edge cases from the spec become tests that would fail without the implementation.",
    },
    {
      step: "Refine",
      body: "Iterate until it holds, then fix the spec or the skill that let the problem through.",
    },
  ],
  ownershipTitle: "What stays with me",
  ownership: [
    "The architecture and its trade-offs.",
    "The bar a result must clear, written down before the run.",
    "Every ship / don't-ship call.",
    "Reading the diff before it's committed.",
  ],
  example: {
    label: "in practice · Marksage",
    title: "A bar written down before the run",
    body: [
      "Marksage is my Markdown editor. Its assistant suggests fixes as you write, and I trained small models to help it.",
      "Before each training run, I wrote down what a model had to do to earn a place in the app: do better than the hand-written rules, on repositories it had never seen.",
      "Two models earned it and shipped. Three stayed out:",
    ],
    outcomes: [
      "Structure hints met the bar by one line in 227. Not worth a download.",
      "Paste types were less precise than the rules, so the rules stayed.",
      "A third version of the code model didn't fix what it was built for.",
    ],
    link: "Read the Marksage case study",
  },
  articleLink: "The long version, on DEV",
};
