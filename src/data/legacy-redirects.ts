import type { Redirect } from "next/dist/lib/load-custom-routes";
import { episodes, type Episode } from "./episodes";

/**
 * Permanent redirects for public Kajabi URLs, for a later cutover.
 * Checked against https://www.dadledger.com on 2026-11-09.
 *
 * Blog posts map to an episode page only when the iframe embed uses the
 * same YouTube id as a catalog entry. Otherwise the embed goes to its
 * YouTube watch URL. A post with no embed goes to /episodes.
 * Topic similarity is not a match.
 *
 * /blog/going-all-in-5-commitments-dad-2026 also links
 * https://youtu.be/e80RTngSh9o in the body (Brandon Robbins). That link
 * is not an embed. The only iframe is 8EOD9VLsV1k. Neither id is in the
 * catalog, so the post goes to that embed's watch URL.
 *
 * Dropped Kajabi areas (members, Crypto 101, store) go to /.
 * /offers was not a public path on 2026-11-09 (the index, a sample child,
 * the sitemap, and the homepage had no such URL), so it is not redirected.
 * /contact, /privacy, and /terms are intentionally absent.
 */

export type LegacyKind =
  | "blog-index"
  | "blog-tag"
  | "episode"
  | "youtube"
  | "no-embed"
  | "dropped";

export type LegacyBlogPost = {
  source: string;
  /** YouTube id of the iframe embed. Absent when the post has no embed. */
  youtubeId?: string;
};

export type LegacyRedirectRecord = {
  source: string;
  destination: string;
  kind: LegacyKind;
  youtubeId?: string;
  has?: { type: "query"; key: string }[];
};

export const legacyBlogPosts: LegacyBlogPost[] = [
  {
    source: "/blog/big-moves-thursday-clarity-act-dag-aiai-nasdaq",
    youtubeId: "9G0sxdZqoNw",
  },
  {
    source: "/blog/tom-luongo-big-moves-2026-dad-legacy",
    youtubeId: "W8E86mS_9D8",
  },
  {
    source: "/blog/dads-stop-wasting-time-on-social-media-ai",
  },
  {
    source: "/blog/trump-iran-ceasefire-crypto-impact-2026",
    youtubeId: "KYuAHM7WwIw",
  },
  {
    source: "/blog/money-margin-meaning-christian-dads",
    youtubeId: "1vDkwa-03MY",
  },
  {
    source: "/blog/iran-strikes-hormuz-clarity-act-live",
    youtubeId: "Z4PQ5l8o-Js",
  },
  {
    source: "/blog/mike-dickerson-dad-ledger-crypto-health-legacy",
    youtubeId: "EX3Cua-aqWA",
  },
  {
    source: "/blog/precious-metals-parabolic-constellation-acquisition",
    youtubeId: "bDps6I5gOtY",
  },
  {
    source: "/blog/crypto-market-wipe-xrp-supply-shock-2026",
    youtubeId: "nHBa4WTqDCQ",
  },
  {
    source: "/blog/tim-warren-fatherhood-crypto-legacy",
    youtubeId: "L76M1gNTf-w",
  },
  {
    source: "/blog/quantum-ascend-crypto-2026-technical-analysis",
    youtubeId: "u-lMXGUbErU",
  },
  {
    source: "/blog/venezuela-maduro-capture-oil-crypto-2026",
    youtubeId: "MimzZ6oKeQo",
  },
  {
    source: "/blog/going-all-in-5-commitments-dad-2026",
    youtubeId: "8EOD9VLsV1k",
  },
  {
    source: "/blog/bri-teresi-crypto-dads-xrp-dag-privacy",
    youtubeId: "X5vOwXF5rjo",
  },
  {
    source: "/blog/Levicryptorockbottom",
    youtubeId: "xxCgyUSP3N4",
  },
  {
    source: "/blog/riding-bears-dad-ledger",
    youtubeId: "tBa4EcokSF8",
  },
  {
    source: "/blog/tom-luongo-big-move-2026-warrior-dad-interview",
    youtubeId: "4kYA_RccgHM",
  },
  {
    source: "/blog/cftc-crypto-revolution",
    youtubeId: "ps0AZRK60W0",
  },
  {
    source: "/blog/yen-carry-trade-unwind-xrp-domino-theory",
    youtubeId: "J96DRRw-Cig",
  },
  {
    source: "/blog/purpose-in-the-grind-erik-cooper",
    youtubeId: "C58zJH3oNgU",
  },
  {
    source: "/blog/crypto-market-cycle-disbelief-phase-2025",
    youtubeId: "d3i_L3mD5AI",
  },
  {
    source: "/blog/TDLep22",
    youtubeId: "T4sewHEfuV8",
  },
  {
    source:
      "/blog/hey-dad-this-week-s-crypto-catalysts-are-a-game-changer-for-your-family-s-future-etfs-explode-fed-cuts-rates-and-how-to-stack-wins-for-your-wife-kids",
    youtubeId: "ByxkKbhna1g",
  },
  {
    source:
      "/blog/leveling-up-as-a-dad-crypto-security-family-wins-and-faith-fueled-financial-wisdom-from-my-chat-with-trent",
    youtubeId: "8Pb5V--OUTo",
  },
  {
    source:
      "/blog/navigating-the-financial-frontier-insights-from-dad-ledger-s-latest-episode-on-gold-crypto-and-housing-revolution",
    youtubeId: "T_0HNEklBVI",
  },
  {
    source:
      "/blog/lessons-from-the-dad-ledger-balancing-crypto-family-and-faith-in-a-changing-world",
    youtubeId: "5s1cTeCxQVg",
  },
  {
    source:
      "/blog/a-dad-s-guide-to-diving-into-crypto-lessons-from-my-interview-with-joao-from-constellation-network",
    youtubeId: "kWa2kd0UjNQ",
  },
  {
    source: "/blog/thedadledgerep10",
    youtubeId: "0jNLXlYC8Sw",
  },
];

