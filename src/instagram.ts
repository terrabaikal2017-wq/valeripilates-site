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
    id: "DfCUROzi-ps",
    type: "reel",
    url: "/images/social/post-1.jpg",
    caption: "Halloween Pilates Class — Saturday, 31 October. Every guest wins a prize.",
    link: "https://www.instagram.com/valeripilates/reel/DfCUROzi-ps/",
  },
  {
    id: "DfASFUjCCbr",
    type: "reel",
    url: "/images/social/post-2.jpg",
    caption: "Nobody walks in flexible. You build it, one class at a time.",
    link: "https://www.instagram.com/valeripilates/reel/DfASFUjCCbr/",
  },
  {
    id: "De8Y0CPiUtg",
    type: "reel",
    url: "/images/social/post-3.jpg",
    caption: "Sending you good energy for the week ahead.",
    link: "https://www.instagram.com/valeripilates/reel/De8Y0CPiUtg/",
  },
  {
    id: "De60Y6xgq04",
    type: "photo",
    url: "/images/social/post-4.jpg",
    caption: "Three reasons to start Pilates — and keep coming back.",
    link: "https://www.instagram.com/valeripilates/p/De60Y6xgq04/",
  },
  {
    id: "De4GnRNiS8r",
    type: "reel",
    url: "/images/social/post-5.jpg",
    caption: "Welcome to VALERI. We’ve just opened in Oxford Gardens, Arjan.",
    link: "https://www.instagram.com/valeripilates/reel/De4GnRNiS8r/",
  },
];
