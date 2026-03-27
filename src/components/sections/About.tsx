"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HexIcon } from "@/components/ui/HexIcon";

export function About() {
  return (
    <section
      id="sobre"
      className="relative py-24 lg:py-32 px-6"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Photo */}
          <ScrollReveal direction="left">
            {/* TODO: substituir por foto real do Iule Miranda */}
            <div
              className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden"
              style={{
                backgroundColor: "var(--bg-elevated)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <HexIcon size={48} className="opacity-[0.08] mb-4" />
                <p
                  className="text-xs tracking-wide-custom uppercase"
                  style={{ color: "var(--text-ghost)" }}
                >
                  Foto profissional
                </p>
                <p
                  className="text-[0.65rem] mt-1"
                  style={{ color: "var(--text-ghost)" }}
                >
                  3:4 ratio
                </p>
              </div>
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, var(--bg-surface) 100%)",
                }}
              />
            </div>
          </ScrollReveal>

          {/* Right — Bio */}
          <div>
            <ScrollReveal>
              <p className="label-text mb-4">Fundador</p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="h2-section mb-8">Iule Miranda</h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-4 body-text">
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
              <div className="mt-8 flex gap-6">
                {/* TODO: substituir por URLs reais */}
                <a
                  href="https://linkedin.com/in/iulemiranda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light transition-colors duration-300"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--gold)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "var(--text-secondary)")
                  }
                >
                  LinkedIn &rarr;
                </a>
                <a
                  href="https://github.com/iulemiranda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light transition-colors duration-300"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--gold)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "var(--text-secondary)")
                  }
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
