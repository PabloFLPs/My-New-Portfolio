export type StackItem = { name: string; href: string };

export const stack: Record<"frontEnd" | "backEnd", StackItem[]> = {
  frontEnd: [
    { name: "TypeScript", href: "https://www.typescriptlang.org/" },
    { name: "React", href: "https://react.dev/" },
    { name: "Next.js", href: "https://nextjs.org/" },
    { name: "Tailwind CSS", href: "https://tailwindcss.com/" },
  ],
  backEnd: [
    { name: "Node.js", href: "https://nodejs.org/" },
    { name: "Express", href: "https://expressjs.com/" },
    { name: "PostgreSQL", href: "https://www.postgresql.org/" },
    { name: "Prisma", href: "https://www.prisma.io/" },
    { name: "Firestore", href: "https://firebase.google.com/docs/firestore" },
    { name: "Zod", href: "https://zod.dev/" },
    { name: "Ollama", href: "https://ollama.com/" },
    { name: "Docker", href: "https://www.docker.com/" },
  ],
};
