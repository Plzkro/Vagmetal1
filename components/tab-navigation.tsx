// components/tab-navigation.tsx

"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { History, Building2, ImageIcon, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

// --- DATOS DE PROYECTOS ---
const projectsData = [
  {
    title: "Proyecto CCU",
    description: "Carros de Carga para bodega de almacenamiento",
    client: "CCU",
    images: [
      { src: "/images/foto26.jpeg", alt: "Carro de bodega CCU - Vista 1" },
      { src: "/images/foto12.jpeg", alt: "Carro de bodega CCU - Vista 2" },
      { src: "/images/foto13.jpeg", alt: "Carro de bodega CCU - Detalle" },
    ],
  },
  {
    title: "Proyecto desarme estructuras metálicas",
    description: "Desarme y armado de Rack mezzanina o altillo",
    client: "Empresa Constructora",
    images: [
      { src: "/images/foto30.jpeg", alt: "Estructura - Vista general" },
      { src: "/images/foto31.jpeg", alt: "Estructura - Montaje" },
      { src: "/images/foto32.jpeg", alt: "Estructura - Detalle " },
    ],
  },
  {
    title: "Proyecto Monorriel",
    description: "Fabricacion y Montaje Monorriel para 500Kg",
    client: "Concha y Toro",
    images: [
      { src: "/images/foto33.jpeg", alt: "Estructura Industrial - Fábrica" },
      { src: "/images/foto34.jpeg", alt: "Estructura Industrial - Proceso de soldadura" },
      { src: "/images/foto35.jpeg", alt: "Estructura Industrial - Vista final" },
    ],
  },
];
// --- FIN DE DATOS DE PROYECTOS ---


// --- DATOS DE GALERÍA ---
const galleryImagesData = [
    { src: "/images/foto12.jpeg", alt: "Carro yegua 400 kg" },
    { src: "/images/foto13.jpeg", alt: "Carro yegua 500 kg" },
    { src: "/images/foto14.jpeg", alt: "Carro industrial con soportes" },
    { src: "/images/foto15.jpeg", alt: "Carro de carga industrial" },
    { src: "/images/foto16.jpeg", alt: "Carro de transporte para tripodes y soportes de iluminación o fotografía" },
    { src: "/images/foto17.jpeg", alt: "Carro de carga" },
    { src: "/images/foto18.jpeg", alt: "Equipo mueble industrial" },
    { src: "/images/foto22.jpeg", alt: "Escalera móvil 2 metros" },
    { src: "/images/foto36.jpeg", alt: "Carro para gas 45kg" },
    { src: "/images/foto37.jpeg", alt: "Carro para gas 45kg" },
    { src: "/images/foto38.jpeg", alt: "Fabricacion, diseño de productos y estructuras Metalicas" },
    { src: "/images/foto39.jpeg", alt: "Rueda Neumatica para carretilla" },
    { src: "/images/foto40.jpeg", alt: "Soporte de Gato de alta resistencia" },
    { src: "/images/foto41.jpeg", alt: "Carro para botellas de acero" },
    { src: "/images/foto42.jpeg", alt: "Carro de plataforma o carro plano para transporte de carga" },
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
          <TabsList className="mx-auto mb-8 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
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

          <TabsContent value="historia" className="mt-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">Nuestra Historia</h3>
                <p className="text-gray-700">
                  VAGMETAL SPA es una empresa con más de 10 años de experiencia, que opera en el sector de la metalurgia
                  y la venta de herramientas. Nos especializamos en la comercialización de herramientas, la fabricación
                  de carros, y el desarrollo de estructuras metálicas.
                </p>
                <p className="mt-4 text-gray-700">
                  Desde nuestros inicios, nos hemos comprometido con la calidad y la innovación, ofreciendo soluciones
                  personalizadas que satisfacen las necesidades específicas de cada cliente.
                </p>
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/foto3.jpeg"
                  alt="Taller de VAGMETAL"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="proyectos" className="mt-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Mapeamos los datos de nuestros proyectos */}
              {projectsData.map((project, projectIndex) => (
                <div key={project.title} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                  {/* CAMBIO 1: Hacemos el contenedor de imagen cuadrado (aspect-ratio 1:1) */}
                  <div className="relative aspect-w-1 aspect-h-1 group">
                    <Image
                      src={project.images[currentProjectImageIndex[projectIndex] || 0].src}
                      alt={project.images[currentProjectImageIndex[projectIndex] || 0].alt}
                      fill
                      className="object-cover"
                    />
                    {/* Controles de navegación de imágenes */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={() => goToPrevImage(projectIndex, project.images.length)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          aria-label="Imagen anterior"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => goToNextImage(projectIndex, project.images.length)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          aria-label="Siguiente imagen"
                        >
                          <ChevronRight className="h-5 w-5" />
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

          <TabsContent value="galeria" className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {galleryImagesData.map((img, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg aspect-w-4 aspect-h-3">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* CAMBIO 2: Overlay de fondo más sólido para asegurar contraste del texto blanco */}
                  {/* Aquí el overlay es inicialmente transparente y se vuelve un negro más sólido (80% de opacidad) al pasar el ratón */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  {/* El texto permanece blanco porque es el que mejor contrasta con el overlay oscuro */}
                  <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h4 className="text-lg font-bold">{img.alt}</h4>
                    <p className="text-sm">Descripción breve del trabajo realizado</p>
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