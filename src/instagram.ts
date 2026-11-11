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

// Updated post links supplied by VALERI, newest first.
// IMPORTANT: the post-*.jpg files are PREVIOUS covers, retained temporarily.
// Replace all five covers with matching thumbnails before publishing this feed.
// Instagram's public post URL uses /p/ even for some Reels; video types can be
// set to "reel" once the media have been verified.
export const instagramPosts: InstagramPost[] = [
  {
    id: "Dfh2uWKC_p7",
    type: "photo",
    url: "/images/social/post-1.jpg",
    caption: "View the latest post from VALERI Pilates on Instagram.",
    link: "https://www.instagram.com/p/Dfh2uWKC_p7/",
  },
  {
    id: "Dfg6-03um7U",
    type: "photo",
    url: "/images/social/post-2.jpg",
    caption: "View the latest post from VALERI Pilates on Instagram.",
    link: "https://www.instagram.com/p/Dfg6-03um7U/",
  },
  {
    id: "DfZzF4BtF0c",
    type: "photo",
    url: "/images/social/post-3.jpg",
    caption: "View the latest post from VALERI Pilates on Instagram.",
    link: "https://www.instagram.com/p/DfZzF4BtF0c/",
  },
  {
    id: "DfZPYJ1C58S",
    type: "photo",
    url: "/images/social/post-4.jpg",
    caption: "View the latest post from VALERI Pilates on Instagram.",
    link: "https://www.instagram.com/p/DfZPYJ1C58S/",
  },
  {
    id: "DfXOIxmiNDs",
    type: "photo",
    url: "/images/social/post-5.jpg",
    caption: "View the latest post from VALERI Pilates on Instagram.",
    link: "https://www.instagram.com/p/DfXOIxmiNDs/",
  },
];
