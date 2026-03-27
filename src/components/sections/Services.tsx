"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/ScrollReveal";

const services = [
  {
    num: "01",
    title: "CTO-as-a-Service",
    description:
      "Lideranca tecnologica sob demanda. Arquitetura, squads, roadmap e IA — sem custo de C-level full-time.",
    core: true,
  },
  {
    num: "02",
    title: "Consultoria em IA",
    description:
      "Diagnosticos, implementacao de LLMs, automacoes inteligentes e arquitetura de dados.",
  },
  {
    num: "03",
    title: "Arquitetura de Sistemas",
    description:
      "Decisoes tecnologicas que escalam com o negocio. Code review, DevOps e governanca tecnica.",
  },
  {
    num: "04",
    title: "Recrutamento Tech",
    description:
      "Hunting e assessment tecnico para contratacoes de desenvolvedores, tech leads e engenheiros.",
  },
  {
    num: "05",
    title: "Networking Estrategico",
    description:
      "Conexoes que geram valor real — o nectar do ecossistema.",
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="relative py-24 lg:py-32 px-6"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <p className="label-text mb-4">Servicos</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="h2-section mb-16">
            Da estrategia a execucao.
          </h2>
        </ScrollReveal>

        {/* Row 1: 3 cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {services.slice(0, 3).map((s) => (
            <ServiceCard key={s.num} {...s} />
          ))}
        </StaggerContainer>

        {/* Row 2: 2 cards centered */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[800px] mx-auto">
          {services.slice(3).map((s) => (
            <ServiceCard key={s.num} {...s} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ServiceCard({
  num,
  title,
  description,
  core,
}: {
  num: string;
  title: string;
  description: string;
  core?: boolean;
}) {
  return (
    <motion.div
      variants={staggerItem}
      className="group relative p-8 transition-all duration-400"
      style={{
        backgroundColor: "var(--bg-surface)",
        border: "1px solid var(--border)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(229, 167, 45, 0.15)";
        el.style.boxShadow = "0 0 30px rgba(229, 167, 45, 0.05)";
        el.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Core badge */}
      {core && (
        <span
          className="absolute top-4 right-4 text-[0.65rem] font-medium tracking-wide-custom uppercase px-3 py-1"
          style={{
            border: "1px solid var(--border-gold)",
            color: "var(--gold)",
          }}
        >
          Core
        </span>
      )}

      {/* Number tag */}
      <span
        className="text-xs font-normal tracking-wide-custom"
        style={{ color: "rgba(229, 167, 45, 0.4)" }}
      >
        {num}
      </span>

      {/* Title */}
      <h3 className="h3-card mt-4 mb-3" style={{ color: "var(--text-primary)" }}>
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-sm font-light leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {description}
      </p>
    </motion.div>
  );
}
