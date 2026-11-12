import { type ReactNode } from "react";
import { type JourneyCopy } from "@/content/types/journey";
import { journey as items, type JourneyItem } from "@/content/data/journey";
import { sectionNumber } from "@/content/sections";
import { Container } from "@/components/ui/Container";
import { Display } from "@/components/ui/Display";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { SectionLabel } from "@/components/ui/SectionLabel";

function years(item: JourneyItem, now: string): string {
  if (item.to === undefined) return `${item.from} — ${now}`;
  return item.to === item.from ? String(item.from) : `${item.from} — ${item.to}`;
}

function Entry({ item, children }: { item: JourneyItem; children: ReactNode }) {
  const className = "group flex flex-col";
  return item.url ? (
    <ExternalLink href={item.url} className={className}>
      {children}
    </ExternalLink>
  ) : (
    <div className={className}>{children}</div>
  );
}

/** Oldest to newest, left to right on desktop (two rows of four); newest first, top down, on phones. */
export function Journey({ journey }: { journey: JourneyCopy }) {
  const rows = [items.slice(0, 4), items.slice(4)];

  return (
    <section id="journey" className="bg-surface py-14 md:py-28">
      <Container className="flex flex-col gap-8 md:gap-18">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="flex flex-col gap-3 md:gap-5">
            <SectionLabel>
              {sectionNumber("journey")} — {journey.label}
            </SectionLabel>
            <Display
              heading={journey.heading}
              className="text-[44px] leading-none tracking-[-0.02em] md:text-[64px]"
            />
          </div>
          <p className="hidden max-w-[320px] text-base leading-[1.6] text-muted md:block">{journey.intro}</p>
        </div>

        {/* Desktop: two horizontal timelines. */}
        <div className="hidden flex-col gap-16 md:flex">
          {rows.map((row, rowIndex) => (
            <ol key={rowIndex} className="relative grid grid-cols-4 gap-5">
              <span className="absolute inset-x-0 top-[44px] h-px bg-rail" aria-hidden="true" />
              {row.map((item) => {
                const copy = journey.items[item.id];
                return (
                  <li key={item.id} className="relative">
                    <Entry item={item}>
                      <span className="h-6 font-mono text-xs leading-none text-muted">
                        {years(item, journey.now)}
                      </span>
                      <span
                        className="mt-[13px] h-[13px] w-[13px] rounded-full border-2 border-accent bg-surface transition-colors duration-300 group-hover:bg-accent"
                        aria-hidden="true"
                      />
                      <h3 className="mt-6 font-serif text-2xl leading-[1.15] transition-colors group-hover:text-accent-soft">
                        {copy?.role}
                      </h3>
                      <p className="mt-3.5 text-sm leading-[1.4] text-accent-soft">{copy?.institution}</p>
                      <p className="mt-3.5 font-mono text-[11px] leading-snug text-faint">
                        {journey.kinds[item.kind]}
                      </p>
                    </Entry>
                  </li>
                );
              })}
            </ol>
          ))}
        </div>

        {/* Phones: one vertical timeline, newest first. */}
        <ol className="flex flex-col md:hidden">
          {[...items].reverse().map((item) => {
            const copy = journey.items[item.id];
            return (
              <li key={item.id} className="grid grid-cols-[16px_1fr] gap-4">
                <span className="flex flex-col items-center" aria-hidden="true">
                  <span className="mt-[3px] h-[11px] w-[11px] shrink-0 rounded-full border-2 border-accent" />
                  <span className="w-px flex-1 bg-rail" />
                </span>
                <div className="flex flex-col gap-1.5 pb-7">
                  <span className="font-mono text-xs leading-none text-muted">
                    {years(item, journey.now)}
                  </span>
                  <h3 className="font-serif text-[22px] leading-[1.2]">{copy?.role}</h3>
                  <p className="text-sm text-accent-soft">{copy?.institution}</p>
                  <p className="font-mono text-[11px] leading-none text-faint">{journey.kinds[item.kind]}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
