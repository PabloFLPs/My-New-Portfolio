import { type Locale } from "@/i18n/locales";
import { en } from "./copy/en";
import { pt } from "./copy/pt";
import { type Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = { en, pt };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
