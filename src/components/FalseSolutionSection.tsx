
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
        
        <div className="flex flex-col gap-6 mb-10">
          {falseSolutions.map((solution, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="text-red-600 flex-shrink-0 mt-1">
                <X className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{solution.approach}</h3>
                <p className="text-gray-600">{solution.problem}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold mb-4 text-center text-firelink-dark">Why These Solutions Fail</h3>
          <p className="text-gray-600">
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
