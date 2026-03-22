import type { Metadata } from "next"
import HeroSection from "@/components/sections/HeroSection"
import StatsSection from "@/components/sections/StatsSection"
import ServicesPreview from "@/components/sections/ServicesPreview"
import DifferentiatorsSection from "@/components/sections/DifferentiatorsSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import FormationPreview from "@/components/sections/FormationPreview"
import CtaFinal from "@/components/sections/CtaFinal"

export const metadata: Metadata = {
  title: "Préo IA — L'IA accessible pour les PME africaines",
  description:
    "Intégrez l'intelligence artificielle dans votre entreprise avec Préo IA. Audit, automatisation, formation et accompagnement sur mesure pour les PME africaines.",
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <DifferentiatorsSection />
      <TestimonialsSection />
      <FormationPreview />
      <CtaFinal />
    </>
  )
}
