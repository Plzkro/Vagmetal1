// components/welcome-banner.tsx

"use client"

import { useState, useEffect } from "react"
import { X, Sparkles } from "lucide-react"

export default function WelcomeBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasBeenClosed = localStorage.getItem("vagmetal_welcome_banner_closed")
    if (!hasBeenClosed) {
      setIsVisible(true)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem("vagmetal_welcome_banner_closed", "true")
  }

  if (!isVisible) return null

  return (
    // CAMBIO: z-index ajustado a un valor muy alto para asegurar que esté encima
    <div className="fixed top-0 left-0 right-0 z-[999] bg-blue-700 text-white p-3 shadow-md text-center text-sm md:text-base flex items-center justify-center gap-2">
      <Sparkles className="h-5 w-5 flex-shrink-0" />
      <span>
        ¡Bienvenido a nuestro nuevo sitio web! Te invitamos a contactarnos. Tenemos **precios especiales para emprendedores, comerciantes y empresas**, adecuados para tu idea.
      </span>
      <button
        onClick={handleClose}
        className="ml-auto p-1 rounded-full hover:bg-blue-600 transition-colors"
        aria-label="Cerrar aviso de bienvenida"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  )
}