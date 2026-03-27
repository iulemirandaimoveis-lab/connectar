"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function useCountUp(
  target: number,
  duration: number = 2000
): [React.RefObject<HTMLDivElement>, number] {
  const ref = useRef<HTMLDivElement>(null!) as React.RefObject<HTMLDivElement>;
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      setCount(target);
      return;
    }

    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration, shouldReduceMotion]);

  return [ref, count];
}
