import { HomePage } from "@/components/home/HomePage";
import { getDictionary } from "@/content";
import { homePath, localized } from "@/i18n/routes";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(localized(homePath), "en", getDictionary("en").meta);

export default function Page() {
  return <HomePage locale="en" />;
}
