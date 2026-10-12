"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function Experience() {
  const pathname = usePathname();
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;
    let cleanup = () => {};
    const setup = () => {
      cleanup();
      if (preference.matches) return;
      const animations = new Set<Animation>();
      const readers = Array.from(document.querySelectorAll<HTMLElement>("[data-scrub]"));
      const gallery = Array.from(document.querySelectorAll<HTMLElement>("[data-gallery-card]"));
      const work = document.querySelector<HTMLElement>(".work-section");
      let frame = 0;
      const play = (element: Element, frames: Keyframe[], options: KeyframeAnimationOptions) => {
        const animation = element.animate(frames, options);
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      };
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          const footer = element.hasAttribute("data-footer-reveal");
          const card = element.classList.contains("work-slide");
          play(element, [{ opacity: 0, transform: footer ? "translateY(80px) scale(.8)" : card ? "perspective(900px) translateY(40px) rotateX(-10deg)" : "translateY(28px)" }, { opacity: 1, transform: "none" }], {
            duration: footer ? 1000 : 800,
            delay: parseFloat(element.style.getPropertyValue("--reveal-delay")) || 0,
            easing: "cubic-bezier(.16, 1, .3, 1)",
            fill: "backwards",
          });
          observer.unobserve(element);
        });
      }, { threshold: .08 });
      document.querySelectorAll("[data-reveal], [data-footer-reveal]").forEach(element => observer.observe(element));
      const update = () => {
        frame = 0;
        readers.forEach(element => {
          const rect = element.getBoundingClientRect();
          const progress = Math.max(0, Math.min(1.2, (innerHeight * .9 - rect.top) / (innerHeight * .65)));
          element.style.setProperty("--reading-progress", String(progress));
          element.classList.add("is-reading");
        });
        gallery.forEach((element, index) => {
          const rect = element.getBoundingClientRect();
          const progress = Math.max(0, Math.min(1, (innerHeight - rect.top) / (innerHeight * .7)));
          const angle = [0, 4, 6, -4][index % 4];
          element.style.setProperty("--gallery-rotation", `${angle * (1 - progress)}deg`);
          element.style.setProperty("--gallery-offset", `${(1 - progress) * (20 + index * 15)}px`);
        });
        if (work) work.classList.toggle("is-in-view", work.getBoundingClientRect().top < innerHeight * .8);
      };
      const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      update();
      cleanup = () => {
        observer.disconnect();
        cancelAnimationFrame(frame);
        animations.forEach(animation => animation.cancel());
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        readers.forEach(element => { element.classList.remove("is-reading"); element.style.removeProperty("--reading-progress"); });
        gallery.forEach(element => { element.style.removeProperty("--gallery-rotation"); element.style.removeProperty("--gallery-offset"); });
        work?.classList.add("is-in-view");
      };
    };
    setup();
    preference.addEventListener("change", setup);
    return () => { cleanup(); preference.removeEventListener("change", setup); };
  }, [pathname]);
  return null;
}
