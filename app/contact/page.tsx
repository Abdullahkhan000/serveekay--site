import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { identity, serviceMessaging } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: serviceMessaging.headline,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact — Serveekay", description: serviceMessaging.headline, url: "/contact", images: ["/images/contact.webp"] },
  twitter: { title: "Contact — Serveekay", description: serviceMessaging.headline, images: ["/images/contact.webp"] },
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ email?: string | string[] }> }) {
  const { email } = await searchParams;
  const defaultEmail = typeof email === "string" ? email.slice(0, 254) : "";
  return <section className="container contact-page"><div className="contact-page-heading"><p className="eyebrow">/ Get in touch</p><h1>{serviceMessaging.prompt}<br />Let&apos;s find the<br /><em>right direction.</em></h1></div><div className="contact-grid"><div className="contact-page-aside"><p className="contact-lead">{serviceMessaging.description}</p><a className="contact-email" href={`mailto:${identity.email}`}>{identity.email} ↗</a><div className="contact-profile"><Image src="/images/waleed-avatar.webp" alt="Waleed" width={170} height={168} /><div><strong>{identity.name}</strong><p>{identity.role} · {identity.location}</p></div></div><p className="availability"><span />{identity.availability}</p></div><ContactForm defaultEmail={defaultEmail} /></div></section>;
}
