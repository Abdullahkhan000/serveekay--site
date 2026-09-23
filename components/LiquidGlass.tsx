"use client";

import {
  CSSProperties,
  MouseEvent,
  ReactNode,
  useRef,
  useState,
} from "react";

interface LiquidGlassProps {
  children: ReactNode;
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
}

export default function LiquidGlass({
  children,
  className = "",
  intensity = "medium",
}: LiquidGlassProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({
    x: 50,
    y: 50,
  });

  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPosition({ x, y });
  };

  const opacity = {
    subtle: "0.045",
    medium: "0.07",
    strong: "0.1",
  }[intensity];

  const style = {
    "--mouse-x": `${position.x}%`,
    "--mouse-y": `${position.y}%`,
    "--glass-opacity": opacity,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPosition({ x: 50, y: 50 });
      }}
      className={`
        liquid-glass
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-white/[0.12]
        bg-white/[0.04]
        backdrop-blur-[24px]
        ${hovered ? "liquid-glass-hover" : ""}
        ${className}
      `}
    >
      {/* Ambient glass glow */}
      <div
        className="
          pointer-events-none
          absolute
          -inset-px
          rounded-[inherit]
          opacity-70
        "
        style={{
          background: `
            radial-gradient(
              500px circle at var(--mouse-x) var(--mouse-y),
              rgba(255,255,255,0.13),
              transparent 45%
            )
          `,
        }}
      />

      {/* Sharp specular reflection */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[inherit]
        "
        style={{
          background: `
            radial-gradient(
              180px circle at var(--mouse-x) var(--mouse-y),
              rgba(255,255,255,0.12),
              transparent 70%
            )
          `,
        }}
      />

      {/* Top glass edge */}
      <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          right-[8%]
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/30
          to-transparent
        "
      />

      {/* Bottom reflection */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-[15%]
          right-[15%]
          h-[1px]
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}