import Hero from "@/components/hero"
import TabNavigation from "@/components/tab-navigation"
import ContactSection from "@/components/contact-section"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <TabNavigation />
      <ContactSection />
      <Testimonials />
    </main>
  )
}
