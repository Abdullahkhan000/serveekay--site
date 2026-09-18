export type Project = { slug: string; title: string; description: string; image: string; year: string; discipline: string; tone: string; featured?: boolean };

export const projects: Project[] = [
  { slug: "verdilock", title: "Verdilock", description: "Cybersecurity (Design + Development)", image: "/images/work-verdilock.webp", year: "2025", discipline: "Cybersecurity / Product", tone: "bg-[#dbe4f6]", featured: true },
  { slug: "lonu", title: "LONU", description: "Your budget and dietary goals restaurants finder", image: "/images/work-lonu.webp", year: "2025", discipline: "Mobile / Product", tone: "bg-[#dfe9d1]" },
  { slug: "cybon", title: "CYBON", description: "Penetration tests for your security as a website owner, online store operator, providers and anyone who processes sensitive data.", image: "/images/work-cybon.webp", year: "2025", discipline: "Security / Web app", tone: "bg-[#e2e0ef]" },
  { slug: "zippytal", title: "ZippyTAL", description: "Online Training and Learning Platform to enhance and boost your skills", image: "/images/work-zippytal.webp", year: "2024", discipline: "EdTech / Web", tone: "bg-[#ded2ef]", featured: true },
  { slug: "stack-days", title: "Stack Days", description: "Online Training and Learning Platform to enhance and boost your skills", image: "/images/work-stack-days.webp", year: "2024", discipline: "Learning / Product", tone: "bg-[#e8d7d2]", featured: true },
  { slug: "coche", title: "Coche", description: "Your daily life ride booking app with advanced AI features", image: "/images/work-coche.webp", year: "2024", discipline: "Mobility / Mobile", tone: "bg-[#d3e8e8]" },
  { slug: "picscroll", title: "PICSCROLL", description: "Discover and Connect with Endless Meme Images", image: "/images/work-picscroll.webp", year: "2023", discipline: "Social / Mobile", tone: "bg-[#eee0ce]" },
  { slug: "boomerang", title: "Boomerang", description: "Let’s Date and Make Connections", image: "/images/work-boomerang.webp", year: "2023", discipline: "Dating / Product", tone: "bg-[#efd5de]", featured: true },
];

export const services = [
  { number: "01", title: "Consulting", tags: "Strategy · UX audit · Product direction", description: "Expert UI/UX consulting to identify design gaps, improve user experience, and align with your business goals.", image: "/images/service-consulting.webp" },
  { number: "02", title: "Design System", tags: "Components · Tokens · Guidelines", description: "Scalable design system with reusable components, typography, and color guidelines.", image: "/images/service-design-system.webp" },
  { number: "03", title: "Web and Landing Page Design + Dev", tags: "UX/UI · Responsive · Conversion", description: "Custom web app and landing page designs that are user-focused, visually polished, and conversion-optimized.", image: "/images/service-web.webp" },
  { number: "04", title: "Mobile App Design + Dev", tags: "iOS · Android · Product design", description: "Custom mobile app design tailored for iOS and Android—intuitive, user-friendly, and aligned with your brand.", image: "/images/service-mobile.webp" },
  { number: "05", title: "Branding", tags: "Identity · Visual language · Direction", description: "Professional branding that captures your unique vision and turns it into a distinctive, memorable identity.", image: "/images/service-branding.webp" },
];

export const faqs = [
  ["What's my design delivery process?", "Each project starts with a clear brief and timeline. After research and wireframing, I move to high-fidelity designs and iterate based on your feedback. Deliverables are shared in organized Figma files, ready for development."],
  ["How does the Monthly Design Partnership work?", "You get access to dedicated design hours every month. Request tasks anytime — whether it’s UI screens, web layouts, or app flows. Work gets queued, delivered on a rolling basis, and refined through unlimited revisions."],
  ["What if I'm not satisfied with the designs?", "No worries! I offer unlimited revisions within the monthly cycle. Your satisfaction matters, and I’ll keep refining the work until it aligns with your vision and user goals."],
  ["How do I share feedback?", "You can leave comments directly in Figma, or send feedback via Notion, email, or your preferred tool. I’m flexible and respond quickly to keep things moving smoothly."],
  ["Is there a limit to what I can request?", "There’s no limit to how many design tasks you can request. They’re handled one at a time with clear priorities and realistic turnaround times."],
  ["Can we schedule calls during the project?", "Absolutely! We can schedule regular check-ins, kickoff meetings, or review calls to ensure we’re aligned at every step of the process."],
  ["Why choose monthly instead of fixed projects?", "Monthly partnerships offer flexibility, consistency, and faster turnarounds. You get ongoing design support without renegotiating scope or cost each time — perfect for fast-paced businesses or startups."],
] as const;
