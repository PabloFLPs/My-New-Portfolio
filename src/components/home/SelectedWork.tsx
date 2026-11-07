import Link from "next/link";
import { type ReactNode } from "react";
import { type WorkCopy } from "@/content/types/work";
import { featuredProjects, otherProjects, type FeaturedProject } from "@/content/data/projects";
import { sectionNumber } from "@/content/sections";
import { type Locale } from "@/i18n/locales";
import { projectPath } from "@/i18n/routes";
import { caseStudySlugs } from "@/lib/caseStudies";
import { Container } from "@/components/ui/Container";
import { Display } from "@/components/ui/Display";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { SectionLabel } from "@/components/ui/SectionLabel";

type CardLinkProps = { project: FeaturedProject; locale: Locale; hasCaseStudy: boolean; children: ReactNode };

/** The whole card links to the project's case study, or to its repository until it has one. */
function CardLink({ project, locale, hasCaseStudy, children }: CardLinkProps) {
  const className = "group flex h-full flex-col gap-4 border-t border-line pt-6 md:pt-8";
  if (hasCaseStudy) {
    return (
      <Link href={projectPath(project.slug, locale)} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <ExternalLink href={project.links.repo} className={className}>
      {children}
    </ExternalLink>
  );
}

/** Typographic project cards: no screenshots, so every project reads in the site's own visual language. */
export function SelectedWork({ work, locale }: { work: WorkCopy; locale: Locale }) {
  const withCaseStudy = new Set(caseStudySlugs());

  return (
    <section id="work" className="pb-14 md:pb-28">
      <Container className="flex flex-col gap-8 border-t border-line pt-14 md:gap-14 md:pt-28">
        <div className="flex flex-col-reverse gap-3 md:flex-row md:items-baseline md:justify-between">
          <Display
            heading={work.heading}
            className="text-[44px] leading-none tracking-[-0.02em] md:text-[64px]"
          />
          <SectionLabel>
            {sectionNumber("work")} — {work.label}
          </SectionLabel>
        </div>

        <ul className="grid gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-20">
          {featuredProjects.map((project, index) => {
            const copy = work.featured[project.slug];
            if (!copy) return null;
            const internal = withCaseStudy.has(project.slug);
            return (
              <li key={project.slug} className="min-w-0">
                <CardLink project={project} locale={locale} hasCaseStudy={internal}>
                  <div className="flex items-baseline justify-between gap-6 font-mono text-xs leading-none">
                    <span className="text-faint">{String(index + 1).padStart(2, "0")}</span>
                    <span className="whitespace-nowrap text-accent-soft transition-colors group-hover:text-ink">
                      {internal ? work.kinds.caseStudy : work.kinds.code}{" "}
                      <span
                        aria-hidden="true"
                        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                      >
                        {internal ? "→" : "↗"}
                      </span>
                    </span>
                  </div>
                  <h3 className="font-serif text-[40px] leading-none tracking-[-0.02em] transition-colors duration-300 group-hover:text-accent-soft md:text-[52px]">
                    {project.name}
                  </h3>
                  <p className="font-serif text-xl leading-snug text-accent-soft italic md:text-2xl">
                    {copy.tagline}
                  </p>
                  <p className="text-[15px] leading-[1.6] text-muted md:text-base">{copy.description}</p>
                  <p className="flex items-center gap-2.5 font-mono text-xs leading-normal text-ink-soft">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {copy.fact}
                  </p>
                  <p className="text-sm leading-normal text-ink-soft md:text-[15px]">
                    <span className="text-accent-soft">{work.partLabel}</span> {copy.part}
                  </p>
                  <p className="mt-auto font-mono text-xs leading-none tracking-[0.04em] text-faint uppercase">
                    {project.stack.join(" · ")}
                  </p>
                </CardLink>
              </li>
            );
          })}
        </ul>

        {/* Collapsed by default: there for the curious, out of the way for everyone else. */}
        <details className="group border-y border-line md:mt-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
            <span className="flex flex-col gap-1.5 md:flex-row md:items-baseline md:gap-4">
              <span className="text-[15px] text-ink-soft">
                {work.moreTitle}{" "}
                <span className="font-mono text-xs text-faint">· {otherProjects.length}</span>
              </span>
              <span className="font-mono text-xs text-faint">{work.moreHint}</span>
            </span>
            <span
              aria-hidden="true"
              className="font-mono text-lg leading-none text-accent-soft transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <ul className="flex flex-col pb-2">
            {otherProjects.map((project) => (
              <li key={project.slug} className="border-t border-line">
                <ExternalLink
                  href={project.href}
                  className="flex items-baseline justify-between gap-3 py-4 transition-[padding] duration-300 hover:text-ink md:grid md:grid-cols-[220px_1fr_240px_24px] md:gap-6 md:py-[18px] md:hover:pl-3"
                >
                  <span className="font-serif text-[19px] leading-[1.2] md:text-xl">{project.name}</span>
                  <span className="hidden text-[15px] text-muted md:block">
                    {work.more[project.slug]?.description}
                  </span>
                  <span className="text-right font-mono text-xs leading-[1.4] text-faint md:text-left">
                    {project.stack.join(" · ")}
                  </span>
                  <span className="hidden text-right text-accent-soft md:block" aria-hidden="true">
                    ↗
                  </span>
                </ExternalLink>
              </li>
            ))}
          </ul>
        </details>
      </Container>
    </section>
  );
}
