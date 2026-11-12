import { FaDev, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { type IconType } from "react-icons";
import { type FooterCopy } from "@/content/types/footer";
import { site, socials, type SocialId } from "@/content/data/site";
import { changelogUrl, version } from "@/content/data/version";
import { ExternalLink } from "@/components/ui/ExternalLink";

const icons: Record<SocialId, IconType> = { linkedin: FaLinkedinIn, github: FaGithub, dev: FaDev };

export function SiteFooter({ footer }: { footer: FooterCopy }) {
  return (
    <footer className="bg-surface">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-6 py-6 font-mono text-xs text-faint md:px-20 md:py-7 md:text-[13px]">
        <p>
          © {new Date().getFullYear()} pablo felipe ·{" "}
          <ExternalLink href={site.repo} className="transition-colors hover:text-accent-soft">
            {footer.source}
          </ExternalLink>{" "}
          ·{" "}
          <ExternalLink href={changelogUrl} className="transition-colors hover:text-accent-soft">
            v{version}
            <span className="sr-only">, {footer.changelog}</span>
          </ExternalLink>
        </p>
        <ul className="flex items-center gap-1 md:gap-5">
          {socials.map(({ id, name, href }) => {
            const Icon = icons[id];
            return (
              <li key={id}>
                <ExternalLink
                  href={href}
                  className="block p-3 text-ink transition-colors duration-300 hover:text-accent md:p-0"
                >
                  <span className="sr-only">{name}</span>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </ExternalLink>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
