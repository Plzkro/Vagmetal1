"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image" // <-- ¡IMPORTAMOS Image de Next.js!
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white/90 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          {/* ¡AQUÍ ES DONDE INSERTAMOS EL LOGO! */}
          <Image
            src="/images/LogoVagmetal.png" // Ruta a tu logo en la carpeta public/images
            alt="Logo VAGMETAL SPA" // Texto alternativo para accesibilidad y SEO
            width={160} // Ajusta el ancho según cómo quieras que se vea (ej. 150-200)
            height={40} // Ajusta la altura, Next.js optimizará
            priority // Para que el logo cargue rápidamente al principio
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          <Link href="/" className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-700">
            Inicio
          </Link>
          <Link href="#servicios" className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-700">
            Servicios
          </Link>
          <Link href="#contacto" className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-700">
            Contacto
          </Link>
          <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
            Contáctanos
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-16 z-50 bg-white px-4 py-5 shadow-md md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-base font-medium text-gray-900 transition-colors hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="#servicios"
              className="text-base font-medium text-gray-900 transition-colors hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#contacto"
              className="text-base font-medium text-gray-900 transition-colors hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <Button className="w-full bg-blue-700 hover:bg-blue-800" onClick={() => setIsMenuOpen(false)}>
              Contáctanos
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}