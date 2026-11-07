export type JourneyKind = "work" | "education" | "community";

export type JourneyItem = {
  id: string;
  from: number;
  /** Omit for the current role; the locale files supply the word ("now" / "atual"). */
  to?: number;
  kind: JourneyKind;
  url?: string;
};

/** Oldest first, as the desktop timeline reads left to right. Copy lives in the locale files, by id. */
export const journey: JourneyItem[] = [
  { id: "electrotechnics", from: 2014, to: 2017, kind: "education", url: "https://www.cefetmg.br/" },
  { id: "skill", from: 2016, to: 2016, kind: "work" },
  { id: "computer-engineering", from: 2018, to: 2025, kind: "education", url: "https://www.cefetmg.br/" },
  { id: "cefet-it", from: 2019, to: 2020, kind: "work", url: "https://www.cefetmg.br/" },
  { id: "commit-jr", from: 2021, to: 2022, kind: "work", url: "https://www.linkedin.com/company/commitjr/" },
  { id: "lecode", from: 2021, to: 2024, kind: "work", url: "https://www.linkedin.com/company/lecodedev/" },
  { id: "tagna", from: 2024, to: 2025, kind: "work" },
  { id: "shopper", from: 2025, kind: "work", url: "https://shopper.com.br" },
];
