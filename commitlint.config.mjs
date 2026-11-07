/** Conventional Commits, with the scopes this repo uses (see AGENTS.md). */
const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-max-line-length": [0],
    "footer-max-line-length": [0],
  },
};

export default config;
