"use client";

import { useState } from "react";
import Image from "next/image";
import type { SocialItem } from "@/data";

function postHref(link?: string) {
  if (!link || !/^https?:\/\//i.test(link)) return null;
  return link;
}

/** Studio photos with captions. A tile opens its Instagram post, or the studio profile if no post URL was saved. */
export default function SocialGrid({
  items,
  profileUrl,
}: {
  items: SocialItem[];
  profileUrl: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const canExpand = items.length > 4;

  return (
    <div className="social-gallery">
      <div className={canExpand && !expanded ? "social-grid is-collapsed" : "social-grid"}>
        {items.map((item) => {
          const href = postHref(item.link) || profileUrl;
          const caption = item.caption?.trim();
          const body = (
            <>
              <div className="ph">
                <Image
                  src={item.url}
                  alt={caption || "A moment at VALERI"}
                  width={360}
                  height={360}
                  sizes="(max-width: 900px) 50vw, 20vw"
                />
              </div>
              {caption ? <p className="social-cap">{caption}</p> : null}
            </>
          );
          return href ? (
            <a className="social-tile" key={item.id} href={href} target="_blank" rel="noreferrer">
              {body}
            </a>
          ) : (
            <div className="social-tile" key={item.id}>
              {body}
            </div>
          );
        })}
      </div>
      {canExpand && !expanded ? (
        <button type="button" className="btn-ghost social-more" onClick={() => setExpanded(true)}>
          Show more
        </button>
      ) : null}
    </div>
  );
}
