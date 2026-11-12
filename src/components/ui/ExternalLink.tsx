import { type AnchorHTMLAttributes } from "react";

/** A link that opens in a new tab without giving the target page access to this one. */
export function ExternalLink(props: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}
