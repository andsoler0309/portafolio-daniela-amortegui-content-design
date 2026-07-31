import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Providers } from "@/components/Providers";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Daniela Amórtegui — Product, Communication & Project Strategist",
  description:
    "Estratega de producto, comunicación y proyectos digitales. Convierto productos complejos en experiencias claras para las personas y en resultados para los negocios.",
  openGraph: {
    title: "Daniela Amórtegui — Product, Communication & Project Strategist",
    description:
      "Estrategia de producto, gestión de proyectos, comunicación digital, UX e Inteligencia Artificial.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${dmSans.variable} antialiased noise-overlay`}
      >
        <Providers>
          <Navigation />
          <ScrollToTop />
          <main className="relative z-10 bg-bg-primary">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
