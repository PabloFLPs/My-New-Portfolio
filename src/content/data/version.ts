import packageJson from "../../../package.json";

/** The site's version. `scripts/version.ts` keeps package.json in step with the git history. */
export const version: string = packageJson.version;

export const changelogUrl = "https://github.com/PabloFLPs/My-New-Portfolio/blob/master/CHANGELOG.md";
