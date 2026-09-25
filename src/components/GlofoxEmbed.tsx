"use client";

import Script from "next/script";
import { useEffect } from "react";
import {
  glofoxFrameId,
  glofoxPortalSrc,
  type GlofoxView,
} from "@/lib/glofox";

const RESIZER =
  "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.6.1/iframeResizer.min.js";

const RESIZE_OPTIONS = {
  log: false,
  checkOrigin: false,
  tolerance: 10,
  sizeHeight: true,
  heightCalculationMethod: "lowestElement",
  minHeight: 300,
  scrolling: "auto",
};

const LABEL: Record<GlofoxView, string> = {
  schedule: "class schedule & booking",
  pricing: "pricing & purchase",
  memberships: "memberships",
};

declare global {
  interface Window {
    iFrameResize?: (
      options: typeof RESIZE_OPTIONS,
      target: string,
    ) => void;
  }
}

function resizeFrame(frameId: string) {
  window.iFrameResize?.(RESIZE_OPTIONS, `#${frameId}`);
}

export default function GlofoxEmbed({ view }: { view: GlofoxView }) {
  const src = glofoxPortalSrc(view);
  const frameId = glofoxFrameId(view);

  useEffect(() => {
    if (!frameId || !window.iFrameResize) return;
    resizeFrame(frameId);
  }, [frameId]);

  if (!src || !frameId) {
    return (
      <div className="bookbox">
        <span className="lbl">Glofox · {LABEL[view]}</span>
        <p>
          The live Glofox {LABEL[view]} block loads here once that embed code
          is connected.
        </p>
      </div>
    );
  }

  return (
    <div className={`glofox-embed glofox-${view}`}>
      <Script
        src={RESIZER}
        strategy="afterInteractive"
        onLoad={() => resizeFrame(frameId)}
      />
      <iframe
        id={frameId}
        src={src}
        title={LABEL[view]}
        width="100%"
        height={0}
        scrolling="no"
        frameBorder={0}
      />
      <div className="glofox-powered">
        powered by
        <a href="https://www.glofox.com">
          <b>&nbsp;Glofox</b>
        </a>
      </div>
    </div>
  );
}
