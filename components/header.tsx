"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { identity, navigation } from "@/data/site";
import { RollingText } from "@/components/rolling-text";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const pathname = usePathname();
  return <Navigation key={pathname} home={pathname === "/"} />;
}

function Navigation({ home }: { home: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [dark, setDark] = useState(home);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastAction = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = Math.max(0, window.scrollY);
      setScrolled(y > innerHeight * .3);
      if (y < 100) { setHidden(false); lastAction = y; }
      else if (Math.abs(y - lastAction) > 150) {
        setHidden(y > lastAction && !document.activeElement?.closest(".site-header"));
        lastAction = y;
      }
      let onDark = home && y < innerHeight * .6;
      document.querySelectorAll<HTMLElement>("[data-nav-theme]").forEach(section => {
        const bounds = section.getBoundingClientRect();
        if (bounds.top < innerHeight * .3 && bounds.bottom > 100) onDark = section.dataset.navTheme === "dark";
      });
      setDark(onDark);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(frame); };
  }, [home]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    if (main) main.inert = true;
    if (footer) footer.inert = true;
    const focusFrame = requestAnimationFrame(() => panel.current?.querySelector<HTMLAnchorElement>("a")?.focus());
    const close = () => { setOpen(false); toggle.current?.focus(); };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key !== "Tab") return;
      const items = [toggle.current, ...Array.from(panel.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [])].filter((item): item is HTMLAnchorElement | HTMLButtonElement => !!item);
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    const desktop = window.matchMedia("(min-width: 761px)");
    const onResize = () => { if (desktop.matches) close(); };
    desktop.addEventListener("change", onResize);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      if (main) main.inert = false;
      if (footer) footer.inert = false;
      desktop.removeEventListener("change", onResize);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return <header className={`site-header${dark ? " on-dark" : ""}${scrolled ? " is-scrolled" : ""}${open ? " menu-open" : ""}${hidden && !open ? " is-hidden" : ""}`} onFocusCapture={() => setHidden(false)}>
    <div className="header-inner">
      <Link href="/" className="wordmark" aria-label="Serveekay home" tabIndex={open ? -1 : undefined}>serveekay<span>.</span></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{navigation.map(link => <Link key={link.href} href={link.href} className={link.href === "/contact" ? "nav-contact" : "nav-link"}><RollingText text={link.label} /></Link>)}</nav>
      <div className="header-actions"><ThemeToggle tabIndex={open ? -1 : undefined} /><button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(value => !value)}><span /><span /></button></div>
    </div>
    <div ref={panel} id="mobile-navigation" className="mobile-navigation" inert={!open} aria-hidden={!open}>
      <p className="eyebrow">/ Explore</p>
      <nav aria-label="Mobile navigation">{navigation.map((link, index) => <Link key={link.href} href={link.href} onClick={() => { setOpen(false); toggle.current?.focus(); }}><span>0{index + 1}</span>{link.label}<span aria-hidden="true">↗</span></Link>)}</nav>
      <div className="mobile-navigation__bottom"><p>{identity.availability}</p><a href={`mailto:${identity.email}`}>{identity.email}</a></div>
    </div>
  </header>;
}
