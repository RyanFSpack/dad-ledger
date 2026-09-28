/**
 * Recent public uploads from The Dad Ledger.
 * Snapshot of the channel RSS feed (no API key) on 2026-09-28.
 * That feed returns the latest 15 uploads, so older films stay on YouTube
 * until they are added here.
 *
 * To list a new film, append an object. `id` is the YouTube video id.
 * Use kind "episode" for long-form and "short" for Shorts.
 */

export const topics = ["faith", "family", "fatherhood", "wealth"] as const;

export type Topic = (typeof topics)[number];

export type EpisodeKind = "episode" | "short";

export type Episode = {
  id: string;
  title: string;
  publishedOn: string;
  kind: EpisodeKind;
  summary: string;
  topics: Topic[];
};

export const episodes: Episode[] = [
  {
    id: "DZWIUZ7byGg",
    title: "Cryptocurrency Adoption and Risks with Stable Coins",
    publishedOn: "2026-08-31",
    kind: "short",
    summary:
      "A short conversation on privacy coins and on stablecoins as both a payment tool and a system that can observe how money moves.",
    topics: ["wealth"],
  },
  {
    id: "rAHLut6ELeQ",
    title: "AI Is Making Financial Privacy More Important",
    publishedOn: "2026-08-30",
    kind: "short",
    summary:
      "Why wider use of AI raises the stakes for keeping personal and financial information under a person's own control.",
    topics: ["wealth"],
  },
  {
    id: "1LRQq-n1aC4",
    title: "Crypto Bear Market: Is It Time to Buy the Dip?",
    publishedOn: "2026-08-28",
    kind: "short",
    summary:
      "A look at rates, inflation, and a weak crypto market. The film asks the question. It does not answer it for your household.",
    topics: ["wealth"],
  },
  {
    id: "0qXwTUPOqMw",
    title: "Bri's Journey: Trusting God in Uncertainty",
    publishedOn: "2026-08-27",
    kind: "short",
    summary:
      "On slow progress, and on treating a difficult opening as a reason to move forward with trust.",
    topics: ["faith"],
  },
  {
    id: "40s0iI6prcw",
    title: "Free the Money: Connecting with Smart People",
    publishedOn: "2026-08-27",
    kind: "short",
    summary:
      "How a run of conversations with builders turned into a place to talk about money, privacy, and technology.",
    topics: ["wealth"],
  },
  {
    id: "4YnzJRR4gsg",
    title: "The Market Pattern That Has Repeated for 100 Years",
    publishedOn: "2026-08-26",
    kind: "short",
    summary:
      "On studying cycles that keep returning, and on treating investment decisions as a practice rather than a single bet.",
    topics: ["wealth"],
  },
  {
    id: "WLWj3vaqCuY",
    title: "20% Returns Every Month? I Thought It Was a Scam",
    publishedOn: "2026-08-25",
    kind: "short",
    summary:
      "A skeptical first reaction to a pitch that advertised unusually high monthly returns.",
    topics: ["wealth"],
  },
  {
    id: "Vt02gnk8Ee0",
    title: "Are You Making Life Too Easy for Your Kids?",
    publishedOn: "2026-08-23",
    kind: "short",
    summary:
      "A parenting conversation about challenge, discipline, and letting children fail at things that are still small.",
    topics: ["family", "fatherhood"],
  },
  {
    id: "hqXAEWP6VWw",
    title: "Economics of the Yen Carry Trade",
    publishedOn: "2026-08-22",
    kind: "episode",
    summary:
      "How borrowing cheap yen has funded positions around the world, and what became visible when that trade strained in the summer of 2024.",
    topics: ["wealth"],
  },
  {
    id: "bY6P34LiHTw",
    title: "The Hardest and Most Rewarding Job in the World",
    publishedOn: "2026-08-22",
    kind: "short",
    summary:
      "A father on children learning to earn money, handle collectible cards as a small investment, and take responsibility.",
    topics: ["family", "fatherhood"],
  },
  {
    id: "qqYcL41Mc2s",
    title: "Why Most People Follow Instead of Lead",
    publishedOn: "2026-08-21",
    kind: "short",
    summary:
      "Leadership as the decision to step forward and take responsibility while everyone else waits.",
    topics: ["fatherhood"],
  },
  {
    id: "eYev60TaurM",
    title: "How ETFs Really Work",
    publishedOn: "2026-08-20",
    kind: "episode",
    summary:
      "How spot Bitcoin and Ethereum ETFs create and redeem shares, what the daily flow number leaves out, and what changed when in-kind transfers were allowed.",
    topics: ["wealth"],
  },
  {
    id: "MKwR-lk4iHg",
    title: "Smart Investors Don't Just Hold Forever",
    publishedOn: "2026-08-18",
    kind: "short",
    summary:
      "On having rules for when to take gains and where capital goes next. The film is educational, not a plan for any particular family.",
    topics: ["wealth"],
  },
  {
    id: "9nr57fd9P9w",
    title:
      "From Prison to $DAG Staking: One Dad's Real Utility Playbook & Family Strategy (2026)",
    publishedOn: "2026-08-17",
    kind: "episode",
    summary:
      "Levi talks about leaving addiction and prison, becoming a husband and father of two, and the patient way he researches a long-term digital-asset position for his family.",
    topics: ["faith", "family", "fatherhood", "wealth"],
  },
  {
    id: "CDaK2h_joFo",
    title: "Zano and Crypto Privacy",
    publishedOn: "2026-08-17",
    kind: "short",
    summary:
      "A short introduction to Zano, a privacy-focused blockchain, and how it differs from Monero. Not a recommendation.",
    topics: ["wealth"],
  },
];
