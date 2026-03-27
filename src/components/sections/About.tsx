"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useParallax } from "@/hooks/useParallax";

export function About() {
  const parallax = useParallax(0.05);

  return (
    <section
      id="sobre"
      className="relative py-28 lg:py-40 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-20 items-center">
          {/* Left — Photo */}
          <ScrollReveal direction="left">
            <div className="relative overflow-hidden max-w-md mx-auto lg:mx-0">
              <div
                className="aspect-[3/4] relative overflow-hidden"
                style={{
                  transform: `translateY(${parallax * 0.3}px)`,
                  willChange: "transform",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url(/images/founder-placeholder.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "saturate(0.7) brightness(0.85)",
                  }}
                />
                {/* Fallback placeholder */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ backgroundColor: "var(--bg-elevated)" }}
                >
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center mb-4"
                    style={{ border: "1px solid rgba(229,167,45,0.2)" }}
                  >
                    <span className="text-3xl font-extralight" style={{ color: "rgba(229,167,45,0.3)" }}>
                      IM
                    </span>
                  </div>
                  <p className="text-xs tracking-wide-custom uppercase" style={{ color: "var(--text-ghost)" }}>
                    Foto profissional
                  </p>
                </div>

                {/* Gradient overlay — fade bottom */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(180deg, transparent 50%, var(--bg-surface) 100%)",
                  }}
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Bio */}
          <div className="lg:pl-8">
            <ScrollReveal>
              <p className="label-text mb-4">Fundador</p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="h2-section mb-10">Iule Miranda</h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-5 body-text text-lg">
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
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-10 flex gap-8">
                {/* TODO: substituir por URLs reais */}
                <a
                  href="https://linkedin.com/in/iulemiranda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light transition-colors duration-300 hover:text-connectar-gold"
                  style={{ color: "var(--text-secondary)" }}
                >
                  LinkedIn &rarr;
                </a>
                <a
                  href="https://github.com/iulemiranda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light transition-colors duration-300 hover:text-connectar-gold"
                  style={{ color: "var(--text-secondary)" }}
                >
                  GitHub &rarr;
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
