export type Service = {
  slug: string;
  title: string;
  price: string;
  description: string;
  image: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  detail: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "classic-haircut",
    title: "Classic Haircut",
    price: "$45",
    description:
      "A proper haircut tailored to your face, your hair type, and the way you actually wear it. Consultation, cut, and a clean finish.",
    image: "/images/pricing-item-image-1.jpg",
  },
  {
    slug: "hot-towel-shave",
    title: "Hot Towel Shave",
    price: "$50",
    description:
      "Old school straight razor shave with two hot towels, pre-shave oil, and a finishing balm. The closest, calmest shave you will get.",
    image: "/images/pricing-item-image-2.jpg",
  },
  {
    slug: "beard-sculpting",
    title: "Beard Sculpting",
    price: "$35",
    description:
      "Beard line up, shape, and trim. We work with what you have got and sculpt it into something intentional. Razor detailing on request.",
    image: "/images/pricing-item-image-3.jpg",
  },
  {
    slug: "hair-color",
    title: "Hair Color & Grey Blending",
    price: "$65",
    description:
      "Subtle grey blending, full color, or a refresh between cuts. We use gentle, low-ammonia color and finish with a nourishing conditioner.",
    image: "/images/pricing-item-image-4.jpg",
  },
  {
    slug: "father-son-cut",
    title: "Father & Son Cut",
    price: "$70",
    description:
      "Two cuts, one chair, one good time. Bring the kid, leave looking sharp together. We go at his pace, not ours.",
    image: "/images/pricing-item-image-1.jpg",
  },
  {
    slug: "skin-fade",
    title: "Skin Fade & Style",
    price: "$55",
    description:
      "Crisp skin fade, blended to your liking, finished with a styling product that actually holds. Bring a photo or trust the chair.",
    image: "/images/pricing-item-image-2.jpg",
  },
];

export const team: TeamMember[] = [
  {
    slug: "marco",
    name: "Marco DeLuca",
    role: "Owner & Master Barber",
    image: "/images/team-1.jpg",
    bio: "Twenty-three years behind the chair. Marco opened Brass & Blade in 2014 after cutting his way through midtown and a stint in Milan. He still takes walk-ins on Tuesdays.",
  },
  {
    slug: "andre",
    name: "Andre Whitfield",
    role: "Senior Barber",
    image: "/images/team-2.jpg",
    bio: "Specialist in straight razor work and tight skin fades. Andre has been with the shop since 2017 and runs our Wednesday late-night hours.",
  },
  {
    slug: "salim",
    name: "Salim Karim",
    role: "Color & Styling Specialist",
    image: "/images/team-3.jpg",
    bio: "Trained in London and Dubai, Salim handles all color, grey blending, and longer styling work. Quiet hands, sharp eye.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Best cut I have had in fifteen years. Marco took one look at me, asked two questions, and gave me a cut I have not had to think about since. The hot towel shave at the end is the closer.",
    author: "James Calloway",
    detail: "Regular since 2019",
    image: "/images/our-testimonials-image-1.jpg",
  },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Team", href: "#team" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const openingHours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "9:00 — 19:00" },
  { day: "Wednesday", hours: "9:00 — 21:00" },
  { day: "Thursday", hours: "9:00 — 19:00" },
  { day: "Friday", hours: "8:00 — 19:00" },
  { day: "Saturday", hours: "8:00 — 18:00" },
  { day: "Sunday", hours: "10:00 — 16:00" },
];

export const stats = [
  { value: "10", label: "Years on Mulberry" },
  { value: "5", label: "Master barbers" },
  { value: "8.6k", label: "Regulars and counting" },
];
