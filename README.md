# Dad Ledger

Public hub for [The Dad Ledger](https://www.youtube.com/@TheDadLedger), a YouTube documentary channel on faith, family, fatherhood, and smart wealth. Hosted by Trent, Ryan, and Timo.

The site is a viewing guide: Home, Episodes, and About, plus a page for each public upload. It is not a membership, a course, or a store. There is nothing to buy, and no API keys or other secrets are required.

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

Records live in `src/data/episodes.ts`. The current list is the public uploads playlist, taken on October 1, 2026, with `yt-dlp --flat-playlist` and no API key. Titles, dates, and descriptions were read from each video's public watch page. `kind` follows the channel Videos tab (`episode`) and Shorts tab (`short`).

To add a film, append an object:

- `id` — YouTube video id
- `slug` — stable kebab-case id used in `/episodes/[slug]`
- `title` — display title
- `publishedOn` — `YYYY-MM-DD`
- `kind` — `episode` for long-form, `short` for Shorts
- `summary` — one or two calm sentences from the public title and description
- `topics` — any of `faith`, `family`, `fatherhood`, `wealth`

Players use the privacy-enhanced YouTube embed and load only after a visitor presses play.

## Deploy on Vercel

1. Import the GitHub repository `RyanFSpack/dad-ledger`.
2. Framework preset: Next.js. Install command `npm install`. Build command `npm run build`. Leave the output directory on the Next.js default.
3. No environment variables are required.
4. Do not add `dadledger.com` as a custom domain, and do not change DNS. The replacement site can be reviewed on the Vercel URL until a later, separate cutover.
5. Optional, only after that cutover: set `NEXT_PUBLIC_SITE_URL` to the canonical origin (for example `https://www.dadledger.com`). Do not set it from this repository. Until it is set, a production deployment uses `VERCEL_PROJECT_PRODUCTION_URL` when `VERCEL_ENV` is `production`. Other deployments use `VERCEL_URL`. A local build uses `http://localhost:3000`.

Production should build from `main` after a pull request is reviewed and merged. Do not force-push.

## Still out of scope

- Custom domain and DNS
- Payments, accounts, memberships, and courses
- A live YouTube Data API integration
