import Link from "next/link";
import { type ReactNode } from "react";
import { getDictionary } from "@/content";
import { getFeaturedProject, type ProjectSlug } from "@/content/data/projects";
import { otherLocale, type Locale } from "@/i18n/locales";
import { projectPath, sectionHref } from "@/i18n/routes";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Container } from "@/components/ui/Container";
import { Display } from "@/components/ui/Display";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { UnderlineLink } from "@/components/ui/UnderlineLink";
import { CaseStudyBlocks } from "./CaseStudyBlocks";

/** One editorial row: heading on the left, body on the right (stacked on phones). */
function Row({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="grid gap-5 border-t border-line pt-10 md:grid-cols-[4fr_8fr] md:gap-16">
      <h2 className="font-serif text-[28px] leading-tight md:text-[34px]">{heading}</h2>
      <div className="flex flex-col gap-5">{children}</div>
    </section>
  );
}

/** A project's case study, built entirely from its copy in `content/copy/<locale>/caseStudies`. */
export function CaseStudyPage({ locale, slug }: { locale: Locale; slug: ProjectSlug }) {
  const t = getDictionary(locale);
  const labels = t.caseStudies.labels;
  const study = t.caseStudies.studies[slug];
  if (!study) return null;
  const project = getFeaturedProject(slug);

  return (
    <>
      <SiteHeader
        locale={locale}
        nav={t.nav}
        alternatePath={projectPath(slug, otherLocale(locale))}
        onHome={false}
      />
      <main>
        <article>
          <Container className="flex flex-col gap-6 pt-8 md:gap-9 md:pt-16">
            <Link
              href={sectionHref(locale, "work", false)}
              className="self-start font-mono text-xs leading-none text-muted transition-colors hover:text-accent-soft md:text-[13px]"
            >
              <span aria-hidden="true">←</span> {labels.back}
            </Link>
            <SectionLabel>{study.eyebrow}</SectionLabel>
            <Display
              heading={study.heading}
              as="h1"
              className="text-[52px] leading-[0.95] tracking-[-0.03em] md:text-[104px]"
            />
            <p className="max-w-[640px] text-lg leading-[1.6] text-ink-soft md:text-xl">{study.lead}</p>
            <div className="flex flex-wrap items-center gap-6">
              {project.links.live ? (
                <ExternalLink
                  href={project.links.live}
                  className="rounded bg-button px-7 py-4 text-base font-semibold text-canvas transition-opacity duration-300 hover:opacity-85"
                >
                  {labels.tryIt} <span aria-hidden="true">↗</span>
                </ExternalLink>
              ) : null}
              <UnderlineLink href={project.links.repo} external>
                {labels.readCode}
              </UnderlineLink>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-10 md:mt-10 md:grid-cols-4 md:pt-14">
              {study.facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-2">
                  <dt className="text-sm leading-snug text-muted">{fact.label}</dt>
                  <dd className="order-first font-serif text-[40px] leading-none tracking-[-0.02em] md:text-5xl">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>

          <Container className="flex flex-col gap-14 py-14 md:gap-20 md:py-24">
            {study.sections.map((section) => (
              <Row key={section.heading} heading={section.heading}>
                <CaseStudyBlocks blocks={section.blocks} />
              </Row>
            ))}

            <Row heading={labels.lessons}>
              <ol className="flex flex-col gap-5">
                {study.lessons.map((lesson, index) => (
                  <li key={lesson} className="grid grid-cols-[40px_1fr] gap-2">
                    <span className="pt-1.5 font-mono text-xs leading-none text-faint">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-[22px] leading-[1.3] md:text-2xl">{lesson}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 border-l border-accent pl-5 font-serif text-lg leading-normal text-accent-soft italic">
                {study.credit}
              </p>
            </Row>

            <Row heading={labels.more}>
              <p className="text-base leading-[1.65] text-muted md:text-lg">{study.more.body}</p>
              <div className="flex flex-wrap gap-6">
                {study.more.links.map((link) => (
                  <UnderlineLink
                    key={link.href}
                    href={link.href}
                    external
                    className="text-[15px] text-ink-soft"
                  >
                    {link.label}
                  </UnderlineLink>
                ))}
              </div>
            </Row>
          </Container>
        </article>
      </main>
      <SiteFooter footer={t.footer} />
    </>
  );
}
