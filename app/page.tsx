import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Screenshots from '@/components/Screenshots'
import Testimonials from '@/components/Testimonials'
import Benefits from '@/components/Benefits'
import About from '@/components/About'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <Features />
      <HowItWorks />
      <Screenshots />
      <Testimonials />
      <Benefits />
      <About />
      <FAQ />
      <Footer />
    </main>
  )
}
