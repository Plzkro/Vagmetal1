import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* ¡Aquí es donde actualizamos la imagen de portada! */}
      <Image
        src="/images/foto11.jpeg" // <-- ¡Hemos cambiado esto!
        alt="Innovación y Tecnología en Metalurgia" // <-- Sugerencia: Mejora el texto alternativo (alt)
        fill // Esto es crucial para que la imagen cubra todo el fondo
        className="object-cover" // Asegura que la imagen se ajuste sin distorsionarse
        priority // Para que esta imagen principal se cargue rápido
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">
        <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Innovación y Tecnología al Servicio de la Industria Chilena
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-200 sm:text-xl">
          Especialistas en metalurgia, fabricación de estructuras metálicas y comercialización de herramientas de alta
          calidad
        </p>
        <Button size="lg" className="group bg-blue-700 hover:bg-blue-800">
          Contáctanos
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  )
}
