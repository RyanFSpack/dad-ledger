import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto grid max-w-5xl gap-8 px-5 py-12 sm:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-serif text-2xl tracking-tight">Dad Ledger</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
            A YouTube documentary channel on faith, family, fatherhood, and
            smart wealth. Hosted by {site.hosts[0]}, {site.hosts[1]}, and{" "}
            {site.hosts[2]}.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 text-sm sm:items-end">
          <Link className="text-link w-fit" href="/episodes">
            Episodes
          </Link>
          <Link className="text-link w-fit" href="/about">
            About
          </Link>
          <a
            className="text-link w-fit"
            href={site.subscribeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe on YouTube
          </a>
          <a
            className="text-link w-fit"
            href={site.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on YouTube
          </a>
        </nav>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-5xl px-5 py-4 text-xs leading-relaxed text-ink-soft">
          Conversations about markets and money are for education. They are not
          financial, tax, or investment advice. © {year} Dad Ledger.
        </p>
      </div>
    </footer>
  );
}
