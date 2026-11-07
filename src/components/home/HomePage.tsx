import { Fragment, type ReactNode } from "react";
import { getDictionary } from "@/content";
import { homeSections, type HomeSectionId } from "@/content/sections";
import { otherLocale, type Locale } from "@/i18n/locales";
import { homePath, projectPath, sectionHref } from "@/i18n/routes";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { About } from "./About";
import { AiWorkflow } from "./AiWorkflow";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { Journey } from "./Journey";
import { SelectedWork } from "./SelectedWork";
import { Writing } from "./Writing";

export function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  const sections: Record<HomeSectionId, ReactNode> = {
    about: <About about={t.about} />,
    ai: <AiWorkflow ai={t.ai} caseStudyHref={projectPath("marksage", locale)} />,
    work: <SelectedWork work={t.work} locale={locale} />,
    journey: <Journey journey={t.journey} />,
    writing: <Writing writing={t.writing} locale={locale} />,
    contact: <Contact contact={t.contact} />,
  };

  const header = (
    <SiteHeader locale={locale} nav={t.nav} alternatePath={homePath(otherLocale(locale))} onHome />
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
