/**
 * Canonical origin for metadata, sitemap, and robots.
 * No custom domain is attached in v1. Set NEXT_PUBLIC_SITE_URL only
 * after dadledger.com is intentionally pointed at this app.
 */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (configured) {
    return configured;
  }

  const vercelHost = process.env.VERCEL_URL?.trim();
  if (vercelHost) {
    return `https://${vercelHost}`;
  }

  return "http://localhost:3000";
}
