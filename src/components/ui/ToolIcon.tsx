import { type IconType } from "react-icons";
import { LuTerminal } from "react-icons/lu";
import {
  SiGooglebigquery,
  SiClaude,
  SiCursor,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGithubactions,
  SiKubernetes,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOllama,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiZod,
} from "react-icons/si";

const icons: Record<string, IconType> = {
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Express: SiExpress,
  "Tailwind CSS": SiTailwindcss,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Prisma: SiPrisma,
  Firestore: SiFirebase,
  BigQuery: SiGooglebigquery,
  Cursor: SiCursor,
  Claude: SiClaude,
  Ollama: SiOllama,
  Zod: SiZod,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  "GitHub Actions": SiGithubactions,
  Vercel: SiVercel,
};

/** Monochrome logo for a tool, inheriting the text colour; a neutral glyph when there's no logo. */
export function ToolIcon({ name, className = "" }: { name: string; className?: string }) {
  const Icon = icons[name] ?? LuTerminal;
  return <Icon className={className} aria-hidden="true" />;
}
