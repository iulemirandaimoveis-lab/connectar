"use client";

import { useRef, useState } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setOffset({ x: (e.clientX - cx) * 0.15, y: (e.clientY - cy) * 0.15 });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  const primaryStyles =
    "relative overflow-hidden bg-connectar-gold text-connectar-black hover:bg-connectar-gold-light hover:shadow-[0_0_40px_rgba(229,167,45,0.3)] hover:-translate-y-[2px]";
  const secondaryStyles =
    "border border-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.5)] hover:border-[rgba(229,167,45,0.3)] hover:text-connectar-gold";

  const baseStyles = `cta-text inline-flex items-center justify-center px-12 py-[18px] transition-all duration-400 cursor-pointer ${
    variant === "primary" ? primaryStyles : secondaryStyles
  } ${className}`;

  const shineOverlay =
    variant === "primary" ? (
      <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-[left] duration-600 group-hover:left-[100%] pointer-events-none" />
    ) : null;

  const inner = href ? (
    <a href={href} className={`${baseStyles} group`} onClick={onClick}>
      {shineOverlay}
      <span className="relative z-10">{children}</span>
    </a>
  ) : (
    <button className={`${baseStyles} group`} onClick={onClick}>
      {shineOverlay}
      <span className="relative z-10">{children}</span>
    </button>
  );

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        display: "inline-block",
      }}
    >
      {inner}
    </div>
  );
}
