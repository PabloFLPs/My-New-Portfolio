import { intlLocale, type Locale } from "./locales";

/** "Jun 25, 2026" / "25 de jun. de 2026" from an ISO date (YYYY-MM-DD). */
export function formatDate(isoDate: string, locale: Locale): string {
  return new Intl.DateTimeFormat(intlLocale[locale], {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}
