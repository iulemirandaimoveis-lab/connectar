"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HexIcon } from "@/components/ui/HexIcon";

const navLinks = [
  { label: "Servicos", href: "#servicos" },
  { label: "CTO-as-a-Service", href: "#cto" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(8, 8, 10, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          padding: scrolled ? "16px 0" : "24px 0",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 group"
            >
              <HexIcon size={28} />
              <span
                className="text-sm tracking-brand font-extralight uppercase transition-colors"
                style={{ color: "var(--text-primary)" }}
              >
                CONNECTAR
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="relative text-sm font-light tracking-wide transition-colors duration-300 pb-1"
                  style={{
                    color:
                      activeSection === link.href
                        ? "var(--text-primary)"
                        : "rgba(255,255,255,0.5)",
                  }}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-[2px]"
                      style={{ backgroundColor: "var(--gold)" }}
                      layoutId="activeNav"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              ))}
              <button
                onClick={() => handleNav("#contato")}
                className="cta-text px-5 py-2 transition-all duration-300"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.5)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border-gold)";
                  el.style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(255,255,255,0.1)";
                  el.style.color = "rgba(255,255,255,0.5)";
                }}
              >
                Fale conosco
              </button>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[6px]"
              aria-label="Menu"
            >
              <span
                className="block w-6 transition-all duration-300"
                style={{
                  height: "2px",
                  backgroundColor: "rgba(255,255,255,0.5)",
                  transform: mobileOpen
                    ? "rotate(45deg) translate(2.5px, 2.5px)"
                    : "none",
                }}
              />
              <span
                className="block w-6 transition-all duration-300"
                style={{
                  height: "2px",
                  backgroundColor: "rgba(255,255,255,0.5)",
                  transform: mobileOpen
                    ? "rotate(-45deg) translate(2.5px, -2.5px)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 lg:hidden"
            style={{
              backgroundColor: "rgba(8, 8, 10, 0.97)",
              backdropFilter: "blur(20px)",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-2xl font-extralight tracking-wide transition-colors"
                style={{ color: "var(--text-primary)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => handleNav("#contato")}
              className="mt-4 cta-text px-8 py-3 transition-all"
              style={{
                border: "1px solid var(--border-gold)",
                color: "var(--gold)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Fale conosco
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
