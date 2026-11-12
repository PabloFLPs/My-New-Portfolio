import { ExternalLink } from "./ExternalLink";
import { ToolIcon } from "./ToolIcon";

/** Rounded pill with the tool's logo, linking to its site. */
export function Chip({ name, href }: { name: string; href: string }) {
  return (
    <ExternalLink
      href={href}
      className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-3 py-[7px] text-[13px] font-medium transition-colors duration-300 hover:border-accent hover:text-ink md:px-3.5 md:py-2 md:text-sm"
    >
      <ToolIcon
        name={name}
        className="h-3.5 w-3.5 text-muted transition-colors duration-300 group-hover:text-ink md:h-4 md:w-4"
      />
      {name}
    </ExternalLink>
  );
}
