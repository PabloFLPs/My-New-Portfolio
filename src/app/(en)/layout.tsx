import { type ReactNode } from "react";
import { RootShell } from "@/components/layout/RootShell";

export { viewport } from "@/lib/metadata";

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <RootShell locale="en">{children}</RootShell>;
}
