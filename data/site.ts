export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  year: string;
  discipline: string;
  tone: string;
  featured?: boolean;
};

export const identity = {
  name: "Waleed",
  studio: "Serveekay",
  role: "Product designer",
  email: "hiserveekay@gmail.com",
  location: "Pakistan",
  availability: "Available for selected projects",
  experience: "7+ years of experience",
  responseTime: "I reply within 1–2 business days.",
  // TODO: fill these in and the links will appear automatically across the site.
  linkedin: "",
  instagram: "",
  whatsapp: "",
  booking: "",
};

export const navigation = [
  { href: "/#work", label: "Works" },
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const contactDetails = {
  email: identity.email,
  responseWindow: "within 1–2 business days",
  whatsapp: identity.whatsapp,
  linkedin: identity.linkedin,
  instagram: identity.instagram,
  booking: identity.booking,
} as const;

// Trust bar: keep these claims honest. Swap the labels for verified numbers
// (for example "500+ projects delivered") once you can back them up.
export const trustStats = [
  { value: "7+", label: "Years of experience" },
  { value: "Design + build", label: "One connected partner" },
  { value: "International", label: "Clients and teams" },
  { value: "End-to-end", label: "Strategy to delivery" },
] as const;

export const disciplines = [
  "Consulting",
  "Design System",
  "Web Design + Dev",
  "Mobile App Design + Dev",
  "Branding",
] as const;

export const serviceMessaging = {
  label: "My services",
  prompt: "Have an idea?",
  direction: "Let's find the right direction.",
  headline: "Design and development, built around your business.",
  description: "An independent design and development partner helping startups, founders, and businesses build distinctive brands, high-performing websites, and useful digital products.",
} as const;

export const projects: Project[] = [
  { slug: "inka", title: "INKA", description: "Project case study in progress.", image: "", year: "In progress", discipline: "Selected work", tone: "tone-olive" },
  { slug: "verdilock", title: "Verdilock", description: "Cybersecurity (Design + Development)", image: "/images/verdilock-full.webp", imageWidth: 1457, imageHeight: 1080, year: "2025", discipline: "Cybersecurity / Product", tone: "tone-blue", featured: true },
  { slug: "lonu", title: "LONU", description: "Your budget and dietary goals restaurants finder", image: "/images/work-lonu.webp", imageWidth: 1456, imageHeight: 1080, year: "2025", discipline: "Mobile / Product", tone: "tone-olive" },
  { slug: "cybon", title: "CYBON", description: "Penetration tests for website owners, online stores, providers, and anyone who processes sensitive data.", image: "/images/work-cybon.webp", imageWidth: 1456, imageHeight: 1080, year: "2025", discipline: "Security / Web app", tone: "tone-violet" },
  { slug: "zippytal", title: "ZippyTAL", description: "Online training and learning platform to enhance and boost your skills", image: "/images/work-zippytal.webp", imageWidth: 1575, imageHeight: 999, year: "2024", discipline: "EdTech / Web", tone: "tone-purple", featured: true },
  { slug: "stack-days", title: "Stack Days", description: "Online training and learning platform to enhance and boost your skills", image: "/images/work-stack-days.webp", imageWidth: 1575, imageHeight: 999, year: "2024", discipline: "Learning / Product", tone: "tone-rose", featured: true },
  { slug: "coche", title: "Coche", description: "Your daily life ride booking app with advanced AI features", image: "/images/work-coche.webp", imageWidth: 1456, imageHeight: 1080, year: "2024", discipline: "Mobility / Mobile", tone: "tone-cyan" },
  { slug: "picscroll", title: "PICSCROLL", description: "Discover and connect with endless meme images", image: "/images/work-picscroll.webp", imageWidth: 1456, imageHeight: 1080, year: "2023", discipline: "Social / Mobile", tone: "tone-sand" },
  { slug: "boomerang", title: "Boomerang", description: "Let’s date and make connections", image: "/images/work-boomerang.webp", imageWidth: 1575, imageHeight: 998, year: "2023", discipline: "Dating / Product", tone: "tone-pink", featured: true },
];

export const services = [
  { number: "01", title: "Brand Identity & Strategy", tags: "Logo · Visual identity · Brand guidelines · Launch assets", description: "Build a memorable brand with a consistent visual identity that communicates your value and makes the business recognisable.", image: "/images/service-branding.webp" },
  { number: "02", title: "Websites & Digital Experiences", tags: "Landing pages · Business websites · Development", description: "Create a website that explains what you do clearly, drives action, and turns visitors into customers.", image: "/images/service-web.webp" },
  { number: "03", title: "Product Design & Development", tags: "SaaS · Dashboards · Mobile apps · MVPs · Design systems", description: "Design and build digital products that solve real user problems, from the first flow through to a working release.", image: "/images/service-mobile.webp" },
];

export const capabilities = [
  { title: "Product thinking", description: "Clear product direction shaped around real user needs and business goals.", mark: "01" },
  { title: "Interface design", description: "High-fidelity interfaces that make complex products feel natural to use.", mark: "02" },
  { title: "Design + build", description: "A connected process from early ideas through polished, responsive delivery.", mark: "03" },
] as const;

export const clientChallenges = [
  {
    number: "01",
    title: "Launching a new brand?",
    description: "Build a distinctive identity that communicates your value and makes the business memorable from day one.",
    cta: "Explore brand identity",
    href: "/#services",
  },
  {
    number: "02",
    title: "Need a better website?",
    description: "Create a digital experience that explains what you do clearly and turns visitors into customers.",
    cta: "Explore websites",
    href: "/#pricing",
  },
  {
    number: "03",
    title: "Building a digital product?",
    description: "Turn an idea for an app, SaaS platform, dashboard, or MVP into a functional, intuitive product.",
    cta: "Explore product design",
    href: "/#services",
  },
  {
    number: "04",
    title: "Need ongoing design support?",
    description: "Get a reliable design and development partner who keeps improving the product as the business grows.",
    cta: "Explore partnerships",
    href: "/#pricing",
  },
] as const;

export const differentiators = [
  {
    number: "01",
    title: "Business-first thinking",
    description: "Every design decision starts with your goals, your users, and what the business actually needs next.",
  },
  {
    number: "02",
    title: "Direct collaboration",
    description: "You work directly with the person responsible for your project. No account managers, no hand-offs.",
  },
  {
    number: "03",
    title: "Design meets development",
    description: "A connected workflow from first concepts through to implementation, so nothing gets lost in translation.",
  },
  {
    number: "04",
    title: "Built to scale",
    description: "Thoughtful systems, components, and foundations that support the product well beyond launch.",
  },
] as const;

export const buyingPaths = [
  {
    number: "01",
    title: "Brand & Launch",
    summary: "Build a brand people remember.",
    detail: "Brand identity, visual systems, guidelines, and launch assets for new businesses and repositioning projects.",
    price: "$1,000–$2,000+",
    timeline: "1–2 weeks",
    items: ["Logo and visual identity", "Color and typography system", "Brand guidelines and assets"],
    popular: false,
  },
  {
    number: "02",
    title: "Website & Conversion",
    summary: "Turn visitors into customers.",
    detail: "Landing pages and business websites, designed and built to communicate value and generate inquiries.",
    price: "$1,500–$6,000+",
    timeline: "1–5 weeks",
    items: ["Page structure and UX", "High-fidelity UI design", "Responsive build and deployment"],
    popular: true,
  },
  {
    number: "03",
    title: "SaaS & Product Build",
    summary: "Build your next digital product.",
    detail: "SaaS platforms, dashboards, mobile applications, and MVPs taken from idea to a working first version.",
    price: "$4,000–$15,000+",
    timeline: "4–12+ weeks",
    items: ["Product discovery and scope", "UX/UI and prototype", "Design plus development"],
    popular: false,
  },
] as const;

export const partnershipPath = {
  title: "Ongoing partnership",
  summary: "Keep the product moving every month.",
  detail: "Flexible design and development capacity for teams that need a reliable partner without hiring every role full-time.",
  price: "$3,000–$6,000+",
  unit: "/ month",
} as const;

export const testimonials = [
  {
    quote: "I recently worked with Waleed for the UI design of my web app, and he did an exceptional job. His attention to detail and intuitive design skills greatly enhanced the user experience and visual appeal of the app.",
    name: "Meelaad Mashaw",
    role: "Founder, EASYWAYSEO",
    projectType: "Web app UI design",
    initials: "MM",
    fullQuote: "I recently worked with Waleed for the UI design of my web app, and he did an exceptional job. His attention to detail and intuitive design skills greatly enhanced the user experience and visual appeal of the app. I highly recommend him for UI design projects due to his professionalism and creativity.",
  },
  {
    quote: "This UX designer is amazing. Waleed is talented, pays attention to details, and designed it exactly how I envisioned it. Working with him is a true testament to bringing a vision to life.",
    name: "Morgan Shuller",
    role: "CTO, CocheVia",
    projectType: "Mobile product design",
    initials: "MS",
    fullQuote: "This UX DESIGNER IS AMAZING 🤩! He is #1 in design! I am highly impressed and satisfied with the design. Waleed is amazing and talented. He pays attention to details and he designed it EXACTLY how I visioned it to be. Working with him is a true testament of bringing a vision to life !!!",
  },
] as const;


export const pricing = [
  { label: "Monthly", price: "$3000", subtitle: "Monthly Design Partnership (billed per month)", note: "2 spots remaining", features: ["Ongoing design support for any project", "Flexible scope with clear timelines and deliverables", "Fast turnarounds with 1–2 day revisions", "Strategic kickoff call to plan your project", "Weekly calls + private Slack"] },
  { label: "Fixed project", price: "Custom", subtitle: "A focused solution shaped around your project", note: "10% off your first project", features: ["A full project with a clear start and finish", "Fixed price based on your needs", "Clear timeline and deliverables", "Additional support after completion", "Weekly calls + private Slack"] },
] as const;

export const faqs = [
  ["What services do you offer?", "Brand identity, websites and landing pages, SaaS and product design, mobile app design, and ongoing design partnerships. Design and development can be delivered together, so the work stays connected from first concept to launch."],
  ["Do you offer design-only work?", "Yes. Some clients need UI design and a development-ready handoff, while others want design and implementation delivered together. Both are available, and your proposal states clearly which one you are getting."],
  ["What is the typical investment for a project?", "Brand identity starts at $1,000, landing pages at $1,500, business websites at $3,000, SaaS dashboards at $4,000, and MVPs at $5,000. Ongoing partnerships start at $3,000 per month. Every proposal confirms the exact scope, deliverables, and timeline before kickoff."],
  ["How long does a project take?", "A landing page usually takes 1–2 weeks, a business website 3–5 weeks, a SaaS dashboard 4–8+ weeks, and an MVP 6–12+ weeks. Timelines depend on scope, content readiness, and how quickly feedback comes back."],
  ["How many revisions are included?", "Each project includes a defined number of review rounds at agreed milestones, plus refinement within the agreed scope. Revision rounds are confirmed in your proposal so expectations stay clear on both sides."],
  ["How do payments and milestones work?", "Projects are split into milestones agreed before kickoff — typically a deposit to schedule the work and the remainder on delivery. Monthly partnerships are billed per cycle, with capacity and cancellation terms confirmed in writing."],
  ["Can you work with an existing team?", "Yes. I regularly work alongside in-house designers and developers, taking on the design or build work that the team needs, and hand off organized files and documentation so the work continues smoothly."],
  ["Do you work with international clients?", "Yes. Projects are run remotely with clients across different time zones, using async updates, shared boards, and calls arranged around your working hours."],
  ["What happens after I submit a project inquiry?", "You will get a reply within 1–2 business days. If the project looks like a good fit, we arrange a short discovery call, then you receive a proposal with scope, timeline, and investment. If it is not a fit, you will hear that straight away."],
] as const;


// Drop your video into /public/media and update these two values.
// Keep VIDEO_SRC empty until a real video is supplied; the component will use the poster.
export const VIDEO_SRC = "";
export const VIDEO_POSTER = "/images/hero-04.webp";

export const workflow = [
  { index: "01", title: "Discovery & Strategy", detail: "We discuss your goals, audience, challenges, scope, and expectations.", receives: "A clear brief, scope, and timeline" },
  { index: "02", title: "Planning & Direction", detail: "We establish the structure, user journeys, creative direction, and project roadmap.", receives: "Site map, flows, and visual direction" },
  { index: "03", title: "Design & Development", detail: "Your project comes to life through collaborative design and implementation.", receives: "Approved designs and a working build" },
  { index: "04", title: "Review & Launch", detail: "We refine, test, deliver, and prepare everything for launch.", receives: "Tested release, files, and handoff" },
] as const;


// Original long-form copy retained from the repository's original index.html.
export const aboutIntro = "I'm Waleed — an independent product and visual designer working with startups, founders, and growing businesses. Over the past 7+ years I've designed brands, websites, dashboards, and mobile products, and I stay involved from the first idea through to the build.";

export const biography = [
  'Hey there!',
  'I’m WALEED, an independent product and visual designer. For the last 7+ years I’ve helped founders and growing teams turn ideas into brands, websites, and digital products that people actually use.',
  'Most projects start with the business problem behind the design — who the customer is, what they need to understand, and what the product has to do. From there I shape the structure, the visual direction, and the build that follows.',
  'I keep the process direct and collaborative: clear milestones, honest feedback, and one person accountable from the first conversation through to launch. If that sounds like the kind of partner you’re looking for, let’s talk.',
] as const;

export const originalMessaging = {
  introduction: "It's Waleed (SerVeekay) — Your product design partner!",
  headline: 'I Design intuitive products that drive results.',
  hero: serviceMessaging.description,
  overview: "Expert UI/UX consulting to identify design gaps, improve user experience, and align with your business goals.",
  contactTitle: serviceMessaging.prompt,
  contactCopy: serviceMessaging.direction,
} as const;

export const toolkit = ["Figma", "Next.js", "React", "TypeScript", "CSS", "Design systems", "Prototyping", "Notion"] as const;
