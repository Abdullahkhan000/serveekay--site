import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { identity } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Waleed at Serveekay about your next project.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact — Serveekay", description: "Get in touch with Waleed about your next project.", url: "/contact", images: ["/images/contact.webp"] },
  twitter: { title: "Contact — Serveekay", description: "Get in touch with Waleed about your next project.", images: ["/images/contact.webp"] },
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ email?: string | string[] }> }) {
  const { email } = await searchParams;
  const defaultEmail = typeof email === "string" ? email.slice(0, 254) : "";
  return <section className="container contact-page"><div className="contact-page-heading"><p className="eyebrow">/ Get in touch</p><h1>Let&apos;s make<br />something <em>memorable.</em></h1></div><div className="contact-grid"><div className="contact-page-aside"><p className="contact-lead">Have a product, a fresh idea, or a question? I&apos;d love to hear about it.</p><a className="contact-email" href={`mailto:${identity.email}`}>{identity.email} ↗</a><div className="contact-profile"><Image src="/images/waleed-avatar.webp" alt="Waleed" width={170} height={168} /><div><strong>{identity.name}</strong><p>{identity.role} · {identity.location}</p></div></div><p className="availability"><span />{identity.availability}</p></div><ContactForm defaultEmail={defaultEmail} /></div></section>;
}
