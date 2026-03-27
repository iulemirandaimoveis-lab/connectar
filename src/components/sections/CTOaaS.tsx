"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/ScrollReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HexBullet } from "@/components/ui/HexIcon";
import { GlowOrbs } from "@/components/effects/GlowOrbs";

const deliverables = [
  "Arquitetura de sistemas e decisoes tecnicas",
  "Gestao e mentoria de squads de desenvolvimento",
  "Roadmap de produto e priorizacao tecnica",
  "Implementacao de IA e automacoes",
  "Governance de codigo e processos de engenharia",
  "Relatorios executivos para founders e board",
];

export function CTOaaS() {
  return (
    <section
      id="cto"
      className="relative py-24 lg:py-32 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <GlowOrbs count={1} />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Copy */}
          <div>
            <ScrollReveal>
              <p className="label-text mb-4">Produto Principal</p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="h2-section mb-8">
                Seu CTO.
                <br />
                <span style={{ color: "var(--gold)" }}>Sem o equity.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-4 body-text">
                <p>
                  Empresas em crescimento precisam de lideranca tecnologica
                  senior, mas nem sempre podem — ou devem — contratar um CTO
                  full-time.
                </p>
                <p>
                  A CONNECTAR embarca um lider tecnico experiente na sua
                  operacao, com dedicacao real, visao de longo prazo e
                  responsabilidade sobre resultados.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8">
                <MagneticButton
                  variant="primary"
                  onClick={() =>
                    document
                      .querySelector("#contato")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Agendar diagnostico
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Hex visual + deliverables */}
          <div>
            {/* Hexagon SVG visual */}
            <ScrollReveal delay={0.2}>
              <div className="relative flex items-center justify-center mb-12 py-8">
                <div className="absolute w-64 h-64 rounded-full bg-connectar-gold opacity-[0.04] blur-[100px]" />
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 180 180"
                  fill="none"
                  className="relative"
                >
                  <path
                    d="M90 10L160 45V115L90 150L20 115V45L90 10Z"
                    stroke="#E5A72D"
                    strokeWidth="0.8"
                    opacity="0.4"
                    strokeDasharray="600"
                    strokeDashoffset="0"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="600;0;600"
                      dur="8s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <path
                    d="M100 20L162 52V118L100 150L38 118V52L100 20Z"
                    stroke="#E5A72D"
                    strokeWidth="0.8"
                    opacity="0.2"
                    strokeDasharray="600"
                    strokeDashoffset="300"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="300;-300;300"
                      dur="8s"
                      repeatCount="indefinite"
                    />
                  </path>
                  {/* Orbiting nodes */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                    const r = 75;
                    const cx = 90 + r * Math.cos((angle * Math.PI) / 180);
                    const cy = 90 + r * Math.sin((angle * Math.PI) / 180);
                    return (
                      <circle
                        key={i}
                        cx={cx}
                        cy={cy}
                        r="2.5"
                        fill="#E5A72D"
                        opacity="0.3"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.15;0.5;0.15"
                          dur={`${3 + i * 0.3}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    );
                  })}
                </svg>
              </div>
            </ScrollReveal>

            {/* Deliverables list */}
            <div>
              <p
                className="label-text mb-6"
                style={{ color: "var(--text-muted)" }}
              >
                O que esta incluido
              </p>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
                {deliverables.map((item) => (
                  <motion.div
                    key={item}
                    variants={staggerItem}
                    className="flex items-start gap-3 py-3"
                    style={{ borderBottom: "1px solid var(--border)" }}
                  >
                    <HexBullet />
                    <span
                      className="text-sm font-light"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>

            {/* Model tag */}
            <ScrollReveal delay={0.4}>
              <p
                className="mt-8 text-sm font-light tracking-wide text-center md:text-left"
                style={{ color: "var(--text-muted)" }}
              >
                Retainer mensal &middot; Escopo definido &middot; Resultados
                mensuraveis
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
