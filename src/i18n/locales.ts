export const locales = ["en", "pt"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Value for `<html lang>` and hreflang. */
export const htmlLang: Record<Locale, string> = { en: "en", pt: "pt-BR" };

/** Value for Open Graph `og:locale`. */
export const ogLocale: Record<Locale, string> = { en: "en_US", pt: "pt_BR" };

/** Intl locale for dates and numbers. */
export const intlLocale: Record<Locale, string> = { en: "en-US", pt: "pt-BR" };

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "pt" : "en";
}
