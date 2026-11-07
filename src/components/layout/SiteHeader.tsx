import Link from "next/link";
import { type NavCopy } from "@/content/types/nav";
import { homeSections } from "@/content/sections";
import { type Locale } from "@/i18n/locales";
import { routeFor, sectionHref } from "@/i18n/routes";
import { LanguageSwitch } from "./LanguageSwitch";
import { MobileMenu } from "./MobileMenu";

type Props = {
  locale: Locale;
  nav: NavCopy;
  /** The same page in the other language. */
  alternatePath: string;
  /** Section links are in-page anchors on the home page, and full links elsewhere. */
  onHome: boolean;
};

export type NavLink = { href: string; label: string };

export function SiteHeader({ locale, nav, alternatePath, onHome }: Props) {
  const links: NavLink[] = (Object.keys(nav.links) as (keyof NavCopy["links"])[])
    .filter((id) => (homeSections as readonly string[]).includes(id))
    .map((id) => ({ href: sectionHref(locale, id, onHome), label: nav.links[id] }));

  return (
    <header className="relative z-20">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 md:px-20 md:py-7"
      >
        <Link
          href={routeFor("home", locale)}
          className="font-serif text-xl leading-none font-medium italic md:text-2xl"
        >
          Pablo Felipe
        </Link>

        <div className="hidden items-center gap-9 text-[15px] text-ink-soft md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b border-transparent pb-1 transition-colors duration-300 hover:border-accent hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitch locale={locale} nav={nav} href={alternatePath} />
        </div>

        <MobileMenu locale={locale} nav={nav} links={links} alternatePath={alternatePath} />
      </nav>
    </header>
  );
}
