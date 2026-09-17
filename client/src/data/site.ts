export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  description: string;
  image: string;
  accent: string;
  intro: string;
  challenge: string;
  approach: string[];
  deliverables: string[];
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  description: string;
  image: string;
  deliverables: string[];
};

const storage = '/assets/';

export const services: Service[] = [
  {
    slug: 'consulting', number: '01', title: 'Consulting',
    short: 'Clarity before pixels.',
    description: 'A focused design partnership for teams that need sharper product direction, better decisions, and momentum they can feel.',
    image: `${storage}Consulting-2x-e1752423976226.webp`,
    deliverables: ['Product positioning', 'Experience audits', 'Design direction', 'Workshop facilitation'],
  },
  {
    slug: 'design-system', number: '02', title: 'Design System',
    short: 'Make every screen feel related.',
    description: 'A considered visual language that gives your product consistency without sanding away its personality.',
    image: `${storage}Design-System-e1752423951582.webp`,
    deliverables: ['UI foundations', 'Component libraries', 'Interaction rules', 'Documentation'],
  },
  {
    slug: 'web-and-landing-page-design-dev', number: '03', title: 'Web & Landing Pages',
    short: 'Websites with a point of view.',
    description: 'Strategy, design, and front-end craft for digital experiences that look distinct and move people to act.',
    image: `${storage}Web-and-Landing-Page-Design-Dev-e1752423964300.webp`,
    deliverables: ['Art direction', 'Responsive UI', 'Conversion journeys', 'Production-ready code'],
  },
  {
    slug: 'mobile-app-design-dev', number: '04', title: 'Mobile App Design + Dev',
    short: 'Useful can still be beautiful.',
    description: 'Thoughtful mobile experiences that make complex workflows feel calm, intuitive, and worth returning to.',
    image: `${storage}Mobile-App-Design-Dev-e1752423927512.webp`,
    deliverables: ['User flows', 'Visual design', 'Prototyping', 'Front-end build'],
  },
  {
    slug: 'branding', number: '05', title: 'Branding',
    short: 'A brand people remember.',
    description: 'Identity systems with enough character to be recognized and enough flexibility to grow with the business.',
    image: `${storage}Branding-e1752423939788.webp`,
    deliverables: ['Identity direction', 'Type and color', 'Brand guidelines', 'Launch assets'],
  },
];

