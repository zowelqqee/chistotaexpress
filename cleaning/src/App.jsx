import Header from './components/Header'
import Hero from './components/Hero'
import ProcessSection from './components/ProcessSection'
import ServicesAccordion from './components/ServicesAccordion'
import PricingCalculator from './components/PricingCalculator'
import ChoiceSection from './components/ChoiceSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProcessSection />
        <ServicesAccordion />
        <PricingCalculator />
        <ChoiceSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
