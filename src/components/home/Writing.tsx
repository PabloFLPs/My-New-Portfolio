import { type WritingCopy } from "@/content/types/writing";
import { type Post } from "@/content/data/writing";
import { site } from "@/content/data/site";
import { sectionNumber } from "@/content/sections";
import { formatDate } from "@/i18n/format";
import { type Locale } from "@/i18n/locales";
import { Container } from "@/components/ui/Container";
import { Display } from "@/components/ui/Display";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { UnderlineLink } from "@/components/ui/UnderlineLink";

export function Writing({ writing, locale, posts }: { writing: WritingCopy; locale: Locale; posts: Post[] }) {
  return (
    <section id="writing" className="pt-14 md:pt-28">
      <Container className="grid gap-5 md:grid-cols-[4fr_8fr] md:gap-16">
        <div className="flex flex-col gap-6">
          <SectionLabel>
            {sectionNumber("writing")} — {writing.label}
          </SectionLabel>
          <Display
            heading={writing.heading}
            className="hidden text-[64px] leading-none tracking-[-0.02em] md:block"
          />
          <div className="hidden md:block">
            <UnderlineLink href={site.links.dev} external className="text-[15px] text-ink-soft">
              {writing.allPosts}
            </UnderlineLink>
          </div>
        </div>

        <ul className="flex flex-col border-b border-line">
          {posts.map((post) => {
            const date = formatDate(post.date, locale);
            const read = writing.readTime.replace("{minutes}", String(post.minutes));
            return (
              <li key={post.url} className="border-t border-line">
                <ExternalLink
                  href={post.url}
                  className="flex flex-col gap-2 py-[18px] transition-transform duration-300 hover:text-ink md:grid md:grid-cols-[120px_1fr_90px] md:items-baseline md:gap-6 md:py-6 md:hover:translate-x-3"
                >
                  <span className="font-mono text-xs leading-none text-muted">
                    {date}
                    <span className="md:hidden"> · {read}</span>
                  </span>
                  <span className="flex flex-col gap-2">
                    <span
                      lang={post.lang}
                      className="font-serif text-xl leading-[1.25] md:text-[26px] md:leading-[1.2]"
                    >
                      {post.title}
                    </span>
                    <span className="hidden font-mono text-xs leading-none text-faint md:block">
                      {post.tags.map((tag) => `#${tag}`).join(" ")}
                    </span>
                  </span>
                  <span className="hidden text-right font-mono text-xs leading-none text-faint md:block">
                    {read}
                  </span>
                </ExternalLink>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
