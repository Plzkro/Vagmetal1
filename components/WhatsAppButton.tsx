// components/WhatsAppButton.tsx

import Link from "next/link";
// Importa MessageCircle de lucide-react para el icono de WhatsApp
import { MessageCircle } from "lucide-react"; 
import { cn } from "@/lib/utils"; // Asegúrate de tener este archivo y su función

interface WhatsAppButtonProps {
  phoneNumber: string; // El número de teléfono de WhatsApp con código de país (ej: +56912345678)
  message?: string; // Mensaje predeterminado opcional
  className?: string; // Para clases de estilo adicionales
}

export default function WhatsAppButton({ phoneNumber, message, className }: WhatsAppButtonProps) {
  // Formatea el número: elimina '+' y espacios. WhatsApp usa el formato internacional sin el '+' inicial.
  const formattedPhoneNumber = phoneNumber.replace(/\+/g, '').replace(/\s/g, '');

  const whatsappLink = `https://wa.me/${formattedPhoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank" // Abre en una nueva pestaña
      rel="noopener noreferrer" // Mejora la seguridad
      className={cn(
        "fixed bottom-4 right-4 z-50 flex items-center justify-center rounded-full bg-green-500 p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-75",
        className
      )}
      aria-label="Contactar por WhatsApp"
    >
      {/* Usando MessageCircle de lucide-react */}
      <MessageCircle className="h-8 w-8 text-white" />
    </Link>
  );
}