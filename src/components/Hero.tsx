
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Turn Your Expertise Into <span className="gradient-text">Systems That Run Without You</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
            We build revenue engines that operate without you—freeing you from operational chaos while increasing your profits.
          </p>
          <Button asChild className="cta-button text-lg group">
            <a href="#book-call">
              Book Your Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
