
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-28 md:pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Turn Your Expertise Into <span className="gradient-text">Systems That Run Without You</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto">
            We build revenue engines for <strong>Consultants and Agencies</strong> that operate without you—freeing you from operational chaos while increasing your profits.
          </p>
          <Button asChild className="cta-button text-base group">
            <a href="#book-call">
              Book Your Strategy Call
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
