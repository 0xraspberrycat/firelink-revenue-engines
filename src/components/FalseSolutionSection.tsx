
import { X, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FalseSolutionSection = () => {
  const falseSolutions = [
    {
      approach: "Adding more team members",
      problem: "Increases management complexity and costs without solving the core issues"
    },
    {
      approach: "Using multiple disconnected tools",
      problem: "Creates data silos and requires constant human intervention to sync information"
    },
    {
      approach: "Manual process documentation",
      problem: "Quickly becomes outdated and relies on perfect execution by team members"
    }
  ];

  const scrollToBookCall = () => {
    const element = document.getElementById('book-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-14">
      <div className="section-container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-firelink-dark">
          The Traditional Approach Doesn't Work
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto text-xl">
          Most businesses try to solve operational chaos with solutions that create more problems
        </p>
        
        <div className="flex flex-col gap-8 mb-12">
          {falseSolutions.map((solution, index) => (
            <div key={index} className="flex items-start space-x-4 bg-gray-50 p-5 rounded-md animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="text-red-500 flex-shrink-0 mt-1">
                <X className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{solution.approach}</h3>
                <p className="text-gray-600 text-lg">{solution.problem}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-firelink-light p-8 rounded-lg border-l-4 border-firelink-purple text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-5 text-firelink-dark">Why These Solutions Fail</h3>
          <p className="text-gray-700 text-xl leading-relaxed">
            These approaches simply add complexity rather than reducing it. They create more 
            dependencies on people rather than creating systems that work independently. The 
            real solution is not adding more human effort—it's building intelligent systems 
            that eliminate the need for constant human intervention.
          </p>
          
          <div className="mt-8 text-center">
            <Button onClick={scrollToBookCall} className="bg-firelink-dark text-white hover:bg-firelink-dark/90 text-base group">
              Book Your Strategy Call
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FalseSolutionSection;
