import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image" // Importa el componente Image de Next.js

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Usar next/image para la imagen de fondo */}
      <Image
        src="/placeholder.svg" // Reemplaza con la ruta de tu imagen real
        alt="VAGMETAL Background"
        fill // Esto hace que la imagen ocupe todo el espacio del contenedor padre relativo
        className="object-cover" // Para asegurar que cubra el área sin distorsión
        priority // Esto indica a Next.js que la cargue con alta prioridad (es una imagen clave del LCP)
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
