/**
 * Public uploads from The Dad Ledger.
 * Snapshot on 2026-10-01. The channel uploads playlist was listed with
 * yt-dlp --flat-playlist (no API key). Title, publish date, and description
 * for each film come from that video's public watch page.
 * The uploads playlist, the Videos tab, and the Shorts tab listed the same
 * 40 ids. kind "episode" is the Videos tab. kind "short" is the Shorts tab.
 *
 * `id` is the YouTube video id. `slug` is a stable kebab-case form of the
 * public title at the time it was added. Summaries are one or two neutral
 * sentences from the public title and description.
 */

export const topics = ["faith", "family", "fatherhood", "wealth"] as const;

export type Topic = (typeof topics)[number];

export type EpisodeKind = "episode" | "short";

export type Episode = {
  id: string;
  slug: string;
  title: string;
  publishedOn: string;
  kind: EpisodeKind;
  summary: string;
  topics: Topic[];
};

export const episodes: Episode[] = [
  {
    id: "DZWIUZ7byGg",
    slug: "cryptocurrency-adoption-and-risks-with-stable-coins",
    title: "Cryptocurrency Adoption and Risks with Stable Coins",
    publishedOn: "2026-08-31",
    kind: "short",
    summary:
      "A conversation on interest in Monero, Zcash, and Zano, and on stablecoins as a payment tool or a system for mass surveillance.",
    topics: ["wealth"],
  },
  {
    id: "rAHLut6ELeQ",
    slug: "ai-is-making-financial-privacy-more-important",
    title: "AI Is Making Financial Privacy More Important",
    publishedOn: "2026-08-30",
    kind: "short",
    summary:
      "As AI is used more in daily life, the film looks at privacy-focused browsers and privacy coins as ways people try to keep control of their data and money.",
    topics: ["wealth"],
  },
  {
    id: "1LRQq-n1aC4",
    slug: "crypto-bear-market-is-it-time-to-buy-the-dip",
    title: "Crypto Bear Market: Is It Time to Buy the Dip?",
    publishedOn: "2026-08-28",
    kind: "short",
    summary:
      "A look at a weak crypto market beside stronger AI stocks and the S&P, and at rates, inflation, oil, Federal Reserve policy, and geopolitical tension. The film asks whether it is a time to buy, and it does not decide that for any household.",
    topics: ["wealth"],
  },
  {
    id: "0qXwTUPOqMw",
    slug: "bris-journey-trusting-god-in-uncertainty",
    title: "Bri's Journey  Trusting God in Uncertainty",
    publishedOn: "2026-08-27",
    kind: "short",
    summary:
      "On how day-to-day progress is hard to see, and on treating a difficult opening as a reason to trust God and move.",
    topics: ["faith"],
  },
  {
    id: "40s0iI6prcw",
    slug: "free-the-money-connecting-with-smart-people",
    title: "Free the Money  Connecting with Smart People",
    publishedOn: "2026-08-27",
    kind: "short",
    summary:
      "How conversations with founders, investors, and developers grew into Free the Money, talks on technology, cryptocurrency, hard money, and privacy.",
    topics: ["wealth"],
  },
  {
    id: "4YnzJRR4gsg",
    slug: "the-market-pattern-that-has-repeated-for-100-years",
    title: "The Market Pattern That Has Repeated for 100 Years",
    publishedOn: "2026-08-26",
    kind: "short",
    summary:
      "On market cycles that keep returning, and on studying those patterns and improving a process the way an athlete repeats a shot.",
    topics: ["wealth"],
  },
  {
    id: "WLWj3vaqCuY",
    slug: "20-returns-every-month-i-thought-it-was-a-scam",
    title: "20% Returns Every Month? I Thought It Was a Scam",
    publishedOn: "2026-08-25",
    kind: "short",
    summary:
      "A first reaction that a pitch of 20 percent a month had to be a scam, then what the speaker saw after a rewards system and a computer node were running, including why taking profits early came up.",
    topics: ["wealth"],
  },
  {
    id: "Vt02gnk8Ee0",
    slug: "are-you-making-life-too-easy-for-your-kids",
    title: "Are You Making Life Too Easy for Your Kids?",
    publishedOn: "2026-08-23",
    kind: "short",
    summary:
      "A parenting conversation about why children need challenge, discipline, and room to fail, and about admitting mistakes while teaching the next step.",
    topics: ["family", "fatherhood"],
  },
  {
    id: "hqXAEWP6VWw",
    slug: "economics-of-the-yen-carry-trade",
    title: "Economics of the Yen Carry Trade",
    publishedOn: "2026-08-22",
    kind: "episode",
    summary:
      "How borrowing cheap yen has funded positions around the world, how that trade strained in the summer of 2024, and why the film says the position is large again. It presents this as an explanation of market plumbing, not advice.",
    topics: ["wealth"],
  },
  {
    id: "bY6P34LiHTw",
    slug: "the-hardest-and-most-rewarding-job-in-the-world",
    title: "The Hardest and Most Rewarding Job in the World",
    publishedOn: "2026-08-22",
    kind: "short",
    summary:
      "A father on children learning to earn money, treat collectible cards as a small investment, take profits, and make their own decisions, including one $130 purchase.",
    topics: ["family", "fatherhood"],
  },
  {
    id: "qqYcL41Mc2s",
    slug: "why-most-people-follow-instead-of-lead",
    title: "Why Most People Follow Instead of Lead",
    publishedOn: "2026-08-21",
    kind: "short",
    summary:
      "On leadership as stepping forward, warning others, and taking responsibility while everyone else waits.",
    topics: [],
  },
  {
    id: "eYev60TaurM",
    slug: "how-etfs-really-work",
    title: "How ETFs Really Work",
    publishedOn: "2026-08-20",
    kind: "episode",
    summary:
      "How spot Bitcoin and Ethereum ETFs create and redeem shares, what the daily flow number leaves out, and what the film says changed with in-kind transfers in 2025.",
    topics: ["wealth"],
  },
  {
    id: "MKwR-lk4iHg",
    slug: "smart-investors-dont-just-hold-forever",
    title: "Smart Investors Don’t Just Hold Forever",
    publishedOn: "2026-08-18",
    kind: "short",
    summary:
      "On rules for taking profits and deciding where capital goes next, including an EMA approach to reading a trend and planning an exit. Educational, not a plan for any household.",
    topics: ["wealth"],
  },
  {
    id: "9nr57fd9P9w",
    slug: "from-prison-to-dag-staking-one-dads-real-utility-playbook-and-family-strategy-2026",
    title: "From Prison to $DAG Staking: One Dad’s Real Utility Playbook & Family Strategy (2026)",
    publishedOn: "2026-08-17",
    kind: "episode",
    summary:
      "Levi talks about leaving addiction and prison, becoming a husband and father of two, and how he researches a long-term position in the Constellation ecosystem, including delegated staking, for his family.",
    topics: ["faith", "family", "fatherhood", "wealth"],
  },
  {
    id: "CDaK2h_joFo",
    slug: "zano-the-next-big-thing-in-crypto-privacy-edited-3-days",
    title: "Zano The Next Big Thing in Crypto Privacy Edited 3 days",
    publishedOn: "2026-08-17",
    kind: "short",
    summary:
      "The film asks whether Zano could matter among privacy coins, and it describes a private-by-default chain in the CryptoNote family that can issue confidential tokens and a stablecoin called fUSD. It sets that beside Monero and is not a recommendation.",
    topics: ["wealth"],
  },
  {
    id: "6-mhK-rC9DU",
    slug: "xrp-holders-perspective-on-market-doldrums",
    title: "XRP Holder's Perspective on Market Doldrums",
    publishedOn: "2026-08-16",
    kind: "short",
    summary:
      "Brie on why she still sees long-term use in XRP after liquidations and a weak market, and on attention around Monero and Zcash.",
    topics: ["wealth"],
  },
  {
    id: "zLDs1euv0TM",
    slug: "im-waiting-for-bitcoin-to-hurt-one-more-time",
    title: "I’m Waiting for Bitcoin to Hurt One More Time",
    publishedOn: "2026-08-14",
    kind: "short",
    summary:
      "The speaker says he is not buying Bitcoin yet, and that he wants it to look oversold and sting people once more before he moves back in.",
    topics: ["wealth"],
  },
  {
    id: "ncC-Y8K8ruY",
    slug: "ai-agents-will-shop-for-you-and-pay-with-crypto-onlineincome",
    title: "AI Agents Will Shop for You and Pay With Crypto #onlineincome",
    publishedOn: "2026-08-13",
    kind: "short",
    summary:
      "On AI agents that might check a calendar, choose gifts, pay with crypto, and arrange delivery, and on the privacy questions of giving an agent a wallet and an address book.",
    topics: ["wealth"],
  },
  {
    id: "WxK6EceJBcw",
    slug: "tv-or-crypto-the-pandemic-money-decision",
    title: "TV or Crypto? The Pandemic Money Decision",
    publishedOn: "2026-08-12",
    kind: "short",
    summary:
      "On putting pandemic stimulus into crypto instead of spending it, and on taking profits while prices were still high.",
    topics: ["wealth"],
  },
  {
    id: "YoEUgt4pvCI",
    slug: "golf-influencer-s-pebble-beach-experience",
    title: "Golf Influencer_s Pebble Beach Experience",
    publishedOn: "2026-08-11",
    kind: "short",
    summary:
      "Bree on playing Pebble Beach, including a migraine and the seventh hole, a hope of attending the Masters, and meeting Donald Trump at Trump International Golf Club.",
    topics: [],
  },
  {
    id: "azH_gYbg-2I",
    slug: "becoming-a-dad-made-me-rethink-everything",
    title: "Becoming a Dad Made Me Rethink Everything",
    publishedOn: "2026-08-10",
    kind: "short",
    summary:
      "On failing at trading, and on becoming a father as the reason to look for another way to provide for a family.",
    topics: ["family", "fatherhood"],
  },
  {
    id: "BX7cyedAG70",
    slug: "why-privacy-coins-could-explode-in-the-ai-era",
    title: "Why Privacy Coins Could Explode in the AI Era",
    publishedOn: "2026-08-07",
    kind: "short",
    summary:
      "On privacy coins as a possible response to financial surveillance in an AI era, and on the speaker still accumulating XRP with Gemini credit-card rewards.",
    topics: ["wealth"],
  },
  {
    id: "aPBmR96yWQk",
    slug: "i-was-homeless-with-17-then-i-found-xrp-at-0-25",
    title: "I Was Homeless With $17 Then I Found XRP at $0.25",
    publishedOn: "2026-08-06",
    kind: "short",
    summary:
      "A personal account of a 2016 divorce, $17 in a checking account, and noticing someone buy XRP at $0.25 during forklift training, which started a study of crypto markets.",
    topics: ["wealth"],
  },
  {
    id: "EkKJ2AOspjI",
    slug: "how-stablecoin-reserves-actually-work",
    title: "How Stablecoin Reserves Actually Work",
    publishedOn: "2026-08-05",
    kind: "episode",
    summary:
      "How stablecoin reserves work: what a claim represents, why most people cannot redeem one-for-one on weekends, how an issuer earns interest, and what the 2023 SVB weekend and newer U.S. rules showed.",
    topics: ["wealth"],
  },
  {
    id: "t3FqCnOWZc4",
    slug: "should-you-quit-your-job-to-trade-full-time-heres-the-reality",
    title: "Should You Quit Your Job to Trade Full-Time? Here’s the Reality",
    publishedOn: "2026-08-05",
    kind: "short",
    summary:
      "A trader on taking profits near a market top, what happened when the cycle turned, and why he went back to a regular job while still trading.",
    topics: ["wealth"],
  },
  {
    id: "LEAOPZw3HUM",
    slug: "the-biggest-crypto-mistake-beginners-keep-making",
    title: "The Biggest Crypto Mistake Beginners Keep Making",
    publishedOn: "2026-08-04",
    kind: "short",
    summary:
      "On hype and paid promotion steering beginners toward weak coins, and on studying charts and data instead.",
    topics: ["wealth"],
  },
  {
    id: "3LvlTWtMBA4",
    slug: "tim-warren-on-side-hustles-risk-and-building-wealth-for-your-family",
    title: "Tim Warren on Side Hustles, Risk, and Building Wealth for Your Family",
    publishedOn: "2026-08-03",
    kind: "episode",
    summary:
      "Tim Warren on moving from a path toward football coaching into crypto trading, using side work to build capital, and arranging the work so he could be home with his family.",
    topics: ["family", "fatherhood", "wealth"],
  },
  {
    id: "wBnV-ypwp00",
    slug: "this-simple-habit-puts-you-ahead-of-most-traders",
    title: "This Simple Habit Puts You Ahead of Most Traders",
    publishedOn: "2026-08-03",
    kind: "short",
    summary:
      "On following a chart and a set of trading rules, and on posting trades in public so other people could check them.",
    topics: ["wealth"],
  },
  {
    id: "Vc2FMVjE-k0",
    slug: "would-you-reject-millions-because-of-taxes",
    title: "Would You Reject Millions Because of Taxes?",
    publishedOn: "2026-08-02",
    kind: "short",
    summary:
      "On turning down a profit, including lottery winnings, out of worry about the tax, and on the observation that a tax bill usually means money was made.",
    topics: ["wealth"],
  },
  {
    id: "uEmRH6i6fxE",
    slug: "why-bitcoin-cant-be-stopped-its-all-math",
    title: "Why Bitcoin Can’t Be Stopped It’s All Math",
    publishedOn: "2026-07-31",
    kind: "short",
    summary:
      "On Bitcoin's mining, supply, and rewards as a fixed mathematical schedule, and on why the film says that design makes the network hard to stop.",
    topics: ["wealth"],
  },
  {
    id: "atKg2IDhLl8",
    slug: "privacy-boom-why-flock-cameras-and-surveillance-are-pushing-everyone-into-privacy-coins-bri-teresi",
    title: "Privacy Boom: Why Flock Cameras & Surveillance Are Pushing Everyone Into Privacy Coins | Bri Teresi",
    publishedOn: "2026-07-31",
    kind: "episode",
    summary:
      "Bri Teresi on Flock cameras, on using Zano, Zcash, and Monero, and on privacy risks if AI agents spend money. She also gives an account that God opened an unexpected door through Free the Money.",
    topics: ["faith", "wealth"],
  },
  {
    id: "NFq0WD-a2po",
    slug: "why-99-of-traders-should-never-use-leverage",
    title: "Why 99% of Traders Should NEVER Use Leverage",
    publishedOn: "2026-07-30",
    kind: "short",
    summary:
      "A trader with nearly a decade of experience on why he thinks almost all traders should avoid leverage, with notes on how he buys and sells, holding Tesla, and reading charts.",
    topics: ["wealth"],
  },
  {
    id: "Gv9AX5QJ-5Y",
    slug: "i-started-with-nothing-in-a-laundry-room",
    title: "I Started With Nothing in a Laundry Room",
    publishedOn: "2026-07-29",
    kind: "short",
    summary:
      "On starting in 2019 with his wife's old laptop in a laundry room, next to a washing machine, because there was no studio.",
    topics: [],
  },
  {
    id: "fZQ3jXoUB48",
    slug: "spacex-to-100-charts-point-to-a-major-buy-level-right-now-professor-keith-interview",
    title: "SpaceX to $100? Charts Point to a Major Buy Level Right Now | Professor Keith Interview",
    publishedOn: "2026-07-27",
    kind: "episode",
    summary:
      "Professor Keith on why he is watching a $100 area on SpaceX after a drop from post-IPO highs, using charts, and on rules he names: no leverage for most people, taking profits, and staying with larger coins.",
    topics: ["wealth"],
  },
  {
    id: "b2qtDcT78sQ",
    slug: "cryptowendyo-the-4-tier-crypto-strategy-to-protect-your-familys-wealth",
    title: "CryptoWendyO: The 4-Tier Crypto Strategy to Protect Your Family’s Wealth",
    publishedOn: "2026-07-24",
    kind: "episode",
    summary:
      "CryptoWendyO on a four-tier split between long-term bitcoin and more speculative coins, on pulling the original capital back out, and on waiting to self-custody until private keys are understood. She also talks about staying present with children.",
    topics: ["family", "fatherhood", "wealth"],
  },
  {
    id: "8pZ1HtCerXI",
    slug: "crypto-bear-market-lessons-learned",
    title: "Crypto Bear Market: Lessons Learned",
    publishedOn: "2026-07-23",
    kind: "short",
    summary:
      "Lessons the film draws from earlier crypto cycles, with attention to XRP's stated use and to judging a project before the chart has moved.",
    topics: ["wealth"],
  },
  {
    id: "DxXX8oz3XPE",
    slug: "the-truth-about-privacy-coins-nobodys-talking-about-w-briteresi",
    title: "The Truth About Privacy Coins Nobody's Talking About w/ @BriTeresi",
    publishedOn: "2026-07-23",
    kind: "episode",
    summary:
      "A remastered conversation between Ryan and Bri Teresi on privacy coins such as Zano and FUSD, on faith, and on advice for fathers about raising a daughter.",
    topics: ["faith", "family", "fatherhood", "wealth"],
  },
  {
    id: "gJIj-TojazY",
    slug: "dad-ledger-the-prayer-of-jabez",
    title: "Dad Ledger: The Prayer of Jabez",
    publishedOn: "2026-07-22",
    kind: "short",
    summary:
      "A sample close from a Tuesday Dad Ledger livestream: markets, what fathers are doing for their families and for God, and the Prayer of Jabez.",
    topics: ["faith", "family", "fatherhood", "wealth"],
  },
  {
    id: "PeA6C0I1UT4",
    slug: "the-xrp-blueprint-faith-blockchain-and-the-greatest-wealth-transfer",
    title: "The XRP Blueprint Faith, Blockchain, and the Greatest Wealth Transfer",
    publishedOn: "2026-07-22",
    kind: "episode",
    summary:
      "A remastered conversation between Ryan and Trent on utility networks such as XRP and XDC, on decentralized finance, and on Trent's account of leaving addiction and using crypto gains for mission work, including families in debt in Pakistan.",
    topics: ["faith", "family", "fatherhood", "wealth"],
  },
  {
    id: "SvZRy_vgaVQ",
    slug: "navigating-the-bear-market-finance-fatherhood-and-faith-the-dad-ledger",
    title: "Navigating the Bear Market: Finance, Fatherhood & Faith | The Dad Ledger",
    publishedOn: "2026-07-21",
    kind: "episode",
    summary:
      "The first livestream on this YouTube channel, with Trent, Ryan, and Timo on a crypto bear market, the Clarity Act, and being present with their children. They also talk about looking at the markets through faith.",
    topics: ["faith", "family", "fatherhood", "wealth"],
  },
];
