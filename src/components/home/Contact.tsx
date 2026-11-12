import { type ContactCopy } from "@/content/types/contact";
import { site } from "@/content/data/site";
import { sectionNumber } from "@/content/sections";
import { Container } from "@/components/ui/Container";
import { Display } from "@/components/ui/Display";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { SectionLabel } from "@/components/ui/SectionLabel";

/** One way to reach Pablo: LinkedIn. No email or form on the site. */
export function Contact({ contact }: { contact: ContactCopy }) {
  return (
    <section id="contact" className="pt-18 pb-16 md:pt-36 md:pb-32">
      <Container className="flex flex-col gap-5 md:gap-9">
        <SectionLabel>
          {sectionNumber("contact")} — {contact.label}
        </SectionLabel>
        <Display
          heading={contact.heading}
          className="text-[64px] leading-[0.95] tracking-[-0.03em] md:text-[112px]"
        />
        <p className="max-w-[520px] text-base leading-[1.6] text-muted md:text-lg">{contact.intro}</p>
        <ExternalLink
          href={site.links.linkedin}
          className="self-start border-b border-accent pb-1.5 font-serif text-[26px] leading-[1.1] transition-colors duration-300 hover:text-accent-soft md:pb-2 md:text-5xl"
        >
          {contact.linkedinCta} <span aria-hidden="true">↗</span>
        </ExternalLink>
      </Container>
    </section>
  );
}
