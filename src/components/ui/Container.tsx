import { type ReactNode } from "react";

/** The page's horizontal frame: 24 px gutters on phones, 80 px from tablets up, 1280 px wide at most. */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1280px] px-6 md:px-20 ${className}`}>{children}</div>;
}
