/** Manual Instagram feed, in display order. Add new posts at the top.
 * Covers are saved locally; no Instagram API or embed scripts are required.
 */
export type InstagramPost = {
  id: string;
  type?: "photo" | "reel";
  url: string;
  caption?: string;
  link?: string;
};

export const instagramPosts: InstagramPost[] = [
  {
    id: "DeCP0IxCxjM",
    type: "reel",
    url: "/images/social/post-1.jpg",
    caption: "How it’s going — Reformer rows lined up at VALERI, Arjan.",
    link: "https://www.instagram.com/valeripilates/reel/DeCP0IxCxjM/",
  },
  {
    id: "Dd1dsIdCK8I",
    type: "photo",
    url: "/images/social/post-2.jpg",
    caption:
      "We’re opening! Free Pilates classes during opening week — book your spot.",
    link: "https://www.instagram.com/valeripilates/p/Dd1dsIdCK8I/",
  },
  {
    id: "Ddrn7ibCd5O",
    type: "photo",
    url: "/images/social/post-3.jpg",
    caption:
      "Between everything you have to do,\nmake a little time for yourself.\n\nMove. Breathe. Feel good.\n\nVALERI Pilates · Arjan, Dubai\nOpening soon.",
    link: "https://www.instagram.com/valeripilates/p/Ddrn7ibCd5O/",
  },
  {
    id: "DdljR1oipJN",
    type: "photo",
    url: "/images/social/post-4.jpg",
    caption:
      "Reformer Pilates, small classes, personal attention — and a space you’ll actually look forward to coming back to.",
    link: "https://www.instagram.com/valeripilates/p/DdljR1oipJN/",
  },
  {
    id: "DdZVqlriHiB",
    type: "photo",
    url: "/images/social/post-5.jpg",
    caption:
      "Something new is coming to Arjan!\n\nWe’ve been quietly creating VALERI — a Reformer Pilates studio built around movement, people and good energy.\n\nA place to get stronger, feel better, meet good people and make a little time for yourself.\n\nWe’re almost ready to welcome you.\n\nVALERI Pilates · Arjan, Dubai\nOpening soon.\n\nThis is just the beginning.",
    link: "https://www.instagram.com/valeripilates/p/DdZVqlriHiB/",
  },
];
