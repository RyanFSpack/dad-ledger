import type { Metadata } from "next";
import { ChannelActions } from "@/components/channel-actions";
import { PodcastLinks } from "@/components/podcast-links";
import { topicLabels } from "@/lib/episodes";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dad Ledger is a YouTube documentary channel hosted by Trent, Ryan, and Timo. This site is a public hub for the films.",
  alternates: {
    canonical: "/about",
  },
};

const coverage = [
  {
    label: topicLabels.faith,
    text: "Trust, vocation, and the longer view of a life.",
  },
  {
    label: topicLabels.family,
    text: "Marriage, children, and the household a father is responsible for.",
  },
  {
    label: topicLabels.fatherhood,
    text: "The daily work of raising people who can stand on their own.",
  },
  {
    label: topicLabels.wealth,
    text: "Macro markets and digital assets, explained without turning them into a sales pitch.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto grid max-w-5xl gap-12 px-5 py-14 sm:py-20 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.7fr)]">
      <article>
        <p className="kicker">About the channel</p>
        <h1 className="mt-3 font-serif text-5xl tracking-tight">About</h1>
        <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed">
          <p>
            Dad Ledger is a YouTube channel hosted by {site.hosts[0]},{" "}
            {site.hosts[1]}, and {site.hosts[2]}. This website is a public hub
            for the films: a place to see what has been published and to
            subscribe on YouTube.
          </p>
          <p>
            The work sits with faith, family, fatherhood, and smart wealth.
            Some pieces are short reflections. Some are longer explanations of
            how a market mechanism works. Some are conversations with fathers
            about the lives they are actually living.
          </p>
          <p>
            There is no membership, course, or paywall on this site. Nothing is
            for sale here. The films are on YouTube.
          </p>
        </div>

        <h2 className="mt-12 font-serif text-3xl tracking-tight">
          What the films cover
        </h2>
        <dl className="mt-6 max-w-2xl divide-y divide-line border-y border-line">
          {coverage.map((item) => (
            <div key={item.label} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <dt className="font-semibold">{item.label}</dt>
              <dd className="text-ink-soft">{item.text}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-12 font-serif text-3xl tracking-tight">
          A note on money
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          The channel discusses markets and digital assets. Those conversations
          are educational. They are not financial, tax, or investment advice.
          Decisions about a family&apos;s money belong to that family.
        </p>

        {site.podcastLinks.length > 0 ? (
          <section className="mt-12" aria-labelledby="podcast-heading">
            <PodcastLinks />
          </section>
        ) : null}
      </article>

      <aside className="h-fit border border-line bg-paper-raised p-6 lg:sticky lg:top-6">
        <p className="kicker">Watch</p>
        <p className="mt-3 font-serif text-2xl leading-snug tracking-tight">
          {site.channelName}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          Hosted by {site.hosts[0]}, {site.hosts[1]}, and {site.hosts[2]}.
          Subscribe on YouTube, or open the channel and watch what is already
          published.
        </p>
        <ChannelActions className="mt-6" />
      </aside>
    </div>
  );
}
