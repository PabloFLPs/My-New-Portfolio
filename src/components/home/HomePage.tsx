import { getDictionary } from "@/content";
import { otherLocale, type Locale } from "@/i18n/locales";
import { routeFor, sectionHref } from "@/i18n/routes";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "./Hero";

export function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  const header = (
    <SiteHeader locale={locale} nav={t.nav} alternatePath={routeFor("home", otherLocale(locale))} onHome />
  );

  return (
    <>
      <main>
        <Hero hero={t.hero} header={header} workHref={sectionHref(locale, "work", true)} />
      </main>
      <SiteFooter footer={t.footer} />
    </>
  );
}
