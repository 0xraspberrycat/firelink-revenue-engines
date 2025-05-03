
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTASection = ({ id = "cta" }: { id?: string }) => {
  return (
    <section id={id} className="py-6 bg-firelink-dark text-white">
      <div className="section-container max-w-4xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Interested in More Money for Less Work?
          </h2>
          <p className="text-md mb-4 opacity-90 max-w-xl mx-auto">
            Book a 45-minute strategy call to see exactly how our AI-powered systems could transform your operational chaos into predictable revenue.
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

export default CTASection;
