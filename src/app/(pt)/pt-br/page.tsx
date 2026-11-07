import { HomePage } from "@/components/home/HomePage";
import { getDictionary } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("home", "pt", getDictionary("pt").meta);

export default function Page() {
  return <HomePage locale="pt" />;
}
