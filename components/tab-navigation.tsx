// components/tab-navigation.tsx

"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { History, Building2, ImageIcon, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

// --- DATOS DE PROYECTOS ---
const projectsData = [
  {
    title: "Proyecto CCU - Estructuras de Carga", // Título ajustado
    description: "Fabricación y montaje de estructuras de carga personalizadas para bodegas industriales.", // Descripción ajustada
    client: "CCU",
    images: [
      { src: "/images/foto43.jpg", alt: "Estructura de carga industrial fabricada por VAGMETAL SPA para CCU" }, // <--- ¡ACTUALIZA ESTO con la ruta de tu nueva imagen CCU!
      { src: "/images/foto12.jpeg", alt: "Detalle de soldadura en estructura metálica" }, // Alt text revisado si aplica
      { src: "/images/foto13.jpeg", alt: "Proceso de montaje de estructura metálica en sitio" }, // Alt text revisado si aplica
    ],
  },
  {
    title: "Proyecto Desarme y Montaje de Rack Mezzanina", // Título ajustado
    description: "Servicios de desarme y posterior montaje de racks mezzanina (altillos) y estructuras de almacenamiento.", // Descripción mejorada
    client: "Empresa Constructora",
    images: [
      { src: "/images/foto30.jpg", alt: "Rack mezzanina industrial - Vista general" },
      { src: "/images/foto31.jpg", alt: "Montaje de estructura de rack mezzanina" },
      { src: "/images/foto32.jpg", alt: "Detalle de unión en rack mezzanina " },
    ],
  },
  {
    title: "Proyecto Monorriel Industrial", // Título ajustado
    description: "Diseño, fabricación y montaje de sistemas monorriel de hasta 500Kg para transporte de carga en entornos industriales.", // Descripción mejorada y más general
    client: "Concha y Toro",
    images: [
      { src: "/images/foto33.jpg", alt: "Monorriel industrial instalado en planta de fabricación" },
      { src: "/images/foto34.jpg", alt: "Proceso de soldadura de componentes para monorriel" },
      { src: "/images/foto35.jpg", alt: "Vista final de sistema monorriel en operación" },
    ],
  },
];
// --- FIN DE DATOS DE PROYECTOS ---


// --- DATOS DE GALERÍA ---
// CAMBIO: Alt text y descripciones más generales sobre estructuras metálicas
const galleryImagesData = [
    { src: "/images/foto12.jpeg", alt: "Estructura metálica móvil de soporte" },
    { src: "/images/foto13.jpeg", alt: "Bastidor metálico para transporte de equipo" },
    { src: "/images/foto14.jpeg", alt: "Soporte y estructuras metálicas a medida" },
    { src: "/images/foto15.jpeg", alt: "Equipamiento industrial metálico" },
    { src: "/images/foto16.jpeg", alt: "Estructura de transporte robusta para equipos" },
    { src: "/images/foto17.jpeg", alt: "Base metálica para maquinaria pesada" },
    { src: "/images/foto18.jpeg", alt: "Mueble o estación de trabajo industrial metálica" },
    { src: "/images/foto22.jpeg", alt: "Escalera móvil metálica de 2 metros" },
    { src: "/images/foto36.jpg", alt: "Jaula metálica de seguridad para cilindros de gas 45kg" },
    { src: "/images/foto37.jpg", alt: "Protección metálica para cilindros de gas industrial" },
    { src: "/images/foto38.jpg", alt: "Diseño y fabricación de diversas estructuras metálicas" },
    { src: "/images/foto39.jpg", alt: "Rueda neumática de alta resistencia para estructuras móviles" },
    { src: "/images/foto40.jpg", alt: "Soporte metálico reforzado para izaje o apoyo" },
    { src: "/images/foto41.jpg", alt: "Estructura de almacenamiento metálica para botellas de acero" },
    { src: "/images/foto42.jpeg", alt: "Plataforma de transporte metálica o carro de plataforma" },
];
// --- FIN DE DATOS DE GALERÍA ---


