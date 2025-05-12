
import { X } from 'lucide-react';
import { Card } from "@/components/ui/card";

const ProblemSection = () => {
  const issues = [
    "Manual campaign monitoring consuming hours of your day",
    "Missed responses from potential leads due to lack of filtering",
    "Poor client reporting leading to retention issues",
    "Inability to detect and stop failing campaigns automatically",
    "Scattered KPI tracking across multiple platforms",
    "Team overwhelmed by repetitive, low-value tasks"
  ];

  const costs = [
    "Lost revenue from campaigns that should have been paused",
    "Valuable team time spent on manual reporting",
    "Client churn due to inconsistent communication",
    "Inability to scale beyond your personal bandwidth",
    "Limited focus on strategy and business development"
  ];

  return (
    <section id="problem" className="bg-gray-900 text-white py-16 md:py-20 grain-overlay">
      <div className="section-container max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight heading-grain">
            Your Lead Gen Agency is Running <span className="text-gray-300">You</span>
          </h2>
          
          <p className="text-lg text-white/70">
            Lead generation agencies face operational challenges that waste time, lose clients, and limit growth potential.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {/* Top row - 3 cards */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            {issues.slice(0, 3).map((issue, index) => (
              <div 
                key={index} 
                className="card-grain flex flex-col p-5 bg-gray-800/40 rounded-lg border border-gray-700/30"
              >
                <div className="flex items-start space-x-3 mb-2">
                  <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white/90">{issue}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row - 3 cards */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            {issues.slice(3, 6).map((issue, index) => (
              <div 
                key={index + 3} 
                className="card-grain flex flex-col p-5 bg-gray-800/40 rounded-lg border border-gray-700/30"
              >
                <div className="flex items-start space-x-3 mb-2">
                  <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white/90">{issue}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row - 2 wider cards */}
          <div className="card-grain p-6 bg-gray-800/40 rounded-lg border border-gray-700/30">
            <h3 className="text-xl font-semibold mb-4 text-gray-200">This Costs You</h3>
            <div className="space-y-4">
              {costs.slice(0, 3).map((cost, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-white/90">{cost}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-grain p-6 bg-gray-800/40 rounded-lg border border-gray-700/30">
            <h3 className="text-xl font-semibold mb-4 text-gray-200">Impact On Growth</h3>
            <div className="space-y-4">
              {costs.slice(3).map((cost, index) => (
                <div key={index + 3} className="flex items-start space-x-3">
                  <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-white/90">{cost}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
