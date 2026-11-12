import { type CaseStudyCopy } from "@/content/types/caseStudy";

export const marksage: CaseStudyCopy = {
  meta: {
    title: "Marksage case study · Pablo Felipe",
    description:
      "How a Markdown previewer became an editor with its own machine-learning models, and why the most useful part of the story is what didn't ship.",
  },
  eyebrow: "Case study · Marksage",
  heading: { text: "The editor", accent: "that notices." },
  lead: "How a Markdown previewer became an editor with its own machine-learning models, and why the most useful part of the story is what didn't ship.",
  facts: [
    { value: "385 KB", label: "per model, downloaded once" },
    { value: "~0.1 ms", label: "per decision, in your browser" },
    { value: "1.7–2.2×", label: "the right code-language suggestions of the rules" },
    { value: "0", label: "bytes of your text sent anywhere" },
  ],
  sections: [
    {
      heading: "The problem",
      blocks: [
        {
          type: "paragraph",
          text: "Marksage started as a simple previewer. As it grew into an editor, I wanted it to notice things while you write: a code block with no language, a pasted table, a heading that is almost a heading.",
        },
        {
          type: "paragraph",
          text: "Hand-written rules handle part of it, and they're precise. But they stay quiet on about three code blocks in four, because writing a rule for every pattern of twenty languages never ends.",
        },
      ],
    },
    {
      heading: "The decision",
      blocks: [
        {
          type: "paragraph",
          text: "A conventional LLM would answer more, but it would mean hundreds of megabytes, a slow laptop, or sending people's documents to a server. The open-weight decision model I first planned around has 322–421 million parameters.",
        },
        {
          type: "paragraph",
          text: "So I trained my own: two small classifiers, one for the language of a code block and one for the type of a document section. About 262 thousand parameters each, over a thousand times smaller than that decision model, and they run entirely inside the page.",
        },
      ],
    },
    {
      heading: "How it was trained",
      blocks: [
        {
          type: "paragraph",
          text: "The code model learned from about 270,000 code blocks in 309 public repositories, labelled with the language their own authors tagged. Training runs in TypeScript with the same code the app uses to read snippets, so what the model saw in training is exactly what it sees in the editor.",
        },
        {
          type: "list",
          items: [
            "Repositories are split whole into training, development and test sets, so no project leaks into its own exam.",
            "Every setting is chosen on the development set. Each test set is run once, at the end.",
            "Confidence is calibrated, so “80% sure” really means right about eight times in ten.",
            "The bar a model must clear is written down before the run, not after.",
          ],
        },
      ],
    },
    {
      heading: "Results",
      blocks: [
        {
          type: "paragraph",
          text: "Measured once on 284 code blocks from 67 repositories that no model version and no tuning had ever touched:",
        },
        {
          type: "table",
          columns: ["Engine", "Accuracy", "Suggestions shown", "Right when shown"],
          rows: [
            { cells: ["Rules", "59%", "70", "93%"] },
            { cells: ["Model v1", "72%", "151", "88%"] },
            { cells: ["Model v2 (shipped)", "74%", "158", "92%"], highlight: true },
          ],
        },
        {
          type: "paragraph",
          text: "Across three test sets, that's 1.7 to 2.2 times the right suggestions of the rules, at about the same precision. It ships as an opt-in mode, because it downloads a file and its precision isn't yet clearly above the rules'.",
        },
      ],
    },
    {
      heading: "What didn't ship",
      blocks: [
        {
          type: "entries",
          items: [
            {
              name: "Structure hints model",
              body: "Met the bar by one line in 227 real lines from issues and pull requests. Not worth a download.",
            },
            {
              name: "Paste-type model",
              body: "90.9% right when shown, against 97.6% for the rules on 53 real pastes. The rules stayed.",
            },
            {
              name: "Code model v3 (mean + max pooling)",
              body: "Tried as a general fix for TypeScript vs JavaScript. It didn't help: most code tagged as TypeScript has no TypeScript-only syntax.",
            },
          ],
        },
      ],
    },
  ],
  lessons: [
    "Write the bar down before the experiment. It's the only way “not good enough” stays an honest answer.",
    "A small model that is measured beats a big model that is assumed.",
    "Failed experiments are worth documenting. The next attempt starts from the numbers, not from zero.",
  ],
  credit:
    "Built with AI assistance (Claude) for implementation and review. The architecture, the measurement bars and every ship / don't-ship call are mine.",
  more: {
    body: "Every model, test set and version is documented in the repository, written for readers with no machine-learning background.",
    links: [
      {
        label: "How the models work",
        href: "https://github.com/PabloFLPs/Marksage/blob/main/docs/MODELS.md",
      },
      { label: "The story in the app", href: "https://marksage.vercel.app/#story" },
    ],
  },
};
