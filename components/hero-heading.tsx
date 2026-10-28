"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./hero-heading.module.css";

const services = [
  "Landing Page & Website",
  "Logo & Brand Identity",
  "Mobile App Design",
  "SaaS Web / Mobile Apps",
  "Shopify Ecommerce Store",
];

export function HeroHeading() {
  const [active, setActive] = useState(0);
  const serviceContainer = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const element = serviceContainer.current;
    if (!element) return;
    const context = document.createElement("canvas").getContext("2d");
    if (!context) return;
    const fit = () => {
      const headingStyle = getComputedStyle(element.parentElement!);
      const maximumSize = parseFloat(headingStyle.fontSize);
      context.font = `italic ${headingStyle.fontWeight} ${maximumSize}px ${headingStyle.fontFamily}`;
      // Measure every service so each uses the same size and occupies one line.
      const widest = Math.max(...services.map(text => context.measureText(text).width));
      const size = Math.min(maximumSize, maximumSize * Math.max(0, element.clientWidth - 12) / widest);
      element.style.fontSize = `${size}px`;
    };
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;
    const start = () => {
      clearInterval(timer);
      if (!preference.matches) {
        timer = setInterval(() => setActive(index => (index + 1) % services.length), 2000);
      }
    };
    start();
    preference.addEventListener("change", start);
    return () => {
      clearInterval(timer);
      preference.removeEventListener("change", start);
    };
  }, []);

  return <h1 id="hero-title" className={styles.heading}>
    <span className={styles.intro}>Your Design Partner for</span>
    <span className="sr-only">{services.join(", ")}</span>
    <span ref={serviceContainer} className={styles.services} aria-hidden="true">
      <span key={active} className={`${styles.service} ${styles[`service${active}`]}`}>{services[active]}</span>
    </span>
  </h1>;
}
