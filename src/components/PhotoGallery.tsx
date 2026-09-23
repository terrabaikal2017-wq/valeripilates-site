"use client";

import { useRef } from "react";

export type GalleryImage = { src: string; alt: string };

export default function PhotoGallery({ images }: { images: GalleryImage[] }) {
  const row = useRef<HTMLDivElement>(null);
  const many = images.length > 1;

  function move(dir: number) {
    const el = row.current;
    if (!el) return;
    const shot = el.querySelector("img");
    const step = (shot?.getBoundingClientRect().width ?? 320) + 14;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }

  return (
    <div className="gallery">
      {many && (
        <button type="button" className="gallery-nav prev" aria-label="Previous photo" onClick={() => move(-1)}>
          <span aria-hidden>‹</span>
        </button>
      )}
      <div className="shot-row" ref={row} tabIndex={0}>
        {images.map((image) => (
          // Native img so the file’s own ratio is used. next/image would
          // lock a width/height pair and stretch a portrait into that box.
          // eslint-disable-next-line @next/next/no-img-element
          <img key={image.src} src={image.src} alt={image.alt} />
        ))}
      </div>
      {many && (
        <button type="button" className="gallery-nav next" aria-label="Next photo" onClick={() => move(1)}>
          <span aria-hidden>›</span>
        </button>
      )}
    </div>
  );
}
