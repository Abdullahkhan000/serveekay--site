import Image from "next/image";
import Link from "next/link";
import { Experience } from "@/components/experience";
import { Header } from "@/components/header";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { faqs, projects, services, type Project } from "@/data/site";

const heroImages = ["/images/hero-01.webp", "/images/hero-02.webp", "/images/hero-03.webp", "/images/hero-04.webp", "/images/hero-05.webp"];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link href={`/work/${project.slug}`} data-reveal data-cursor="View" className={`media-zoom group min-w-0 ${project.featured ? "md:col-span-2" : ""}`}>
      <figure className={`relative m-0 overflow-hidden rounded-[1.25rem] ${project.tone} ${project.featured ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
        <Image src={project.image} alt={`${project.title} — ${project.description}`} fill sizes={project.featured ? "(max-width: 767px) 100vw, 96vw" : "(max-width: 767px) 100vw, 48vw"} className="object-cover" />
      </figure>
      <div className="mt-3 grid grid-cols-[3.5rem_1fr_2rem] gap-3 border-t border-ink pt-4 md:grid-cols-[4.5rem_auto_1fr_2rem]">
        <span className="eyebrow text-black/65">{String(index + 1).padStart(2, "0")} / 08</span>
        <h3 className="text-3xl leading-none tracking-[-.045em] md:text-5xl">{project.title}</h3>
        <p className="col-start-2 mt-1 max-w-md text-sm text-black/65 md:col-start-3 md:justify-self-end">{project.description}</p>
        <span className="col-start-3 row-start-1 justify-self-end text-xl transition group-hover:translate-x-1 group-hover:-translate-y-1 md:col-start-4">↗</span>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <Experience />
      <Header />
      <main>
        <section id="top" className="shell min-h-screen pb-0 pt-28 md:pt-32">
          <div data-reveal className="flex items-center justify-between border-b border-line py-4 text-xs">
            <span>It&apos;s Waleed (SerVeekay) — Your product design partner!</span>
            <span className="hidden text-black/65 md:block">Pakistan · Working worldwide</span>
          </div>

          <h1 className="wordmark my-8 md:my-14" aria-label="Serveekay">
            {"SERVEEKAY".split("").map((letter, index) => <span key={`${letter}-${index}`} aria-hidden="true">{letter}</span>)}
          </h1>

          <div data-reveal className="grid gap-9 pb-16 md:grid-cols-[2fr_1fr] md:gap-[9vw] md:pb-24">
            <h2 className="display-copy">I design intuitive<br />products that drive results.</h2>
            <div className="self-end">
              <p className="mb-8 max-w-md text-lg leading-snug text-black/65 md:text-2xl">Your secret weapon for product-market fit: I design high-growth experiences that convert users and impress investors.</p>
              <div className="flex flex-wrap items-center gap-7"><ButtonLink href="/contact">Book 1:1 Call</ButtonLink><Link href="#work" className="underline-link relative font-display text-xs font-bold">Explore work <span className="ml-5">↓</span></Link></div>
            </div>
          </div>

          <div data-reveal className="grid grid-cols-2 gap-3 pb-4 md:grid-cols-4">
            {["UI/UX Product design", "Web design", "Branding", "Development"].map((item) => <div key={item} className="border-b border-dotted border-black/40 pb-4 text-center font-display text-sm font-bold md:text-lg">{item}</div>)}
          </div>

          <div data-reveal data-cursor="Play" className="relative h-[72vh] min-h-[34rem] overflow-hidden rounded-[1.4rem] bg-ink md:h-[min(67vw,54rem)]">
            <div className="hero-reel flex h-full w-full">
              {heroImages.map((src, index) => <figure key={src} className="relative m-0 h-full w-full shrink-0 overflow-hidden"><Image src={src} alt={`Serveekay selected product design ${index + 1}`} fill priority={index === 0} sizes="100vw" className="object-cover" /></figure>)}
            </div>
            <div className="absolute inset-x-3 bottom-3 grid grid-cols-2 rounded-lg bg-white/90 px-4 py-3 font-display text-[10px] font-bold uppercase backdrop-blur-xl md:grid-cols-3"><span>Selected moments</span><span className="text-right md:text-center">Scroll to explore</span><span className="hidden text-right md:block">2022—2026</span></div>
          </div>
        </section>

        <section className="shell section-space grid gap-12 md:grid-cols-[1fr_3fr] md:gap-[5vw]">
          <p data-reveal className="eyebrow">A little about what I do</p>
          <div>
            <p data-reveal className="display-copy">I help ambitious products move from <strong className="font-display font-bold">“meh”</strong> to <strong className="font-display font-bold">“WOW!”</strong> through strategy, sharp visual thinking, and digital experiences people actually enjoy using.</p>
            <div data-reveal className="mt-16 grid gap-3 md:mt-24 md:grid-cols-3">
              {[['Senior-level', 'Product thinking'], ['End-to-end', 'Design + development'], ['Always clear', 'Fast collaboration']].map(([title, text]) => <div key={title} className="border-t border-line pt-4"><strong className="block font-display text-sm">{title}</strong><span className="text-sm text-black/65">{text}</span></div>)}
            </div>
          </div>
        </section>

        <section id="services" className="shell section-space bg-ink text-white">
          <SectionHeading index="01" eyebrow="Services" light>Creations &amp;<br />Experiments</SectionHeading>
          <div className="border-t border-white/30">
            {services.map((service) => (
              <article key={service.number} data-reveal className="service-row relative isolate grid min-h-44 grid-cols-[2.5rem_1fr_1.5rem] items-center gap-3 border-b border-white/30 py-7 transition-colors md:grid-cols-[4.5rem_1.2fr_1fr_2rem] md:gap-[3vw] md:py-9">
                <span className="service-muted self-start font-display text-xs font-bold text-white/70">{service.number}</span>
                <div><h3 className="max-w-2xl text-3xl leading-[.95] tracking-[-.045em] md:text-6xl">{service.title}</h3><p className="service-muted mt-3 text-xs text-white/70">{service.tags}</p></div>
                <p className="service-muted col-span-2 col-start-2 max-w-md text-sm text-white/70 md:col-span-1 md:col-start-3">{service.description}</p>
                <span className="col-start-3 row-start-1 justify-self-end text-2xl md:col-start-4">↗</span>
                <figure className="service-preview pointer-events-none absolute right-[10%] top-1/2 z-10 hidden h-40 w-56 overflow-hidden rounded-xl shadow-2xl lg:block"><Image src={service.image} alt="" fill sizes="224px" className="object-cover" /></figure>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="shell section-space pb-0">
          <SectionHeading index="02" eyebrow="Featured work" note="A selection of digital products, identities and experiences designed to move businesses forward.">Selected<br />work</SectionHeading>
          <div className="grid grid-cols-1 gap-x-4 gap-y-20 md:grid-cols-2 md:gap-y-32">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
        </section>

        <section id="pricing" className="shell section-space">
          <SectionHeading index="03" eyebrow="Ways to work">Pay for outcomes.<br />Not jargon.</SectionHeading>
          <div className="grid gap-4 lg:grid-cols-2">
            <article data-reveal className="flex min-h-[44rem] flex-col rounded-[1.4rem] bg-ink p-7 text-white md:p-12">
              <div className="flex min-h-24 justify-between font-display text-xs font-bold uppercase"><span>Monthly</span><span className="before:mr-2 before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-green-400 before:shadow-[0_0_0_6px_rgba(74,222,128,.15)]">2 Spots Remaining</span></div>
              <h3 className="text-[5rem] leading-[.82] tracking-[-.065em] md:text-8xl">$3000</h3><p className="mt-6 text-white/70">Monthly Design Partnership (Billed Per Month)</p>
              <ul className="mt-12 border-t border-white/70 text-sm">{["Ongoing design support for any project", "Flexible scope with clear timelines and deliverables", "Fast turnarounds with 1-2 day revisions", "Strategic kickoff call to plan your project", "Weekly calls + private Slack"].map((item) => <li key={item} className="border-b border-white/70 py-3.5 before:mr-5 before:content-['↳']">{item}</li>)}</ul>
              <div className="mt-auto pt-8"><ButtonLink href="/contact" light>Book a Call</ButtonLink></div>
            </article>
            <article data-reveal className="flex min-h-[44rem] flex-col rounded-[1.4rem] border border-ink p-7 md:p-12">
              <div className="flex min-h-24 justify-between font-display text-xs font-bold uppercase"><span>Fixed Project</span><span className="text-right">10% off on your first project</span></div>
              <h3 className="text-[4.4rem] leading-[.82] tracking-[-.065em] md:text-8xl">Fixed-scope<br />projects</h3><p className="mt-6 text-black/65">Custom Solution</p>
              <ul className="mt-12 border-t border-ink text-sm">{["Full project with clear start and finish", "Fixed price based on your needs", "Clear timeline and deliverables", "Additional design support after project completion", "Weekly calls + private Slack"].map((item) => <li key={item} className="border-b border-ink py-3.5 before:mr-5 before:content-['↳']">{item}</li>)}</ul>
              <div className="mt-auto flex flex-wrap items-center gap-7 pt-8"><ButtonLink href="/contact">Book a Call</ButtonLink><Link href="mailto:hiserveekay@gmail.com" className="underline-link relative font-display text-xs font-bold">Send an Inquiry</Link></div>
            </article>
          </div>
        </section>

        <section id="about" className="shell section-space bg-sand">
          <SectionHeading index="04" eyebrow="About me">Me, Myself<br />&amp; I</SectionHeading>
          <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-[8vw]">
            <figure data-reveal data-cursor="Hello" className="relative m-0 aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-[#d2cbc1] lg:sticky lg:top-28"><Image src="/images/waleed-portrait.webp" alt="Waleed, also known as Serveekay" fill sizes="(max-width: 1023px) 100vw, 52vw" className="object-cover object-top" /><figcaption className="absolute inset-x-3 bottom-3 flex justify-between rounded-lg bg-white/90 px-4 py-3 font-display text-[10px] font-bold uppercase backdrop-blur-xl"><span>Waleed</span><span>Product designer</span></figcaption></figure>
            <div data-reveal className="pt-2"><h3 className="mb-14 text-6xl leading-[.86] tracking-[-.06em] md:text-8xl">MEET <strong className="font-display font-bold">SerVeekay</strong></h3><div className="space-y-7 text-xl leading-relaxed text-black/70 md:text-2xl"><p>Hey there!</p><p>I&apos;m <strong className="font-semibold text-ink">WALEED</strong>, a product designer with a knack for turning “meh” into “WOW!” and solving user problems with a sprinkle of creativity, a dash of aesthetics, and just the right amount of <em>why didn&apos;t I think of that?</em></p><p>When I&apos;m not obsessing over pixels or user flows, you&apos;ll probably find me geeking out over the latest design trends or convincing my clients that yes, good design can make you happier—just like a solid workout.</p><p>Let&apos;s make things look awesome, work seamlessly, and maybe even burn a few calories from all the excitement. Ready to create something unforgettable?</p></div><div className="mt-12"><ButtonLink href="/contact">Let&apos;s Talk</ButtonLink></div></div>
          </div>
        </section>

        <section className="shell section-space">
          <SectionHeading index="05" eyebrow="Client notes">Wall of love</SectionHeading>
          <div className="grid gap-4 lg:grid-cols-2">
            <blockquote data-reveal className="flex min-h-[36rem] flex-col rounded-[1.4rem] bg-white p-7 md:p-12"><span className="text-8xl leading-none">“</span><p className="my-10 text-2xl leading-tight tracking-[-.02em] md:text-4xl">I recently worked with Waleed for the UI design of my web app, and he did an exceptional job. His attention to detail and intuitive design skills greatly enhanced the user experience and visual appeal of the app.</p><footer className="mt-auto flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-full bg-ink font-display text-xs font-bold text-white">MM</span><span><strong className="block font-display text-sm">Meelaad Mashaw</strong><small className="text-black/65">Founder EASYWAYSEO</small></span></footer></blockquote>
            <blockquote data-reveal className="flex min-h-[36rem] flex-col rounded-[1.4rem] bg-acid p-7 md:p-12"><span className="text-8xl leading-none">“</span><p className="my-10 text-2xl leading-tight tracking-[-.02em] md:text-4xl">This UX DESIGNER IS AMAZING 🤩! He is #1 in design! Waleed is amazing and talented. He pays attention to details and designed it exactly how I envisioned it.</p><footer className="mt-auto flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-full bg-ink font-display text-xs font-bold text-white">MS</span><span><strong className="block font-display text-sm">Morgan Shuller</strong><small className="text-black/65">CTO @ CocheVia</small></span></footer></blockquote>
          </div>
        </section>

        <section id="faqs" className="shell section-space bg-ink text-white">
          <SectionHeading index="06" eyebrow="Need to know" light>FAQ&apos;s &amp;<br />Shenanigans</SectionHeading>
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-[8vw]">
            <figure data-reveal className="relative m-0 min-h-[28rem] overflow-hidden rounded-[1.4rem] bg-acid"><Image src="/images/faq.webp" alt="Decorative question mark illustration" fill sizes="(max-width: 1023px) 100vw, 32vw" className="object-cover object-top" /><figcaption className="absolute inset-x-7 bottom-6 max-w-xs font-display font-bold text-ink">Everything you might want to know before we make something brilliant together.</figcaption></figure>
            <div data-reveal className="border-t border-white/30">{faqs.map(([question, answer], index) => <details key={question} className="border-b border-white/30"><summary className="grid cursor-pointer grid-cols-[2.5rem_1fr_1.5rem] items-center gap-2 py-6 text-2xl leading-tight tracking-[-.02em] md:grid-cols-[3.5rem_1fr_2rem] md:py-8 md:text-4xl"><span className="eyebrow text-white/70">{String(index + 1).padStart(2, "0")}</span><span>{question}</span><i className="faq-plus relative h-5 w-5" /></summary><p className="max-w-2xl pb-8 pl-10 text-base leading-relaxed text-white/70 md:pl-14 md:text-lg">{answer}</p></details>)}</div>
          </div>
        </section>

        <section className="shell pb-4 pt-4 md:pt-8">
          <div data-reveal className="relative flex min-h-[44rem] items-end overflow-hidden rounded-[1.4rem] bg-ink p-7 text-white md:min-h-[min(70vw,56rem)] md:items-center md:justify-end md:p-16">
            <Image src="/images/contact.webp" alt="Serveekay contact artwork" fill sizes="100vw" className="object-cover object-left" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent md:bg-gradient-to-r md:from-transparent md:via-ink/50 md:to-ink" />
            <div className="relative z-10 w-full md:w-1/2"><p className="eyebrow">Have a project?</p><h2 className="section-title my-8">Our first chat?<br />Your next breakthrough.</h2><p className="mb-8 max-w-md text-lg text-white/70">Our first discussion could be worth millions to your business.</p><ButtonLink href="/contact" light>Let&apos;s Talk</ButtonLink></div>
          </div>
        </section>
      </main>

      <footer className="shell overflow-hidden bg-acid pt-24 md:pt-36">
        <div className="grid items-end gap-8 pb-20 md:grid-cols-[1fr_2fr]"><p className="eyebrow">Let&apos;s get down<br />to business.</p><a href="mailto:hiserveekay@gmail.com" className="flex justify-between border-b-2 border-ink pb-3 text-[clamp(2.3rem,7vw,7rem)] leading-none tracking-[-.055em]">hiserveekay@gmail.com <span>↗</span></a></div>
        <div className="grid grid-cols-2 border-t border-ink py-4 font-display text-[10px] font-bold uppercase md:grid-cols-3"><span>© 2026 Serveekay™</span><span className="hidden text-center md:block">Product design · Web design · Development</span><Link href="#top" className="text-right">Back to top ↑</Link></div>
        <div className="wordmark-small mt-12 -mb-[2vw] text-center" aria-hidden="true">SERVEEKAY</div>
      </footer>
    </>
  );
}
