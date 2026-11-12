import { Analytics } from "@vercel/analytics/next";
import { type ReactNode } from "react";
import { htmlLang, type Locale } from "@/i18n/locales";
import "@/app/globals.css";

/** Only on Vercel, where `/_vercel/insights` exists; locally and in CI the script would just 404. */
const onVercel = process.env.VERCEL === "1";

/** `<html>` and `<body>` for one language. Each locale has its own root layout so `lang` is right everywhere. */
export function RootShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={htmlLang[locale]}>
      <body className="min-h-svh bg-canvas font-sans text-ink">
        {children}
        {onVercel ? <Analytics /> : null}
      </body>
    </html>
  );
}
