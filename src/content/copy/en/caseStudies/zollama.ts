import { type CaseStudyCopy } from "@/content/types/caseStudy";

export const zollama: CaseStudyCopy = {
  meta: {
    title: "Zollama case study · Pablo Felipe",
    description:
      "A typed SDK for structured output from AI models, built on one rule: treat what a model returns like an HTTP body from a stranger.",
  },
  eyebrow: "Case study · Zollama",
  heading: { text: "Untrusted", accent: "by default." },
  lead: "A typed SDK for structured output from AI models, built on one rule: treat what a model returns like an HTTP body from a stranger.",
  facts: [
    { value: "4", label: "layers between the model and your code" },
    { value: "2", label: "runtime dependencies, for every provider" },
    { value: "6", label: "ways to run it, local or in the cloud" },
    { value: "7B", label: "the model size it was designed against" },
  ],
  sections: [
    {
      heading: "The problem",
      blocks: [
        {
          type: "paragraph",
          text: "Asking a model for JSON and calling JSON.parse works in a demo. On a small local model it breaks: stray markdown fences, wrong types, extra fields, and values that are valid but wrong.",
        },
        {
          type: "paragraph",
          text: "So anything that touches model output assumes it's untrusted, the same way a backend treats an inbound request.",
        },
      ],
    },
    {
      heading: "The design",
      blocks: [
        {
          type: "paragraph",
          text: "One Zod schema does double duty. It's sent to the model as JSON Schema to constrain what it can generate, and it validates whatever comes back. A caller gets either a fully typed value or a thrown error, never an unchecked any.",
        },
        {
          type: "list",
          items: [
            "Constrain: the schema goes to the provider's structured-output mode, so only matching JSON can be generated.",
            "Validate: safeParse against the same schema, plus deterministic checks for enums, references and fields that must agree.",
            "Repair: fix mechanical slips, like a number sent as a string, without spending another model call.",
            "Retry: feed the exact validation error back to the model, which corrects itself well even at 7B.",
          ],
        },
      ],
    },
    {
      heading: "Providers",
      blocks: [
        {
          type: "paragraph",
          text: "It runs locally through Ollama or LM Studio, or in the cloud with OpenAI, Claude, Gemini and any OpenAI-compatible endpoint. Each provider implements structured output differently, so each one is a small transport behind the same interface.",
        },
        {
          type: "paragraph",
          text: "Every transport calls its provider's HTTP API with plain fetch. The whole library has two runtime dependencies, zod and zod-to-json-schema, however many providers it supports.",
        },
      ],
    },
    {
      heading: "Decisions, and what was left out",
      blocks: [
        {
          type: "entries",
          items: [
            {
              name: "Validation gates, evaluation measures",
              body: "Deterministic checks decide at runtime. A graded LLM judge only runs offline, over a dataset, so no model is trusted to check another model in the request path.",
            },
            {
              name: "Temperature 0 by default",
              body: "Structured tasks want the most likely answer, reproducibly. It also makes retries converge faster.",
            },
            {
              name: "Not streamed, not on npm yet",
              body: "Streaming would complicate the rule that a result only resolves once it validates. And the API isn't stable yet, which private: true says honestly.",
            },
            {
              name: "Cloud transports tested against mocks",
              body: "Every transport has tests against mocked HTTP. The cloud ones still need a smoke test against the live APIs.",
            },
          ],
        },
      ],
    },
  ],
  lessons: [
    "Treat model output like any untrusted input: define the contract once, enforce it at the boundary, keep a deterministic way to recover.",
    "Building against a 7B model teaches the discipline that a frontier model lets you skip.",
    "Name what you left out, so it reads as a decision and not as a gap.",
  ],
  credit:
    "Built with AI assistance for implementation and review, in the workflow described under “How I work”. The design decisions on this page are mine.",
  more: {
    body: "Every decision is written down with when you'd choose differently, in the design playbook.",
    links: [
      { label: "The design playbook", href: "https://github.com/PabloFLPs/Zollama/blob/main/PLAYBOOK.md" },
      {
        label: "How each provider works",
        href: "https://github.com/PabloFLPs/Zollama/blob/main/docs/PROVIDERS.md",
      },
    ],
  },
};
