import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

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
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
