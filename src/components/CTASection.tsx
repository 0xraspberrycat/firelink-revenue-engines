
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
    <section id={id} className="py-20 md:py-24 bg-black text-white">
      <div className="section-container max-w-5xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight">
            Ready to Automate Your Sales Process?
          </h2>
          <p className="text-xl mb-10 text-white/80 max-w-2xl mx-auto">
            Book a 45-minute strategy call to discover how our AI-powered systems can transform your sales operations into a fully automated revenue machine.
          </p>
          <Button onClick={scrollToBookCall} className="bg-white text-black hover:bg-white/90 text-base font-bold group min-w-[250px] py-6 text-lg">
            Book Your Free Strategy Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
