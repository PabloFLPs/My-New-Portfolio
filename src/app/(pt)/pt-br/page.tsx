import { HomePage } from "@/components/home/HomePage";
import { getDictionary } from "@/content";
import { homePath, localized } from "@/i18n/routes";
import { pageMetadata } from "@/lib/metadata";

/** Refresh the DEV article list daily (ISR). Must be a literal; a test keeps it equal to POSTS_REVALIDATE_SECONDS. */
export const revalidate = 86400;

export const metadata = pageMetadata(localized(homePath), "pt", getDictionary("pt").meta);

export default function Page() {
  return <HomePage locale="pt" />;
}
