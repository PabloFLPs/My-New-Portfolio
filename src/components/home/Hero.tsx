import Image from "next/image";
import { type ReactNode } from "react";
import { type HeroCopy } from "@/content/types/hero";
import { site } from "@/content/data/site";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { UnderlineLink } from "@/components/ui/UnderlineLink";

type Props = { hero: HeroCopy; header: ReactNode; workHref: string };

export function Hero({ hero, header, workHref }: Props) {
  return (
    <section id="top" className="relative isolate flex min-h-[640px] flex-col md:min-h-[800px]">
      {/* The desk photo from the original site: a band on top on phones, the right 62% from tablets up. */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[360px] md:inset-y-0 md:right-0 md:left-auto md:h-auto md:w-[62%]">
        <Image
          src="/images/home-dev.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 62vw, 100vw"
          className="object-cover opacity-55 md:opacity-60"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-canvas)_0%,transparent_70%)] md:bg-[linear-gradient(to_top,var(--color-canvas)_0%,transparent_35%)]" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(to_right,var(--color-canvas)_0%,rgb(24_23_25/0.5)_35%,transparent_70%)] md:block" />
      </div>

      {header}

      <div className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-end gap-5 px-6 pb-12 md:gap-10 md:px-20 md:pb-28">
        <p className="font-mono text-[11px] leading-snug font-medium tracking-[0.08em] text-accent-soft uppercase md:text-[13px] md:leading-none">
          <span className="md:hidden">{hero.eyebrowMobile}</span>
          <span className="hidden md:inline">{hero.eyebrow}</span>
        </p>
        <h1 className="font-serif text-[76px] leading-[0.9] font-normal tracking-[-0.035em] md:text-[156px]">
          {hero.firstName}
          <br />
          <span className="text-accent italic">{hero.lastName}</span>
        </h1>
        <p className="max-w-[520px] text-base leading-[1.55] text-ink-soft md:text-xl md:leading-[1.6]">
          {hero.lead}
        </p>
        <p className="flex items-start gap-2.5 font-mono text-xs leading-normal text-ink-soft md:items-center md:gap-3 md:text-[13px]">
          <span
            className="mt-1.5 h-[7px] w-[7px] shrink-0 rounded-full bg-accent-soft md:mt-0 md:h-2 md:w-2"
            aria-hidden="true"
          />
          <span>
            <span className="text-faint">{hero.nowLabel}</span> {hero.now}
          </span>
        </p>
        <div className="flex items-center gap-3 md:gap-6">
          <a
            href={workHref}
            className="flex-1 rounded bg-button py-[15px] text-center text-[15px] font-semibold text-canvas transition-opacity duration-300 hover:opacity-85 md:flex-none md:px-7 md:py-4 md:text-base"
          >
            <span className="md:hidden">{hero.primaryCtaMobile}</span>
            <span className="hidden md:inline">{hero.primaryCta}</span>
          </a>
          <ExternalLink
            href={site.links.github}
            className="flex-1 rounded border border-rail py-[15px] text-center text-[15px] font-medium md:hidden"
          >
            GitHub <span aria-hidden="true">↗</span>
          </ExternalLink>
          <div className="hidden gap-6 md:flex">
            <UnderlineLink href={site.links.linkedin} external>
              LinkedIn
            </UnderlineLink>
            <UnderlineLink href={site.links.github} external>
              GitHub
            </UnderlineLink>
          </div>
        </div>
      </div>
    </section>
  );
}
