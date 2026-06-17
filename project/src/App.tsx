import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { TrustBar } from "@/components/sections/TrustBar"
import { WhyChoose } from "@/components/sections/WhyChoose"
import { Programs } from "@/components/sections/Programs"
import { Facilities } from "@/components/sections/Facilities"
import { Membership } from "@/components/sections/Membership"
import { PersonalTraining } from "@/components/sections/PersonalTraining"
import { Transformations } from "@/components/sections/Transformations"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQ } from "@/components/sections/FAQ"
import { FreeTrial } from "@/components/sections/FreeTrial"
import { Contact } from "@/components/sections/Contact"
import { FloatingWidgets } from "@/components/FloatingWidgets"

export function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Meta */}
      <title>Fitness Plus Gym & Health Club | Premium Gym in Dhaka</title>

      {/* Layout */}
      <Header />

      <main>
        <Hero heroImage="/gym-hero.webp" />
        <TrustBar />
        <WhyChoose />
        <Programs />
        <Facilities />
        <Membership />
        <PersonalTraining trainerImage="/personal-trainer.webp" />
        <Transformations />
        <Testimonials />
        <FAQ />
        <FreeTrial />
        <Contact />
      </main>

      <Footer />
      <FloatingWidgets />
    </div>
  )
}

export default App
