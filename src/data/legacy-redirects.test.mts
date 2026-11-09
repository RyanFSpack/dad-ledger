import assert from "node:assert/strict";
import { test } from "node:test";
import { episodes, type Episode } from "./episodes";
import {
  assertLegacyRedirects,
  destinationForEmbed,
  legacyRedirectCounts,
  legacyRedirectRecords,
} from "./legacy-redirects";

test("live catalog redirects use exact video ids only", () => {
  assertLegacyRedirects(episodes);
  const counts = legacyRedirectCounts(episodes);
  assert.equal(counts.episode, 0);
  assert.equal(counts.youtube, 27);
  assert.equal(counts["no-embed"], 1);
  assert.equal(counts["blog-index"], 1);
  assert.equal(counts["blog-tag"], 1);
  assert.equal(counts.dropped, 8);
});

test("an exact catalog id maps to that episode slug", () => {
  const postId = "J96DRRw-Cig";
  const fake: Episode = {
    id: postId,
    slug: "exact-id-only",
    title: "Exact",
    publishedOn: "2026-01-01",
    kind: "episode",
    summary: "Test catalog entry.",
    topics: ["wealth"],
  };
  const resolved = destinationForEmbed(postId, [fake]);
  assert.deepEqual(resolved, {
    destination: "/episodes/exact-id-only",
    kind: "episode",
  });

  const records = legacyRedirectRecords([fake]);
  const yen = records.find(
    (record) => record.source === "/blog/yen-carry-trade-unwind-xrp-domino-theory",
  );
  assert.equal(yen?.destination, "/episodes/exact-id-only");
  assert.equal(yen?.kind, "episode");

  const other = records.find(
    (record) => record.source === "/blog/tim-warren-fatherhood-crypto-legacy",
  );
  assert.equal(other?.kind, "youtube");
  assert.equal(other?.destination, "https://www.youtube.com/watch?v=L76M1gNTf-w");
});

test("catalog keeps old slugs and adds the eleven new uploads", () => {
  const ids = episodes.map((episode) => episode.id);
  const slugs = episodes.map((episode) => episode.slug);
  assert.equal(new Set(ids).size, ids.length);
  assert.equal(new Set(slugs).size, slugs.length);
  assert.equal(episodes.length, 51);
  assert.equal(
    episodes.filter((episode) => episode.kind === "episode").length,
    12,
  );
  assert.equal(episodes.filter((episode) => episode.kind === "short").length, 39);
  assert.equal(
    episodes.find((episode) => episode.id === "xCyTbtrv9b4")?.kind,
    "episode",
  );
  assert.equal(
    episodes.find((episode) => episode.id === "hqXAEWP6VWw")?.slug,
    "economics-of-the-yen-carry-trade",
  );
  assert.equal(
    episodes.find((episode) => episode.id === "a-8cYOhCF50")?.slug,
    "dont-fall-in-love-with-a-crypto-coin",
  );
});

test("dropped families go home and open paths are absent", () => {
  const records = legacyRedirectRecords();
  for (const source of ["/login", "/library", "/library/:path+", "/password/:path+", "/store", "/store/:path+", "/crypto", "/forms/:path+"]) {
    const record = records.find((item) => item.source === source);
    assert.equal(record?.destination, "/");
    assert.equal(record?.kind, "dropped");
  }

  const sources = records.map((record) => record.source);
  for (const source of ["/contact", "/privacy", "/terms", "/offers", "/offers/:path+"]) {
    assert.equal(sources.includes(source), false);
  }
});
