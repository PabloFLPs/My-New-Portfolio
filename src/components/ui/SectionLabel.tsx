import { type ReactNode } from "react";

/** Mono kicker above a section: "01 — About". */
export function SectionLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`font-mono text-[11px] leading-none font-medium tracking-[0.08em] text-accent-soft uppercase md:text-[13px] ${className}`}
    >
      {children}
    </p>
  );
}
