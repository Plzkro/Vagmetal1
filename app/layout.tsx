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
import WhatsAppButton from "@/components/WhatsAppButton"; // <-- Importa el nuevo componente

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VAGMETAL SPA | Metalurgia y Estructuras Metálicas",
  description:
    "Empresa especializada en metalurgia, fabricación de estructuras metálicas y comercialización de herramientas de alta calidad en Chile.",
  keywords: "metalurgia, estructuras metálicas, herramientas, fabricación, carros, Chile",
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
          <Header />
          {children}
          <Footer />
          {/* ¡Añade tu botón de WhatsApp aquí! */}
          {/* CAMBIA EL NÚMERO DE TELÉFONO POR EL DE VAGMETAL SPA (+código_país+número) */}
          <WhatsAppButton
            phoneNumber="+56934252069" // <--- ¡IMPORTANTE! REEMPLAZA ESTE NÚMERO
            message="Hola VAGMETAL SPA, me gustaría saber más sobre sus servicios de metalurgia."
          />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}