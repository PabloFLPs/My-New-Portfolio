import { getDictionary } from "@/content";
import { otherLocale, type Locale } from "@/i18n/locales";
import { routeFor } from "@/i18n/routes";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  const header = (
    <SiteHeader locale={locale} nav={t.nav} alternatePath={routeFor("home", otherLocale(locale))} onHome />
  );

  return (
    <>
      <main>{header}</main>
      <SiteFooter footer={t.footer} />
    </>
  );
}
