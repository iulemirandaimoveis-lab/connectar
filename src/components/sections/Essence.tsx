"use client";

import { motion } from "framer-motion";
import { HexGrid } from "@/components/effects/HexGrid";
import { GlowOrbs } from "@/components/effects/GlowOrbs";
import { AnimatedDivider } from "@/components/effects/AnimatedDivider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TextReveal } from "@/components/ui/TextReveal";

const timelineItems = ["Conexao", "Valor", "Impacto"];

export function Essence() {
  return (
    <section
      id="essencia"
      className="relative py-32 lg:py-40 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <HexGrid opacity={0.03} />
      <GlowOrbs count={1} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="label-text mb-6">Nossa Essencia</p>
        </ScrollReveal>

        {/* CON + NECTAR */}
        <TextReveal
          text="CON + NECTAR"
          as="h2"
          className="h2-section"
          stagger={0.12}
        />

        <ScrollReveal delay={0.3}>
          <p
            className="mt-8 body-text max-w-xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Assim como a abelha transforma polen em nectar, nos transformamos
            conexoes estrategicas em valor tangivel. Cada relacao, cada projeto,
            cada linha de codigo — tudo e polinizacao.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 flex items-center justify-center gap-4 md:gap-8">
            {timelineItems.map((item, i) => (
              <div key={item} className="flex items-center gap-4 md:gap-8">
                <motion.span
                  className="text-sm md:text-base font-light tracking-wide"
                  style={{ color: "var(--text-primary)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.2 }}
                >
                  {item}
                </motion.span>
                {i < timelineItems.length - 1 && (
                  <motion.div
                    className="w-8 md:w-16 h-px"
                    style={{ backgroundColor: "var(--gold-line)" }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.2, duration: 0.8 }}
                  />
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <AnimatedDivider className="mt-20" />
      </div>
    </section>
  );
}
