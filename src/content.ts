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
  addressLine1: "Oxford Gardens, Arjan",
  addressLine2: "Dubai, United Arab Emirates",
  addressLines: ["Oxford Gardens, Arjan", "Dubai, United Arab Emirates"],
  addressShort: "Oxford Gardens · Arjan · Dubai",
  instagram: "@valeripilates",
  instagramUrl: "https://www.instagram.com/valeripilates/",
  logoSub: "pilates studio",
  headerCta: "Book",
  bookCta: "Book your first class",
  seoTitle: "VALERI | Reformer Pilates in Arjan, Dubai",
  seoDescription:
    "Reformer Pilates in Oxford Gardens, Arjan — Dubai. Small classes, real coaching, every level welcome. Book your first class from AED 80.",
  copyrightYear: "2026",
  footerTagline: "Reformer Pilates studio",
  footerNote: "Prototype — imagery is placeholder.",
  showFooterNote: true,
  legalLastUpdated: null as string | null,
  legalDraft: true,
  legalDraftNote: "Draft — pending final legal review before publication",
  // TODO — confirm before launch:
  hours: null as string | null,
  whatsapp: null as string | null,
  phone: null as string | null,
  email: null as string | null,
  mapEmbedUrl: null as string | null,
};

export type CmsImage = { src: string; alt: string };

export const images = {
  homeHero: { src: "/images/home-hero.jpg", alt: "VALERI members after a Reformer class" },
  belong: { src: "/images/belong.jpg", alt: "Two VALERI members, different ages, after class" },
  classesHero: { src: "/images/classes-hero.jpg", alt: "A VALERI class" },
  studio: { src: "/images/studio.jpg", alt: "The VALERI studio" },
  studioGallery: [
    { src: "/images/pilates-studio-landscape.jpg", alt: "VALERI members in the studio" },
  ],
  firstVisitHero: { src: "/images/fv-hero.jpg", alt: "VALERI members together" },
  teamHero: { src: "/images/life-hero.jpg", alt: "VALERI instructors" },
};

