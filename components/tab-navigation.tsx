"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { History, Building2, ImageIcon } from "lucide-react"
import Image from "next/image"

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState("historia")

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
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="relative h-64">
                  <Image src="/images/foto8.jpeg" alt="Proyecto CCU" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Proyecto CCU</h3>
                  <p className="mb-4 text-gray-700">Carros para bodega de almacenamiento</p>
                  <p className="text-sm font-medium text-blue-700">Cliente: CCU</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="relative h-64">
                  <Image
                    src="/images/foto23.jpeg"
                    alt="Proyecto Estructuras de Soporte"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Proyecto Metalcom</h3>
                  <p className="mb-4 text-gray-700">Estructuras metálicas para construcción</p>
                  <p className="text-sm font-medium text-blue-700">Cliente: Empresa Constructora</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="relative h-64">
                  <Image
                    src="/images/foto25.jpeg"
                    alt="Proyecto Estructuras y Soportes"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Estructuras Industriales</h3>
                  <p className="mb-4 text-gray-700">Fabricación de estructuras metálicas personalizadas</p>
                  <p className="text-sm font-medium text-blue-700">Cliente: Sector Industrial</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="galeria" className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[12, 13, 14, 15 , 16, 17, 18, 22].map((item) => (
                <div key={item} className="group relative overflow-hidden rounded-lg">
                  <Image
                    src={`/images/foto${item}.jpeg`}
                    alt={`Galería imagen ${item}`}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h4 className="text-lg font-bold">Proyecto {item}</h4>
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
