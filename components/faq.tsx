// components/faq.tsx
"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

// Datos de ejemplo para las preguntas frecuentes
const faqData = [
  {
    question: "¿Qué tipo de estructuras metálicas fabrican?",
    answer: "Diseñamos, fabricamos y montamos una amplia gama de estructuras metálicas, incluyendo galpones industriales, naves de almacenamiento, estructuras de carga personalizadas, racks mezzanina, sistemas monorriel, carros de transporte, protectores metálicos y soportes especializados para la industria, minería y construcción."
  },
  {
    question: "¿Ofrecen servicios de diseño y asesoría?",
    answer: "Sí, en VAGMETAL SPA no solo fabricamos, sino que también ofrecemos servicios completos de diseño estructural y asesoría en la selección de materiales y técnicas de soldadura avanzadas para asegurar la solución metálica más eficiente y segura para su proyecto."
  },
  {
    question: "¿Cuál es el proceso para solicitar una cotización?",
    answer: "Puede solicitar una cotización a través de nuestra sección de Contacto, llamándonos o enviándonos un correo electrónico. Le pediremos detalles de su proyecto o el tipo de producto que necesita para poder ofrecerle una propuesta ajustada a sus requerimientos."
  },
  {
    question: "¿Sus productos tienen garantía?",
    answer: "Sí, todos nuestros productos y trabajos de montaje están respaldados por nuestra garantía de calidad y durabilidad, diseñada para darle la tranquilidad que necesita. Estamos comprometidos con la excelencia y la satisfacción del cliente."
  },
  {
    question: "¿Trabajan con proyectos a medida?",
    answer: "Absolutamente. Nos especializamos en soluciones integrales y personalizadas, adaptándonos meticulosamente a las exigencias específicas de cada cliente y proyecto, desde el diseño hasta el montaje final."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-50 py-16" id="faq"> {/* Añadido id="faq" para el anclaje */}
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 sm:text-4xl">Preguntas Frecuentes</h2>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="rounded-lg border border-gray-200 bg-white shadow-sm">
              <button
                className="flex w-full items-center justify-between p-5 text-left text-lg font-semibold text-gray-800 transition-colors hover:text-blue-700"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                {item.question}
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div id={`faq-content-${index}`} className="px-5 pb-5 text-gray-600 animate-in fade-in slide-in-from-top-4">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}