export const copy = {
  home: {
    eyebrow: "",
    headline: "Pilates that\nfeels good.",
    sub: "Feel stronger. Move better. See progress.",
    cta: "Book your first class",
    belongEyebrow: "New here? Good.",
    belongHeadline: "Every body belongs here.",
    belongLead1:
      "You don’t need to be flexible. You don’t need to have tried Reformer. You don’t need a “Pilates body.” You just need to want to start.",
    belongLead2:
      "Come for flexibility, tone, strength, or just better energy for the week — whatever brought you, you’ll find it here. Small classes, close attention, no rush.",
    belongSig: "Come for Pilates. Stay for how it feels.",
    classesEyebrow: "Classes",
    classesHeadline: "Find your class.",
    classesNote: "Real coaching. Small classes. Never more than eight of you.",
    classesHelper:
      "New to Reformer? Start with Foundations. Not sure where you fit — message us on WhatsApp and we’ll help you choose.",
    firstEyebrow: "New to VALERI",
    firstHeadline: "Your first class starts here.",
    firstLead:
      "Never tried Reformer Pilates before? That’s completely fine. We’ll show you how everything works and help you feel comfortable from your very first class.",
    firstVisitLink: "How a first visit works →",
    firstOfferK: "Your first class",
    firstOfferFineprint: "First-timers only. Includes 5% VAT.",
    firstOfferAlt: "Ready for more? The 3-class intro is AED 300, valid 14 days.",
    socialHeadline: "Lately at VALERI.",
    socialNote: "Studio moments as they happen.",
  },
  classes: {
    eyebrow: "Classes",
    headline: "Reformer Pilates.\nYour level, your pace.",
    lead1:
      "One workout — Reformer Pilates — done properly: full-body strength, mobility, posture, control. What changes between classes is the pace, the load, and how much the instructor breaks things down.",
    lead2: "You don’t need to fit yourself into a level. Start where you are and progress from there.",
    facts: "50 minutes · Never more than eight · Every level welcome",
    cta: "Book your first class",
    helper: "Not sure where you fit? Message us — a real person answers, usually within the hour.",
    bookingHeadline: "Schedule & booking",
    bookingLead:
      "The live class schedule, spots, waitlists, class packs and memberships all live in your VALERI account — so what you see is always current. Create an account once and book from your phone.",
    bookingCta: "Open booking",
  },
  firstVisit: {
    eyebrow: "First Visit",
    headline: "Never tried Reformer? Come anyway.",
    lead: "Your first class doesn’t have to be perfect. It just has to be your first. Here’s exactly what happens.",
    cta: "Book your first class — AED 80",
    stepsEyebrow: "How it works",
    stepsHeadline: "Your first class, step by step.",
    faqEyebrow: "Good to know",
    faqHeadline: "Common questions.",
  },
  team: {
    eyebrow: "Team",
    headline: "Meet the people you’ll move with.",
    lead: "Qualified instructors who coach properly and know your name. This is who’s teaching at VALERI.",
    instructorsLabel: "Instructors",
    instructorsLead: "The trial teaching team — you’ll meet one of them on your first visit.",
    storiesLabel: "People of VALERI",
    storiesHeadline: "Real members, in their own words.",
    storiesLead:
      "First classes, milestones, why they started, the friend they met here. We publish these as members are ready to share them.",
    storiesNote: "This section stays empty until real stories exist — nothing here is invented.",
    eventsLabel: "What’s happening",
    eventsHeadline: "Things worth doing together.",
    eventsLead:
      "Coffee mornings, workshops, talks, the occasional Saturday walk. Confirmed monthly events show here with a date and an RSVP.",
    eventsEmpty:
      "Nothing on the calendar just yet. When an event is confirmed, this is where it lives — image, date, short description and a button to RSVP.",
    socialLabel: "We’re social",
    socialHeadline: "Lately at VALERI.",
    socialNote: "Studio moments as they happen.",
  },
  schedule: {
    headline: "Schedule.",
    lead: "See what’s on, pick a time, book. New here? Choose “First Class — AED 80”.",
    notesLabel: "Before you book",
    notesHeadline: "A few things to know.",
    findUsHeadline: "Find us",
  },
  pricing: {
    headline: "Pricing.",
    lead: "Start easy — pay less as you settle into a routine.",
    facts: "All prices include 5% VAT · No lock-in",
    introLabel: "New to VALERI",
    introHeadline: "Your first classes.",
    introNote: "The First Class is an introductory rate for new clients — not a free trial. It can be purchased once.",
    packsLabel: "Move your way",
    packsHeadline: "Class packs.",
    packsNote:
      "Validity starts from your first class. Activate within 30 days of purchase. Any classes left after the validity period expire.",
    membersLabel: "Make it your routine",
    membersHeadline: "Memberships.",
    membersNote:
      "If you train every week, membership is the lowest per-class rate we offer. Renews automatically each month, no minimum commitment. Cancel any time with 7 days’ notice before your next billing date. One freeze per 12 months, up to 30 days. Unused monthly classes don’t roll over.",
    privateLabel: "One-to-one",
    privateHeadline: "Private & semi-private.",
    privateNote: "Often easiest to book at off-peak times — ask us about availability.",
    fineLabel: "Good to know",
    fineHeadline: "The fine print.",
    termsLink: "Terms & Conditions",
  },
  band: {
    k: "New to VALERI",
    v: "Your first class — AED 80",
    sm: "First-timers only · includes 5% VAT · or a 3-class intro for AED 300",
    cta: "Book your first class",
  },
  cta: {
    headline: "Ready to meet your Reformer?",
    button: "Book your first class",
    fine: "Book, cancel and manage everything from your VALERI account.",
  },
};

export type ScheduleNote = { text: string; linkLabel?: string; linkHref?: string };

export const scheduleNotes: ScheduleNote[] = [
  { text: "Create an account once, then book, cancel and manage everything from your VALERI account." },
  { text: "New to Reformer? Book a Beginner / Foundations class — no experience needed." },
  { text: "Free cancellation up to 12 hours before class. Inside 12 hours the class credit is used." },
  {
    text: "Grip socks are required; arrive about 10 minutes early.",
    linkHref: "/first-visit",
    linkLabel: "How a first visit works →",
  },
  { text: "All VALERI classes are currently for women." },
];

export const nav = [
  { href: "/first-visit", label: "First Visit", key: "first" },
  { href: "/classes", label: "Classes", key: "classes" },
  { href: "/schedule", label: "Schedule", key: "schedule" },
  { href: "/pricing", label: "Pricing", key: "pricing" },
  { href: "/team", label: "Team", key: "team" },
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
      "For clients who’ve done a handful of Foundations classes, or have Reformer experience elsewhere.",
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
    requirement: "Book by request.",
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
  { q: "How do I cancel or reschedule?", a: "Free up to 12 hours before class, from your VALERI account. Inside 12 hours, the class credit is used. Missing a class without cancelling works the same way." },
];

