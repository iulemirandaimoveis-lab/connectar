"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="sobre"
      className="py-24 lg:py-32 px-6 lg:px-8 bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Photo */}
          <motion.div
            className="relative"
            initial={shouldReduceMotion ? false : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* TODO: substituir por foto real do Iule Miranda */}
            <div className="aspect-[3/4] bg-primary border border-border rounded-sm overflow-hidden relative">
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full border border-secondary/30 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-2xl text-secondary/50">
                      IM
                    </span>
                  </div>
                  <p className="text-xs text-muted/50 font-mono">
                    Foto profissional
                  </p>
                  <p className="text-xs text-muted/30 font-mono mt-1">
                    3:4 ratio
                  </p>
                </div>
              </div>

              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface/50 to-transparent" />
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-secondary/20 rounded-sm -z-10" />
          </motion.div>

          {/* Right — Bio */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-secondary font-mono mb-4">
              Fundador
            </p>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
              Iule Miranda
            </h2>

            <div className="space-y-4 text-muted leading-relaxed">
              {/* TODO: atualizar com numero real de anos de experiencia */}
              <p>
                Mais de 10 anos liderando tecnologia em empresas de alto
                crescimento. Especialista em arquitetura de sistemas,
                implementacao de IA e construcao de times de engenharia.
              </p>
              <p>
                Fundou a CONNECTAR para levar lideranca tecnica senior a
                empresas que precisam de resultado, nao de burocracia.
              </p>
            </div>

            {/* Links */}
            <div className="mt-8 flex gap-6">
              {/* TODO: substituir por URLs reais */}
              <a
                href="https://linkedin.com/in/iulemiranda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-secondary transition-colors font-mono"
              >
                LinkedIn &rarr;
              </a>
              <a
                href="https://github.com/iulemiranda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-secondary transition-colors font-mono"
              >
                GitHub &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
