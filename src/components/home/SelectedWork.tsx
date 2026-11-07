import Link from "next/link";
import { type ReactNode } from "react";
import { type WorkCopy } from "@/content/types/work";
import { featuredProjects, otherProjects, type FeaturedProject } from "@/content/data/projects";
import { sectionNumber } from "@/content/sections";
import { type Locale } from "@/i18n/locales";
import { routeFor } from "@/i18n/routes";
import { Container } from "@/components/ui/Container";
import { Display } from "@/components/ui/Display";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectVisual } from "./ProjectVisual";

function CardLink({
  project,
  locale,
  children,
}: {
  project: FeaturedProject;
  locale: Locale;
  children: ReactNode;
}) {
  const className = "group flex flex-col gap-3 md:gap-5";
  if ("route" in project.href) {
    return (
      <Link href={routeFor(project.href.route, locale)} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <ExternalLink href={project.href.url} className={className}>
      {children}
    </ExternalLink>
  );
}

export function SelectedWork({ work, locale }: { work: WorkCopy; locale: Locale }) {
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

        <ul className="grid gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-14">
          {featuredProjects.map((project) => {
            const copy = work.featured[project.slug];
            if (!copy) return null;
            const internal = "route" in project.href;
            return (
              <li key={project.slug} className="min-w-0">
                <CardLink project={project} locale={locale}>
                  <ProjectVisual visual={project.visual} alt={copy.visualAlt} />
                  <div className="flex items-baseline justify-between gap-6">
                    <h3 className="font-serif text-2xl leading-[1.15] md:text-[30px]">{project.name}</h3>
                    <span className="text-[13px] whitespace-nowrap text-accent-soft transition-colors group-hover:text-ink md:text-sm">
                      {work.kinds[project.kind]} <span aria-hidden="true">{internal ? "→" : "↗"}</span>
                    </span>
                  </div>
                  <p className="text-[15px] leading-[1.55] text-muted md:text-base md:leading-[1.6]">
                    {copy.description}
                  </p>
                  <p className="text-sm leading-normal text-ink-soft md:text-[15px]">
                    <span className="text-accent-soft">{work.partLabel}</span> {copy.part}
                  </p>
                  <p className="hidden font-mono text-xs leading-none tracking-[0.04em] text-faint uppercase md:block">
                    {project.stack.join(" · ")}
                  </p>
                </CardLink>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col gap-4 md:mt-6">
          <h3 className="text-sm text-muted">{work.moreTitle}</h3>
          <ul className="flex flex-col border-b border-line">
            {otherProjects.map((project) => (
              <li key={project.slug} className="border-t border-line">
                <ExternalLink
                  href={project.href}
                  className="flex items-baseline justify-between gap-3 py-4 transition-[padding] duration-300 hover:text-ink md:grid md:grid-cols-[220px_1fr_240px_24px] md:gap-6 md:py-[22px] md:hover:pl-3"
                >
                  <span className="font-serif text-[19px] leading-[1.2] md:text-[22px]">{project.name}</span>
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
        </div>
      </Container>
    </section>
  );
}
