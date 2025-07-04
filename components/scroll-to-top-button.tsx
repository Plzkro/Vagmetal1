// components/scroll-to-top-button.tsx

"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    // CAMBIO: Posición del botón ajustada para evitar superposición con WhatsApp
    <div className="fixed bottom-20 right-4 z-50"> {/* Cambiado de bottom-6 right-6 a bottom-20 right-4 */}
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="rounded-full p-3 bg-blue-700 hover:bg-blue-800 text-white shadow-lg transition-opacity duration-300 ease-in-out"
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}