import { type ReactNode } from "react";
import { htmlLang, type Locale } from "@/i18n/locales";
import "@/app/globals.css";

/** `<html>` and `<body>` for one language. Each locale has its own root layout so `lang` is right everywhere. */
export function RootShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={htmlLang[locale]}>
      <body className="min-h-svh bg-canvas font-sans text-ink">{children}</body>
    </html>
  );
}
