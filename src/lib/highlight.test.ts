import { describe, expect, it } from "vitest";
import { highlight } from "./highlight";

describe("highlight", () => {
  const code = `// typed\nconst x = await run("a", \`b\`); /* done */`;

  it("never loses or reorders text", () => {
    expect(
      highlight(code)
        .map((t) => t.text)
        .join(""),
    ).toBe(code);
  });

  it("marks comments, strings and keywords", () => {
    const kinds = Object.fromEntries(highlight(code).map((t) => [t.text, t.kind]));
    expect(kinds["// typed"]).toBe("comment");
    expect(kinds["/* done */"]).toBe("comment");
    expect(kinds['"a"']).toBe("string");
    expect(kinds["`b`"]).toBe("string");
    expect(kinds["const"]).toBe("keyword");
    expect(kinds["await"]).toBe("keyword");
    expect(kinds["run"]).toBe("plain");
  });
});
