
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import FalseSolutionSection from "@/components/FalseSolutionSection";
import SolutionSection from "@/components/SolutionSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import AlternativeSolutionsSection from "@/components/AlternativeSolutionsSection";
import ContactSection from "@/components/ContactSection";
import BookCallSection from "@/components/BookCallSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <ProblemSection />
        <FalseSolutionSection />
        <SolutionSection />
        <AlternativeSolutionsSection />
        <CaseStudiesSection />
        <CTASection />
        <ContactSection />
        <BookCallSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
