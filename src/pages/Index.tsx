
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
      <main className="pt-14">
        <Hero />
        <ProblemSection />
        <FalseSolutionSection />
        <SolutionSection />
        <AlternativeSolutionsSection />
        <CaseStudiesSection />
        <CTASection />
        <div className="bg-gray-50 border-t border-gray-100">
          <BookCallSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
