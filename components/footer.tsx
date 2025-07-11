// components/footer.tsx

import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Linkedin } from "lucide-react"

export default function Footer() {
  const whatsappNumber = "+56934252069" // Tu número de teléfono
  const whatsappMessage = "Hola, me gustaría más información sobre VAGMETAL SPA." // Mensaje predefinido
  const emailAddress = "ventas@vagmetal.cl" // Tu dirección de correo

  // URL para WhatsApp: phone number should be without '+' or any special chars
  const whatsappHref = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(whatsappMessage)}`
  const telHref = `tel:${whatsappNumber}` // Para llamar directamente

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">VAGMETAL SPA</h3>
            {/* CAMBIO: Descripción de la empresa más precisa */}
            <p className="mb-4 text-gray-400">
              Especialistas en fabricación, montaje, arme y desarme de estructuras metálicas a medida para la industria.
            </p>
            <div className="flex space-x-4">
              {/* Botón de Facebook */}
              <Link href="https://www.facebook.com/profile.php?id=100090390775979" className="text-gray-400 transition-colors hover:text-white" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>

              {/* Botón de Instagram */}
              <Link href="https://www.instagram.com/vagmetal/" className="text-gray-400 transition-colors hover:text-white" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
  <h3 className="mb-4 text-lg font-bold">Enlaces Rápidos</h3>
  <ul className="space-y-2">
    <li>
      <Link href="/" className="text-gray-400 transition-colors hover:text-white">
        Inicio
      </Link>
    </li>
    <li>
      <Link href="#servicios" className="text-gray-400 transition-colors hover:text-white">
        Servicios
      </Link>
    </li>
    <li> {/* NUEVO: Enlace a FAQ */}
      <Link href="#faq" className="text-gray-400 transition-colors hover:text-white">
        FAQ
      </Link>
    </li>
    <li>
      <Link href="#contacto" className="text-gray-400 transition-colors hover:text-white">
        Contacto
      </Link>
    </li>
  </ul>
</div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Servicios</h3>
            <ul className="space-y-2">
              {/* CAMBIO: Lista de servicios actualizada */}
              <li className="text-gray-400">Fabricación de Estructuras Metálicas</li>
              <li className="text-gray-400">Montaje de Estructuras Metálicas</li>
              <li className="text-gray-400">Arme y Desarme de Estructuras</li> {/* Nuevo */}
              <li className="text-gray-400">Proyectos Estructurales a Medida, tales como soportes, carros de carga, y más.</li> {/* Más general */}
              {/* Eliminado: Comercialización de Herramientas */}
              {/* Eliminado: Fabricación de Carros (ya cubierto por "Proyectos Estructurales a Medida" si aplica) */}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MapPin className="mr-2 h-5 w-5 text-blue-500" />
                Los Manzanos 2435, 8840112 La Pintana, Región Metropolitana
              </li>
              {/* Enlace para WhatsApp o llamada */}
              <li className="flex items-center text-gray-400">
                <Phone className="mr-2 h-5 w-5 text-blue-500" />
                {/* Opción 1: Enlace directo a WhatsApp */}
                <Link href={whatsappHref} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Enviar mensaje de WhatsApp">
                  {whatsappNumber} (WhatsApp)
                </Link>
              </li>
              {/* Enlace para correo electrónico */}
              <li className="flex items-center text-gray-400">
                <Mail className="mr-2 h-5 w-5 text-blue-500" />
                <Link href={`mailto:${emailAddress}`} className="hover:text-white transition-colors" aria-label="Enviar correo electrónico">
                  {emailAddress}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} VAGMETAL SPA. Todos los derechos reservados.
            <br />
            Desarrollado por{" "}
            <Link
              href="https://www.linkedin.com/in/raul-vergara-leiva/"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium inline-flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Raúl Vergara <Linkedin className="inline-block h-4 w-4" />
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}