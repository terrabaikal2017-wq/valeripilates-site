/* ============================================================
   VALERI — content source
   All site copy/data in one place. Structured so each block can
   move to a Sanity schema later without touching components.
   Placeholder items are marked `placeholder: true`.
   ============================================================ */

export const site = {
  name: "VALERI",
  legalName: "Valeri Pilates Fitness Club LLC",
  tagline: "Reformer Pilates studio",
  city: "Arjan, Dubai",
  addressLines: ["Oxford Gardens, Arjan", "Dubai, United Arab Emirates"],
  instagram: "@valeri",
  instagramUrl: "#", // TODO: real handle URL
  // TODO — confirm before launch:
  hours: null as string | null,
  whatsapp: null as string | null,
  email: null as string | null,
  mapEmbedUrl: null as string | null,
};

export const nav = [
  { href: "/first-visit", label: "First Visit", key: "first" },
  { href: "/classes", label: "Classes", key: "classes" },
  { href: "/pricing", label: "Pricing", key: "pricing" },
  { href: "/valeri-life", label: "VALERI Life", key: "life" },
];

/* ---------- classes ---------- */
export type ClassLevel = {
  slug: string;
  name: string;
  meta: string;
  blurb: string;
  requirement: string;
  image: string;
};

export const classLevels: ClassLevel[] = [
  {
    slug: "beginner-foundations",
    name: "Beginner / Foundations",
    meta: "50 min · all first-timers",
    blurb:
      "Where almost everyone starts. Slow pace, every position broken down, and plenty of time to get comfortable on the machine. We assume you’ve never done this.",
    requirement: "No experience needed.",
    image: "/images/class-1.jpg",
  },
  {
    slug: "intermediate",
    name: "Intermediate",
    meta: "50 min · some experience",
    blurb:
      "Faster transitions, longer holds, more load. You’ll build real strength, control and flow once the basic repertoire feels familiar.",
    requirement:
      "Prerequisite: a few Foundations classes or equivalent Reformer experience.",
    image: "/images/class-2.jpg",
  },
  {
    slug: "advanced",
    name: "Advanced",
    meta: "50 min · experienced",
    blurb:
      "More complex sequencing, coordination and pace, with less setup time between exercises. Not “better” than Intermediate — just a different kind of challenge.",
    requirement: "For clients who find Intermediate comfortable.",
    image: "/images/class-3.jpg",
  },
  {
    slug: "private",
    name: "Private 1:1",
    meta: "One instructor, one client",
    blurb:
      "Built entirely around your goals, your body and your form. Good for starting from zero, working around an injury, or going deep on technique.",
    requirement: "Book by request through the app.",
    image: "/images/class-4.jpg",
  },
  {
    slug: "semi-private",
    name: "Semi-private",
    meta: "Two or three, booked together",
    blurb:
      "More hands-on attention than a group class, at a lower cost than a private — and more fun with a friend.",
    requirement: "All participants book together.",
    image: "/images/class-5.jpg",
  },
];

/* ---------- pricing ---------- */
export type Plan = {
  name: string;
  amount: string;
  per: string;
  meta: string;
  tag?: string;
};

export const introOffers: Plan[] = [
  { name: "First class", amount: "AED 80", per: "One class", meta: "First-time clients only, once per client.", tag: "Start here" },
  { name: "3-class intro", amount: "AED 300", per: "AED 100 / class", meta: "Valid 14 days from your first class. First-time clients only." },
];

export const classPacks: Plan[] = [
  { name: "Single class", amount: "AED 150", per: "AED 150 / class", meta: "Use any time." },
  { name: "5 classes", amount: "AED 650", per: "AED 130 / class", meta: "Valid 1 month." },
  { name: "10 classes", amount: "AED 1,250", per: "AED 125 / class", meta: "Valid 2 months." },
  { name: "20 classes", amount: "AED 2,300", per: "AED 115 / class", meta: "Valid 3 months." },
];

export const memberships: Plan[] = [
  { name: "8 classes / month", amount: "AED 880", per: "AED 110 / class", meta: "Renews monthly.", tag: "Best regular rate" },
  { name: "12 classes / month", amount: "AED 1,200", per: "AED 100 / class", meta: "Renews monthly.", tag: "Best regular rate" },
];

