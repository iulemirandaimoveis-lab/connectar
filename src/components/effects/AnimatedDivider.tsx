"use client";

import { motion } from "framer-motion";

export function AnimatedDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <motion.div
        className="w-[60%] max-w-lg h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #E5A72D, transparent)",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </div>
  );
}
