import Image from "next/image";
import { type AboutCopy } from "@/content/types/about";
import { site } from "@/content/data/site";
import { stack } from "@/content/data/stack";
import { sectionNumber } from "@/content/sections";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function About({ about }: { about: AboutCopy }) {
  return (
    <section id="about" className="bg-surface py-14 md:py-28">
      <Container className="grid gap-6 md:grid-cols-[2fr_7fr_3fr] md:gap-12">
        <SectionLabel className="md:leading-[1.4]">
          {sectionNumber("about")} — {about.label}
        </SectionLabel>

        <div className="flex flex-col gap-6 md:gap-10">
          <p className="font-serif text-[28px] leading-[1.18] tracking-[-0.01em] md:text-[44px] md:leading-[1.15] md:tracking-[-0.015em]">
            {about.statement.text} <span className="text-accent-soft italic">{about.statement.accent}</span>
          </p>
          <div className="flex flex-col gap-4">
            {stack.map((group) => (
              <div key={group.id} className="flex flex-col gap-3 md:gap-4">
                <p className="font-mono text-xs leading-none text-faint">{about.stackLabels[group.id]}</p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <Chip name={item.name} href={item.href} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative hidden aspect-square overflow-hidden rounded md:block">
            <Image src={site.avatar} alt="Pablo Felipe" fill sizes="240px" className="object-cover" />
          </div>
          <p className="hidden text-sm leading-normal text-muted md:block">{about.caption}</p>
          <ExternalLink
            href={site.links.linkedin}
            className="flex justify-between rounded bg-canvas p-4 font-mono text-[13px] leading-none transition-colors duration-300 hover:bg-raised md:px-4 md:py-3.5"
          >
            {about.profileLink}{" "}
            <span className="text-accent-soft" aria-hidden="true">
              ↗
            </span>
          </ExternalLink>
        </div>
      </Container>
    </section>
  );
}
