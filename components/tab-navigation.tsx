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


// --- DATOS DE GALERÍA CON CATEGORÍAS ---
const galleryImagesData = [
    // Carros
    { src: "/images/foto16.jpeg", alt: "Estructura de transporte robusta para equipos", description: "Estructuras diseñadas para el transporte seguro y eficiente de maquinaria.", category: "Carros" },
    { src: "/images/foto42.jpg", alt: "Plataforma de transporte metálica o carro de plataforma", description: "Plataformas y carros de plataforma metálicos para transporte de materiales.", category: "Carros" },
    { src: "/images/foto13.jpeg", alt: "Bastidor metálico para transporte de equipo", description: "Bastidores robustos diseñados para el transporte seguro de equipos pesados.", category: "Carros" }, // Repetida, pero categorizada

    // Ruedas
    { src: "/images/foto39.jpg", alt: "Rueda neumática de alta resistencia para estructuras móviles", description: "Implementación de ruedas neumáticas robustas para estructuras que requieren movilidad.", category: "Ruedas" },

    // Otros productos y servicios (incluye soportes, jaulas, escaleras, equipamiento general)
    { src: "/images/foto12.jpeg", alt: "Estructura metálica móvil de soporte", description: "Diseño y fabricación de soportes móviles para diversas aplicaciones industriales.", category: "Otros productos y servicios" }, // Repetida, pero categorizada
    { src: "/images/foto14.jpeg", alt: "Soporte y estructuras metálicas a medida", description: "Soluciones de soporte y estructuras personalizadas para necesidades específicas.", category: "Otros productos y servicios" },
    { src: "/images/foto15.jpeg", alt: "Equipamiento industrial metálico", description: "Fabricación de equipamiento metálico duradero para entornos industriales.", category: "Otros productos y servicios" },
    { src: "/images/foto17.jpeg", alt: "Base metálica para maquinaria pesada", description: "Bases metálicas de alta resistencia para maquinaria industrial y equipos pesados.", category: "Otros productos y servicios" },
    { src: "/images/foto18.jpeg", alt: "Mueble o estación de trabajo industrial metálica", description: "Mobiliario y estaciones de trabajo metálicas para ambientes industriales exigentes.", category: "Otros productos y servicios" },
    { src: "/images/foto22.jpeg", alt: "Escalera móvil metálica de 2 metros", description: "Escaleras metálicas móviles diseñadas para acceso seguro en altura.", category: "Otros productos y servicios" },
    { src: "/images/foto36.jpg", alt: "Jaula metálica de seguridad para cilindros de gas 45kg", description: "Jaulas de seguridad para el almacenamiento seguro de cilindros de gas.", category: "Otros productos y servicios" },
    { src: "/images/foto37.jpg", alt: "Protección metálica para cilindros de gas industrial", description: "Protectores metálicos a medida para cilindros de gas industriales.", category: "Otros productos y servicios" },
    { src: "/images/foto38.jpg", alt: "Diseño y fabricación de diversas estructuras metálicas", description: "Amplia experiencia en el diseño y fabricación de todo tipo de estructuras metálicas.", category: "Otros productos y servicios" },
    { src: "/images/foto40.jpg", alt: "Soporte metálico reforzado para izaje o apoyo", description: "Soportes metálicos reforzados para operaciones de izaje y apoyo de cargas.", category: "Otros productos y servicios" },
    { src: "/images/foto41.jpg", alt: "Estructura de almacenamiento metálica para botellas de acero", description: "Soluciones de almacenamiento metálicas para organizar botellas y cilindros de acero.", category: "Otros productos y servicios" },
];
// --- FIN DE DATOS DE GALERÍA ---


export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState("historia")
  // Nuevo estado para la categoría activa de la galería
  const [activeGalleryCategory, setActiveGalleryCategory] = useState("Todos");

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
    // ¡Aquí estaba el paréntesis extra! Se ha eliminado
  };

  // Función para filtrar las imágenes de la galería según la categoría seleccionada
  const filteredGalleryImages = activeGalleryCategory === "Todos"
    ? galleryImagesData
    : galleryImagesData.filter(img => img.category === activeGalleryCategory);

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
                <p className="text-gray-700">
                  VAGMETAL SPA es una empresa con más de 10 años de sólida trayectoria, especializada en el diseño, fabricación y montaje de estructuras metálicas. Nos distinguimos por ofrecer soluciones integrales y personalizadas, meticulosamente adaptadas a las exigencias de la industria, la minería y la construcción en Chile. Nuestro enfoque garantiza la máxima durabilidad, resistencia y eficiencia en cada proyecto, cimentado en estrictos estándares de calidad.
                </p>
                <p className="mt-4 text-gray-700">
                  Desde nuestros inicios, hemos cultivado un compromiso inquebrantable con la calidad y la innovación, lo que nos permite abordar desde complejos galpones industriales y naves de almacenamiento hasta soportes especializados y estructuras de alta carga. Cada pieza es concebida y ejecutada considerando su uso específico, los factores ambientales a los que estará expuesta y la optimización de los materiales para un rendimiento superior y una vida útil prolongada.
                </p>
                <p className="mt-4 text-gray-700">
                  Nos enorgullece ser un socio estratégico para nuestros clientes, no solo un proveedor. Aportamos nuestra vasta experiencia para asesorar en la selección de materiales, diseño estructural y técnicas de soldadura avanzadas, asegurando que cada solución metálica no solo cumpla, sino que exceda las expectativas de solidez, seguridad y funcionalidad. Esta dedicación nos ha posicionado como referentes en el sector de las estructuras metálicas a medida en el país.
                </p>
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/historia.jpg"
                  alt="Taller de VAGMETAL fabricando estructuras metálicas a medida"
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
                  <div className="relative aspect-w-1 aspect-h-1 group">
                    <Image
                      src={project.images[currentProjectImageIndex[projectIndex] || 0].src}
                      alt={project.images[currentProjectImageIndex[projectIndex] || 0].alt}
                      fill
                      className="object-cover"
                    />
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
            {/* Controles de filtro para la galería */}
            <div className="mb-8 flex flex-wrap justify-center gap-4">
              {["Todos", "Carros", "Ruedas", "Otros productos y servicios"].map(category => (
                <button
                  key={category}
                  onClick={() => setActiveGalleryCategory(category)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200
                    ${activeGalleryCategory === category
                      ? "bg-blue-700 text-white shadow-md"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredGalleryImages.map((img, index) => (
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
                    <p className="text-sm">{img.description}</p> {/* Usa la descripción específica */}
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