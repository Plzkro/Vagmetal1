// components/scroll-to-top-button.tsx

"use client" // Esto indica que es un componente de cliente

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button" // Asegúrate de que esta ruta sea correcta

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Muestra el botón cuando el usuario ha hecho scroll hacia abajo
  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Muestra el botón después de 300px de scroll
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Desplaza la página al inicio suavemente
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
    <div className="fixed bottom-6 right-6 z-50">
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