"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.35,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1,
      anchors: true,
    });

    const handleScroll = (event: { progress: number; velocity: number; direction: number }) => {
      document.documentElement.style.setProperty("--lenis-progress", String(event.progress));
      document.documentElement.style.setProperty("--lenis-velocity", String(Math.min(1, Math.abs(event.velocity) / 10)));
      document.documentElement.style.setProperty("--lenis-direction", String(event.direction));
    };

    lenis.on("scroll", handleScroll);

    return () => {
      lenis.off("scroll", handleScroll);
      lenis.destroy();
      document.documentElement.style.removeProperty("--lenis-progress");
      document.documentElement.style.removeProperty("--lenis-velocity");
      document.documentElement.style.removeProperty("--lenis-direction");
    };
  }, []);

  return null;
}
