import Link from "next/link";
import { type NavCopy } from "@/content/types/nav";
import { htmlLang, otherLocale, type Locale } from "@/i18n/locales";

type Props = { locale: Locale; nav: NavCopy; href: string; className?: string };

/** Link to the same page in the other language, labelled with that language's short code. */
export function LanguageSwitch({ locale, nav, href, className = "" }: Props) {
  return (
    <Link
      href={href}
      hrefLang={htmlLang[otherLocale(locale)]}
      lang={htmlLang[otherLocale(locale)]}
      aria-label={nav.switchLanguage}
      title={nav.switchLanguage}
      className={`rounded-full border border-rail px-3 py-1.5 font-mono text-xs leading-none text-ink-soft transition-colors duration-300 hover:border-accent hover:text-ink ${className}`}
    >
      {nav.switchLanguageShort}
    </Link>
  );
}
