"use client";

interface GlowOrbsProps {
  count?: number;
  className?: string;
}

export function GlowOrbs({ count = 2, className = "" }: GlowOrbsProps) {
  const positions = [
    { top: "10%", left: "-10%", size: 500, delay: 0 },
    { top: "60%", right: "-15%", size: 400, delay: 3 },
    { top: "30%", left: "40%", size: 350, delay: 6 },
  ].slice(0, count);

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {positions.map((pos, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            width: pos.size,
            height: pos.size,
            background:
              "radial-gradient(circle, rgba(229,167,45,0.06) 0%, transparent 70%)",
            filter: `blur(${120 + i * 30}px)`,
            animationDelay: `${pos.delay}s`,
            animationDuration: `${6 + i * 2}s`,
          }}
        />
      ))}
    </div>
  );
}
