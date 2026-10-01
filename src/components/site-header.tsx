"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const links = [
  { href: "/episodes", label: "Episodes" },
  { href: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto grid max-w-5xl grid-cols-[1fr_auto] items-center gap-x-4 gap-y-3 px-5 py-4 sm:grid-cols-[auto_1fr_auto] sm:py-5">
        <Link
          href="/"
          className="font-serif text-2xl tracking-tight text-ink"
          aria-current={pathname === "/" ? "page" : undefined}
        >
          Dad Ledger
        </Link>
        <nav
          aria-label="Primary"
          className="col-span-2 flex gap-6 sm:col-span-1 sm:col-start-2"
        >
          {links.map((link) => {
            const current =
              link.href === "/episodes"
                ? pathname === "/episodes" || pathname.startsWith("/episodes/")
                : pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={current ? "page" : undefined}
                className={`text-sm font-semibold underline-offset-4 ${
                  current ? "text-ink underline" : "text-ink-soft hover:text-ink hover:underline"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <a
          className="button button-primary col-start-2 row-start-1 px-3 sm:col-start-3 sm:px-4"
          href={site.subscribeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Subscribe
          <span className="sr-only"> on YouTube</span>
        </a>
      </div>
    </header>
  );
}
