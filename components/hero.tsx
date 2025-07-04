// components/hero.tsx

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link" // Importar Link para el botón

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden pt-[96px]" id="inicio"> {/* Añadido id="inicio" */}
      {/* CAMBIO DE FOTO: ¡ACTUALIZA ESTO con la ruta de tu nueva imagen principal! */}
      <Image
        src="/images/foto44.jpg" // <--- ¡CAMBIA ESTO por la ruta real de tu nueva imagen!
        alt="VAGMETAL: Especialistas en diseño, fabricación y montaje de Estructuras Metálicas a Medida" // Alt text mejorado
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">
        {/* CAMBIO DE TEXTO: H1 enfocado en estructuras metálicas */}
        <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          VAGMETAL: Especialistas en diseño, fabricación y montaje de Estructuras Metálicas a Medida
        </h1>
        {/* CAMBIO DE TEXTO: Párrafo enfocado en estructuras metálicas y eliminando herramientas/carros como limitación */}
        <p className="mb-8 max-w-2xl text-lg text-gray-200 sm:text-xl">
          Diseñamos, fabricamos y montamos soluciones robustas para galpones, bodegas, construcciones y todo tipo de proyectos estructurales en Santiago, Chile.
        </p>
        {/* Botón Contáctanos vuelve a ser un Link */}
        <Link href="#contacto"> {/* CAMBIO: Link con href */}
          <Button size="lg" className="group bg-blue-700 hover:bg-blue-800">
            Contáctanos
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  )
}