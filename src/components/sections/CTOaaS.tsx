"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/ScrollReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HexBullet } from "@/components/ui/HexIcon";
import { GlowOrbs } from "@/components/effects/GlowOrbs";
import { useParallax } from "@/hooks/useParallax";

const deliverables = [
  "Arquitetura de sistemas e decisoes tecnicas",
  "Gestao e mentoria de squads de desenvolvimento",
  "Roadmap de produto e priorizacao tecnica",
  "Implementacao de IA e automacoes",
  "Governance de codigo e processos de engenharia",
  "Relatorios executivos para founders e board",
];

export function CTOaaS() {
  const parallax = useParallax(0.1);

  return (
    <section
      id="cto"
      className="relative py-28 lg:py-40 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <GlowOrbs count={1} />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 lg:gap-12 items-start">
          {/* Left — Copy */}
          <div>
            <ScrollReveal>
              <p className="label-text mb-4">Produto Principal</p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="h2-section mb-10">
                Seu CTO.
                <br />
                <span style={{ color: "var(--gold)" }}>Sem o equity.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-5 body-text text-lg">
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

            {/* Deliverables */}
            <div className="mt-12">
              <p className="label-text mb-6" style={{ color: "var(--text-muted)" }}>
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
                    <span className="text-sm font-light" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>

            <ScrollReveal delay={0.3}>
              <p
                className="mt-8 text-sm font-light tracking-wide"
                style={{ color: "var(--text-muted)" }}
              >
                Retainer mensal &middot; Escopo definido &middot; Resultados mensuraveis
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="mt-10">
                <MagneticButton
                  variant="primary"
                  onClick={() =>
                    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Agendar diagnostico
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Image with parallax */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="relative overflow-hidden">
              {/* TODO: substituir por cto-visual.jpg do Nano Banana */}
              <div
                className="aspect-[4/3] lg:aspect-[3/4] relative overflow-hidden"
                style={{
                  transform: `translateY(${parallax * 0.5}px)`,
                  willChange: "transform",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url(/images/cto-visual.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "saturate(0.7) brightness(0.9)",
                  }}
                />
                {/* Fallback when no image */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ backgroundColor: "var(--bg-surface)" }}
                >
                  {/* Animated hex visual as fallback */}
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                    <path
                      d="M100 10L180 50V130L100 170L20 130V50L100 10Z"
                      stroke="#E5A72D"
                      strokeWidth="0.8"
                      opacity="0.3"
                      strokeDasharray="600"
                      strokeDashoffset="0"
                    >
                      <animate attributeName="stroke-dashoffset" values="600;0;600" dur="8s" repeatCount="indefinite" />
                    </path>
                    <path
                      d="M110 25L182 60V140L110 175L38 140V60L110 25Z"
                      stroke="#E5A72D"
                      strokeWidth="0.8"
                      opacity="0.15"
                      strokeDasharray="600"
                      strokeDashoffset="300"
                    >
                      <animate attributeName="stroke-dashoffset" values="300;-300;300" dur="8s" repeatCount="indefinite" />
                    </path>
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                      const r = 80;
                      const cx = 100 + r * Math.cos((angle * Math.PI) / 180);
                      const cy = 100 + r * Math.sin((angle * Math.PI) / 180);
                      return (
                        <circle key={i} cx={cx} cy={cy} r="2.5" fill="#E5A72D" opacity="0.25">
                          <animate attributeName="opacity" values="0.1;0.4;0.1" dur={`${3 + i * 0.3}s`} repeatCount="indefinite" />
                        </circle>
                      );
                    })}
                  </svg>
                </div>

                {/* Gradient overlay that fades image into background */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(8,8,10,0.8) 0%, rgba(8,8,10,0) 30%, rgba(8,8,10,0) 80%, rgba(8,8,10,0.3) 100%)",
                  }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
