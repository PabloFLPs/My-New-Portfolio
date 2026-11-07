import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import { getDictionary } from "@/content";
import { otherLocale, type Locale } from "@/i18n/locales";
import { routeFor, sectionHref } from "@/i18n/routes";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Container } from "@/components/ui/Container";
import { Display } from "@/components/ui/Display";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { UnderlineLink } from "@/components/ui/UnderlineLink";

const marksage = {
  live: "https://marksage.vercel.app",
  repo: "https://github.com/PabloFLPs/Marksage",
  story: "https://marksage.vercel.app/#story",
  models: {
    en: "https://github.com/PabloFLPs/Marksage/blob/main/docs/MODELS.md",
    pt: "https://github.com/PabloFLPs/Marksage/blob/main/docs/MODELS.pt-BR.md",
  },
} as const;

/** One editorial row: heading on the left, body on the right (stacked on phones). */
function Row({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="grid gap-5 border-t border-line pt-10 md:grid-cols-[4fr_8fr] md:gap-16">
      <h2 className="font-serif text-[28px] leading-tight md:text-[34px]">{heading}</h2>
      <div className="flex flex-col gap-5">{children}</div>
    </section>
  );
}

export function MarksageCaseStudy({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const c = t.caseStudy;

  return (
    <>
      <SiteHeader
        locale={locale}
        nav={t.nav}
        alternatePath={routeFor("marksage", otherLocale(locale))}
        onHome={false}
      />
      <main>
        <article>
          <Container className="flex flex-col gap-6 pt-8 md:gap-9 md:pt-16">
            <Link
              href={sectionHref(locale, "work", false)}
              className="self-start font-mono text-xs leading-none text-muted transition-colors hover:text-accent-soft md:text-[13px]"
            >
              <span aria-hidden="true">←</span> {c.back}
            </Link>
            <SectionLabel>{c.eyebrow}</SectionLabel>
            <Display
              heading={c.heading}
              as="h1"
              className="text-[52px] leading-[0.95] tracking-[-0.03em] md:text-[104px]"
            />
            <p className="max-w-[640px] text-lg leading-[1.6] text-ink-soft md:text-xl">{c.lead}</p>
            <div className="flex flex-wrap items-center gap-6">
              <ExternalLink
                href={marksage.live}
                className="rounded bg-button px-7 py-4 text-base font-semibold text-canvas transition-opacity duration-300 hover:opacity-85"
              >
                {c.tryIt} <span aria-hidden="true">↗</span>
              </ExternalLink>
              <UnderlineLink href={marksage.repo} external>
                {c.readCode}
              </UnderlineLink>
            </div>

            <div className="relative mt-6 aspect-[1200/630] overflow-hidden rounded bg-surface md:mt-10">
              <Image
                src="/images/projects/marksage-og.jpg"
                alt={c.imageAlt}
                fill
                priority
                sizes="(min-width: 1280px) 1120px, 100vw"
                className="object-contain"
              />
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-b border-line pb-12 md:grid-cols-4 md:pb-16">
              {c.facts.map((fact) => (
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
            {c.sections.map((section) => (
              <Row key={section.heading} heading={section.heading}>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-[1.65] text-muted md:text-lg">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="flex flex-col gap-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-base leading-[1.55] text-ink-soft">
                        <span className="text-accent" aria-hidden="true">
                          —
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Row>
            ))}

            <Row heading={c.results.heading}>
              <p className="text-base leading-[1.65] text-muted md:text-lg">{c.results.intro}</p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[30rem] text-left">
                  <thead className="font-mono text-[11px] tracking-[0.06em] text-faint uppercase">
                    <tr className="border-b border-line">
                      <th scope="col" className="py-3 pr-4 font-normal">
                        {c.results.columns.engine}
                      </th>
                      <th scope="col" className="py-3 pr-4 text-right font-normal">
                        {c.results.columns.accuracy}
                      </th>
                      <th scope="col" className="py-3 pr-4 text-right font-normal">
                        {c.results.columns.shown}
                      </th>
                      <th scope="col" className="py-3 text-right font-normal">
                        {c.results.columns.precision}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.results.rows.map((row) => (
                      <tr
                        key={row.engine}
                        className={`border-b border-line ${row.shipped ? "text-ink" : "text-muted"}`}
                      >
                        <th scope="row" className="py-4 pr-4 text-left font-serif text-xl font-normal">
                          {row.engine}
                        </th>
                        <td className="py-4 pr-4 text-right font-mono text-sm tabular-nums">
                          {row.accuracy}
                        </td>
                        <td className="py-4 pr-4 text-right font-mono text-sm tabular-nums">{row.shown}</td>
                        <td className="py-4 text-right font-mono text-sm tabular-nums">{row.precision}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-base leading-[1.65] text-muted">{c.results.note}</p>
            </Row>

            <Row heading={c.notShipped.heading}>
              <ul className="flex flex-col border-b border-line">
                {c.notShipped.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col gap-2 border-t border-line py-5 first:border-t-0 first:pt-0"
                  >
                    <p className="font-serif text-[22px] leading-[1.2]">{item.name}</p>
                    <p className="text-[15px] leading-[1.6] text-muted">{item.verdict}</p>
                  </li>
                ))}
              </ul>
            </Row>

            <Row heading={c.lessons.heading}>
              <ol className="flex flex-col gap-5">
                {c.lessons.items.map((lesson, index) => (
                  <li key={lesson} className="grid grid-cols-[40px_1fr] gap-2">
                    <span className="pt-1.5 font-mono text-xs leading-none text-faint">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-[22px] leading-[1.3] md:text-2xl">{lesson}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 border-l border-accent pl-5 font-serif text-lg leading-normal text-accent-soft italic">
                {c.credit}
              </p>
            </Row>

            <Row heading={c.more.heading}>
              <p className="text-base leading-[1.65] text-muted md:text-lg">{c.more.body}</p>
              <div className="flex flex-wrap gap-6">
                <UnderlineLink href={marksage.models[locale]} external className="text-[15px] text-ink-soft">
                  {c.more.modelsLink}
                </UnderlineLink>
                <UnderlineLink href={marksage.story} external className="text-[15px] text-ink-soft">
                  {c.more.storyLink}
                </UnderlineLink>
              </div>
            </Row>
          </Container>
        </article>
      </main>
      <SiteFooter footer={t.footer} />
    </>
  );
}
