# Dad Ledger

Public hub for [The Dad Ledger](https://www.youtube.com/@TheDadLedger), a YouTube documentary channel on faith, family, fatherhood, and smart wealth. Hosted by Trent, Ryan, and Timo.

Hub v1 is a viewing guide: Home, Episodes, and About. It is not a membership, a course, or a store. There is nothing to buy, and no API keys or other secrets are required.

The live domain is still elsewhere. Do not attach `dadledger.com` or change DNS from this project.

## Local development

Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm start
```

## Episodes

Records live in `src/data/episodes.ts`. The current list is a snapshot of the public YouTube channel RSS feed, taken on September 28, 2026, with no API key. That feed returns the latest 15 uploads, so older films remain on YouTube until someone adds them here.

To add a film, append an object:

- `id` — YouTube video id
- `title` — display title
- `publishedOn` — `YYYY-MM-DD`
- `kind` — `episode` for long-form, `short` for Shorts
- `summary` — one or two calm sentences
- `topics` — any of `faith`, `family`, `fatherhood`, `wealth`

Players use the privacy-enhanced YouTube embed and load only after a visitor presses play.

## Deploy on Vercel

1. Import the GitHub repository `RyanFSpack/dad-ledger`.
2. Framework preset: Next.js. Install command `npm install`. Build command `npm run build`. Leave the output directory on the Next.js default.
3. No environment variables are required for v1.
4. Do not add `dadledger.com` as a custom domain, and do not change DNS. The replacement site can be reviewed on the Vercel URL until a later, separate cutover.
5. Optional, only after that cutover: set `NEXT_PUBLIC_SITE_URL` to the canonical origin (for example `https://www.dadledger.com`). Until then, metadata, the sitemap, and `robots.txt` use the Vercel deployment host (`VERCEL_URL`), or `http://localhost:3000` when you build locally.

Production should build from `main` after the hub-v1 pull request is reviewed and merged. Do not force-push.

## Out of scope for v1

- Custom domain and DNS
- Payments, accounts, memberships, and courses
- A live YouTube Data API integration
