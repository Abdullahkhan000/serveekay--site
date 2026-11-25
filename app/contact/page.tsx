import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { contactDetails, identity, serviceMessaging } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: serviceMessaging.headline,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact — Serveekay", description: serviceMessaging.headline, url: "/contact", images: ["/images/contact.webp"] },
  twitter: { title: "Contact — Serveekay", description: serviceMessaging.headline, images: ["/images/contact.webp"] },
};

const nextSteps = [
  "I review your project details.",
  `You get a reply ${contactDetails.responseWindow}.`,
  "If it is a good fit, we arrange a discovery call.",
  "You receive a proposal with scope, timeline, and investment.",
];

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ email?: string | string[]; service?: string | string[] }> }) {
  const { email, service } = await searchParams;
  const defaultEmail = typeof email === "string" ? email.slice(0, 254) : "";
  const defaultService = typeof service === "string" ? service.slice(0, 60) : "";
  return <section className="container contact-page" aria-labelledby="contact-title"><div className="contact-grid">
    <div className="contact-page-aside">
      <div className="contact-page-heading"><p className="eyebrow">/ Get in touch</p><h1 id="contact-title">Have something in mind?<br /><em>Let&apos;s make it happen.</em></h1><p className="contact-lead">Tell me a little about your project, what you&apos;re looking to achieve, and where you are in the process. I&apos;ll review your requirements and come back with next steps.</p></div>
      <a className="contact-email" href={`mailto:${contactDetails.email}`}><span className="contact-email-label">Write to me directly</span><span>{contactDetails.email} <span aria-hidden="true">↗</span></span></a>
      {(contactDetails.whatsapp || contactDetails.linkedin || contactDetails.booking) && <div className="contact-links">
        {contactDetails.whatsapp && <a href={`https://wa.me/${contactDetails.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer">WhatsApp <span aria-hidden="true">↗</span></a>}
        {contactDetails.linkedin && <a href={contactDetails.linkedin} target="_blank" rel="me noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>}
        {contactDetails.booking && <a href={contactDetails.booking} target="_blank" rel="noopener noreferrer">Book a discovery call <span aria-hidden="true">↗</span></a>}
      </div>}
      <div className="contact-next"><p className="eyebrow">/ What happens next</p><ol>{nextSteps.map((step, index) => <li key={step}><span>0{index + 1}</span>{step}</li>)}</ol></div>
      <div className="contact-profile"><Image src="/images/waleed-avatar.webp" alt="Waleed" width={170} height={168} /><div><strong>{identity.name}</strong><p>{identity.role} · {identity.location}</p></div></div>
      <p className="availability"><span />{identity.availability}</p>
    </div>
    <ContactForm defaultEmail={defaultEmail} service={defaultService} />
  </div></section>;
}
