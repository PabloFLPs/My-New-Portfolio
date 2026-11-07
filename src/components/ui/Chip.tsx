import { ExternalLink } from "./ExternalLink";

/** Rounded pill linking to a tool's site. */
export function Chip({ name, href }: { name: string; href: string }) {
  return (
    <ExternalLink
      href={href}
      className="inline-flex items-center rounded-full border border-line-strong px-3 py-[7px] text-[13px] font-medium transition-colors duration-300 hover:border-accent hover:text-ink md:px-3.5 md:py-2 md:text-sm"
    >
      {name}
    </ExternalLink>
  );
}
