import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">VAGMETAL SPA</h3>
            <p className="mb-4 text-gray-400">Innovación y Tecnología al Servicio de la Industria Chilena</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
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
              <li className="text-gray-400">Fabricación de Estructuras Metálicas</li>
              <li className="text-gray-400">Comercialización de Herramientas</li>
              <li className="text-gray-400">Fabricación de Carros</li>
              <li className="text-gray-400">Proyectos Personalizados</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MapPin className="mr-2 h-5 w-5 text-blue-500" />
                Av. Ejemplo 1234, Santiago, Chile
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="mr-2 h-5 w-5 text-blue-500" />
                +56 9 1234 5678
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="mr-2 h-5 w-5 text-blue-500" />
                contacto@vagmetal.cl
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} VAGMETAL SPA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
