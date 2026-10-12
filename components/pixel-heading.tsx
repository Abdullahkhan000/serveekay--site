"use client";

import { useEffect, useRef } from "react";

/** A pixel treatment of the system serif; the real heading remains accessible. */
export function PixelHeading({ lines }: { lines: string[] }) {
  const heading = useRef<HTMLHeadingElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const element = heading.current;
    const surface = canvas.current;
    if (!element || !surface || !("ResizeObserver" in window)) return;
    const draw = () => {
      const context = surface.getContext("2d");
      if (!context) return;
      const bounds = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      const scale = 2.5;
      surface.width = Math.ceil(bounds.width / scale);
      surface.height = Math.ceil(bounds.height / scale);
      context.fillStyle = style.color;
      context.font = `${parseFloat(style.fontSize) / scale}px Georgia`;
      context.textBaseline = "top";
      // Range positions follow browser wrapping, keeping canvas and semantic text aligned.
      element.querySelectorAll(".pixel-line").forEach(line => {
        const node = line.firstChild;
        if (!node) return;
        for (let index = 0; index < (node.textContent?.length ?? 0); index++) {
          const range = document.createRange();
          range.setStart(node, index);
          range.setEnd(node, index + 1);
          const rect = range.getBoundingClientRect();
          context.fillText(node.textContent![index], (rect.left - bounds.left) / scale, (rect.top - bounds.top) / scale);
        }
      });
      element.classList.add("pixel-ready");
    };
    const observer = new ResizeObserver(draw);
    observer.observe(element);
    draw();
    return () => { observer.disconnect(); element.classList.remove("pixel-ready"); };
  }, [lines]);
  return <h2 className="pixel-heading" ref={heading}><span className="pixel-fallback">{lines.map(line => <span className="pixel-line" key={line}>{line}</span>)}</span><canvas ref={canvas} aria-hidden="true" /></h2>;
}
