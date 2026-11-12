export const projectSlugs = ["marksage", "zollama", "loreforge", "route-flyover-studio"] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

export type FeaturedProject = {
  slug: ProjectSlug;
  name: string;
  stack: string[];
  links: { repo: string; live?: string };
};

export type OtherProject = { slug: string; name: string; stack: string[]; href: string };

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "marksage",
    name: "Marksage",
    stack: ["React", "TypeScript", "Vite", "In-browser ML"],
    links: { repo: "https://github.com/PabloFLPs/Marksage", live: "https://marksage.vercel.app" },
  },
  {
    slug: "zollama",
    name: "Zollama",
    stack: ["TypeScript", "Zod", "Ollama"],
    links: { repo: "https://github.com/PabloFLPs/Zollama" },
  },
  {
    slug: "loreforge",
    name: "Loreforge",
    stack: ["Next.js", "React", "Prisma", "Socket.IO"],
    links: { repo: "https://github.com/PabloFLPs/loreforge" },
  },
  {
    slug: "route-flyover-studio",
    name: "Route Flyover Studio",
    stack: ["Next.js", "TypeScript", "MapLibre GL", "WebCodecs"],
    links: { repo: "https://github.com/PabloFLPs/activies-flyover-studio" },
  },
];

export function getFeaturedProject(slug: ProjectSlug): FeaturedProject {
  const project = featuredProjects.find((p) => p.slug === slug);
  if (!project) throw new Error(`Unknown project: ${slug}`);
  return project;
}

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
