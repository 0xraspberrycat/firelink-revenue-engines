
import { Check, X } from 'lucide-react';
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
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
          The Reality of "Cheap" Alternatives
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* The Fiverr/Upwork Expert Scam */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="mr-4 mt-1">
                <X className="h-6 w-6 text-red-500" />
              </div>
              <h4 className="font-bold text-gray-800 text-xl">The Fiverr/Upwork "Expert" Scam</h4>
            </div>
            
            <div className="ml-10 space-y-4">
              <p className="text-gray-700">
                Imagine paying $2,000 to someone who promises to solve your problem, only to discover they've just copied and pasted from ChatGPT and have no real expertise.
              </p>
              
              <p className="text-gray-700">
                That's 20 business days (4 weeks!) and $2,000 for something our team implements in 24-48 hours. How much revenue are you losing during that <strong>month of waiting</strong>?
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg my-4 border border-gray-100">
                <img 
                  src="/lovable-uploads/e382e743-77c8-414f-a21a-163ef0498d18.png" 
                  alt="Twitter post showing Fiverr/Upwork expert scam" 
                  className="w-full rounded-lg"
                />
              </div>
              
              <p className="text-gray-700 font-medium">
                The worst part? You don't even OWN what you paid for. Someone else retains ownership and control of the systems your business depends on.
              </p>
            </div>
          </div>
          
          {/* The Management Nightmare */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="mr-4 mt-1">
                <X className="h-6 w-6 text-red-500" />
              </div>
              <h4 className="font-bold text-gray-800 text-xl">The Management Nightmare</h4>
            </div>
            
            <div className="ml-10 space-y-4">
              <p className="text-gray-700">
                Imagine spending hours every week explaining the same basic concepts to developers who never quite "get" your business.
              </p>
              
              <p className="text-gray-700">
                Offshore teams require constant supervision and direction. They don't understand your industry context or your unique business needs. What started as a time-saving solution becomes a second job.
              </p>
              
              <p className="text-gray-700 mb-4">
                What's your hourly rate? Multiply that by the countless hours you'll spend managing offshore developers who don't understand your business—that's the real cost of "cheap" implementation.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h4 className="text-lg font-bold mb-4 text-gray-800">The Firelink Difference:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-gray-800 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Complete ownership of your custom automation systems</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-gray-800 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">No management overhead or ongoing fees</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-gray-800 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Deep lead gen expertise built into every solution</span>
                  </li>
                </ul>
                
                <Button onClick={scrollToBookCall} className="w-full mt-6 bg-gray-900 text-white hover:bg-gray-800">
                  Book Your Strategy Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternativeSolutionsSection;
