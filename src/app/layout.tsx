import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://connectar.vercel.app"),
  title: "CONNECTAR — Tecnologia Estratégica & CTO-as-a-Service",
  description:
    "Liderança tecnológica sênior para empresas em crescimento. CTO-as-a-Service, consultoria em IA, arquitetura de sistemas e recrutamento tech.",
  keywords: [
    "CTO-as-a-Service",
    "consultoria tecnologia",
    "IA empresarial",
    "arquitetura de sistemas",
    "CONNECTAR",
  ],
  authors: [{ name: "CONNECTAR" }],
  openGraph: {
    title: "CONNECTAR — Tecnologia Estratégica",
    description:
      "CTO-as-a-Service e consultoria em tecnologia para empresas que não podem errar.",
    url: "https://connectar.vercel.app",
    siteName: "CONNECTAR",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CONNECTAR — Tecnologia Estratégica",
    description: "CTO-as-a-Service para empresas em crescimento.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
