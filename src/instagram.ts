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
    id: "Dfh2uWKC_p7",
    type: "reel",
    url: "/images/social/post-1.jpg",
    caption:
      "Meet Nadia — certified Mat and Reformer instructor. Her classes are personal, and she’ll help you build strength and see real progress.",
    link: "https://www.instagram.com/p/Dfh2uWKC_p7/",
  },
  {
    id: "Dfg6-03um7U",
    type: "reel",
    url: "/images/social/post-2.jpg",
    caption: "A little shake, a little burn, and always a spicy finisher. Come flow with Daisy at VALERI.",
    link: "https://www.instagram.com/p/Dfg6-03um7U/",
  },
  {
    id: "DfZzF4BtF0c",
    type: "reel",
    url: "/images/social/post-3.jpg",
    caption: "Come teach a Pilates class with me at VALERI.",
    link: "https://www.instagram.com/p/DfZzF4BtF0c/",
  },
  {
    id: "DfZPYJ1C58S",
    type: "reel",
    url: "/images/social/post-4.jpg",
    caption: "Happy Friday from VALERI. Our doors are open, and November comes with some special offers.",
    link: "https://www.instagram.com/p/DfZPYJ1C58S/",
  },
  {
    id: "DfXOIxmiNDs",
    type: "reel",
    url: "/images/social/post-5.jpg",
    caption:
      "Meet Millie. She teaches mat and reformer with clear cues and a big smile — strength, better movement, and confidence, whether it’s your first class or your fiftieth.",
    link: "https://www.instagram.com/p/DfXOIxmiNDs/",
  },
];
