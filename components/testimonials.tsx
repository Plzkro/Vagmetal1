// components/testimonials.tsx

import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      company: "Constructora ABC",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Carlos", // <- URL de DiceBear
      rating: 5,
      text: "VAGMETAL ha sido un socio clave en nuestros proyectos de construcción. La calidad de sus estructuras metálicas y su profesionalismo son excepcionales.",
    },
    {
      id: 2,
      name: "María González",
      company: "Industrias XYZ",
      image: "https://api.dicebear.com/7.x/fun-emoji/svg?seed=Maria", // <- URL de DiceBear
      rating: 5,
      text: "Hemos trabajado con VAGMETAL en múltiples proyectos y siempre entregan a tiempo y con la más alta calidad. Recomendados al 100%.",
    },
    {
      id: 3,
      name: "Juan Pérez",
      company: "CCU",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Juan", // <- URL de DiceBear
      rating: 5,
      text: "Los carros para nuestra bodega de almacenamiento superaron nuestras expectativas. Excelente servicio y atención personalizada.",
    },
  ]

  // ... (el resto del código es el mismo) ...

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Clientes que confían en VAGMETAL
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center">
                <div className="relative mr-4 h-14 w-14 overflow-hidden rounded-full flex-shrink-0">
                  <Image
                    src={testimonial.image} // Asegúrate que este src es la URL completa de DiceBear
                    alt={`Foto de perfil de ${testimonial.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>

              <div className="mb-3 flex" role="img" aria-label={`Calificación de ${testimonial.rating} de 5 estrellas`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
                {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                  <Star key={`empty-${i}`} className="h-5 w-5 fill-gray-300 text-gray-300" aria-hidden="true" />
                ))}
              </div>

              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}