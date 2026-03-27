"use client";

import { HexIcon } from "@/components/ui/HexIcon";

const socialLinks = [
  /* TODO: substituir por URLs reais */
  { label: "LinkedIn", href: "https://linkedin.com/company/connectar" },
  { label: "Instagram", href: "https://instagram.com/connectar" },
  { label: "Email", href: "mailto:contato@connectar.co" },
];

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <HexIcon size={24} className="opacity-40" />
            <span
              className="text-sm tracking-brand font-extralight uppercase"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              CONNECTAR
            </span>
          </div>

          {/* Copyright */}
          <p
            className="text-xs font-light"
            style={{ color: "rgba(255,255,255,0.15)" }}
          >
            &copy; 2026 CONNECTAR. Todos os direitos reservados.
          </p>

          {/* Social */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-xs font-light tracking-wide transition-colors duration-300"
                style={{ color: "rgba(255,255,255,0.2)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(229, 167, 45, 0.6)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(255,255,255,0.2)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
