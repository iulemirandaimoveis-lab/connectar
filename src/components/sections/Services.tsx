"use client";

import { motion } from "framer-motion";
import {
  SectionWrapper,
  StaggerContainer,
  staggerItem,
} from "@/components/ui/SectionWrapper";

const services = [
  {
    title: "CTO-as-a-Service",
    description: "Lideranca tecnica senior embarcada na sua operacao.",
    icon: "C",
  },
  {
    title: "Consultoria em IA",
    description:
      "Implementacao de LLMs, automacoes e arquitetura de dados.",
    icon: "IA",
  },
  {
    title: "Arquitetura de Sistemas",
    description: "Decisoes tecnologicas que escalam com o negocio.",
    icon: "AS",
  },
  {
    title: "Recrutamento Tech",
    description:
      "Hunting e assessment tecnico para contratacoes estrategicas.",
    icon: "RT",
  },
  {
    title: "Networking Estrategico",
    description:
      "Conexoes que geram valor real — o nectar do ecossistema.",
    icon: "NE",
  },
];

export function Services() {
  return (
    <SectionWrapper
      id="servicos"
      className="py-24 lg:py-32 px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <p className="text-xs uppercase tracking-[0.3em] text-secondary font-mono mb-4">
          Servicos
        </p>

        {/* Headline */}
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-16">
          Da estrategia a execucao.
        </h2>

        {/* Service Cards — asymmetric grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              className={`group relative p-8 border border-border rounded-sm bg-surface/50 hover:-translate-y-1 hover:border-secondary/40 transition-all duration-300 ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center border border-secondary/30 rounded-sm mb-6">
                <span className="font-mono text-sm text-secondary">
                  {service.icon}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {service.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
