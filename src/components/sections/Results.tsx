"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

/* TODO: substituir por dados reais quando disponiveis */
const metrics = [
  { value: 15, suffix: "+", label: "empresas atendidas" },
  { value: 8, prefix: "R$ ", suffix: "M+", label: "em decisoes tecnicas orientadas" },
  { value: 40, suffix: "%", label: "de reducao em time-to-market" },
  { value: 50, suffix: "+", label: "profissionais tech recrutados" },
];

/* TODO: substituir por logos reais de clientes */
const clients = [
  "Cliente A",
  "Cliente B",
  "Cliente C",
  "Cliente D",
  "Cliente E",
  "Cliente F",
];

export function Results() {
  return (
    <section
      id="resultados"
      className="relative py-24 lg:py-32 px-6"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <p className="label-text mb-4">Resultados</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="h2-section mb-16">Numeros que falam.</h2>
        </ScrollReveal>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 mb-20">
          {metrics.map((m, i) => (
            <div key={m.label} className="relative">
              <AnimatedCounter {...m} />
              {i < metrics.length - 1 && (
                <div
                  className="absolute right-0 top-1/4 bottom-1/4 w-px hidden lg:block"
                  style={{ backgroundColor: "var(--border)" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Logo marquee */}
        <ScrollReveal delay={0.2}>
          <p
            className="label-text text-center mb-8"
            style={{ color: "var(--text-muted)" }}
          >
            Empresas que confiam na CONNECTAR
          </p>

          {/* TODO: substituir por logos reais com next/image */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-12 py-4">
              {[...clients, ...clients].map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex-shrink-0 w-28 h-12 flex items-center justify-center text-xs font-light tracking-wide"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text-ghost)",
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

    </section>
  );
}
