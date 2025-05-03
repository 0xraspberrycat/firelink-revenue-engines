
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
            <div key={index} className="flex items-start space-x-4">
              <div className="text-red-600 flex-shrink-0 mt-1">
                <X className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{solution.approach}</h3>
                <p className="text-gray-600 text-lg">{solution.problem}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-5 text-firelink-dark">Why These Solutions Fail</h3>
          <p className="text-gray-700 text-xl leading-relaxed">
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
