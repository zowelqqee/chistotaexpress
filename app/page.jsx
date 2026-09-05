import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import ProcessSection from "../components/home/ProcessSection";
import CareSection from "../components/home/CareSection";
import ServicesAccordion from "../components/home/ServicesAccordion";
import PricingCalculator from "../components/home/PricingCalculator";
import ChoiceSection from "../components/home/ChoiceSection";
import BeforeAfterSection from "../components/home/BeforeAfterSection";
import CTASection from "../components/home/CTASection";
import Footer from "../components/home/Footer";
import ContactBubble from "../components/home/ContactBubble";

export const metadata = {
  title: "Чистота Экспресс — клининг в Ставрополе",
  description:
    "Чистота Экспресс — профессиональный клининг в Ставрополе: квартиры, офисы, коммерческие объекты, калькулятор стоимости и подробное описание сервиса.",
};

export default function HomePage() {
  return (
    <div className="cleaning-scope">
      <Header />
      <main>
        <Hero />
        <ProcessSection />
        <CareSection />
        <ServicesAccordion />
        <PricingCalculator />
        <BeforeAfterSection />
        <ChoiceSection />
        <CTASection />
      </main>
      <Footer />
      <ContactBubble />
    </div>
  );
}
