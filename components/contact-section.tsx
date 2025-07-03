"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock, Loader2 } from "lucide-react"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Reset form
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)

    // Here you would normally send the data to your backend
    alert("Mensaje enviado con éxito. Gracias por contactarnos.")
  }

  return (
    <section className="bg-gray-100 py-16" id="contacto">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 sm:text-4xl">Contáctanos</h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900">
                  Nombre
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="w-full"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className="w-full"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="¿En qué podemos ayudarte?"
                  className="min-h-[150px] w-full"
                />
              </div>

              <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Mensaje"
                )}
              </Button>
            </form>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-bold text-gray-900">Información de Contacto</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-blue-700" />
                  <div>
                    <p className="font-medium text-gray-900">Dirección</p>
                    <p className="text-gray-700">Los Manzanos 2435, 8840112 La Pintana, Región Metropolitana</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mr-3 h-5 w-5 text-blue-700" />
                  <div>
                    <p className="font-medium text-gray-900">Teléfono</p>
                    <p className="text-gray-700">+56934252069</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="mr-3 h-5 w-5 text-blue-700" />
                  <div>
                    <p className="font-medium text-gray-900">Horario de Atención</p>
                    <p className="text-gray-700">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="text-gray-700">Sábado: 9:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[300px] overflow-hidden rounded-lg bg-white shadow-md">
<iframe
  src="https://maps.google.com/?cid=7134685172359007329&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ"
  width="600"
  height="450"
  style={{ border: "0" }} // ¡CAMBIO AQUÍ!
  allowFullScreen="" // Nota: 'allowfullscreen' en HTML es 'allowFullScreen' en JSX
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade" // Nota: 'referrerpolicy' en HTML es 'referrerPolicy' en JSX
></iframe>
</div>
          </div>
        </div>
      </div>
    </section>
  )
}
