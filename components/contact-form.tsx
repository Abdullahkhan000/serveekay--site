"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const project = String(form.get("project") || "");
    const budget = String(form.get("budget") || "Not specified");
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Waleed,\n\n${project}\n\nBudget: ${budget}\nContact: ${email}`);
    setStatus("Opening your email app…");
    window.location.href = `mailto:hiserveekay@gmail.com?subject=${subject}&body=${body}`;
  }

  const inputClass = "w-full border-b border-ink bg-transparent py-4 text-2xl tracking-[-.025em] outline-none placeholder:text-black/30 focus:border-b-2 md:text-4xl";

  return (
    <form onSubmit={submit} className="space-y-10">
      <label className="block"><span className="eyebrow text-black/65">01 / Your name</span><input required name="name" autoComplete="name" placeholder="Waleed Khan" className={inputClass} /></label>
      <label className="block"><span className="eyebrow text-black/65">02 / Email address</span><input required type="email" name="email" autoComplete="email" placeholder="hello@company.com" className={inputClass} /></label>
      <label className="block"><span className="eyebrow text-black/65">03 / Tell me about the project</span><textarea required name="project" rows={3} placeholder="A few lines about your idea, goals and timeline…" className={`${inputClass} resize-none`} /></label>
      <label className="block"><span className="eyebrow text-black/65">04 / Approximate budget</span><select name="budget" defaultValue="" className={`${inputClass} appearance-none`}><option value="" disabled>Select a range</option><option>$1k — $3k</option><option>$3k — $8k</option><option>$8k — $15k</option><option>$15k+</option></select></label>
      <div className="flex flex-wrap items-center gap-5 pt-3"><button type="submit" className="inline-flex min-h-14 items-center gap-12 rounded-lg bg-ink px-7 font-display text-sm font-bold text-white transition hover:-translate-y-0.5">Send inquiry <span>↗</span></button><span aria-live="polite" className="text-sm text-black/65">{status}</span></div>
    </form>
  );
}
