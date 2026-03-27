"use client";

import { motion } from "framer-motion";
import { GlowOrbs } from "@/components/effects/GlowOrbs";
import { AnimatedDivider } from "@/components/effects/AnimatedDivider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TextReveal } from "@/components/ui/TextReveal";

const timelineItems = ["Conexao", "Valor", "Impacto"];

export function Essence() {
  return (
    <section
      id="essencia"
      className="relative py-32 lg:py-44 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      {/* Background image layer — honeycomb texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/services-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.18,
          filter: "saturate(0.6)",
        }}
      />
      {/* Fallback radial gradient when no image */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(229,167,45,0.04), transparent 70%)",
        }}
      />

      <GlowOrbs count={1} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="label-text mb-8">Nossa Essencia</p>
        </ScrollReveal>

        {/* CON + NECTAR — big reveal */}
        <div className="mb-10">
          <TextReveal
            text="CON + NECTAR"
            as="h2"
            className="h2-section"
            stagger={0.12}
          />
        </div>

        <ScrollReveal delay={0.3}>
          <p className="body-text max-w-xl mx-auto text-lg leading-relaxed">
            Assim como a abelha transforma polen em nectar, nos transformamos
            conexoes estrategicas em valor tangivel. Cada relacao, cada projeto,
            cada linha de codigo — tudo e polinizacao.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal delay={0.5}>
          <div className="mt-20 flex items-center justify-center gap-4 md:gap-8">
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
                    className="w-8 md:w-20 h-px"
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

        <AnimatedDivider className="mt-24" />
      </div>
    </section>
  );
}
