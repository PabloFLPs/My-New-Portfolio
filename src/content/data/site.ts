/** Facts about the site and its owner that don't change with the language. */
export const site = {
  name: "Pablo Felipe",
  url: "https://pablofelps.vercel.app",
  avatar: "https://avatars.githubusercontent.com/u/58035837?v=4",
  repo: "https://github.com/PabloFLPs/My-New-Portfolio",
  /** Username on DEV, where the Writing section's articles come from. */
  devUsername: "pablofelps",
  links: {
    linkedin: "https://www.linkedin.com/in/pablo-felipe-lnkdn/",
    github: "https://github.com/PabloFLPs",
    dev: "https://dev.to/pablofelps",
  },
} as const;

export type SocialId = keyof typeof site.links;

export const socials: { id: SocialId; name: string; href: string }[] = [
  { id: "linkedin", name: "LinkedIn", href: site.links.linkedin },
  { id: "github", name: "GitHub", href: site.links.github },
  { id: "dev", name: "DEV", href: site.links.dev },
];
