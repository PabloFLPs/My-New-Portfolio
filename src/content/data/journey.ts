/** What a stop on the journey was. Labels live in the locale files. */
export type JourneyKind = "technical" | "internship" | "degree" | "extension" | "fullTime";

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
  { id: "electrotechnics", from: 2014, to: 2017, kind: "technical" },
  { id: "skill", from: 2016, to: 2016, kind: "internship" },
  { id: "computer-engineering", from: 2018, to: 2025, kind: "degree" },
  { id: "cefet-it", from: 2019, to: 2020, kind: "internship" },
  {
    id: "commit-jr",
    from: 2021,
    to: 2022,
    kind: "extension",
    url: "https://www.linkedin.com/company/commitjr/",
  },
  {
    id: "lecode",
    from: 2021,
    to: 2024,
    kind: "fullTime",
    url: "https://www.linkedin.com/company/lecodedev/",
  },
  {
    id: "tagna",
    from: 2024,
    to: 2025,
    kind: "fullTime",
    url: "https://www.linkedin.com/company/tagnatecnologia",
  },
  { id: "shopper", from: 2025, kind: "fullTime", url: "https://shopper.com.br" },
];
