import type { Metadata } from "next";
import { ChannelActions } from "@/components/channel-actions";
import { EpisodeCard } from "@/components/episode-card";
import { episodesByKind } from "@/lib/episodes";
import { formatPublishedDate } from "@/lib/format";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Episodes",
  description:
    "Recent films and shorts from The Dad Ledger on YouTube, covering fatherhood, faith, markets, and digital assets.",
  alternates: {
    canonical: "/episodes",
  },
};

export default function EpisodesPage() {
  const films = episodesByKind("episode");
  const shorts = episodesByKind("short");

  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:py-20">
      <p className="kicker">Index</p>
      <h1 className="mt-3 font-serif text-5xl tracking-tight">Episodes</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Longer films are embedded below. Shorts use the same player, opened
        only when you press play. Everything also lives on YouTube. This list
        is recent public uploads through{" "}
        {formatPublishedDate(site.catalogUpdated)}. Older films stay on the
        channel.
      </p>

      <section className="mt-14" aria-labelledby="films-heading">
        <h2 id="films-heading" className="font-serif text-3xl tracking-tight">
          Films
        </h2>
        {films.length > 0 ? (
          <div className="mt-8">
            {films.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        ) : (
          <div className="mt-8 border border-dashed border-line bg-paper-raised px-6 py-10">
            <h3 className="font-serif text-2xl tracking-tight">
              No films listed yet
            </h3>
            <p className="mt-3 max-w-xl text-ink-soft">
              When a long-form episode has a public YouTube id, it will be
              added here with a player and a short note on what it covers.
            </p>
          </div>
        )}
      </section>

      <section className="mt-16" aria-labelledby="shorts-heading">
        <h2 id="shorts-heading" className="font-serif text-3xl tracking-tight">
          Shorts
        </h2>
        {shorts.length > 0 ? (
          <ul className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {shorts.map((episode) => (
              <li key={episode.id}>
                <EpisodeCard episode={episode} layout="compact" />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 max-w-xl text-ink-soft">
            Shorts will appear in this grid as they are added to the catalog.
          </p>
        )}
      </section>

      <section className="mt-16 border-t border-line pt-10" aria-labelledby="subscribe-heading">
        <h2 id="subscribe-heading" className="font-serif text-3xl tracking-tight">
          Subscribe
        </h2>
        <p className="mt-3 max-w-xl text-ink-soft">
          Follow {site.channelName} on YouTube for the next film.
        </p>
        <ChannelActions className="mt-6" />
      </section>
    </div>
  );
}
