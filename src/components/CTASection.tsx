
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTASection = ({ id = "cta" }: { id?: string }) => {
  const scrollToBookCall = () => {
    const element = document.getElementById('book-a-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={id} className="py-24 md:py-32 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
      <div className="section-container max-w-5xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
            Interested in More Money for Less Work?
          </h2>
          <p className="text-xl mb-12 text-white/80 max-w-2xl mx-auto font-grotesk">
            Book a 45-minute strategy call to see exactly how our AI-powered systems could transform your operational chaos into predictable revenue.
          </p>
          <Button onClick={scrollToBookCall} className="bg-white text-navy-900 hover:bg-white/90 text-base font-bold group min-w-[250px] py-6 text-lg">
            Book Your Strategy Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
