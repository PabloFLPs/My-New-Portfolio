import { describe, expect, it } from "vitest";
import { contentSecurityPolicy, securityHeaders } from "./securityHeaders";

const directives = (csp: string) => Object.fromEntries(csp.split("; ").map((d) => [d.split(" ")[0], d]));

describe("contentSecurityPolicy", () => {
  it("allows only this origin in production", () => {
    const csp = contentSecurityPolicy({ production: true, vercelPreview: false });
    expect(csp).not.toMatch(/https?:\/\//);
    expect(csp).not.toContain("unsafe-eval");
    expect(directives(csp)["frame-ancestors"]).toBe("frame-ancestors 'none'");
    expect(directives(csp)["object-src"]).toBe("object-src 'none'");
    expect(csp).toContain("upgrade-insecure-requests");
  });

  it("lets Vercel's toolbar in on preview deployments only", () => {
    expect(contentSecurityPolicy({ production: true, vercelPreview: true })).toContain("https://vercel.live");
    expect(contentSecurityPolicy({ production: true, vercelPreview: false })).not.toContain("vercel.live");
  });

  it("allows eval and websockets only in development, for React's tooling and hot reload", () => {
    const dev = contentSecurityPolicy({ production: false, vercelPreview: false });
    expect(dev).toContain("'unsafe-eval'");
    expect(directives(dev)["connect-src"]).toContain("ws:");
  });
});

describe("securityHeaders", () => {
  it("sends each header once", () => {
    const keys = securityHeaders({ production: true, vercelPreview: false }).map((h) => h.key);
    expect(new Set(keys).size).toBe(keys.length);
    expect(keys).toContain("Strict-Transport-Security");
  });
});
