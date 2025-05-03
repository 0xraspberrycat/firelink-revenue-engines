
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import AgitationSection from "@/components/AgitationSection";
import FalseSolutionSection from "@/components/FalseSolutionSection";
import SolutionSection from "@/components/SolutionSection";
import CTASection from "@/components/CTASection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import BookCallSection from "@/components/BookCallSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <AgitationSection />
        <FalseSolutionSection />
        <SolutionSection />
        <CTASection />
        <CaseStudiesSection />
        <BookCallSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
