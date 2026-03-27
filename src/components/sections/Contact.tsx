"use client";

import { HexGrid } from "@/components/effects/HexGrid";
import { GlowOrbs } from "@/components/effects/GlowOrbs";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/ui/TextReveal";

const contacts = [
  {
    label: "Email",
    value: "contato@connectar.co",
    /* TODO: substituir por email real */
    href: "mailto:contato@connectar.co",
  },
  {
    label: "WhatsApp",
    /* TODO: substituir por numero real */
    value: "+55 (81) XXXXX-XXXX",
    href: "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20CONNECTAR.",
  },
  {
    label: "LinkedIn",
    value: "/company/connectar",
    /* TODO: substituir por URL real */
    href: "https://linkedin.com/company/connectar",
  },
];

export function Contact() {
  return (
    <section
      id="contato"
      className="relative py-24 lg:py-32 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <HexGrid opacity={0.04} />
      <GlowOrbs count={2} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <TextReveal
          text="Vamos construir algo que funciona."
          as="h2"
          className="h2-section"
        />

        <ScrollReveal delay={0.3}>
          <p
            className="mt-6 body-text max-w-xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Agende um diagnostico gratuito de 30 minutos e descubra como a
            CONNECTAR pode acelerar sua operacao com tecnologia e inteligencia
            estrategica.
          </p>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay={0.4}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton
              variant="primary"
              href="mailto:contato@connectar.co"
            >
              Entrar em Contato
            </MagneticButton>
            {/* TODO: substituir por link real do Calendly */}
            <MagneticButton variant="secondary" href="#">
              Agendar Reuniao
            </MagneticButton>
          </div>
        </ScrollReveal>

        {/* Contact cards */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  c.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group p-6 transition-all duration-300"
                style={{ border: "1px solid var(--border)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--border-gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--border)";
                }}
              >
                <p className="label-text mb-2" style={{ color: "var(--text-muted)" }}>
                  {c.label}
                </p>
                <p
                  className="text-sm font-light transition-colors duration-300"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {c.value}
                </p>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
