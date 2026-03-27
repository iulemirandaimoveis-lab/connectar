"use client";

interface HexIconProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

export function HexIcon({ size = 28, className = "", animated = false }: HexIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* First hexagon */}
      <path
        d="M24 4L38 13V31L24 40L10 31V13L24 4Z"
        stroke="#E5A72D"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
        className={animated ? "animate-draw-line" : ""}
        style={
          animated
            ? { strokeDasharray: 200, strokeDashoffset: 0 }
            : undefined
        }
      />
      {/* Second hexagon (offset) */}
      <path
        d="M28 8L40 16V30L28 38L16 30V16L28 8Z"
        stroke="#E5A72D"
        strokeWidth="1"
        fill="none"
        opacity="0.35"
        className={animated ? "animate-draw-line" : ""}
        style={
          animated
            ? {
                strokeDasharray: 200,
                strokeDashoffset: 0,
                animationDelay: "0.3s",
              }
            : undefined
        }
      />
    </svg>
  );
}

export function HexBullet() {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      className="flex-shrink-0 mt-1.5"
      aria-hidden="true"
    >
      <path
        d="M4 0.5L7.5 2.5V5.5L4 7.5L0.5 5.5V2.5L4 0.5Z"
        fill="#E5A72D"
        opacity="0.6"
      />
    </svg>
  );
}
