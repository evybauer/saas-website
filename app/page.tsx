'use client'

import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { SocialProof } from './components/SocialProof'
import { FeatureShowcase } from './components/FeatureShowcase'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { ExitIntentPopup } from './components/ExitIntentPopup'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <HeroSection />
        <SocialProof />
        <FeatureShowcase />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <About />
        <Footer />
      </main>
      <ExitIntentPopup />
    </>
  )
} 