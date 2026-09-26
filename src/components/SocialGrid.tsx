import Image from "next/image";
import type { SocialItem } from "@/data";

export default function SocialGrid({
  items,
  profileUrl,
}: {
  items: SocialItem[];
  profileUrl: string;
}) {
  return (
    <div className="social-grid">
      {items.map((item) => (
        <a
          className="ph"
          key={item.id}
          href={item.link || profileUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={item.url}
            alt={item.caption || "VALERI on Instagram"}
            width={400}
            height={400}
          />
        </a>
      ))}
    </div>
  );
}
