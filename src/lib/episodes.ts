import {
  episodes,
  type Episode,
  type EpisodeKind,
  type Topic,
} from "@/data/episodes";

export type { Episode, EpisodeKind, Topic };

export const topicLabels: Record<Topic, string> = {
  faith: "Faith",
  family: "Family",
  fatherhood: "Fatherhood",
  wealth: "Smart wealth",
};

export function episodeBySlug(slug: string): Episode | undefined {
  return episodes.find((episode) => episode.slug === slug);
}

export function episodePath(episode: Episode): string {
  return `/episodes/${episode.slug}`;
}

export function episodeNeighbors(episode: Episode): {
  newer?: Episode;
  older?: Episode;
} {
  const index = episodes.findIndex((item) => item.id === episode.id);
  if (index < 0) {
    return {};
  }

  return {
    newer: index > 0 ? episodes[index - 1] : undefined,
    older: index < episodes.length - 1 ? episodes[index + 1] : undefined,
  };
}

export function embedUrl(episode: Episode): string {
  return `https://www.youtube-nocookie.com/embed/${episode.id}`;
}

export function episodesByKind(kind: EpisodeKind): Episode[] {
  return episodes
    .filter((episode) => episode.kind === kind)
    .sort((a, b) => b.publishedOn.localeCompare(a.publishedOn) || a.title.localeCompare(b.title));
}

export function latestEpisode(kind: EpisodeKind): Episode | undefined {
  return episodesByKind(kind)[0];
}

export function watchUrl(episode: Episode): string {
  if (episode.kind === "short") {
    return `https://www.youtube.com/shorts/${episode.id}`;
  }

  return `https://www.youtube.com/watch?v=${episode.id}`;
}

export function thumbnailUrl(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

export function topicLine(episode: Episode): string {
  return episode.topics.map((topic) => topicLabels[topic]).join(" · ");
}
