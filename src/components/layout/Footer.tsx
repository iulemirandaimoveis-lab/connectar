"use client";

const footerLinks = [
  { label: "Servicos", href: "#servicos" },
  { label: "CTO-as-a-Service", href: "#cto" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    /* TODO: substituir por URL real */
    href: "https://linkedin.com/company/connectar",
  },
  {
    label: "GitHub",
    /* TODO: substituir por URL real */
    href: "https://github.com/connectar",
  },
  {
    label: "Email",
    /* TODO: substituir por email real */
    href: "mailto:contato@connectar.tech",
  },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <span className="font-display text-xl tracking-wider text-foreground">
              CONNECTAR
            </span>
            <p className="mt-3 text-sm text-muted font-mono tracking-wide">
              CON + NECTAR
            </p>
            <p className="mt-2 text-sm text-muted max-w-xs">
              Tecnologia estrategica para empresas que nao podem errar.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted mb-4">
              Navegacao
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted mb-4">
              Conecte-se
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; 2026 CONNECTAR. Todos os direitos reservados.
          </p>
          {/* TODO: adicionar CNPJ quando disponivel */}
          <p className="text-xs text-muted/50 font-mono">
            CNPJ: XX.XXX.XXX/0001-XX
          </p>
        </div>
      </div>
    </footer>
  );
}
