
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
    <section id="hero" className="pt-24 pb-16 md:pt-28 md:pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-heading-1 mb-4 leading-tight">
            <span className="gradient-text">Automate Your Lead Gen Agency</span> to Scale Without Chaos
          </h1>
          <p className="text-body mb-8 max-w-xl mx-auto text-gray-700">
            Firelink builds intelligent automation systems for lead generation agencies, transforming manual campaign monitoring into streamlined operations that run 24/7 without human dependency.
          </p>
          <Button onClick={scrollToBookCall} className="cta-button group">
            Book Your Strategy Call
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
