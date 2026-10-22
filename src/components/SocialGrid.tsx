"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import type { SocialItem } from "@/data";

function postHref(link?: string) {
  if (!link || !/^https?:\/\//i.test(link)) return null;
  return link;
}

const PAGE_SIZE = 6;

/** Manually curated photos and Reels; videos open on Instagram. */
export default function SocialGrid({
  items,
  profileUrl,
}: {
  items: SocialItem[];
  profileUrl: string;
}) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const gridId = useId();
  const galleryRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLButtonElement>(null);
  const shown = Math.min(visibleCount, items.length);
  const expanded = visibleCount > PAGE_SIZE;

  function showLess() {
    setVisibleCount(PAGE_SIZE);
    // The collapse button disappears: restore keyboard focus to a stable control.
    requestAnimationFrame(() => moreRef.current?.focus({ preventScroll: true }));
    galleryRef.current?.scrollIntoView({ block: "start", behavior: "instant" });
  }

  if (!items.length) return null;

  return (
    <div className="social-gallery" ref={galleryRef}>
      <div className="social-grid" id={gridId}>
        {items.slice(0, shown).map((item) => {
          const href = postHref(item.link) || profileUrl;
          const caption = item.caption?.trim();
          const isReel = item.type === "reel" || /\/reels?\//i.test(item.link || "");
          const body = (
            <>
              <div className="ph">
                <Image
                  src={item.url}
                  alt={caption || "A moment at VALERI"}
                  width={400}
                  height={400}
                  sizes="(max-width: 600px) 45vw, (max-width: 900px) 30vw, 360px"
                />
                {isReel ? <span className="social-reel"><span aria-hidden="true">▶</span> Reel</span> : null}
              </div>
              {caption ? <p className="social-cap">{caption}</p> : null}
            </>
          );
          return href ? (
            <a className="social-tile" key={item.id} href={href} target="_blank" rel="noopener noreferrer"
              aria-label={`${isReel ? "Watch Reel" : "View post"} on Instagram${caption ? `: ${caption}` : ""} (opens in a new tab)`}>
              {body}
            </a>
          ) : (
            <div className="social-tile" key={item.id}>
              {body}
            </div>
          );
        })}
      </div>
      {items.length > PAGE_SIZE ? (
        <div className="social-controls">
          <p className="social-count" role="status" aria-live="polite" aria-atomic="true">
            Showing {shown} of {items.length} posts
          </p>
          <div className="social-actions">
            <button ref={moreRef} type="button" className="btn-ghost"
              aria-controls={gridId} aria-expanded={expanded}
              disabled={shown === items.length}
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}>
              Show More
            </button>
            {expanded ? (
              <button type="button" className="btn-ghost" aria-controls={gridId}
                aria-expanded={expanded} onClick={showLess}>Show Less</button>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
