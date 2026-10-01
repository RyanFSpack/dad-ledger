import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { YouTubeFacade } from "@/components/youtube-facade";
import { episodes } from "@/data/episodes";
import { formatPublishedDate } from "@/lib/format";
import {
  embedUrl,
  episodeBySlug,
  episodeNeighbors,
  episodePath,
  thumbnailUrl,
  topicLine,
  watchUrl,
} from "@/lib/episodes";

export const dynamicParams = false;

export function generateStaticParams() {
  return episodes.map((episode) => ({ slug: episode.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const episode = episodeBySlug(slug);
  if (!episode) {
    notFound();
  }

  const canonical = episodePath(episode);

  return {
    title: episode.title,
    description: episode.summary,
    alternates: {
      canonical,
    },
    openGraph: {
      title: episode.title,
      description: episode.summary,
      url: canonical,
      type: "video.other",
      images: [
        {
          url: thumbnailUrl(episode.id),
          width: 480,
          height: 360,
          alt: episode.title,
        },
      ],
    },
  };
}

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const episode = episodeBySlug(slug);
  if (!episode) {
    notFound();
  }

  const published = formatPublishedDate(episode.publishedOn);
  const kindLabel = episode.kind === "short" ? "Short" : "Film";
  const { newer, older } = episodeNeighbors(episode);
  const youtubeUrl = watchUrl(episode);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: episode.title,
    description: episode.summary,
    thumbnailUrl: thumbnailUrl(episode.id),
    uploadDate: episode.publishedOn,
    embedUrl: embedUrl(episode),
    contentUrl: youtubeUrl,
  };

  return (
    <article className="mx-auto max-w-5xl px-5 py-14 sm:py-20">
      <p className="kicker">
        <Link className="text-link" href="/episodes">
          Episodes
        </Link>
      </p>
      <h1 className="mt-3 max-w-3xl text-balance font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
        {episode.title}
      </h1>
      <p className="kicker mt-4">
        <time dateTime={episode.publishedOn}>{published}</time>
        {" · "}
        {kindLabel}
        {episode.topics.length > 0 ? ` · ${topicLine(episode)}` : ""}
      </p>

      <div
        className={
          episode.kind === "short" ? "mt-8 max-w-xs" : "mt-8 max-w-3xl"
        }
      >
        <YouTubeFacade
          videoId={episode.id}
          title={episode.title}
          kind={episode.kind}
        />
      </div>

      <h2 className="mt-8 font-serif text-2xl tracking-tight">Synopsis</h2>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-soft">
        {episode.summary}
      </p>
      <p className="mt-5">
        <a
          className="text-link text-sm font-semibold"
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on YouTube
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </p>

      <nav className="mt-14 border-t border-line pt-8" aria-label="More episodes">
        <div className="grid gap-8 sm:grid-cols-2">
          {newer ? (
            <Link className="text-link block" href={episodePath(newer)}>
              <span className="kicker">Newer</span>
              <span className="mt-2 block font-serif text-2xl leading-snug tracking-tight text-ink">
                {newer.title}
              </span>
            </Link>
          ) : (
            <span className="hidden sm:block" />
          )}
          {older ? (
            <Link className="text-link block sm:text-right" href={episodePath(older)}>
              <span className="kicker">Older</span>
              <span className="mt-2 block font-serif text-2xl leading-snug tracking-tight text-ink">
                {older.title}
              </span>
            </Link>
          ) : null}
        </div>
        <p className="mt-8">
          <Link className="text-link text-sm font-semibold" href="/episodes">
            All episodes
          </Link>
        </p>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </article>
  );
}
