import { Fragment, type ReactNode } from "react";
import { getDictionary } from "@/content";
import { homeSections, type HomeSectionId } from "@/content/sections";
import { otherLocale, type Locale } from "@/i18n/locales";
import { routeFor, sectionHref } from "@/i18n/routes";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { About } from "./About";
import { Hero } from "./Hero";

export function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  const sections: Record<HomeSectionId, ReactNode> = {
    about: <About about={t.about} />,
  };

  const header = (
    <SiteHeader locale={locale} nav={t.nav} alternatePath={routeFor("home", otherLocale(locale))} onHome />
  );

  return (
    <>
      <main>
        <Hero hero={t.hero} header={header} workHref={sectionHref(locale, "work", true)} />
        {homeSections.map((id) => (
          <Fragment key={id}>{sections[id]}</Fragment>
        ))}
      </main>
      <SiteFooter footer={t.footer} />
    </>
  );
}
