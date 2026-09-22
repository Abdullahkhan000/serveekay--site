"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { identity, navigation } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.dataset.menuOpen = open ? "true" : "false";
    return () => { delete document.body.dataset.menuOpen; };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Link href="/" className="site-logo" aria-label="Serveekay home">
            <span className="site-logo__mark" aria-hidden="true">S</span>
            <span className="site-logo__name">SERVEEKAY®</span>
          </Link>

          <nav className="site-nav" aria-label="Primary navigation">
            {navigation.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="site-contact">
            <a href={`mailto:${identity.email}`} className="nav-link">{identity.email}</a>
            <span><i aria-hidden="true" /> {identity.location} · Worldwide</span>
          </div>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span>{open ? "Close" : "Menu"}</span>
            <i aria-hidden="true" />
          </button>
        </div>
      </header>

      <div id="mobile-navigation" className={`mobile-navigation ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-navigation__top">
          <span>Navigation</span>
          <span>{identity.location} · Worldwide</span>
        </div>
        <nav aria-label="Mobile navigation">
          {navigation.map((link, index) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{link.label}</strong>
              <i aria-hidden="true">↗</i>
            </Link>
          ))}
        </nav>
        <a className="mobile-navigation__email" href={`mailto:${identity.email}`} tabIndex={open ? 0 : -1}>
          {identity.email} <span>↗</span>
        </a>
      </div>
    </>
  );
}
