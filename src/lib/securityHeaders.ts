/**
 * HTTP security headers for every response. The Content-Security-Policy only allows this origin: fonts are
 * self-hosted, the avatar goes through Next's image optimizer, and Vercel Web Analytics loads from and reports to
 * `/_vercel/insights` on this origin. Static pages can't carry per-request nonces, so inline scripts (Next's page data) and
 * inline styles (next/image) are allowed; no other origin can run code here.
 */
type Environment = { production: boolean; vercelPreview: boolean };

export function contentSecurityPolicy({ production, vercelPreview }: Environment): string {
  // Vercel's toolbar runs on preview deployments only.
  const toolbar = vercelPreview ? " https://vercel.live" : "";
  // React's dev tooling evaluates code, and Vercel Analytics' debug script loads from its CDN; production does neither.
  const devScripts = production ? "" : " 'unsafe-eval' https://va.vercel-scripts.com";
  return [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline'${devScripts}${toolbar}`,
    `style-src 'self' 'unsafe-inline'${toolbar}`,
    `img-src 'self' data: blob:${toolbar}`,
    `font-src 'self'${toolbar}`,
    `connect-src 'self'${toolbar}${production ? "" : " ws:"}`,
    `frame-src${toolbar || " 'none'"}`,
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    ...(production ? ["upgrade-insecure-requests"] : []),
  ].join("; ");
}

export function securityHeaders(environment: Environment): { key: string; value: string }[] {
  return [
    { key: "Content-Security-Policy", value: contentSecurityPolicy(environment) },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
    { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  ];
}
