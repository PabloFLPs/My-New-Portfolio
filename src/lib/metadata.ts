import { type Metadata, type Viewport } from "next";
import { site } from "@/content/data/site";
import { type MetaCopy } from "@/content/types/shared";
import { htmlLang, locales, ogLocale, type Locale } from "@/i18n/locales";
import { type LocalizedPaths } from "@/i18n/routes";

/**
 * Title, description, canonical URL, hreflang alternates and social cards for one page. The card image comes from the
 * route's `opengraph-image.tsx` (see `lib/og`), which Next adds on its own.
 */
export function pageMetadata(paths: LocalizedPaths, locale: Locale, copy: MetaCopy): Metadata {
  const path = paths[locale];
  const languages = Object.fromEntries(locales.map((l) => [htmlLang[l], paths[l]]));

  return {
    metadataBase: new URL(site.url),
    title: copy.title,
    description: copy.description,
    alternates: { canonical: path, languages: { ...languages, "x-default": paths.en } },
    openGraph: {
      type: "website",
      url: path,
      siteName: site.name,
      title: copy.title,
      description: copy.description,
      locale: ogLocale[locale],
    },
    twitter: { card: "summary_large_image", title: copy.title, description: copy.description },
  };
}

export const viewport: Viewport = { themeColor: "#181719", colorScheme: "dark" };
