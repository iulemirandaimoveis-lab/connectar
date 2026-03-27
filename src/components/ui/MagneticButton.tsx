"use client";

import { useRef, useState } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
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
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    setOffset({ x: dx * 0.15, y: dy * 0.15 });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  const baseStyles = "cta-text inline-flex items-center justify-center px-8 py-4 transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-connectar-gold text-connectar-black hover:bg-connectar-gold-light hover:shadow-[0_0_30px_rgba(229,167,45,0.25)]",
    secondary:
      "border border-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.5)] hover:border-[rgba(229,167,45,0.3)] hover:text-connectar-gold",
  };

  const inner = (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      {href ? (
        <a
          href={href}
          className={`${baseStyles} ${variants[variant]} ${className}`}
          onClick={onClick}
        >
          {children}
        </a>
      ) : (
        <button
          className={`${baseStyles} ${variants[variant]} ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </div>
  );

  return inner;
}
