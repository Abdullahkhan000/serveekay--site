import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Menu,
  X,
} from 'lucide-react';

import type { ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { useEffect, useRef, useState } from 'react';

const links = [
  ['Index', '/'],
  ['Projects', '/#work'],
  ['Practice', '/#practice'],
  ['Contact', '/lets-work-together'],
];

export function Logo() {
  return (
    <Link className="mark-logo" href="/" aria-label="Waleed home">
      <b>W</b>
      <span>WALEED</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="mark-header">
        <Logo />

        <nav>
          {links.map(([name, href]) => (
            <a href={href} key={href}>
              {name}
            </a>
          ))}
        </nav>

        <div className="mark-header-right">
          <span>Available / 2026</span>

          <Link
            href="/lets-work-together"
            className="mark-contact"
          >
            Start a project
            <ArrowUpRight size={14} />
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="mark-menu"
            aria-label="Open navigation"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      <aside className={`mark-drawer ${open ? 'is-open' : ''}`}>
        <div>
          <Logo />

          <button
            onClick={() => setOpen(false)}
            className="mark-menu is-close"
            aria-label="Close navigation"
          >
            <X size={22} />
          </button>
        </div>

        <nav>
          {links.map(([name, href], i) => (
            <a
              href={href}
              onClick={() => setOpen(false)}
              key={href}
            >
              <small>0{i + 1}</small>
              {name}
            </a>
          ))}
        </nav>

        <p>
          Independent designer & developer
          <br />
          Karachi · Working worldwide
        </p>
      </aside>
    </>
  );
}

export function Footer() {
  return (
    <footer className="mark-footer">
      <div className="mark-wrap">
        <p className="mark-overline">
          The door is open
        </p>

        <h2>
          Let’s make
          <br />
          <i>something good.</i>
        </h2>

        <a
          className="mark-footer-email"
          href="mailto:hiserveekay@gmail.com"
        >
          hiserveekay@gmail.com
          <ArrowUpRight size={22} />
        </a>

        <div className="mark-footer-bottom">
          <Logo />

          <span>
            © {new Date().getFullYear()} Waleed
          </span>

          <div className="mark-socials">
            <a
              href="https://www.linkedin.com/in/waleed-%F0%9F%A7%A2-57a948332?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={19} />
            </a>

            <a
              href="https://www.instagram.com/serveekay?stkn=MmVqaHZ3M2tvbTRz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram size={19} />
            </a>
          </div>

          <span>Built slowly / Built well</span>
        </div>
      </div>
    </footer>
  );
}

export function PageFrame({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="mark-app">
      <SiteHeader />
      {children}
      <Footer />
    </div>
  );
}

export function Eyebrow({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <p className="mark-eyebrow">
      <span />
      {children}
    </p>
  );
}

export function ButtonLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="mark-button">
      {children}
      <ArrowUpRight size={16} />
    </Link>
  );
}

export function Reveal({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) {
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`mark-reveal ${on ? 'on' : ''} ${className}`}
    >
      {children}
    </div>
  );
}