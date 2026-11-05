"use client";

import { FormEvent, useId, useState } from "react";
import { identity } from "@/data/site";
import { offers } from "@/data/offers";
import { Arrow } from "@/components/ui";

export function ContactForm({ defaultEmail = "", service }: { defaultEmail?: string; service?: string }) {
  const [status, setStatus] = useState("");
  const formId = useId();
  const defaultSubject = offers.find((offer) => offer.slug === service)?.title ?? "";
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const subject = String(form.get("subject") || "Project inquiry").trim();
    const message = String(form.get("message") || "").trim();
    const budget = String(form.get("budget") || "Not specified");
    const mailSubject = encodeURIComponent(`${subject} — ${name}`);
    const mailBody = encodeURIComponent(`${message}\n\nBudget: ${budget}\nFrom: ${name} (${email})`);
    setStatus("Your email app will open with your draft. Send it there to complete your inquiry.");
    window.location.href = `mailto:${identity.email}?subject=${mailSubject}&body=${mailBody}`;
  }
  return <form className="inquiry-form" onSubmit={submit} aria-labelledby={`${formId}-title`}>
    <div className="inquiry-form-heading"><p className="eyebrow">/ Your next project</p><h2 id={`${formId}-title`}>Let&apos;s make it happen.</h2><p>Share a little about what you have in mind.</p></div>
    <div className="form-row">
      <label htmlFor={`${formId}-name`}>Your name <span className="field-required" aria-hidden="true">*</span><input id={`${formId}-name`} name="name" placeholder="Alex Morgan" autoComplete="name" required maxLength={120} /></label>
      <label htmlFor={`${formId}-email`}>Email address <span className="field-required" aria-hidden="true">*</span><input id={`${formId}-email`} name="email" type="email" defaultValue={defaultEmail} placeholder="you@company.com" autoComplete="email" required /></label>
    </div>
    <div className="form-row">
      <label htmlFor={`${formId}-subject`}>Project type <span className="field-required" aria-hidden="true">*</span><input id={`${formId}-subject`} name="subject" defaultValue={defaultSubject} placeholder="e.g. Website or app design" required maxLength={200} /></label>
      <label htmlFor={`${formId}-budget`}>Your budget <span className="optional">(optional)</span><select id={`${formId}-budget`} name="budget" defaultValue=""><option value="">Select a range</option><option>$1k — $3k</option><option>$3k — $8k</option><option>$8k — $15k</option><option>$15k+</option></select></label>
    </div>
    <label htmlFor={`${formId}-message`}>Tell me about your project <span className="field-required" aria-hidden="true">*</span><textarea id={`${formId}-message`} name="message" placeholder="What are you building? Share your goals, timeline, and anything else I should know." rows={5} required maxLength={4000} /></label>
    <div className="form-submit"><button className="button" type="submit">Prepare project email <Arrow /></button><p>Review and send in your email app.</p></div>
    <div className="inquiry-form-footnote"><span>* Required fields</span><a href={`mailto:${identity.email}`}>Prefer a direct email? <span aria-hidden="true">↗</span></a></div>
    <p className="form-status" role="status" aria-live="polite">{status}</p>
  </form>;
}
