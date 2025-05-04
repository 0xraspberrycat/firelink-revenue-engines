
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import AgitationSection from "@/components/AgitationSection";
import FalseSolutionSection from "@/components/FalseSolutionSection";
import SolutionSection from "@/components/SolutionSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import AlternativeSolutionsSection from "@/components/AlternativeSolutionsSection";
import BookCallSection from "@/components/BookCallSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <ProblemSection />
        <AgitationSection />
        <FalseSolutionSection />
        <SolutionSection />
        <CaseStudiesSection />
        <AlternativeSolutionsSection />
        <BookCallSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
