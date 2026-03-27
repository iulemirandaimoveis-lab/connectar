"use client";

import { motion } from "framer-motion";
import {
  SectionWrapper,
  StaggerContainer,
  staggerItem,
} from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

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
    <SectionWrapper
      id="cto"
      className="py-24 lg:py-32 px-6 lg:px-8 bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Copy */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-secondary font-mono mb-4">
              Produto Principal
            </p>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
              Seu CTO.
              <br />
              <span className="text-secondary">Sem o equity.</span>
            </h2>

            <div className="space-y-4 text-muted leading-relaxed">
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

            {/* Model */}
            <div className="mt-8 p-4 border border-border rounded-sm">
              <p className="text-sm font-mono text-secondary">
                Retainer mensal &middot; Escopo definido &middot; Resultados
                mensuraveis
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button
                variant="primary"
                size="lg"
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contato")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Agendar diagnostico
              </Button>
            </div>
          </div>

          {/* Right — Deliverables */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-muted font-mono mb-8">
              O que esta incluido
            </h3>

            <StaggerContainer className="space-y-0">
              {deliverables.map((item) => (
                <motion.div
                  key={item}
                  variants={staggerItem}
                  className="flex items-start gap-4 py-4 border-b border-border last:border-0"
                >
                  {/* Check mark */}
                  <motion.div
                    className="mt-0.5 w-5 h-5 flex items-center justify-center border border-secondary/40 rounded-sm flex-shrink-0"
                    whileInView={{ scale: [0.8, 1] }}
                    viewport={{ once: true }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="text-secondary"
                    >
                      <path
                        d="M2 6L5 9L10 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>

                  <span className="text-sm text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