export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState("historia")

  const [currentProjectImageIndex, setCurrentProjectImageIndex] = useState<{ [key: number]: number }>({});

  const goToNextImage = (projectIndex: number, totalImages: number) => {
    setCurrentProjectImageIndex(prev => {
      const currentIndex = prev[projectIndex] !== undefined ? prev[projectIndex] : 0;
      return {
        ...prev,
        [projectIndex]: (currentIndex + 1) % totalImages
      };
    });
  };

  const goToPrevImage = (projectIndex: number, totalImages: number) => {
    setCurrentProjectImageIndex(prev => {
      const currentIndex = prev[projectIndex] !== undefined ? prev[projectIndex] : 0;
      const newIndex = (currentIndex - 1 + totalImages) % totalImages;
      return {
        ...prev,
        [projectIndex]: newIndex
      };
    });
  };

  return (
    <section className="w-full bg-white py-16" id="servicios">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 sm:text-4xl">Nuestros Servicios</h2>

        <Tabs defaultValue="historia" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="mx-auto mb-16 sm:mb-0 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            <TabsTrigger
              value="historia"
              className="flex items-center gap-2 data-[state=active]:bg-blue-700 data-[state=active]:text-white"
            >
              <History className="h-5 w-5" />
              <span>Historia</span>
            </TabsTrigger>
            <TabsTrigger
              value="proyectos"
              className="flex items-center gap-2 data-[state=active]:bg-blue-700 data-[state=active]:text-white"
            >
              <Building2 className="h-5 w-5" />
              <span>Proyectos</span>
            </TabsTrigger>
            <TabsTrigger
              value="galeria"
              className="flex items-center gap-2 data-[state=active]:bg-blue-700 data-[state=active]:text-white"
            >
              <ImageIcon className="h-5 w-5" />
              <span>Galería</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="historia" className="pt-16 sm:pt-0">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">Nuestra Historia</h3>
                {/* CAMBIO DE TEXTO: Eliminado "metalurgia" y "venta de herramientas", más general sobre estructuras */}
                <p className="text-gray-700">
                  VAGMETAL SPA es una empresa con más de 10 años de experiencia, especializada en el diseño, fabricación y montaje de estructuras metálicas. Ofrecemos soluciones integrales y personalizadas para la industria y construcción, garantizando durabilidad y eficiencia.
                </p>
                <p className="mt-4 text-gray-700">
                  Desde nuestros inicios, nos hemos comprometido con la calidad y la innovación, adaptándonos a las necesidades específicas de cada cliente y proyecto en Chile.
                </p>
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/foto3.jpeg" // Mantengo esta foto ya que no se indicó cambio
                  alt="Taller de VAGMETAL fabricando estructuras metálicas a medida" // Alt text mejorado
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="proyectos" className="pt-16 sm:pt-0">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Mapeamos los datos de nuestros proyectos */}
              {projectsData.map((project, projectIndex) => (
                <div key={project.title} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1">
                  {/* Contenedor de imagen cuadrado */}
                  <div className="relative aspect-w-1 aspect-h-1 group">
                    <Image
                      src={project.images[currentProjectImageIndex[projectIndex] || 0].src}
                      alt={project.images[currentProjectImageIndex[projectIndex] || 0].alt}
                      fill
                      className="object-cover"
                    />
                    {/* Controles de navegación de imágenes: sin círculo negro, flechas negras en los bordes */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={() => goToPrevImage(projectIndex, project.images.length)}
                          className="absolute left-0 top-1/2 -translate-y-1/2 px-2 text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 drop-shadow-md"
                          aria-label="Imagen anterior"
                        >
                          <ChevronLeft className="h-7 w-7" />
                        </button>
                        <button
                          onClick={() => goToNextImage(projectIndex, project.images.length)}
                          className="absolute right-0 top-1/2 -translate-y-1/2 px-2 text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 drop-shadow-md"
                          aria-label="Siguiente imagen"
                        >
                          <ChevronRight className="h-7 w-7" />
                        </button>
                      </>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{project.title}</h3>
                    <p className="mb-4 text-gray-700">{project.description}</p>
                    <p className="text-sm font-medium text-blue-700">Cliente: {project.client}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="galeria" className="pt-16 sm:pt-0">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {galleryImagesData.map((img, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg aspect-w-3 aspect-h-4">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay de fondo sólido para asegurar contraste del texto blanco */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h4 className="text-lg font-bold">{img.alt}</h4>
                    {/* Texto genérico o eliminar si no aplica */}
                    <p className="text-sm">Estructura metálica a medida</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}