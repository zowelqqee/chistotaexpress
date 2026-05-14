import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import ProcessSection from "../components/home/ProcessSection";
import ServicesAccordion from "../components/home/ServicesAccordion";
import PricingCalculator from "../components/home/PricingCalculator";
import ChoiceSection from "../components/home/ChoiceSection";
import CTASection from "../components/home/CTASection";
import Footer from "../components/home/Footer";

export const metadata = {
  title: "Non-Stop — премиальный клининг в Ереване",
  description:
    "Премиальный клининг в Ереване: квартиры, офисы, коммерческие объекты, калькулятор стоимости и подробное описание сервиса.",
};

export default function HomePage() {
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
  );
}
