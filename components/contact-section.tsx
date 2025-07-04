// components/contact-section.tsx

import Link from "next/link"; // Necesitamos importar Link para los enlaces
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  const phoneNumber = "+56934252069";
  const emailAddress = "vagmetal.alemany@gmail.com";
  // Enlace a Google Maps para la dirección exacta
  const mapAddress = "Los Manzanos 2435, La Pintana, Región Metropolitana, Chile";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapAddress)}`;


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
                {/* CAMBIO: Dirección ahora es un enlace a Google Maps */}
                <Link
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-700 transition-colors underline"
                  aria-label="Ver dirección en Google Maps"
                >
                  Los Manzanos 2435, 8840112 La Pintana, Región Metropolitana, Chile
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-blue-700" />
                {/* CAMBIO: Teléfono ahora es un enlace clicable */}
                <Link
                  href={`tel:${phoneNumber}`}
                  className="text-gray-700 hover:text-blue-700 transition-colors underline"
                  aria-label="Llamar a VAGMETAL SPA"
                >
                  {phoneNumber}
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-blue-700" />
                {/* CAMBIO: Correo ahora es un enlace clicable */}
                <Link
                  href={`mailto:${emailAddress}`}
                  className="text-gray-700 hover:text-blue-700 transition-colors underline"
                  aria-label="Enviar correo a VAGMETAL SPA"
                >
                  {emailAddress}
                </Link>
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

          {/* Formulario de Contacto (mantengo la estructura actual) */}
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
  );
}