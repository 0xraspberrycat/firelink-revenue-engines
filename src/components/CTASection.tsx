
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTASection = ({ id = "cta" }: { id?: string }) => {
  return (
    <section id={id} className="py-20 bg-gradient-to-r from-firelink-dark to-firelink-secondary text-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in More Money for Less Work?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Book a 45-minute strategy call to see exactly how our AI-powered systems could transform your operational chaos into predictable revenue.
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

export default CTASection;
