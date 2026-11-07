import { type RouteName } from "@/i18n/routes";

/** What the project card links to, and the word shown next to its name ("Code ↗", "Case study ↗"). */
export type ProjectKind = "caseStudy" | "code" | "live";

export type FeaturedProject = {
  slug: string;
  name: string;
  kind: ProjectKind;
  /** Internal page for case studies; external URL otherwise. */
  href: { route: RouteName } | { url: string };
  stack: string[];
};

export type OtherProject = { slug: string; name: string; stack: string[]; href: string };

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "marksage",
    name: "Marksage",
    kind: "caseStudy",
    href: { route: "marksage" },
    stack: ["React", "TypeScript", "Vite", "In-browser ML"],
  },
  {
    slug: "zollama",
    name: "Zollama",
    kind: "code",
    href: { url: "https://github.com/PabloFLPs/Zollama" },
    stack: ["TypeScript", "Zod", "Ollama"],
  },
  {
    slug: "loreforge",
    name: "Loreforge",
    kind: "code",
    href: { url: "https://github.com/PabloFLPs/loreforge" },
    stack: ["Next.js", "React", "Prisma", "Socket.IO"],
  },
  {
    slug: "route-flyover-studio",
    name: "Route Flyover Studio",
    kind: "code",
    href: { url: "https://github.com/PabloFLPs/activies-flyover-studio" },
    stack: ["Next.js", "TypeScript", "MapLibre GL", "WebCodecs"],
  },
];

export const otherProjects: OtherProject[] = [
  {
    slug: "diversight",
    name: "Diversight",
    stack: ["Node.js", "Sequelize", "Postgres"],
    href: "https://github.com/PabloFLPs/ioasys-CAMP-2021-diversight",
  },
  {
    slug: "send-email-api",
    name: "Send Email API",
    stack: ["Node.js", "Nodemailer"],
    href: "https://github.com/PabloFLPs/Send-Email-API",
  },
  {
    slug: "pokedex",
    name: "Pokédex",
    stack: ["Next.js", "Tailwind"],
    href: "https://github.com/PabloFLPs/NextJS-PokeAPI-And-Tailwind",
  },
  {
    slug: "podcastr",
    name: "Podcastr",
    stack: ["Next.js", "Sass"],
    href: "https://github.com/PabloFLPs/Podcastr-NextJS",
  },
  {
    slug: "letmeask",
    name: "LetMeAsk",
    stack: ["React", "Firebase"],
    href: "https://github.com/PabloFLPs/Rocketseat-NLW6-React",
  },
  {
    slug: "ignite",
    name: "Ignite Platform",
    stack: ["React", "Redux"],
    href: "https://github.com/PabloFLPs/Ignite-Redux-Project-Course",
  },
];
