export type Token = { text: string; kind: "comment" | "string" | "keyword" | "plain" };

const keywords = new Set([
  "const",
  "let",
  "await",
  "async",
  "new",
  "return",
  "export",
  "function",
  "if",
  "import",
  "from",
  "true",
  "false",
]);

/** Comments, string/template literals, then identifiers; anything else is passed through. */
const pattern = /(\/\*[\s\S]*?\*\/|\/\/[^\n]*)|("(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`)|([A-Za-z_$][\w$]*)/g;

/**
 * A deliberately small TypeScript highlighter for the decorative code panels: comments, strings and
 * keywords. It never needs to be right about edge cases, only to make short excerpts readable.
 */
export function highlight(code: string): Token[] {
  const tokens: Token[] = [];
  let last = 0;
  for (const match of code.matchAll(pattern)) {
    const index = match.index;
    if (index > last) tokens.push({ text: code.slice(last, index), kind: "plain" });
    const [text, comment, string, word] = match;
    if (comment) tokens.push({ text, kind: "comment" });
    else if (string) tokens.push({ text, kind: "string" });
    else if (word && keywords.has(word)) tokens.push({ text, kind: "keyword" });
    else tokens.push({ text, kind: "plain" });
    last = index + text.length;
  }
  if (last < code.length) tokens.push({ text: code.slice(last), kind: "plain" });
  return tokens;
}
