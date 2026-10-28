"use client";

import { useEffect, useState } from "react";
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
    <span className={styles.services} aria-hidden="true">
      <span key={active} className={`${styles.service} ${styles[`service${active}`]}`}>{services[active]}</span>
    </span>
  </h1>;
}
