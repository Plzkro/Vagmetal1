// app/layout.tsx

import type React from "react"
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/scroll-to-top-button"; // ¡NUEVO: Importar el botón de scroll!
import WelcomeBanner from "@/components/welcome-banner";       // ¡NUEVO: Importar el banner de bienvenida!

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  // CAMBIO: Título más preciso, solo sobre Estructuras Metálicas
  title: "VAGMETAL SPA | Fabricación y Montaje de Estructuras Metálicas en Chile",
  description:
    // CAMBIO: Descripción enfocada en fabricación y montaje de estructuras metálicas, eliminando herramientas
    "VAGMETAL SPA es una empresa chilena especializada en el diseño, fabricación y montaje de estructuras metálicas de alta calidad para la industria y construcción en todo Chile. Soluciones a medida para naves, galpones y proyectos estructurales.",
  // CAMBIO: Palabras clave actualizadas para ser más generales en estructuras metálicas
  keywords: "estructuras metálicas, fabricación de estructuras, montaje de estructuras, galpones, naves industriales, ingeniería metálica, estructuras de acero, proyectos metálicos, soldadura, Chile",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <WelcomeBanner /> {/* ¡NUEVO: Renderizar el banner de bienvenida al inicio del body! */}
          <Header />
          {children}
          <Footer />
          {/* Botón de WhatsApp se mantiene ACTIVO */}
          <WhatsAppButton
            phoneNumber="+56934252069" // ¡CONFIRMADO Y ACTUALIZADO CON TU NÚMERO!
            message="Hola VAGMETAL SPA, me gustaría saber más sobre sus servicios de estructuras metálicas."
          />
          <ScrollToTopButton /> {/* ¡NUEVO: Renderizar el botón de scroll al final del contenido! */}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}