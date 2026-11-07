import { type Locale } from "./locales";

/** Path prefix of each language. English is the default and has none. */
const prefix: Record<Locale, string> = { en: "", pt: "/pt-br" };

/** A page's path in every language, for canonical URLs and hreflang alternates. */
export type LocalizedPaths = Record<Locale, string>;

export function homePath(locale: Locale): string {
  return prefix[locale] || "/";
}

export function projectPath(slug: string, locale: Locale): string {
  return `${prefix[locale]}/projects/${slug}`;
}

export function localized(pathFor: (locale: Locale) => string): LocalizedPaths {
  return { en: pathFor("en"), pt: pathFor("pt") };
}

/** Link to a section of the home page, from any page. */
export function sectionHref(locale: Locale, sectionId: string, fromHome: boolean): string {
  return fromHome ? `#${sectionId}` : `${prefix[locale]}/#${sectionId}`;
}
