// app/page.tsx

import Hero from "@/components/hero"
import TabNavigation from "@/components/tab-navigation"
import ContactSection from "@/components/contact-section"
import FAQ from "@/components/faq" // Asegúrate de que esta línea esté activa y no comentada

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <TabNavigation />
      <ContactSection />
      <FAQ />
    </main>
  )
}