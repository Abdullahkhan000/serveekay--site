"use client";

import { FormEvent, useState } from "react";
import { identity } from "@/data/site";
import { Arrow } from "@/components/ui";

export function ContactForm({ defaultEmail = "" }: { defaultEmail?: string }) {
  const [status, setStatus] = useState("");
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
  return <form className="inquiry-form" onSubmit={submit}>
    <div className="form-row"><label>Name *<input name="name" placeholder="Your name" autoComplete="name" required maxLength={120} /></label><label>Email *<input name="email" type="email" defaultValue={defaultEmail} placeholder="you@company.com" autoComplete="email" required /></label></div>
    <label>Subject *<input name="subject" placeholder="What are you working on?" required maxLength={200} /></label>
    <label>Message *<textarea name="message" placeholder="Tell me a little about your project…" rows={4} required maxLength={4000} /></label>
    <label>Approximate budget <span className="optional">(optional)</span><select name="budget" defaultValue=""><option value="">Select a range</option><option>$1k — $3k</option><option>$3k — $8k</option><option>$8k — $15k</option><option>$15k+</option></select></label>
    <div className="form-submit"><button className="button" type="submit">Send a message <Arrow /></button><p>Opens your email app.<br />Prefer email? <a href={`mailto:${identity.email}`}>Write to me directly.</a></p></div>
    <p className="form-status" role="status">{status}</p>
  </form>;
}
