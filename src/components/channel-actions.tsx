import { site } from "@/lib/site";

export function ChannelActions({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        className="button button-primary"
        href={site.subscribeUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Subscribe
        <span className="sr-only"> on YouTube</span>
      </a>
      <a
        className="button button-secondary"
        href={site.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch on YouTube
      </a>
    </div>
  );
}
