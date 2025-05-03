
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import AgitationSection from "@/components/AgitationSection";
import FalseSolutionSection from "@/components/FalseSolutionSection";
import SolutionSection from "@/components/SolutionSection";
import CTASection from "@/components/CTASection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import AlternativeSolutionsSection from "@/components/AlternativeSolutionsSection";
import BookCallSection from "@/components/BookCallSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Dynamically load Cal.com script
    const calScript = document.createElement("script");
    calScript.src = "https://app.cal.com/embed/embed.js";
    calScript.async = true;
    document.head.appendChild(calScript);

    calScript.onload = () => {
      // Initialize Cal after script is loaded
      if (window.Cal) {
        window.Cal("init", "intro", { origin: "https://cal.com" });
        window.Cal.ns.intro("inline", {
          elementOrSelector: "#my-cal-inline",
          config: { layout: "month_view" },
          calLink: "team/firelink/intro",
        });
        window.Cal.ns.intro("ui", { hideEventTypeDetails: false, layout: "month_view" });
      }
    };

    return () => {
      // Cleanup script if component unmounts
      if (calScript.parentNode) {
        calScript.parentNode.removeChild(calScript);
      }
    };
  }, []);

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
        <AlternativeSolutionsSection />
        <BookCallSection />
        <section className="py-10 bg-white">
          <div className="section-container max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Book a Time That Works for You</h2>
            <div style={{ width: "100%", height: "600px", overflow: "scroll" }} id="my-cal-inline"></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Add Cal.com types to window object
declare global {
  interface Window {
    Cal?: any;
  }
}

export default Index;
