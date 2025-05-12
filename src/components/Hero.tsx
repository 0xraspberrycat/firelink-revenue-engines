
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
    <section id="hero" className="relative pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      
      <div className="relative section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-left md:text-center mb-10 md:mb-14">
            <h1 className="premium-heading mb-6 text-gray-900">
              <span className="gradient-text">Automate Your Lead Gen</span> <br className="hidden sm:block" />
              Scale Without Chaos
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Intelligent automation systems for lead generation agencies, transforming manual campaign monitoring into streamlined operations that run 24/7 without human dependency.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button onClick={scrollToBookCall} size="lg" className="premium-btn group w-full sm:w-auto">
                Book Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="premium-btn-outline w-full sm:w-auto">
                View Case Studies
              </Button>
            </div>
          </div>
          
          {/* Brands trust section */}
          <div className="mt-16 pt-10 border-t border-gray-100">
            <p className="text-sm text-center text-gray-400 uppercase tracking-wider mb-6 font-medium">
              Trusted by lead generation agencies across industries
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
              <span className="text-lg font-bold text-gray-300">Outreach Insider</span>
              <span className="text-lg font-bold text-gray-300">The Deal Lab</span>
              <span className="text-lg font-bold text-gray-300">Core Conversions</span>
              <span className="text-lg font-bold text-gray-300">Spitz PR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
