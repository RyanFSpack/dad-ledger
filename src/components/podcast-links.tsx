import { site } from "@/lib/site";

export function PodcastLinks() {
  if (site.podcastLinks.length === 0) {
    return null;
  }

  return (
    <>
      <h2 id="podcast-heading" className="font-serif text-3xl tracking-tight">
        Listen to The Dad Ledger podcast
      </h2>
      <ul className="mt-4 flex flex-col gap-2">
        {site.podcastLinks.map((link) => (
          <li key={link.href}>
            <a
              className="text-link text-sm font-semibold"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
