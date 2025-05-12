
import { Check, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const AlternativeSolutionsSection = () => {
  const scrollToBookCall = () => {
    const element = document.getElementById('book-a-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="bg-gray-50 py-16">
      <div className="section-container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900 heading-grain">
          The Reality of "Cheap" Alternatives
        </h2>
        
        <div className="card-grain bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                The Fiverr/Upwork "Expert" Scam
              </h3>
              
              <p className="text-gray-700 mb-6">
                Imagine paying $2,000 to someone who promises to solve your problem, only to discover they've just copied and pasted from ChatGPT with no real expertise - while you lose a month of potential revenue.
              </p>
              
              <h4 className="text-lg font-bold mb-3 text-gray-800">The Firelink Difference:</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gray-800 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Complete ownership of your custom systems</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gray-800 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">No management overhead or ongoing fees</span>
                </li>
              </ul>
              
              <Button onClick={scrollToBookCall} className="w-full mt-2 bg-gray-900 text-white hover:bg-gray-800">
                Book Your Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src="/lovable-uploads/e382e743-77c8-414f-a21a-163ef0498d18.png" 
                alt="Twitter post showing Fiverr/Upwork expert scam" 
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternativeSolutionsSection;
