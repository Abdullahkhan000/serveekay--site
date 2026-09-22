"use client";

import { useEffect, useRef, useState } from "react";

export function Experience() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [preloaderState, setPreloaderState] = useState<"visible" | "leaving" | "hidden">("visible");

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasPlayed = window.sessionStorage.getItem("serveekay-intro") === "played";
    const leaveDelay = reducedMotion || hasPlayed ? 40 : 800;
    const hideDelay = reducedMotion || hasPlayed ? 160 : 1450;
    const leaveTimer = window.setTimeout(() => setPreloaderState("leaving"), leaveDelay);
    const hideTimer = window.setTimeout(() => {
      setPreloaderState("hidden");
      document.documentElement.classList.add("experience-ready");
      window.sessionStorage.setItem("serveekay-intro", "played");
    }, hideDelay);
    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    const canvas = trailRef.current;
    if (!canvas || window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    type Point = { x: number; y: number; life: number };
    const points: Point[] = [];
    let frame = 0;
    let scale = window.devicePixelRatio || 1;
    const resize = () => {
      scale = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * scale;
      canvas.height = window.innerHeight * scale;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(scale, 0, 0, scale, 0, 0);
    };
    const move = (event: PointerEvent) => {
      points.push({ x: event.clientX, y: event.clientY, life: 1 });
      if (points.length > 24) points.shift();
    };
    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      points.forEach((point) => {
        point.life -= .035;
        context.beginPath();
        context.arc(point.x, point.y, Math.max(1, 6 * point.life), 0, Math.PI * 2);
        context.fillStyle = `rgba(0, 230, 83, ${Math.max(0, point.life * .34)})`;
        context.fill();
      });
      while (points[0]?.life <= 0) points.shift();
      frame = window.requestAnimationFrame(draw);
    };
    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("reveal-ready");
    const nodes = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];

    if (reducedMotion) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || window.matchMedia("(pointer: coarse)").matches) return;

    let x = -100;
    let y = -100;
    let targetX = -100;
    let targetY = -100;
    let frame = 0;
    const root = document.documentElement;
    const targets = [...document.querySelectorAll<HTMLElement>("[data-cursor]")];

    const move = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      root.style.setProperty("--mouse-x", `${event.clientX}px`);
      root.style.setProperty("--mouse-y", `${event.clientY}px`);
    };
    const tick = () => {
      x += (targetX - x) * 0.16;
      y += (targetY - y) * 0.16;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      frame = window.requestAnimationFrame(tick);
    };
    const enter = (event: Event) => {
      cursor.textContent = (event.currentTarget as HTMLElement).dataset.cursor || "View";
      cursor.classList.add("is-active");
    };
    const leave = () => cursor.classList.remove("is-active");

    window.addEventListener("pointermove", move, { passive: true });
    targets.forEach((target) => {
      target.addEventListener("pointerenter", enter);
      target.addEventListener("pointerleave", leave);
    });
    tick();
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      targets.forEach((target) => {
        target.removeEventListener("pointerenter", enter);
        target.removeEventListener("pointerleave", leave);
      });
    };
  }, []);

  useEffect(() => {
    const parallaxNodes = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
    let frame = 0;
    const update = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        const progress = pageHeight > 0 ? window.scrollY / pageHeight : 0;
        progressRef.current.style.transform = `scaleY(${progress})`;
      }
      parallaxNodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        const speed = Number(node.dataset.parallax || 0.08);
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
        node.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      });
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      {preloaderState !== "hidden" && (
        <div className={`preloader ${preloaderState === "leaving" ? "is-leaving" : ""}`} aria-hidden="true">
          <p><span>SERVEEKAY</span></p>
          <div className="preloader__bars">
            {Array.from({ length: 8 }, (_, index) => <i key={index} />)}
          </div>
        </div>
      )}
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />
      <canvas ref={trailRef} className="cursor-trail" aria-hidden="true" />
      <div ref={cursorRef} className="site-cursor" aria-hidden="true">View</div>
      <a className="scroll-top" href="#top" aria-label="Back to top">↑</a>
    </>
  );
}
