"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <SectionWrapper
      id="contato"
      className="relative py-24 lg:py-32 px-6 lg:px-8 bg-background overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/5 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
          Vamos construir algo
          <br />
          <span className="text-secondary">que funciona.</span>
        </h2>

        <p className="text-muted max-w-xl mx-auto mb-12 leading-relaxed">
          Agende um diagnostico gratuito de 30 minutos e descubra como a
          CONNECTAR pode acelerar sua operacao.
        </p>

        {/* Calendly Embed */}
        {/* TODO: substituir pela URL real do Calendly */}
        <div className="mb-12 p-8 border border-border rounded-sm bg-surface/50">
          <div className="aspect-[16/9] max-h-[500px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted/50 font-mono text-sm mb-4">
                Calendly Embed
              </p>
              <p className="text-xs text-muted/30 max-w-sm">
                Substituir este placeholder por:{" "}
                <code className="font-mono text-secondary/50">
                  &lt;iframe src=&quot;https://calendly.com/connectar&quot;
                  ...&gt;
                </code>
              </p>

              {/* Fallback CTA */}
              <div className="mt-8">
                <Button
                  variant="primary"
                  size="lg"
                  href="https://calendly.com/connectar"
                >
                  Agendar reuniao
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Email */}
          <a
            /* TODO: substituir por email real */
            href="mailto:contato@connectar.tech"
            className="group p-6 border border-border rounded-sm hover:border-secondary/40 transition-all duration-300"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted font-mono mb-2">
              Email
            </p>
            <p className="text-sm text-foreground/80 group-hover:text-secondary transition-colors">
              contato@connectar.tech
            </p>
          </a>

          {/* WhatsApp */}
          <a
            /* TODO: substituir por numero real com mensagem pre-preenchida */
            href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20CONNECTAR."
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 border border-border rounded-sm hover:border-secondary/40 transition-all duration-300"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted font-mono mb-2">
              WhatsApp
            </p>
            <p className="text-sm text-foreground/80 group-hover:text-secondary transition-colors">
              +55 (00) 00000-0000
            </p>
          </a>

          {/* LinkedIn */}
          <a
            /* TODO: substituir por URL real */
            href="https://linkedin.com/company/connectar"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 border border-border rounded-sm hover:border-secondary/40 transition-all duration-300"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted font-mono mb-2">
              LinkedIn
            </p>
            <p className="text-sm text-foreground/80 group-hover:text-secondary transition-colors">
              /company/connectar
            </p>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
