"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setProgress((window.scrollY / total) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed right-0 top-0 w-[2px] h-full z-50 hidden md:block"
      style={{ background: "rgba(255,255,255,0.03)" }}
      aria-hidden="true"
    >
      <div
        className="w-full transition-[height] duration-100"
        style={{
          height: `${progress}%`,
          background: "linear-gradient(180deg, #E5A72D, #F5AE22)",
        }}
      />
    </div>
  );
}
