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
    id: "DgK_0TuCfU7",
    type: "reel",
    url: "/images/social/post-1.jpg",
    caption: "Good energy, good mood, 50 minutes just for you. If you know, you know.",
    link: "https://www.instagram.com/valeripilates/reel/DgK_0TuCfU7/",
  },
  {
    id: "DgIKUE7CjL5",
    type: "photo",
    url: "/images/social/post-2.jpg",
    caption:
      "Join us for a Christmas candle masterclass on Saturday, December 5, 2:00–4:00 PM. Make your own candle at VALERI in Arjan — 250 AED.",
    link: "https://www.instagram.com/valeripilates/p/DgIKUE7CjL5/",
  },
  {
    id: "DgFuBZXik2B",
    type: "reel",
    url: "/images/social/post-3.jpg",
    caption: "Small steps every day make a big difference. Send this to someone who needs the reminder.",
    link: "https://www.instagram.com/valeripilates/reel/DgFuBZXik2B/",
  },
  {
    id: "Df-ACUvCBms",
    type: "reel",
    url: "/images/social/post-4.jpg",
    caption: "Fridays look better upside down. Have a beautiful weekend.",
    link: "https://www.instagram.com/valeripilates/reel/Df-ACUvCBms/",
  },
  {
    id: "Df636v3iSnx",
    type: "reel",
    url: "/images/social/post-5.jpg",
    caption: "Pilates mode: on. Your reformer is waiting — book your next class.",
    link: "https://www.instagram.com/valeripilates/reel/Df636v3iSnx/",
  },
];
