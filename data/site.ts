export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
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
};

export const navigation = [
  { href: "/#work", label: "Works" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const disciplines = [
  "UI/UX product design",
  "Web design",
  "Branding",
  "Development",
] as const;

export const projects: Project[] = [
  { slug: "inka", title: "INKA", description: "Project case study in progress.", image: "", year: "In progress", discipline: "Selected work", tone: "tone-olive" },
  { slug: "verdilock", title: "Verdilock", description: "Cybersecurity (Design + Development)", image: "/images/work-verdilock.webp", year: "2025", discipline: "Cybersecurity / Product", tone: "tone-blue", featured: true },
  { slug: "lonu", title: "LONU", description: "Your budget and dietary goals restaurants finder", image: "/images/work-lonu.webp", year: "2025", discipline: "Mobile / Product", tone: "tone-olive" },
  { slug: "cybon", title: "CYBON", description: "Penetration tests for website owners, online stores, providers, and anyone who processes sensitive data.", image: "/images/work-cybon.webp", year: "2025", discipline: "Security / Web app", tone: "tone-violet" },
  { slug: "zippytal", title: "ZippyTAL", description: "Online training and learning platform to enhance and boost your skills", image: "/images/work-zippytal.webp", year: "2024", discipline: "EdTech / Web", tone: "tone-purple", featured: true },
  { slug: "stack-days", title: "Stack Days", description: "Online training and learning platform to enhance and boost your skills", image: "/images/work-stack-days.webp", year: "2024", discipline: "Learning / Product", tone: "tone-rose", featured: true },
  { slug: "coche", title: "Coche", description: "Your daily life ride booking app with advanced AI features", image: "/images/work-coche.webp", year: "2024", discipline: "Mobility / Mobile", tone: "tone-cyan" },
  { slug: "picscroll", title: "PICSCROLL", description: "Discover and connect with endless meme images", image: "/images/work-picscroll.webp", year: "2023", discipline: "Social / Mobile", tone: "tone-sand" },
  { slug: "boomerang", title: "Boomerang", description: "Let’s date and make connections", image: "/images/work-boomerang.webp", year: "2023", discipline: "Dating / Product", tone: "tone-pink", featured: true },
];

export const services = [
  { number: "01", title: "Consulting", tags: "Strategy · UX audit · Product direction", description: "Expert UI/UX consulting to identify design gaps, improve user experience, and align with your business goals.", image: "/images/service-consulting.webp" },
  { number: "02", title: "Design System", tags: "Components · Tokens · Guidelines", description: "Scalable design systems with reusable components, typography, and color guidelines.", image: "/images/service-design-system.webp" },
  { number: "03", title: "Web Design + Dev", tags: "UX/UI · Responsive · Conversion", description: "Custom web apps and landing pages that are user-focused, visually polished, and conversion-optimized.", image: "/images/service-web.webp" },
  { number: "04", title: "Mobile App Design + Dev", tags: "iOS · Android · Product design", description: "Custom mobile app design tailored for iOS and Android—intuitive, user-friendly, and aligned with your brand.", image: "/images/service-mobile.webp" },
  { number: "05", title: "Branding", tags: "Identity · Visual language · Direction", description: "Professional branding that captures your unique vision and turns it into a distinctive, memorable identity.", image: "/images/service-branding.webp" },
];

export const capabilities = [
  { title: "Product thinking", description: "Clear product direction shaped around real user needs and business goals.", mark: "01" },
  { title: "Interface design", description: "High-fidelity interfaces that make complex products feel natural to use.", mark: "02" },
  { title: "Design + build", description: "A connected process from early ideas through polished, responsive delivery.", mark: "03" },
] as const;

export const testimonials = [
  { quote: "I recently worked with Waleed for the UI design of my web app, and he did an exceptional job. His attention to detail and intuitive design skills greatly enhanced the user experience and visual appeal of the app.", name: "Meelaad Mashaw", role: "Founder, EASYWAYSEO", initials: "MM" },
  { quote: "This UX designer is amazing. Waleed is talented, pays attention to details, and designed it exactly how I envisioned it. Working with him is a true testament to bringing a vision to life.", name: "Morgan Shuller", role: "CTO, CocheVia", initials: "MS" },
] as const;

export const pricing = [
  { label: "Monthly", price: "$3000", subtitle: "Monthly Design Partnership (billed per month)", note: "2 spots remaining", features: ["Ongoing design support for any project", "Flexible scope with clear timelines and deliverables", "Fast turnarounds with 1–2 day revisions", "Strategic kickoff call to plan your project", "Weekly calls + private Slack"] },
  { label: "Fixed project", price: "Custom", subtitle: "A focused solution shaped around your project", note: "10% off your first project", features: ["A full project with a clear start and finish", "Fixed price based on your needs", "Clear timeline and deliverables", "Additional support after completion", "Weekly calls + private Slack"] },
] as const;

export const faqs = [
  ["What’s my design delivery process?", "Each project starts with a clear brief and timeline. After research and wireframing, I move to high-fidelity designs and iterate based on your feedback. Deliverables are shared in organized Figma files, ready for development."],
  ["How does the Monthly Design Partnership work?", "You get access to dedicated design hours every month. Request tasks anytime—whether it’s UI screens, web layouts, or app flows. Work is queued, delivered on a rolling basis, and refined through unlimited revisions."],
  ["What if I’m not satisfied with the designs?", "No worries. I offer unlimited revisions within the monthly cycle and keep refining the work until it aligns with your vision and user goals."],
  ["How do I share feedback?", "You can leave comments directly in Figma, or send feedback via Notion, email, or your preferred tool. I’m flexible and respond quickly to keep things moving."],
  ["Is there a limit to what I can request?", "There’s no limit to how many design tasks you can request. They’re handled one at a time with clear priorities and realistic turnaround times."],
  ["Can we schedule calls during the project?", "Absolutely. We can schedule regular check-ins, kickoff meetings, or review calls to ensure we’re aligned at every step of the process."],
  ["Why choose monthly instead of fixed projects?", "Monthly partnerships offer flexibility, consistency, and faster turnarounds. You get ongoing design support without renegotiating scope or cost each time."],
] as const;

// Drop your video into /public/media and update these two values.
// Keep VIDEO_SRC empty until a real video is supplied; the component will use the poster.
export const VIDEO_SRC = "";
export const VIDEO_POSTER = "/images/hero-04.webp";
