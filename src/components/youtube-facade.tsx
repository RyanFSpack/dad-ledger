"use client";

import Image from "next/image";
import { useState } from "react";
import { thumbnailUrl } from "@/lib/episodes";

type YouTubeFacadeProps = {
  videoId: string;
  title: string;
  kind: "episode" | "short";
};

export function YouTubeFacade({ videoId, title, kind }: YouTubeFacadeProps) {
  const [embedSrc, setEmbedSrc] = useState<string | null>(null);
  const frameClass =
    kind === "short" ? "aspect-[9/16] w-full" : "aspect-video w-full";

  function play() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const autoplay = reduceMotion ? "" : "?autoplay=1";
    setEmbedSrc(
      `https://www.youtube-nocookie.com/embed/${videoId}${autoplay}`,
    );
  }

  if (embedSrc) {
    return (
      <div className={`${frameClass} bg-ink`}>
        <iframe
          className="h-full w-full"
          src={embedSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`group relative block ${frameClass} overflow-hidden bg-ink text-left`}
      onClick={play}
    >
      <Image
        src={thumbnailUrl(videoId)}
        alt=""
        width={480}
        height={360}
        sizes={
          kind === "short"
            ? "(min-width: 1024px) 240px, (min-width: 640px) 40vw, 50vw"
            : "(min-width: 768px) 640px, 100vw"
        }
        unoptimized
        className="h-full w-full object-cover"
      />
      <span className="sr-only">Play {title}</span>
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center bg-ink/15 transition-colors group-hover:bg-ink/25"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-paper text-ink shadow-sm">
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
          </svg>
        </span>
      </span>
    </button>
  );
}
