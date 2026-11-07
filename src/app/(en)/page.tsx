import { HomePage } from "@/components/home/HomePage";
import { getDictionary } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("home", "en", getDictionary("en").meta);

export default function Page() {
  return <HomePage locale="en" />;
}
