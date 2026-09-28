import { formatPublishedDate } from "@/lib/format";
import { topicLine, watchUrl, type Episode } from "@/lib/episodes";
import { YouTubeFacade } from "@/components/youtube-facade";

type EpisodeCardProps = {
  episode: Episode;
  layout?: "feature" | "compact";
};

export function EpisodeCard({
  episode,
  layout = "feature",
}: EpisodeCardProps) {
  const published = formatPublishedDate(episode.publishedOn);
  const kindLabel = episode.kind === "short" ? "Short" : "Film";

  if (layout === "compact") {
    return (
      <article className="flex flex-col gap-3">
        <YouTubeFacade
          videoId={episode.id}
          title={episode.title}
          kind={episode.kind}
        />
        <div>
          <p className="kicker">
            <time dateTime={episode.publishedOn}>{published}</time>
            {" · "}
            {kindLabel}
          </p>
          <h3 className="mt-2 font-serif text-xl leading-snug tracking-tight">
            <a
              className="text-link"
              href={watchUrl(episode)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {episode.title}
            </a>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {episode.summary}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="grid items-start gap-6 border-b border-line py-10 first:pt-0 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
      <YouTubeFacade
        videoId={episode.id}
        title={episode.title}
        kind={episode.kind}
      />
      <div>
        <p className="kicker">
          <time dateTime={episode.publishedOn}>{published}</time>
          {" · "}
          {kindLabel}
          {episode.topics.length > 0 ? ` · ${topicLine(episode)}` : ""}
        </p>
        <h3 className="mt-3 font-serif text-3xl leading-tight tracking-tight">
          {episode.title}
        </h3>
        <p className="mt-4 text-ink-soft">{episode.summary}</p>
        <p className="mt-5">
          <a
            className="text-link text-sm font-semibold"
            href={watchUrl(episode)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open on YouTube
          </a>
        </p>
      </div>
    </article>
  );
}
