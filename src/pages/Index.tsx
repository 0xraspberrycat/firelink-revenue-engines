
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import FalseSolutionSection from "@/components/FalseSolutionSection";
import SolutionSection from "@/components/SolutionSection";
import LeadGenOfferSection from "@/components/LeadGenOfferSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FirelinkDifferenceSection from "@/components/FirelinkDifferenceSection";
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
        <CTASection />
        <AlternativeSolutionsSection />
        <LeadGenOfferSection />
        <CaseStudiesSection />
        <FirelinkDifferenceSection />
        <ContactSection />
        <BookCallSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
