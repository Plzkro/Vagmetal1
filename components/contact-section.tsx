// components/contact-section.tsx

import { Mail, Phone, MapPin, Clock } from "lucide-react" // Se agrega Mail para el icono de correo

export default function ContactSection() {
  return (
    <section className="w-full bg-gray-100 py-16" id="contacto">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 sm:text-4xl">Contáctanos</h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Información de Contacto */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-blue-700 mt-1" />
                <p className="text-gray-700">
                  Los Manzanos 2435, 8840112 La Pintana, Región Metropolitana, Chile
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-blue-700" />
                <p className="text-gray-700">+56934252069</p>
              </div>
              {/* CAMBIO: Se agrega el correo corporativo */}
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-blue-700" />
                <p className="text-gray-700">vagmetal.alemany@gmail.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 flex-shrink-0 text-blue-700 mt-1" />
                <p className="text-gray-700">
                  Lunes a Viernes: 9:00 - 18:00
                  <br />
                  Sábado: 9:00 - 13:00
                </p>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto (mantengo la estructura actual si ya lo tienes) */}
          <div className="lg:col-span-2 rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">Envíanos un Mensaje</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="tu.email@ejemplo.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                  Tu Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="rounded-md bg-blue-700 px-6 py-2 text-white transition-colors hover:bg-blue-800"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}