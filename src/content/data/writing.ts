/** Articles on DEV. Titles stay in the language they were published in. */
export type Post = {
  title: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  minutes: number;
  tags: string[];
  url: string;
  lang: "en" | "pt";
};

/** The long-form version of the "How I work" section. */
export const contextEngineeringArticle: Post = {
  title: "Context engineering is engineering work — not prompt-writing",
  date: "2026-06-25",
  minutes: 9,
  tags: ["ai", "llm", "softwareengineering"],
  url: "https://dev.to/pablofelps/context-engineering-is-engineering-work-not-prompt-writing-203g",
  lang: "en",
};

/** Newest first. */
export const posts: Post[] = [
  contextEngineeringArticle,
  {
    title: "Difference Between Two Arrays in JavaScript",
    date: "2022-03-17",
    minutes: 4,
    tags: ["javascript", "tutorial"],
    url: "https://dev.to/pablofelps/difference-between-two-arrays-in-javascript-180k",
    lang: "en",
  },
  {
    title: "Sort an Array of Integers in JavaScript",
    date: "2022-03-17",
    minutes: 5,
    tags: ["javascript", "tutorial"],
    url: "https://dev.to/pablofelps/sort-an-array-of-integers-in-javascript-oda",
    lang: "en",
  },
  {
    title: "Count Certain Elements of an Array in JavaScript",
    date: "2022-03-17",
    minutes: 5,
    tags: ["javascript", "tutorial"],
    url: "https://dev.to/pablofelps/count-certain-elements-of-an-array-in-javascript-4049",
    lang: "en",
  },
];
