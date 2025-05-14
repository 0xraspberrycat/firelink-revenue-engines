
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
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
          The Reality of "Cheap" Alternatives
        </h2>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <div className="text-center px-8 py-6 border-b border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800">
              The Fiverr/Upwork "Expert" Scam
            </h3>
            <p className="text-gray-600 mt-2">
              $2,000 later with no real expertise - just ChatGPT copies while you lose a month of potential revenue
            </p>
          </div>
          
          <div className="w-full p-6">
            <img 
              src="/lovable-uploads/b65b326d-51f7-489b-b148-4905f9d1b92e.png" 
              alt="Twitter post showing Fiverr/Upwork expert scam" 
              className="w-full h-auto object-cover mx-auto max-h-[500px]"
              style={{ objectFit: 'contain' }}
            />
          </div>
          
          <div className="p-8 text-center">
            <h4 className="text-lg font-bold mb-4 text-gray-800">The FireLink Difference:</h4>
            <ul className="max-w-md mx-auto mb-6 space-y-2">
              <li className="flex items-start justify-center">
                <Check className="h-5 w-5 text-gray-800 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-left">Complete ownership of your custom systems</span>
              </li>
              <li className="flex items-start justify-center">
                <Check className="h-5 w-5 text-gray-800 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-left">No management overhead or ongoing fees</span>
              </li>
            </ul>
            
            <Button onClick={scrollToBookCall} className="bg-black text-white hover:bg-gray-800 text-base group px-8">
              Book Your Strategy Call
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternativeSolutionsSection;
