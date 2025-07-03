import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <Image
        src="/images/foto11.jpeg"
        alt="Innovación y Tecnología en Metalurgia"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">
        {/* OPCIÓN DE H1 MEJORADA PARA SEO - Elige la que prefieras */}
        <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          VAGMETAL SPA: Estructuras Metálicas y Metalurgia de Vanguardia en Chile
        </h1>
        {/* O si prefieres algo más corto:
        <h1 className="mb-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Estructuras Metálicas y Soluciones de Metalurgia para la Industria Chilena
        </h1>
        */}

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