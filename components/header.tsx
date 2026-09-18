"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [{ href: "/#services", label: "Services" }, { href: "/#work", label: "Works" }, { href: "/#about", label: "About" }];

export function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let previous = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setHidden(current > 180 && current > previous + 4);
      previous = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`fixed inset-x-2 top-2 z-50 grid min-h-16 grid-cols-[1fr_auto] items-center rounded-xl bg-white/90 px-3 py-2 shadow-[0_8px_35px_rgba(0,0,0,.06)] backdrop-blur-xl transition-transform duration-500 md:inset-x-4 md:top-4 md:grid-cols-[1fr_auto_1fr_auto] md:gap-7 md:px-5 ${hidden && !open ? "-translate-y-32" : "translate-y-0"}`}>
        <Link href="/" className="flex items-center gap-5" aria-label="Serveekay home">
          <span className="font-display text-sm font-extrabold tracking-[-.07em]">SERVEEKAY®</span>
          <span className="hidden border-l border-line pl-5 text-[11px] leading-[1.05] text-black/65 lg:block">Product designer<br />Independent creative</span>
        </Link>
        <nav className="hidden items-center gap-8 font-display text-sm font-bold md:flex" aria-label="Primary navigation">
          {links.map((link) => <Link key={link.href} href={link.href} className="underline-link relative">{link.label}</Link>)}
        </nav>
        <div className="hidden items-center justify-self-end gap-2.5 lg:flex">
          <Image src="/images/waleed-avatar.webp" alt="Waleed" width={42} height={42} className="h-10 w-10 rounded-lg object-cover object-top" />
          <span className="text-xs leading-tight"><b className="block font-semibold after:ml-1 after:inline-block after:h-1.5 after:w-1.5 after:rounded-full after:bg-green-500 after:align-middle">Waleed is available</b><small className="text-black/65">For selected projects</small></span>
        </div>
        <Link href="/contact" className="hidden min-h-12 items-center gap-8 rounded-lg bg-ink px-5 font-display text-xs font-bold text-white transition hover:-translate-y-0.5 md:flex">Let&apos;s Talk <span>↗</span></Link>
        <button type="button" className="relative z-20 flex h-11 w-20 items-center justify-center rounded-lg bg-ink font-display text-xs font-bold text-white md:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((value) => !value)}>{open ? "Close" : "Menu"}<span className="ml-2 text-base font-normal">{open ? "×" : "="}</span></button>
      </header>
      <div id="mobile-nav" className={`fixed inset-0 z-40 bg-acid px-4 pb-10 pt-28 transition duration-500 md:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}>
        <nav className="flex flex-col" aria-label="Mobile navigation">
          {[...links, { href: "/#pricing", label: "Pricing" }, { href: "/#faqs", label: "FAQ’s" }].map((link, index) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="flex items-start justify-between border-b border-ink py-3 text-[2.55rem] leading-none tracking-[-.045em]"><span>{link.label}</span><span className="font-display text-[10px] font-bold">0{index + 1}</span></Link>
          ))}
        </nav>
      </div>
    </>
  );
}
