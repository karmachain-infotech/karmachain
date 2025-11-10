import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ClientLogos } from "@/components/client-logos"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { IndustriesSection } from "@/components/industries-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { WhyKarmachainSection } from "@/components/why-Karmachain-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ClientLogos />
      <ServicesSection />
      <PortfolioSection />
      <IndustriesSection />
      <TechnologiesSection />
      <WhyKarmachainSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