export const privateSessions: Plan[] = [
  { name: "Private 1:1", amount: "AED 350", per: "Per session", meta: "One instructor, one client." },
  { name: "Semi-private", amount: "AED 225", per: "Per person", meta: "Two or three people, booked together." },
];

export const finePrint = [
  "All prices include 5% VAT.",
  "Classes, packs and memberships are non-refundable, except where a refund is required by law.",
  "Free cancellation up to 12 hours before class. Inside 12 hours, the class credit is used — no extra fee. A no-show works the same way.",
  "Intro offers are for first-time clients only and can be purchased once. Packs, memberships and credits are personal and non-transferable.",
];

/* ---------- first visit FAQ ---------- */
export const faq: { q: string; a: string }[] = [
  { q: "I’ve never done Pilates — is that OK?", a: "Completely. Start with Beginner / Foundations — we go slow, explain everything, and assume no experience." },
  { q: "What should I wear?", a: "Comfortable activewear you can move in. Avoid zips (they can catch on the equipment) and loose jewellery." },
  { q: "Do I need grip socks?", a: "Yes — grip socks are required for all Reformer classes. Bring your own or buy a pair at reception." },
  { q: "How long is a class, and how many people?", a: "Every group class is 50 minutes, with never more than eight clients." },
  { q: "Are all classes for women?", a: "All VALERI classes are currently for women." },
  { q: "Do you have classes for teens?", a: "Not at launch." },
  { q: "I have an injury or I’m pregnant — can I still come?", a: "Tell us in your First Visit profile and speak to your instructor before class. Please get medical advice first if you have any concerns. We may ask you to complete a health declaration." },
  { q: "What if I’m running late?", a: "Please arrive before the start. For safety, you may not be able to join once class has begun — a late arrival can be treated as a late cancellation and the class credit used." },
  { q: "How do I cancel or reschedule?", a: "Free up to 12 hours before class, from your account in the VALERI app. Inside 12 hours, the class credit is used. Missing a class without cancelling works the same way." },
];

export const firstVisitSteps = [
  { k: "Before you arrive", h: "Tell us a little about you", p: "When you book, you’ll fill in a short First Visit profile: any previous Pilates experience, what you want to work on, and any injuries, pain or pregnancy your instructor should know about. Wear something you can move in. Grip socks are required — bring your own or buy a pair at reception." },
  { k: "When you get here", h: "Meet your instructor", p: "Arrive about 10 minutes early. Reception welcomes you, your instructor introduces herself, checks anything important from your profile, and walks you through the Reformer setup before class starts." },
  { k: "During class", h: "50 minutes, eight of you", p: "The instructor guides every exercise and adjusts it for your level. Go at your own pace — pausing to reset your position is completely normal, and nobody is watching but her." },
  { k: "After class", h: "A quick, honest check-in", p: "How did it feel? What felt easy or hard? What would you like to work on? We help you pick the right next class or level — no hard sell." },
];

/* ---------- VALERI Life — launch visibility ----------
   Each section on /valeri-life shows if its flag is true OR real content
   exists in Sanity. At launch only the Instagram strip is shown; flip a
   flag to preview a section's layout, or just add content in the CMS. */
export const flags = {
  showTeam: false,
  showStories: false,
  showEvents: false,
};

/* ---------- VALERI Life (placeholders, used only when a flag above is on) ---------- */
export const team = Array.from({ length: 4 }).map((_, i) => ({
  id: `placeholder-${i + 1}`,
  placeholder: true as const,
  name: "[ Instructor name ]",
  style: "[ Three-word teaching style ]",
  loveIf: "[ one honest line ]",
  focus: "[ e.g. strength & alignment ]",
  offReformer: "[ one human detail ]",
}));

export const stories = [
  { format: "Format", title: "My first 50 classes", excerpt: "[ A short member story — what changed over the first fifty. Name and photo with permission. ]", placeholder: true as const },
  { format: "Format", title: "Why I started", excerpt: "[ A few honest sentences about the moment they booked their first class. ]", placeholder: true as const },
  { format: "Format", title: "A friend I met at VALERI", excerpt: "[ A short piece about the social side — who they train with now. ]", placeholder: true as const },
];

export const events: { title: string; date: string; description: string }[] = [];

export const socialImages = [
  "/images/social-1.jpg",
  "/images/social-2.jpg",
  "/images/social-3.jpg",
  "/images/social-4.jpg",
  "/images/social-5.jpg",
  "/images/social-6.jpg",
];
