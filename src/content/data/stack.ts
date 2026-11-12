export type StackItem = { name: string; href: string };

/** Grouped by the kind of work, not by layer: the AI tooling sits next to the code it helps write. */
export type StackGroupId = "build" | "data" | "ai" | "ship";

export const stack: { id: StackGroupId; items: StackItem[] }[] = [
  {
    id: "build",
    items: [
      { name: "TypeScript", href: "https://www.typescriptlang.org/" },
      { name: "Node.js", href: "https://nodejs.org/" },
      { name: "React", href: "https://react.dev/" },
      { name: "Next.js", href: "https://nextjs.org/" },
      { name: "Express", href: "https://expressjs.com/" },
      { name: "Tailwind CSS", href: "https://tailwindcss.com/" },
    ],
  },
  {
    id: "data",
    items: [
      { name: "PostgreSQL", href: "https://www.postgresql.org/" },
      { name: "MySQL", href: "https://www.mysql.com/" },
      { name: "Prisma", href: "https://www.prisma.io/" },
      { name: "Firestore", href: "https://firebase.google.com/docs/firestore" },
      { name: "BigQuery", href: "https://cloud.google.com/bigquery" },
    ],
  },
  {
    id: "ai",
    items: [
      { name: "Cursor", href: "https://cursor.com/" },
      { name: "Codex", href: "https://openai.com/codex/" },
      { name: "Claude", href: "https://www.anthropic.com/claude" },
      { name: "Ollama", href: "https://ollama.com/" },
      { name: "Zod", href: "https://zod.dev/" },
    ],
  },
  {
    id: "ship",
    items: [
      { name: "Docker", href: "https://www.docker.com/" },
      { name: "Kubernetes", href: "https://kubernetes.io/" },
      { name: "GitHub Actions", href: "https://github.com/features/actions" },
      { name: "Vercel", href: "https://vercel.com/" },
    ],
  },
];
