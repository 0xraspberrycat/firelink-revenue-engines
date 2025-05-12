
import { X, ArrowRight, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FalseSolutionSection = () => {
  const falseSolutions = [
    {
      approach: "Hiring more team members",
      problem: "Increases management overhead and costs without fixing the system"
    },
    {
      approach: "Using disconnected tools",
      problem: "Creates data silos and requires constant human intervention"
    },
    {
      approach: "Manual campaign tracking",
      problem: "Delays issue detection and wastes campaign budget"
    }
  ];

  const scrollToBookCall = () => {
    const element = document.getElementById('book-a-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-14 grain-overlay">
      <div className="section-container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center text-gray-900 heading-grain">
          Why Traditional Approaches Fail
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Adding complexity rather than solving core issues creates more dependencies on people instead of systems that work independently.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {falseSolutions.map((solution, index) => (
            <div key={index} className="card-grain bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="text-red-500 flex-shrink-0 mt-1">
                  <X className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold ml-3 text-gray-800">{solution.approach}</h3>
              </div>
              <p className="text-gray-600">{solution.problem}</p>
            </div>
          ))}
        </div>
        
        <div className="card-grain bg-gray-50 p-7 rounded-xl border border-gray-200 mt-6">
          <h3 className="text-2xl font-semibold mb-5 text-center text-gray-900">The Real Solution</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The real solution isn't adding more human effort—it's building intelligent systems 
                that eliminate the need for constant human intervention.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Automation that works independently",
                  "Systems that run 24/7 without oversight",
                  "Scaling without adding headcount"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-gray-800 mr-3 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center justify-center">
              <Button onClick={scrollToBookCall} className="bg-gray-900 text-white hover:bg-gray-800 text-base group">
                Book Your Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FalseSolutionSection;
