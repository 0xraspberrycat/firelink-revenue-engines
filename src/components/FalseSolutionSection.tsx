
import { X } from 'lucide-react';

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

  return (
    <section className="bg-white py-12">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center text-firelink-dark">
          The Traditional Approach Doesn't Work
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-sm">
          Most businesses try to solve operational chaos with solutions that create more problems
        </p>
        
        <div className="flex flex-col gap-4 mb-8">
          {falseSolutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm"
            >
              <div className="flex items-start space-x-2 mb-2">
                <div className="h-5 w-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <X className="h-3 w-3" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{solution.approach}</h3>
              </div>
              <p className="text-sm text-gray-600 pl-7">{solution.problem}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 shadow-sm max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold mb-2 text-center text-firelink-dark">Why These Solutions Fail</h3>
          <p className="text-sm text-gray-600 mb-4">
            These approaches simply add complexity rather than reducing it. They create more 
            dependencies on people rather than creating systems that work independently. The 
            real solution is not adding more human effort—it's building intelligent systems 
            that eliminate the need for constant human intervention.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FalseSolutionSection;
