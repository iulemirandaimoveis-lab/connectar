"use client";

import { motion } from "framer-motion";
import { NetworkCanvas } from "@/components/effects/NetworkCanvas";
import { GlowOrbs } from "@/components/effects/GlowOrbs";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/ui/TextReveal";
import { useParallax } from "@/hooks/useParallax";

export function Hero() {
  const parallax = useParallax(0.15);

  const scrollToServices = () => {
    document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Layer 1 — Background image with parallax */}
      <div
        className="absolute inset-[-10%]"
        style={{
          backgroundImage: "url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${parallax}px)`,
          willChange: "transform",
        }}
      />
      {/* Fallback gradient when image isn't available */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 80% at 70% 20%, rgba(229,167,45,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 80% 60% at 20% 80%, rgba(152,114,50,0.05) 0%, transparent 50%),
            #08080A
          `,
        }}
      />

      {/* Layer 2 — Canvas network particles (over image) */}
      <div className="absolute inset-0 z-[1]">
        <NetworkCanvas />
      </div>

      {/* Layer 2b — Glow orbs */}
      <GlowOrbs count={2} className="z-[1]" />

      {/* Layer 3 — Gradient overlay for legibility */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background: `linear-gradient(
            180deg,
            rgba(8,8,10,0.4) 0%,
            rgba(8,8,10,0.2) 40%,
            rgba(8,8,10,0.85) 85%,
            rgba(8,8,10,1) 100%
          )`,
        }}
      />

      {/* Layer 4 — Content */}
      <div className="relative z-[3] max-w-5xl mx-auto px-6 text-center">
        {/* Wordmark */}
        <motion.p
          className="text-[clamp(0.75rem,1.5vw,1rem)] tracking-wider-custom font-extralight uppercase mb-10"
          style={{ color: "rgba(229,167,45,0.6)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          CONNECTAR
        </motion.p>

        {/* Headline — dramatic scale */}
        <TextReveal
          text="Conexoes inteligentes."
          as="h1"
          className="h1-hero"
          delay={0.8}
          stagger={0.1}
        />
        <TextReveal
          text="Impacto real."
          as="p"
          className="h1-hero mt-2"
          delay={1.2}
          stagger={0.1}
        />

        {/* Sub-label */}
        <motion.p
          className="mt-10 label-text text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          Tecnologia &middot; Estrategia &middot; Inteligencia Artificial
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
        >
          <MagneticButton variant="primary" onClick={scrollToServices}>
            Conheca nossos servicos
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.8 }}
      >
        <div
          className="w-px h-12 animate-pulse-gold"
          style={{
            background: "linear-gradient(180deg, var(--gold) 0%, transparent 100%)",
          }}
        />
      </motion.div>
    </section>
  );
}
