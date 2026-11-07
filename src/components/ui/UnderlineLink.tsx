import Link from "next/link";
import { type ReactNode } from "react";
import { ExternalLink } from "./ExternalLink";

type Props = { href: string; children: ReactNode; external?: boolean; className?: string };

const style =
  "inline-flex items-baseline gap-1 border-b border-accent pb-1 font-medium transition-colors duration-300 hover:text-accent-soft";

/** Text link with the design's taupe underline; external ones get the ↗ arrow. */
export function UnderlineLink({ href, children, external = false, className = "" }: Props) {
  if (external) {
    return (
      <ExternalLink href={href} className={`${style} ${className}`}>
        {children} <span aria-hidden="true">↗</span>
      </ExternalLink>
    );
  }
  return (
    <Link href={href} className={`${style} ${className}`}>
      {children}
    </Link>
  );
}
