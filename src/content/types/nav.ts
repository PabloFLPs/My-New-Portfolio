export type NavCopy = {
  /** Nav labels for the sections that get a link; a link only shows once its section exists. */
  links: { about: string; work: string; journey: string; contact: string };
  menu: string;
  close: string;
  /** Read by screen readers after the short code, and shown as the tooltip; in the target language. */
  switchLanguage: string;
  /** Short code of the other language, shown on the switch. */
  switchLanguageShort: string;
};
