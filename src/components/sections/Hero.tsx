"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { ParticleField } from "@/components/effects/ParticleField";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const handleCTA = () => {
    const el = document.querySelector("#contato");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background effects */}
      <ParticleField />

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logo text */}
        <motion.p
          className="font-display text-sm md:text-base tracking-[0.4em] text-secondary/80 uppercase mb-8"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          CONNECTAR
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="font-display text-4xl md:text-5xl lg:text-7xl leading-tight lg:leading-[1.1] text-foreground"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Tecnologia estrategica
          <br />
          <span className="text-secondary">para empresas que</span>
          <br />
          nao podem errar.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="mt-8 text-base md:text-lg text-muted font-mono tracking-wide"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          CTO-as-a-Service &middot; Consultoria em IA &middot; Arquitetura de
          Sistemas
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-10"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Button size="lg" onClick={handleCTA}>
            Fale com nosso time
          </Button>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
