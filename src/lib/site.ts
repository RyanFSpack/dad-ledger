export type PodcastLink = {
  label: string;
  href: string;
};

export const site = {
  name: "Dad Ledger",
  channelName: "The Dad Ledger",
  description:
    "Dad Ledger is a YouTube documentary channel on faith, family, fatherhood, and smart wealth, hosted by Trent, Ryan, and Timo.",
  youtubeUrl: "https://www.youtube.com/@TheDadLedger",
  subscribeUrl: "https://www.youtube.com/@TheDadLedger?sub_confirmation=1",
  channelId: "UCg2-WgvQz3n6laeNgGa732g",
  hosts: ["Trent", "Ryan", "Timo"] as const,
  catalogUpdated: "2026-10-01",
  /**
   * Public listen pages for the show titled The Dad Ledger.
   * Checked 2026-10-01: Apple Podcasts id 1822824895 and Spotify show
   * 2ZAp5zuAneDUscecVumX1F. Episode titles overlap this YouTube catalog,
   * including Economics of the Yen Carry Trade.
   * Leave this empty if a link cannot be verified. Do not point it at
   * dadledger.com from this repo.
   */
  podcastLinks: [
    {
      label: "Apple Podcasts",
      href: "https://podcasts.apple.com/us/podcast/the-dad-ledger/id1822824895",
    },
    {
      label: "Spotify",
      href: "https://open.spotify.com/show/2ZAp5zuAneDUscecVumX1F",
    },
  ] as PodcastLink[],
};
