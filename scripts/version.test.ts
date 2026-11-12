import { describe, expect, it } from "vitest";
import { bumpOf, versionsOf, type Row } from "./version";

const row = (hash: string, subject: string): Row => ({ hash, date: "2026-11-12", subject });

describe("bumpOf", () => {
  it("bumps minor for feat and patch for fix or perf", () => {
    expect(bumpOf("feat(work): something")).toBe("minor");
    expect(bumpOf("fix: something")).toBe("patch");
    expect(bumpOf("perf(load): something")).toBe("patch");
    expect(bumpOf("feat!: breaking")).toBe("minor");
  });

  it("leaves the version alone for anything else", () => {
    for (const subject of [
      "docs: x",
      "chore(deps): x",
      "test: x",
      "ci: x",
      "refactor: x",
      "Merge pull request #21",
    ]) {
      expect(bumpOf(subject), subject).toBeNull();
    }
  });
});

describe("versionsOf", () => {
  it("resets at each generation and counts features and fixes after it", () => {
    const majors = { aaa: { major: 2, what: "" }, ddd: { major: 3, what: "" } };
    const versions = versionsOf(
      [
        row("aaa1", "Initialize project"),
        row("bbb1", "Updating my resume"),
        row("ccc1", "feat: before the rule existed"),
        row("ddd1", "chore: the rebuild starts"),
        row("eee1", "feat(theme): tokens"),
        row("fff1", "fix(journey): links"),
        row("ggg1", "docs: notes"),
        row("hhh1", "feat(contact): LinkedIn"),
      ],
      majors,
    );
    expect(versions.map((v) => v.version)).toEqual([
      "2.0.0",
      "2.0.0",
      "2.1.0",
      "3.0.0",
      "3.1.0",
      "3.1.1",
      "3.1.1",
      "3.2.0",
    ]);
    expect(versions.map((v) => v.bumps)).toEqual([true, false, true, true, true, true, false, true]);
  });
});
