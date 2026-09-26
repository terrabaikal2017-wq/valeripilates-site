import Image from "next/image";
import type { SocialItem } from "@/data";

function postHref(link?: string) {
  if (!link || !/^https?:\/\//i.test(link)) return null;
  return link;
}

/** Studio photos. A tile opens its Instagram post, or the studio profile if no post URL was saved. */
export default function SocialGrid({
  items,
  profileUrl,
}: {
  items: SocialItem[];
  profileUrl: string;
}) {
  return (
    <div className="social-grid">
      {items.map((item) => {
        const href = postHref(item.link) || profileUrl;
        const image = (
          <Image
            src={item.url}
            alt={item.caption || "A moment at VALERI"}
            width={400}
            height={400}
          />
        );
        return href ? (
          <a className="ph" key={item.id} href={href} target="_blank" rel="noreferrer">
            {image}
          </a>
        ) : (
          <div className="ph" key={item.id}>
            {image}
          </div>
        );
      })}
    </div>
  );
}
