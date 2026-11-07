import Link from "next/link";
import { type AiCopy } from "@/content/types/ai";
import { contextEngineeringArticle } from "@/content/data/writing";
import { sectionNumber } from "@/content/sections";
import { Container } from "@/components/ui/Container";
import { Display } from "@/components/ui/Display";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { UnderlineLink } from "@/components/ui/UnderlineLink";

export function AiWorkflow({ ai, caseStudyHref }: { ai: AiCopy; caseStudyHref: string }) {
  return (
    <section id="ai" className="py-14 md:py-28">
      <Container className="flex flex-col gap-12 md:gap-18">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="flex flex-col gap-3 md:gap-5">
            <SectionLabel>
              {sectionNumber("ai")} — {ai.label}
            </SectionLabel>
            <Display
              heading={ai.heading}
              className="text-[44px] leading-none tracking-[-0.02em] md:text-[64px]"
            />
          </div>
          <p className="max-w-[420px] text-base leading-[1.6] text-muted">{ai.intro}</p>
        </div>

        <ol className="grid gap-10 md:grid-cols-3 md:gap-10">
          {ai.roles.map((role) => (
            <li key={role.kicker} className="flex flex-col gap-3 border-t border-line pt-6">
              <p className="font-mono text-[11px] leading-none text-faint">{role.kicker}</p>
              <h3 className="font-serif text-[26px] leading-[1.15] md:text-[30px]">{role.title}</h3>
              <p className="font-mono text-xs leading-none tracking-[0.04em] text-accent-soft uppercase">
                {role.tools}
              </p>
              <p className="text-[15px] leading-[1.6] text-muted md:text-base">{role.body}</p>
            </li>
          ))}
        </ol>

        <div className="flex flex-col gap-6">
          <p className="text-sm text-muted">{ai.loopTitle}</p>
          <ol className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-5">
            {ai.loop.map((item, index) => (
              <li key={item.step} className="flex flex-col gap-2.5">
                <span className="flex items-center gap-3 font-mono text-xs leading-none text-faint">
                  {String(index + 1).padStart(2, "0")}
                  <span className="h-px flex-1 bg-rail" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-[22px] leading-tight">{item.step}</h3>
                <p className="text-sm leading-[1.55] text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid gap-8 border-t border-line pt-10 md:grid-cols-[4fr_8fr] md:gap-16">
          <h3 className="font-serif text-[28px] leading-tight md:text-[34px]">{ai.ownershipTitle}</h3>
          <div className="flex flex-col gap-8">
            <ul className="grid gap-3 sm:grid-cols-2 sm:gap-x-8">
              {ai.ownership.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-[1.5] text-ink-soft">
                  <span className="text-accent" aria-hidden="true">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <figure className="flex flex-col gap-4 rounded bg-surface p-6 md:p-8">
              <p className="font-mono text-[11px] leading-none text-accent-soft">{ai.example.label}</p>
              <h4 className="font-serif text-2xl leading-tight md:text-[28px]">{ai.example.title}</h4>
              {ai.example.body.map((paragraph) => (
                <p key={paragraph} className="text-[15px] leading-[1.6] text-muted md:text-base">
                  {paragraph}
                </p>
              ))}
              <ul className="flex flex-col gap-2">
                {ai.example.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3 text-[15px] leading-[1.5] text-ink-soft">
                    <span className="text-accent" aria-hidden="true">
                      —
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
              <Link
                href={caseStudyHref}
                className="mt-2 self-start border-b border-accent pb-1 text-[15px] font-medium text-ink-soft transition-colors hover:text-accent-soft"
              >
                {ai.example.link} <span aria-hidden="true">→</span>
              </Link>
            </figure>
            <UnderlineLink
              href={contextEngineeringArticle.url}
              external
              className="self-start text-[15px] text-ink-soft"
            >
              {ai.articleLink}
            </UnderlineLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
