import { describe, expect, it } from "vitest";
import { en } from "./copy/en";
import { pt } from "./copy/pt";
import { featuredProjects, otherProjects } from "./data/projects";
import { journey } from "./data/journey";
import { homeSections, sectionNumber } from "./sections";

/** Every key path and array length of a value, so two locales can be compared shape for shape. */
function shape(value: unknown, path = ""): string[] {
  if (Array.isArray(value)) {
    return [`${path}[${value.length}]`, ...value.flatMap((item, i) => shape(item, `${path}[${i}]`))];
  }
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, child]) => shape(child, path ? `${path}.${key}` : key));
  }
  return [`${path}:${typeof value}`];
}

function strings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(strings);
  if (value && typeof value === "object") return Object.values(value).flatMap(strings);
  return [];
}

/** Numbers as values: "270,000" (EN) and "270.000" (PT) are both 270000; "0.1" and "0,1" are both 0.1. */
function numbers(text: string, locale: "en" | "pt"): string[] {
  const normalized =
    locale === "en"
      ? text.replace(/(\d),(?=\d{3}\b)/g, "$1")
      : text.replace(/(\d)\.(?=\d{3}\b)/g, "$1").replace(/(\d),(\d)/g, "$1.$2");
  return normalized.match(/\d+(?:\.\d+)?/g) ?? [];
}

describe("EN and PT-BR copy", () => {
  it("have exactly the same shape", () => {
    expect(shape(pt)).toEqual(shape(en));
  });

  it("state the same numbers in every section", () => {
    for (const section of Object.keys(en) as (keyof typeof en)[]) {
      const enNumbers = strings(en[section])
        .flatMap((s) => numbers(s, "en"))
        .sort();
      const ptNumbers = strings(pt[section])
        .flatMap((s) => numbers(s, "pt"))
        .sort();
      expect(ptNumbers, `numbers in "${section}"`).toEqual(enNumbers);
    }
  });

  it("keep sentences under 40 words", () => {
    for (const dictionary of [en, pt]) {
      for (const text of strings(dictionary)) {
        for (const sentence of text.split(/(?<=[.!?])\s+/)) {
          expect(sentence.split(/\s+/).length, sentence).toBeLessThanOrEqual(40);
        }
      }
    }
  });
});

describe("PT-BR copy follows the writing playbook", () => {
  // From the PT-BR Writing Playbook, section 6 ("Glossário por grep"). Matched as whole words.
  const banned = [
    "pra",
    "mecanismo",
    "minúsculo",
    "pesos abertos",
    "colagem inteligente",
    "treino",
    "régua",
    "degrau",
    "dá tipo",
    "pequeno modelo",
    "satisfaz",
    "chutar",
    "pista",
    "rodar",
    "roda",
    "desenho",
    "malformado",
    "Mantendo",
    "Deixando",
  ];

  it.each(banned)("never uses “%s”", (term) => {
    const word = new RegExp(`(?<![\\p{L}\\p{N}])${term}(?![\\p{L}\\p{N}])`, "iu");
    for (const text of strings(pt)) expect(text).not.toMatch(word);
  });
});

describe("copy covers every data entry", () => {
  it.each(["en", "pt"] as const)("%s has copy for every project and journey item", (locale) => {
    const t = locale === "en" ? en : pt;
    for (const project of featuredProjects) expect(t.work.featured[project.slug], project.slug).toBeDefined();
    for (const project of otherProjects) expect(t.work.more[project.slug], project.slug).toBeDefined();
    for (const item of journey) expect(t.journey.items[item.id], item.id).toBeDefined();
    expect(Object.keys(t.work.featured).sort()).toEqual(featuredProjects.map((p) => p.slug).sort());
    expect(Object.keys(t.work.more).sort()).toEqual(otherProjects.map((p) => p.slug).sort());
    expect(Object.keys(t.journey.items).sort()).toEqual(journey.map((j) => j.id).sort());
  });
});

describe("section numbers", () => {
  it("follow the page order", () => {
    expect(homeSections.map(sectionNumber)).toEqual(
      homeSections.map((_, i) => String(i + 1).padStart(2, "0")),
    );
  });
});
