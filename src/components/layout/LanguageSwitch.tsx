import Link from "next/link";
import { type NavCopy } from "@/content/types/nav";
import { htmlLang, otherLocale, type Locale } from "@/i18n/locales";

type Props = { locale: Locale; nav: NavCopy; href: string; className?: string };

/**
 * Link to the same page in the other language, labelled with that language's short code. Screen readers hear the code
 * and then the full label, so the accessible name starts with what's on screen (WCAG 2.5.3, label in name).
 */
export function LanguageSwitch({ locale, nav, href, className = "" }: Props) {
  return (
    <Link
      href={href}
      hrefLang={htmlLang[otherLocale(locale)]}
      lang={htmlLang[otherLocale(locale)]}
      title={nav.switchLanguage}
      className={`rounded-full border border-rail px-3 py-1.5 font-mono text-xs leading-none text-ink-soft transition-colors duration-300 hover:border-accent hover:text-ink ${className}`}
    >
      {nav.switchLanguageShort}
      <span className="sr-only">: {nav.switchLanguage}</span>
    </Link>
  );
}
