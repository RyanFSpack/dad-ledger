import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-20">
      <p className="kicker">404</p>
      <h1 className="mt-3 font-serif text-5xl tracking-tight">
        That page is not on the hub.
      </h1>
      <p className="mt-5 max-w-xl text-lg text-ink-soft">
        The films are on the episodes index, or on YouTube.
      </p>
      <p className="mt-6 flex flex-wrap gap-5 text-sm font-semibold">
        <Link className="text-link" href="/">
          Home
        </Link>
        <Link className="text-link" href="/episodes">
          Episodes
        </Link>
        <Link className="text-link" href="/about">
          About
        </Link>
      </p>
    </div>
  );
}
