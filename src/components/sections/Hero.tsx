"use client";

import { motion } from "framer-motion";
import { NetworkCanvas } from "@/components/effects/NetworkCanvas";
import { HexGrid } from "@/components/effects/HexGrid";
import { GlowOrbs } from "@/components/effects/GlowOrbs";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/ui/TextReveal";

export function Hero() {
  const scrollToServices = () => {
    document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Background layers */}
      <NetworkCanvas />
      <HexGrid opacity={0.02} />
      <GlowOrbs count={2} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Wordmark */}
        <motion.p
          className="text-sm tracking-wider-custom font-extralight uppercase mb-8"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          CONNECTAR
        </motion.p>

        {/* Headline */}
        <TextReveal
          text="Conexoes inteligentes. Impacto real."
          as="h1"
          className="h2-section md:h1-hero"
          delay={0.8}
          stagger={0.1}
        />

        {/* Sub-label */}
        <motion.p
          className="mt-8 label-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          Tecnologia &middot; Estrategia &middot; Inteligencia Artificial
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <MagneticButton variant="primary" onClick={scrollToServices}>
            Conheca nossos servicos
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <div
          className="w-px h-10 animate-pulse-gold"
          style={{
            background:
              "linear-gradient(180deg, var(--gold) 0%, transparent 100%)",
          }}
        />
      </motion.div>
    </section>
  );
}
