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
const clients = ["Cliente A", "Cliente B", "Cliente C", "Cliente D", "Cliente E", "Cliente F"];

export function Results() {
  return (
    <section
      id="resultados"
      className="relative py-28 lg:py-40 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      {/* Accent texture — gold liquid flowing from right */}
      {/* TODO: substituir por results-texture.jpg do Nano Banana */}
      <div
        className="absolute top-0 right-[-20%] bottom-0 w-[60%]"
        style={{
          backgroundImage: "url(/images/results-texture.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
          filter: "blur(2px)",
        }}
      />
      {/* Fallback ambient glow */}
      <div
        className="absolute top-0 right-[-10%] bottom-0 w-[50%]"
        style={{
          background: "radial-gradient(ellipse at center right, rgba(229,167,45,0.05), transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <p className="label-text mb-4">Resultados</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="h2-section mb-20">Numeros que falam.</h2>
        </ScrollReveal>

        {/* Metrics — with vertical separators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 mb-24">
          {metrics.map((m, i) => (
            <div key={m.label} className="relative">
              <AnimatedCounter {...m} />
              {i < metrics.length - 1 && (
                <div
                  className="absolute right-0 top-[20%] bottom-[20%] w-px hidden lg:block"
                  style={{ backgroundColor: "var(--border)" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Logo marquee */}
        <ScrollReveal delay={0.2}>
          <p className="label-text text-center mb-8" style={{ color: "var(--text-muted)" }}>
            Empresas que confiam na CONNECTAR
          </p>

          {/* TODO: substituir por logos reais com next/image, grayscale filter */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-12 py-4">
              {[...clients, ...clients].map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex-shrink-0 w-32 h-14 flex items-center justify-center text-xs font-light tracking-wide opacity-30 hover:opacity-60 transition-opacity duration-300"
                  style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
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