/**
 * Paths Ryan dropped on 9 Nov 2026. Each family was a public Kajabi URL
 * that day: /login, /library, /password/new, /store, /crypto, and the
 * homepage form action under /forms/.
 */
export const droppedLegacySources = [
  "/login",
  "/library",
  "/library/:path+",
  "/password/:path+",
  "/store",
  "/store/:path+",
  "/crypto",
  "/forms/:path+",
] as const;

const openSources = ["/contact", "/privacy", "/terms", "/offers", "/offers/:path+"];

export function watchUrlForId(youtubeId: string): string {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}

export function destinationForEmbed(
  youtubeId: string | undefined,
  catalog: readonly Episode[] = episodes,
): { destination: string; kind: "episode" | "youtube" | "no-embed" } {
  if (!youtubeId) {
    return { destination: "/episodes", kind: "no-embed" };
  }

  const match = catalog.find((episode) => episode.id === youtubeId);
  if (match) {
    return { destination: `/episodes/${match.slug}`, kind: "episode" };
  }

  return { destination: watchUrlForId(youtubeId), kind: "youtube" };
}

export function legacyRedirectRecords(
  catalog: readonly Episode[] = episodes,
): LegacyRedirectRecord[] {
  const blogPosts: LegacyRedirectRecord[] = legacyBlogPosts.map((post) => {
    const resolved = destinationForEmbed(post.youtubeId, catalog);
    return {
      source: post.source,
      destination: resolved.destination,
      kind: resolved.kind,
      youtubeId: post.youtubeId,
    };
  });

  return [
    ...blogPosts,
    {
      source: "/blog",
      destination: "/episodes",
      kind: "blog-tag",
      has: [{ type: "query", key: "tag" }],
    },
    {
      source: "/blog",
      destination: "/episodes",
      kind: "blog-index",
    },
    ...droppedLegacySources.map((source) => ({
      source,
      destination: "/",
      kind: "dropped" as const,
    })),
  ];
}

export function legacyRedirects(
  catalog: readonly Episode[] = episodes,
): Redirect[] {
  return legacyRedirectRecords(catalog).map((record) => {
    const redirect: Redirect = {
      source: record.source,
      destination: record.destination,
      permanent: true,
    };

    if (record.has) {
      redirect.has = record.has;
    }

    return redirect;
  });
}

export function legacyRedirectCounts(catalog: readonly Episode[] = episodes): Record<LegacyKind, number> {
  const counts: Record<LegacyKind, number> = {
    "blog-index": 0,
    "blog-tag": 0,
    episode: 0,
    youtube: 0,
    "no-embed": 0,
    dropped: 0,
  };

  for (const record of legacyRedirectRecords(catalog)) {
    counts[record.kind] += 1;
  }

  return counts;
}

export function assertLegacyRedirects(catalog: readonly Episode[] = episodes): void {
  const records = legacyRedirectRecords(catalog);
  const sources = new Set(records.map((record) => record.source));

  if (legacyBlogPosts.length !== 28) {
    throw new Error(`Expected 28 blog posts, found ${legacyBlogPosts.length}`);
  }

  for (const source of openSources) {
    if (sources.has(source)) {
      throw new Error(`Open or absent path must not redirect: ${source}`);
    }
  }

  for (const record of records) {
    if (record.kind === "episode") {
      const match = catalog.find((episode) => episode.id === record.youtubeId);
      if (!match || record.destination !== `/episodes/${match.slug}`) {
        throw new Error(`Episode redirect is not an exact id match: ${record.source}`);
      }
    }

    if (record.kind === "youtube") {
      if (!record.youtubeId || record.destination !== watchUrlForId(record.youtubeId)) {
        throw new Error(`YouTube redirect is not the embed watch URL: ${record.source}`);
      }
      if (catalog.some((episode) => episode.id === record.youtubeId)) {
        throw new Error(`Catalog id was sent to YouTube: ${record.youtubeId}`);
      }
    }

    if (record.kind === "no-embed") {
      if (record.youtubeId || record.destination !== "/episodes") {
        throw new Error(`Post without an embed must go to /episodes: ${record.source}`);
      }
    }

    if (
      record.destination.startsWith("/episodes/") &&
      record.kind !== "episode"
    ) {
      throw new Error(`Episode page used without an exact id match: ${record.source}`);
    }
  }

  const yen = records.find(
    (record) => record.source === "/blog/yen-carry-trade-unwind-xrp-domino-theory",
  );
  if (yen?.destination.includes("economics-of-the-yen-carry-trade")) {
    throw new Error("Yen carry post was matched by topic");
  }

  const tim = records.find(
    (record) => record.source === "/blog/tim-warren-fatherhood-crypto-legacy",
  );
  if (tim?.destination.startsWith("/episodes/")) {
    throw new Error("Tim Warren post was matched by topic");
  }
}
