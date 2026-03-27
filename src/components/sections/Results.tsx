"use client";

import { motion } from "framer-motion";
import {
  SectionWrapper,
  StaggerContainer,
  staggerItem,
} from "@/components/ui/SectionWrapper";
import { useCountUp } from "@/hooks/useCountUp";

/* TODO: substituir por dados reais */
const metrics = [
  { value: 30, suffix: "+", label: "empresas atendidas" },
  { value: 50, prefix: "R$ ", suffix: "M+", label: "em decisoes tecnicas orientadas" },
  { value: 40, suffix: "%", label: "de reducao em time-to-market medio" },
  { value: 120, suffix: "+", label: "profissionais tech recrutados" },
];

/* TODO: substituir por logos reais de clientes */
const clientLogos = [
  "Cliente A",
  "Cliente B",
  "Cliente C",
  "Cliente D",
  "Cliente E",
  "Cliente F",
];

function MetricCard({
  value,
  prefix = "",
  suffix = "",
  label,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  const [ref, count] = useCountUp(value);

  return (
    <div ref={ref}>
      <motion.div
        variants={staggerItem}
        className="text-center p-6"
      >
        <p className="font-display text-4xl md:text-5xl text-secondary">
          {prefix}
          {count}
          {suffix}
        </p>
        <p className="mt-2 text-sm text-muted">{label}</p>
      </motion.div>
    </div>
  );
}

export function Results() {
  return (
    <SectionWrapper
      id="resultados"
      className="py-24 lg:py-32 px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary font-mono mb-4">
          Resultados
        </p>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-16">
          Numeros que falam.
        </h2>

        {/* Metrics */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </StaggerContainer>

        {/* Client Logos */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted font-mono mb-8 text-center">
            Empresas que confiam na CONNECTAR
          </p>
          {/* TODO: substituir por logos reais — usar next/image com grayscale filter */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {clientLogos.map((name) => (
              <div
                key={name}
                className="w-24 h-12 flex items-center justify-center border border-border rounded-sm text-xs text-muted/50 font-mono grayscale hover:grayscale-0 hover:text-muted transition-all duration-300"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
