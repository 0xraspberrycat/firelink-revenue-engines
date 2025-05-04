
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const AgitationSection = () => {
  const scrollToBookCall = () => {
    const element = document.getElementById('book-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gray-100 py-14">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-text text-center">What This Really Costs You</h2>
        
        <div className="space-y-6 max-w-3xl mx-auto mb-10">
          <p className="text-gray-700 leading-relaxed text-lg">
            Your business is bleeding time, money, and opportunity. Strategy sessions get interrupted by emergencies. 
            You spend tens of hours each week on non-revenue generating work. Crucial sales and client information gets 
            lost in communication. Deals drop off between systems and handoffs.
          </p>
          
          <p className="text-gray-700 leading-relaxed text-lg">
            You wake up to missed payments and contract problems. There's a constant anxiety of knowing you can't truly disconnect. 
            And perhaps worst of all, you've built a business that demands your presence <span className="font-bold">instead of building your wealth</span>.
          </p>
          
          <p className="text-gray-700 leading-relaxed text-lg">
            Each of these problems compounds the others, creating a cycle of chaos that keeps you trapped in day-to-day 
            operations instead of focusing on growth and strategy. The real cost isn't just the immediate problems—it's 
            the opportunity cost of what you could be doing instead.
          </p>

          <p className="text-gray-800 font-bold text-lg mt-8">
            At the end of the day, we care about one thing: <span className="gradient-text">your bottom line</span>. We measure our 
            impact by just two metrics: <span className="underline">SPEED</span> and <span className="underline">MONEY</span>. 
            Our success is tied directly to the revenue we generate for you—not fancy tech implementations or flashy features.
          </p>
        </div>

        <div className="text-center">
          <Button onClick={scrollToBookCall} className="bg-firelink-dark text-white hover:bg-firelink-dark/90 text-base group">
            BOOK YOUR STRATEGY CALL
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AgitationSection;
