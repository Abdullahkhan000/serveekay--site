import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Experience } from "@/components/experience";
import { Header } from "@/components/header";

export const metadata: Metadata = { title: "Start a project", description: "Start a product design, web design, mobile app, or branding project with Serveekay." };

export default function ContactPage() {
  return (
    <>
      <Experience /><Header />
      <main className="shell pb-5 pt-28 md:pt-32">
        <div data-reveal className="flex justify-between border-b border-line py-4 text-xs"><span>Start a project</span><span className="text-black/65">Replies within 1–2 business days</span></div>
        <section className="section-space grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-[10vw]">
          <div data-reveal><p className="eyebrow mb-10">Let&apos;s work together</p><h1 className="section-title">Tell me what<br />you&apos;re building.</h1><p className="mt-10 max-w-lg text-xl leading-relaxed text-black/65">Whether it&apos;s a new product, a redesign, or a sharper visual identity — share the rough idea. We&apos;ll shape the right path from there.</p><div className="mt-16 grid grid-cols-2 gap-4 border-t border-line pt-4 text-sm"><div><span className="eyebrow text-black/65">Email</span><a href="mailto:hiserveekay@gmail.com" className="mt-2 block">hiserveekay@gmail.com</a></div><div><span className="eyebrow text-black/65">Availability</span><p className="mt-2">2 spots remaining</p></div></div></div>
          <div data-reveal><ContactForm /></div>
        </section>
        <section data-reveal className="relative min-h-[34rem] overflow-hidden rounded-[1.4rem] bg-ink md:min-h-[48rem]"><Image src="/images/contact.webp" alt="Serveekay contact artwork" fill sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" /><div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-white md:inset-x-10 md:bottom-10"><p className="display-copy max-w-4xl">Our first chat?<br />Your next breakthrough.</p><Link href="/" className="hidden font-display text-xs font-bold md:block">Back home ↗</Link></div></section>
      </main>
      <footer className="shell mt-5 bg-acid py-5"><div className="flex justify-between font-display text-[10px] font-bold uppercase"><span>© 2026 Serveekay™</span><Link href="/">Back home ↑</Link></div></footer>
    </>
  );
}
