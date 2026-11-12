import { type ReactNode } from "react";
import { RootShell } from "@/components/layout/RootShell";

export { viewport } from "@/lib/metadata";

export default function PortugueseLayout({ children }: { children: ReactNode }) {
  return <RootShell locale="pt">{children}</RootShell>;
}