export const projects: Project[] = [
  {
    slug: 'verdilock-cybersecurity-design-development', name: 'Verdilock', category: 'Cybersecurity / Product', year: '2025',
    description: 'Making enterprise security feel legible, confident, and human.', image: `${storage}Verdilock-Cybersecurity-Design-Development-1-e1752423804971.webp`, accent: '#d1e6e0',
    intro: 'Verdilock needed a product presence that could speak to security leaders without feeling like another wall of jargon.',
    challenge: 'Translate a complex security proposition into a visual system that feels credible to technical buyers and clear to everyone else.',
    approach: ['Reframed the story around calm, proactive protection.', 'Built a modular visual language from signal lines, soft surfaces, and precise typography.', 'Designed the core marketing journey as a guided path from concern to confidence.'],
    deliverables: ['Brand direction', 'Marketing site', 'Product storytelling', 'Responsive UI system'],
  },
  {
    slug: 'lonu', name: 'LONU', category: 'Mobile / Experience', year: '2025',
    description: 'A softer, more focused way to move through everyday decisions.', image: `${storage}LONU-1-e1752423868492.webp`, accent: '#e9d4c2',
    intro: 'LONU is a mobile experience shaped around the idea that a useful tool should never feel like work.',
    challenge: 'Create a mobile interface that balances personality with the speed and clarity people expect from an everyday product.',
    approach: ['Reduced the experience to a small set of confident actions.', 'Used warm neutrals and oversized touch targets to create room to breathe.', 'Prototyped the moments that matter most before committing to the visual system.'],
    deliverables: ['Product strategy', 'Mobile UI', 'Interaction design', 'Prototype'],
  },
  {
    slug: 'cybon', name: 'CYBON', category: 'Brand / Digital Product', year: '2025',
    description: 'Turning a new technology brand into a signal worth following.', image: `${storage}CYBON-1-e1752423883552.webp`, accent: '#d9d0ef',
    intro: 'CYBON needed a distinct visual voice for a crowded, fast-moving technology category.',
    challenge: 'Build recognition quickly while keeping the product story direct enough for a first-time visitor to understand.',
    approach: ['Created a crisp identity with a confident, electric edge.', 'Designed content moments that work as both explanation and invitation.', 'Connected the landing experience to a reusable design system.'],
    deliverables: ['Brand identity', 'Website design', 'Content direction', 'UI kit'],
  },
  {
    slug: 'zippytal', name: 'ZippyTAL', category: 'SaaS / Platform', year: '2025',
    description: 'A platform experience that gets out of the team’s way.', image: `${storage}ZippyTAL-1-e1752423822120.webp`, accent: '#f0d6d2',
    intro: 'ZippyTAL is a platform for teams that need to move quickly without losing the thread.',
    challenge: 'Bring hierarchy and warmth to a high-volume workflow with many roles, states, and decisions.',
    approach: ['Mapped the experience around moments of intent, not feature lists.', 'Made status, progress, and next steps visible at a glance.', 'Balanced a practical SaaS foundation with a recognizable brand layer.'],
    deliverables: ['UX strategy', 'Platform UI', 'Design system', 'Prototype'],
  },
  {
    slug: 'stack-days', name: 'Stack Days', category: 'Event / Brand', year: '2025',
    description: 'An event identity with enough energy to fill the room.', image: `${storage}Stack-Days-1-e1752423854340.webp`, accent: '#d5e3f2',
    intro: 'Stack Days brings technical people together around ideas, tools, and the joy of making things.',
    challenge: 'Give the event a flexible visual identity that feels bold on a poster and clear in a busy schedule.',
    approach: ['Built a modular system around stacked type and generous blocks of color.', 'Created a set of repeatable compositions for speakers, sessions, and social content.', 'Kept the digital experience direct so the event could stay front and center.'],
    deliverables: ['Event identity', 'Web experience', 'Campaign system', 'Social templates'],
  },
  {
    slug: 'coche', name: 'Coche', category: 'Mobility / Product', year: '2025',
    description: 'A clearer path through modern mobility.', image: `${storage}Coche-1-e1752423896481-768x829.webp`, accent: '#e7e0c5',
    intro: 'Coche is a mobility concept built around making movement feel more considered.',
    challenge: 'Make a service with many variables feel simple, welcoming, and fast to understand.',
    approach: ['Focused the interface on routes, context, and confidence.', 'Used editorial imagery and compact information patterns to balance emotion with utility.', 'Designed a flexible foundation for a product that is still growing.'],
    deliverables: ['Experience strategy', 'Product UI', 'Design direction', 'Prototype'],
  },
  {
    slug: 'picscroll', name: 'PICSCROLL', category: 'Social / Mobile', year: '2025',
    description: 'A visual-first way to discover what is next.', image: `${storage}PICSCROLL-1-e1752423839556.webp`, accent: '#f2d9b1',
    intro: 'PICSCROLL is an experiment in giving visual discovery a little more rhythm and intention.',
    challenge: 'Create a scroll experience that feels spontaneous without becoming noisy or disposable.',
    approach: ['Used strong image ratios and intentional pacing to build a visual rhythm.', 'Kept controls quiet so content could lead.', 'Created interaction patterns that make browsing feel playful but never confusing.'],
    deliverables: ['Product concept', 'Mobile UI', 'Interaction design', 'Prototype'],
  },
  {
    slug: 'boomerang', name: 'Boomerang', category: 'Brand / Product', year: '2025',
    description: 'Designing a product people want to come back to.', image: `${storage}Boomerang-1-e1752423909328.webp`, accent: '#d9e4bf',
    intro: 'Boomerang is a product concept built around repeat engagement and small moments of delight.',
    challenge: 'Give the product a warm, recognizable presence while keeping the experience quick and effortless.',
    approach: ['Created a loop-inspired visual language with a human tone.', 'Made the core flow feel immediate on first use.', 'Designed the brand and product together so every touchpoint reinforces the same idea.'],
    deliverables: ['Product identity', 'UX/UI design', 'Launch direction', 'Prototype'],
  },
];

export const testimonials = [
  { quote: 'I recently worked with Waleed for the UI design of my web app, and he did an exceptional job.', name: 'Morgan Shuller', role: 'Founder, product team' },
  { quote: 'He has a rare ability to turn an abstract idea into something that feels obvious in the hands of a user.', name: 'Meelaad Mashaw', role: 'Product builder' },
  { quote: 'The work was thoughtful, fast, and full of those little details that make a product feel finished.', name: 'Client note', role: 'Digital product team' },
];

export const faqs = [
  ['What kind of projects do you take on?', 'I work with founders, product teams, and ambitious businesses on brand, digital product, and web experiences that need a sharper point of view.'],
  ['Do you work independently or with a team?', 'Both. I can plug into an existing team as a senior design partner or lead a focused project from direction through delivery.'],
  ['Can you help with development too?', 'Yes. The best work happens when design intent survives the handoff, so I offer production-ready front-end builds for selected projects.'],
  ['How does a project usually start?', 'We begin with a short conversation about the goal, the current state, and what success should feel like. From there I will recommend the clearest next step.'],
];

export function getProject(slug?: string) { return projects.find((project) => project.slug === slug); }
export function getService(slug?: string) { return services.find((service) => service.slug === slug); }