export const firstVisitSteps = [
  { k: "Before you arrive", h: "Tell us a little about you", p: "When you book, you’ll fill in a short First Visit profile: any previous Pilates experience, what you want to work on, and any injuries, pain or pregnancy your instructor should know about. Wear something you can move in. Grip socks are required — bring your own or buy a pair at reception." },
  { k: "When you get here", h: "Meet your instructor", p: "Arrive about 10 minutes early. Reception welcomes you, your instructor introduces herself, checks anything important from your profile, and walks you through the Reformer setup before class starts." },
  { k: "During class", h: "50 minutes, eight of you", p: "The instructor guides every exercise and adjusts it for your level. Go at your own pace — pausing to reset your position is completely normal, and nobody is watching but her." },
  { k: "After class", h: "A quick, honest check-in", p: "How did it feel? What felt easy or hard? What would you like to work on? We help you pick the right next class or level — no hard sell." },
];

/* ---------- Team page — section visibility ----------
   Each section on /team shows if its flag is true OR real content exists
   in Sanity. Flip a flag to preview a section's layout with placeholders,
   or just add content in the CMS and it appears on its own. */
export const flags = {
  showTeam: true,
  showStories: true,
  showEvents: true,
};

/* ---------- Team-page placeholders (used only when a flag above is on) ---------- */
export const team = [
  {
    id: "amira-khalil",
    name: "Amira Khalil",
    style: "Calm · Clear · Kind",
    loveIf: "you want to feel guided, not rushed, especially on a first visit.",
    focus: "Foundations and alignment",
    offReformer: "Makes cardamom coffee before the early class.",
  },
  {
    id: "elena-moreau",
    name: "Elena Moreau",
    style: "Strong · Precise · Warm",
    loveIf: "you came to actually feel stronger, not just stretched.",
    focus: "Strength and control",
    offReformer: "Sunday swims, always.",
  },
  {
    id: "priya-shah",
    name: "Priya Shah",
    style: "Patient · Upbeat · Grounded",
    loveIf: "you’re coming back after a long break and want to start gently.",
    focus: "Mobility and posture",
    offReformer: "Always has a book in her bag.",
  },
  {
    id: "nia-adeyemi",
    name: "Nia Adeyemi",
    style: "Quiet · Exact · Steady",
    loveIf: "you like a class that stays calm, even when the springs get heavier.",
    focus: "Core and balance",
    offReformer: "Keeps a lemon tree on the balcony.",
  },
];

export const stories = [
  { format: "Format", title: "My first 50 classes", excerpt: "[ A short member story — what changed over the first fifty. Name and photo with permission. ]", placeholder: true as const },
  { format: "Format", title: "Why I started", excerpt: "[ A few honest sentences about the moment they booked their first class. ]", placeholder: true as const },
  { format: "Format", title: "A friend I met at VALERI", excerpt: "[ A short piece about the social side — who they train with now. ]", placeholder: true as const },
];

export const events: { title: string; date: string; description: string }[] = [];

export const socialImages = [
  {
    url: "/images/social/post-1.jpg",
    caption:
      "Between everything you have to do,\nmake a little time for yourself.\n\nMove. Breathe. Feel good.\n\nVALERI Pilates · Arjan, Dubai\nOpening soon.",
    link: "https://www.instagram.com/valeripilates/p/Ddrn7ibCd5O/",
  },
  {
    url: "/images/social/post-2.jpg",
    caption:
      "Reformer Pilates, small classes, personal attention — and a space you’ll actually look forward to coming back to.",
    link: "https://www.instagram.com/valeripilates/p/DdljR1oipJN/",
  },
  {
    url: "/images/social/post-3.jpg",
    caption:
      "Something new is coming to Arjan!\n\nWe’ve been quietly creating VALERI — a Reformer Pilates studio built around movement, people and good energy.\n\nA place to get stronger, feel better, meet good people and make a little time for yourself.\n\nWe’re almost ready to welcome you.\n\nVALERI Pilates · Arjan, Dubai\nOpening soon.\n\nThis is just the beginning.",
    link: "https://www.instagram.com/valeripilates/p/DdZVqlriHiB/",
  },
];
