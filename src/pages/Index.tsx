
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import FalseSolutionSection from "@/components/FalseSolutionSection";
import SolutionSection from "@/components/SolutionSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import BookCallSection from "@/components/BookCallSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div className="pt-14">
          <ProblemSection />
          <FalseSolutionSection />
          <SolutionSection />
          <CaseStudiesSection />
          <CTASection />
          <div className="bg-gray-50 border-t border-gray-100">
            <BookCallSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
