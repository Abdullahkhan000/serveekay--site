"use client";

import { useEffect, useRef } from "react";

export function Experience() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-ready");
    const nodes = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -4% 0px" });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || matchMedia("(pointer: coarse)").matches) return;
    let x = -100, y = -100, targetX = -100, targetY = -100, frame = 0;
    const move = (event: PointerEvent) => { targetX = event.clientX; targetY = event.clientY; };
    const tick = () => { x += (targetX - x) * .18; y += (targetY - y) * .18; cursor.style.left = `${x}px`; cursor.style.top = `${y}px`; frame = requestAnimationFrame(tick); };
    const targets = [...document.querySelectorAll<HTMLElement>("[data-cursor]")];
    const enter = (event: Event) => { cursor.textContent = (event.currentTarget as HTMLElement).dataset.cursor || "View"; cursor.classList.add("is-active"); };
    const leave = () => cursor.classList.remove("is-active");
    window.addEventListener("pointermove", move, { passive: true });
    targets.forEach((target) => { target.addEventListener("pointerenter", enter); target.addEventListener("pointerleave", leave); });
    tick();
    return () => { cancelAnimationFrame(frame); window.removeEventListener("pointermove", move); targets.forEach((target) => { target.removeEventListener("pointerenter", enter); target.removeEventListener("pointerleave", leave); }); };
  }, []);

  return <div ref={cursorRef} className="site-cursor" aria-hidden="true">View</div>;
}
