"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Servicos", href: "#servicos" },
  { label: "CTO-as-a-Service", href: "#cto" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="font-display text-xl lg:text-2xl tracking-wider text-foreground hover:text-secondary transition-colors"
            >
              CONNECTAR
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-muted hover:text-foreground transition-colors tracking-wide font-sans"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contato")}
                className="text-sm px-5 py-2 border border-secondary/40 text-secondary hover:border-secondary hover:bg-secondary/10 transition-all duration-300 rounded-sm tracking-wide"
              >
                Fale conosco
              </button>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              aria-label="Menu"
            >
              <span
                className={cn(
                  "block w-6 h-px bg-foreground transition-all duration-300",
                  mobileOpen && "rotate-45 translate-y-[3.5px]"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-px bg-foreground transition-all duration-300",
                  mobileOpen && "-rotate-45 -translate-y-[3.5px]"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-2xl font-display text-foreground hover:text-secondary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contato")}
              className="mt-4 px-8 py-3 border border-secondary text-secondary hover:bg-secondary/10 transition-all rounded-sm text-lg tracking-wide"
            >
              Fale conosco
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
