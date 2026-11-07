import { type RouteName } from "@/i18n/routes";

/** What the project card links to, and the word shown next to its name ("Code ↗", "Case study ↗"). */
export type ProjectKind = "caseStudy" | "code" | "live";

export type ProjectVisual =
  | { type: "image"; src: string; width: number; height: number }
  | { type: "code"; language: "ts"; file: string; code: string };

export type FeaturedProject = {
  slug: string;
  name: string;
  kind: ProjectKind;
  /** Internal page for case studies; external URL otherwise. */
  href: { route: RouteName } | { url: string };
  stack: string[];
  visual: ProjectVisual;
};

export type OtherProject = { slug: string; name: string; stack: string[]; href: string };

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "marksage",
    name: "Marksage",
    kind: "caseStudy",
    href: { route: "marksage" },
    stack: ["React", "TypeScript", "Vite", "In-browser ML"],
    visual: { type: "image", src: "/images/projects/marksage-editor.jpg", width: 1600, height: 1200 },
  },
  {
    slug: "zollama",
    name: "Zollama",
    kind: "code",
    href: { url: "https://github.com/PabloFLPs/Zollama" },
    stack: ["TypeScript", "Zod", "Ollama"],
    visual: {
      type: "code",
      language: "ts",
      file: "example.ts",
      code: `const CommitSchema = z.object({
  type: z.enum(["feat", "fix", "chore", "docs", "refactor", "test"]),
  scope: z.string().nullable(),
  summary: z.string().max(72),
  breaking: z.boolean(),
});

const client = new Zollama();

const commit = await client.generate(
  CommitSchema,
  prompt\`
    Write a conventional-commit message for this diff:
    …
  \`,
);

// commit is fully typed as z.infer<typeof CommitSchema> — no casting.`,
    },
  },
  {
    slug: "loreforge",
    name: "Loreforge",
    kind: "code",
    href: { url: "https://github.com/PabloFLPs/loreforge" },
    stack: ["Next.js", "React", "Prisma", "Socket.IO"],
    visual: {
      type: "code",
      language: "ts",
      file: "tactics/lineOfSight.ts",
      code: `/**
 * Whether sight travels from \`a\` to \`b\` unobstructed.
 *
 * Bresenham walk; a diagonal step is only blocked when *both*
 * flanking tiles block vision, so a token can see past a
 * single wall corner.
 */
export function hasLineOfSight(map: TacticalMapState, a: Cell, b: Cell): boolean {
  if (a.x === b.x && a.y === b.y) return true;
  // …
    if (diagonal) {
      const sideA = { x: x0 + sx, y: y0 };
      const sideB = { x: x0, y: y0 + sy };
      if (blocksVisionAt(map, sideA) && blocksVisionAt(map, sideB)) return false;
    }
  // …
}`,
    },
  },
  {
    slug: "route-flyover-studio",
    name: "Route Flyover Studio",
    kind: "code",
    href: { url: "https://github.com/PabloFLPs/activies-flyover-studio" },
    stack: ["Next.js", "TypeScript", "MapLibre GL", "WebCodecs"],
    visual: { type: "image", src: "/images/projects/route-flyover-studio.jpg", width: 1200, height: 900 },
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
