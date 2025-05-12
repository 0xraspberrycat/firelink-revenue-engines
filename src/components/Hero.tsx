
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToBookCall = () => {
    const element = document.getElementById('book-a-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-24 md:pt-32 pb-20 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/80 pointer-events-none"></div>
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
      
      <div className="relative section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <p className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-indigo-50 text-indigo-600">
              Lead Generation Automation
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Automate Your Lead Gen</span> <br />
              Scale Without Chaos
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
              Intelligent automation systems for lead generation agencies, transforming manual campaign monitoring into streamlined operations that run 24/7 without human dependency.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button onClick={scrollToBookCall} size="lg" className="cta-button text-base font-medium group min-w-[200px]">
                Book Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-base font-medium border-2">
                View Case Studies
              </Button>
            </div>
          </div>
          
          {/* Brands trust section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-center text-muted-foreground uppercase tracking-wider mb-6">
              Trusted by lead generation agencies across industries
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <span className="text-xl font-bold text-gray-400">Outreach Insider</span>
              <span className="text-xl font-bold text-gray-400">The Deal Lab</span>
              <span className="text-xl font-bold text-gray-400">Core Conversions</span>
              <span className="text-xl font-bold text-gray-400">Spitz PR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
