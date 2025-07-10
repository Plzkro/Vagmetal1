// components/contact-section.tsx
"use client"; // ¡IMPORTANTE! Marca este archivo como un componente de cliente para usar useEffect y el script de HubSpot.

import { useEffect } from 'react'; // Necesitamos useEffect para cargar el script de HubSpot
import Link from "next/link"; // Necesitamos importar Link para los enlaces
import { Mail, Phone, MapPin, Clock } from "lucide-react";

// Estos son los IDs proporcionados por tu amigo para el formulario de HubSpot. ¡Asegúrate de que sean exactos!
const HUB_PORTAL_ID = "50257493"; // <-- ¡CAMBIADO!
const HUB_FORM_ID = "27d30d44-2eda-4570-977c-3081850c7b0c"; // Este parece seguir igual
const HUB_REGION = "na1"; // Regiones comunes: 'na1' para Norteamérica, 'eu1' para Europa, etc. Verifica en tu código de HubSpot.


export default function ContactSection() {
  const phoneNumber = "+56934252069";
  const emailAddress = "ventas@vagmetal.cl";
  const mapAddress = "Los Manzanos 2435, La Pintana, Región Metropolitana, Chile";
  
  // **CORRECCIÓN AQUÍ**: La forma correcta de construir una URL de búsqueda de Google Maps.
  // Usamos 'http://maps.google.com/maps?q=' y la interpolación correcta con ${}
  const googleMapsUrl = `http://maps.google.com/maps?q=${encodeURIComponent(mapAddress)}`;


  // Este useEffect se encarga de cargar el script del formulario de HubSpot.
  useEffect(() => {
    // Asegúrate de que este código solo se ejecute en el entorno del navegador (lado del cliente)
    if (typeof window !== 'undefined') {
      // Verifica si el script principal de HubSpot Forms ya está cargado para evitar duplicados.
      // Lo buscamos por su ID 'hs-script-loader'.
      if (!document.getElementById("hs-script-loader")) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.id = "hs-script-loader"; // Asigna un ID para verificar fácilmente su presencia
        script.async = true; // Carga asíncronamente
        script.defer = true; // Retrasa la ejecución hasta que se analice el HTML
        // Usa la URL exacta del script proporcionada por HubSpot, que incluye el ID del portal.
        script.src = `https://js.hsforms.net/forms/embed/${HUB_PORTAL_ID}.js`;
        document.body.appendChild(script); // Añade el script al cuerpo del documento
      }
    }
  }, []); // El array de dependencias vacío asegura que este efecto se ejecute solo una vez después del renderizado inicial.

  return (
    <section className="w-full bg-gray-100 py-16" id="contacto">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 sm:text-4xl">Contáctanos</h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Sección de Información de Contacto */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-blue-700 mt-1" />
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

          {/* Contenedor del Formulario de Contacto de HubSpot */}
          <div className="lg:col-span-2 rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">Envíanos un Mensaje</h3>
            {/* Aquí es donde HubSpot inyectará su formulario. */}
            {/* El script de HubSpot busca automáticamente un div con la clase 'hs-form-frame' y estos atributos 'data-'. */}
            <div
              className="hs-form-frame"
              data-region={HUB_REGION}
              data-form-id={HUB_FORM_ID}
              data-portal-id={HUB_PORTAL_ID}
            >
              {/* Este mensaje aparecerá brevemente mientras el formulario de HubSpot se carga. */}
              <p>Cargando formulario de contacto...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}