"use client";

import { useEffect, useId, useState } from "react";
import { type NavCopy } from "@/content/types/nav";
import { type Locale } from "@/i18n/locales";
import { LanguageSwitch } from "./LanguageSwitch";
import { type NavLink } from "./SiteHeader";

type Props = { locale: Locale; nav: NavCopy; links: NavLink[]; alternatePath: string };

const pill =
  "rounded-full border border-rail bg-canvas/60 px-[18px] py-3 font-mono text-xs leading-none text-ink backdrop-blur-sm";

/** The phone menu: a "menu" pill that opens a full-screen list of the section links. */
export function MobileMenu({ locale, nav, links, alternatePath }: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className={pill}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
      >
        {nav.menu}
      </button>

      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label={nav.menu}
          className="fixed inset-0 z-50 flex flex-col bg-canvas px-6 py-5"
        >
          <div className="flex items-center justify-between">
            <span className="font-serif text-xl leading-none font-medium italic">Pablo Felipe</span>
            <button type="button" className={pill} onClick={() => setOpen(false)} autoFocus>
              {nav.close}
            </button>
          </div>
          <ul className="mt-16 flex flex-col">
            {links.map((link) => (
              <li key={link.href} className="border-t border-line last:border-b">
                <a href={link.href} onClick={() => setOpen(false)} className="block py-5 font-serif text-4xl">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitch locale={locale} nav={nav} href={alternatePath} className="mt-10 self-start" />
        </div>
      ) : null}
    </div>
  );
}
