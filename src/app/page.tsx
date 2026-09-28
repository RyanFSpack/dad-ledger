import type { Metadata } from "next";
import Link from "next/link";
import { ChannelActions } from "@/components/channel-actions";
import { EpisodeCard } from "@/components/episode-card";
import { episodesByKind, latestEpisode, topicLabels } from "@/lib/episodes";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Dad Ledger — Faith, family, fatherhood, and smart wealth",
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
};

const themes = [
  {
    topic: "faith",
    text: "Some films sit with trust, vocation, and what a person does when the next step is unclear.",
  },
  {
    topic: "family",
    text: "Household life is part of the subject: marriage, children, and what a father hopes to hand on.",
  },
  {
    topic: "fatherhood",
    text: "The practical work of raising people, including letting them carry real responsibility.",
  },
  {
    topic: "wealth",
    text: "Plain-language explanations of markets and digital assets, for providers making decisions with incomplete information.",
  },
] as const;

export default function HomePage() {
  const featured = latestEpisode("episode");
  const shorts = episodesByKind("short").slice(0, 4);

  return (
    <>
      <section className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
        <p className="kicker">YouTube documentary channel</p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          Dad Ledger
        </h1>
        <p className="mt-5 max-w-2xl font-serif text-2xl leading-snug tracking-tight text-ink italic sm:text-3xl">
          Faith, family, fatherhood, and smart wealth.
        </p>
        <p className="mt-6 max-w-2xl border-l border-ink pl-5 text-lg leading-relaxed text-ink-soft">
          {site.channelName} is hosted by {site.hosts[0]}, {site.hosts[1]}, and{" "}
          {site.hosts[2]}. The films look at how fathers provide — for a
          household, a faith, and a future — including how modern markets and
          digital assets actually work.
        </p>
        <ChannelActions className="mt-8" />
      </section>

      <section className="border-t border-line" aria-labelledby="featured-heading">
        <div className="mx-auto max-w-5xl px-5 py-14">
          <h2
            id="featured-heading"
            className="font-serif text-3xl tracking-tight sm:text-4xl"
          >
            Latest film
          </h2>
          <div className="mt-8">
            {featured ? (
              <EpisodeCard episode={featured} />
            ) : (
              <EmptyFilms />
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="themes-heading">
        <div className="mx-auto max-w-5xl px-5 py-14">
          <h2 id="themes-heading" className="font-serif text-3xl tracking-tight">
            What the channel covers
          </h2>
          <ol className="mt-8 grid gap-8 sm:grid-cols-2">
            {themes.map((theme, index) => (
              <li key={theme.topic} className="border-t border-line pt-4">
                <p className="kicker">0{index + 1}</p>
                <h3 className="mt-2 font-serif text-2xl tracking-tight">
                  {topicLabels[theme.topic]}
                </h3>
                <p className="mt-2 text-ink-soft">{theme.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="shorts-heading">
        <div className="mx-auto max-w-5xl px-5 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="shorts-heading" className="font-serif text-3xl tracking-tight">
              Recent shorts
            </h2>
            <Link className="text-link text-sm font-semibold" href="/episodes">
              All episodes
            </Link>
          </div>
          {shorts.length > 0 ? (
            <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {shorts.map((episode) => (
                <li key={episode.id}>
                  <EpisodeCard episode={episode} layout="compact" />
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 text-ink-soft">
              Shorts will be listed here as they are published.
            </p>
          )}
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="watch-heading">
        <div className="mx-auto max-w-5xl px-5 py-14">
          <h2 id="watch-heading" className="font-serif text-3xl tracking-tight">
            Watch on YouTube
          </h2>
          <p className="mt-4 max-w-xl text-ink-soft">
            New films are published on the channel. This site is a guide to
            what is already there.
          </p>
          <ChannelActions className="mt-6" />
        </div>
      </section>
    </>
  );
}

function EmptyFilms() {
  return (
    <div className="border border-dashed border-line bg-paper-raised px-6 py-10">
      <h3 className="font-serif text-2xl tracking-tight">
        Films will be listed here
      </h3>
      <p className="mt-3 max-w-xl text-ink-soft">
        Long-form episodes from the channel will appear in this space, with a
        player once a public video id is known.
      </p>
      <p className="mt-5">
        <a
          className="text-link text-sm font-semibold"
          href={site.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on YouTube
        </a>
      </p>
    </div>
  );
}
