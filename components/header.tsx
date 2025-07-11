// components/header.tsx

"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white/90 shadow-sm backdrop-blur-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4">
        {/* ENLACE DEL LOGO VUELVE A SER ACTIVO */}
        <Link href="/" className="flex items-center"> {/* CAMBIO: href="/" */}
          <Image
            src="/images/LogoVagmetal.png"
            alt="Logo VAGMETAL SPA"
            width={90}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navigation - ENLACES VUELVEN A SER ACTIVOS */}
        <nav className="hidden items-center space-x-6 md:flex">
          <Link href="#inicio" className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-700"> {/* CAMBIO: Link con href */}
            Inicio
          </Link>
          <Link href="#servicios" className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-700"> {/* CAMBIO: Link con href */}
            Servicios
          </Link>
          <Link href="#faq" className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-700"> {/* NUEVO: Enlace a FAQ */}
            FAQ
          </Link>
          <Link href="#contacto" className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-700"> {/* CAMBIO: Link con href */}
            Contacto
          </Link>
          {/* Botón Contáctanos VUELVE A SER ACTIVO */}
          <Link href="#contacto"> {/* CAMBIO: Link con href */}
            <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
              Contáctanos
            </Button>
          </Link>
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

      {/* Mobile Navigation - ENLACES VUELVEN A SER ACTIVOS */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-16 z-50 bg-white px-4 py-5 shadow-md md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#inicio"
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
            <Link // NUEVO: Enlace a FAQ en menú móvil
              href="#faq"
              className="text-base font-medium text-gray-900 transition-colors hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="#contacto"
              className="text-base font-medium text-gray-900 transition-colors hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <Link href="#contacto">
              <Button className="w-full bg-blue-700 hover:bg-blue-800" onClick={() => setIsMenuOpen(false)}>
                Contáctanos
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}