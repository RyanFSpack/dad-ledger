/**
 * Canonical origin for metadata, sitemap, and robots.
 * No custom domain is attached. Do not set these variables from this repo.
 *
 * Order:
 * 1. NEXT_PUBLIC_SITE_URL, when it is set on purpose after a later cutover.
 * 2. On a production Vercel deployment, VERCEL_PROJECT_PRODUCTION_URL,
 *    so canonicals are not the per-deployment host.
 * 3. VERCEL_URL for any other Vercel deployment, including previews.
 * 4. http://localhost:3000 for a local build.
 */
function httpsOrigin(host: string): string {
  const bare = host.trim().replace(/\/$/, "").replace(/^https?:\/\//, "");
  return `https://${bare}`;
}

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (configured) {
    return configured;
  }

  if (process.env.VERCEL_ENV === "production") {
    const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
    if (productionHost) {
      return httpsOrigin(productionHost);
    }
  }

  const vercelHost = process.env.VERCEL_URL?.trim();
  if (vercelHost) {
    return httpsOrigin(vercelHost);
  }

  return "http://localhost:3000";
}
