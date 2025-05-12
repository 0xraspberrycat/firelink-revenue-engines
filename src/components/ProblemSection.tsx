
import { X } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

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
    <section id="problem" className="bg-gray-900 text-white py-20 md:py-24">
      <div className="section-container max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Your Lead Gen Agency is Running <span className="text-gray-300">You</span>
          </h2>
          
          <p className="text-lg text-white/70">
            Lead generation agencies face operational challenges that waste time, lose clients, and limit growth potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left column - spanning 7 columns on large screens */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-gray-800/50 p-7 rounded-xl border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-5 text-gray-200">Key Issues</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {issues.slice(0, 4).map((issue, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-3 p-4 bg-gray-800/40 rounded-lg border border-gray-700/30"
                  >
                    <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base text-white/90">{issue}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 mt-4 gap-4">
                {issues.slice(4).map((issue, index) => (
                  <div 
                    key={index + 4} 
                    className="flex items-start space-x-3 p-4 bg-gray-800/40 rounded-lg border border-gray-700/30"
                  >
                    <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base text-white/90">{issue}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - spanning 5 columns on large screens */}
          <div className="lg:col-span-5">
            <div className="bg-gray-800/50 h-full p-7 rounded-xl border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-5 text-gray-200">This Costs You</h3>
              <div className="space-y-4">
                {costs.map((cost, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-3 p-4 bg-gray-800/40 rounded-lg border border-gray-700/30"
                  >
                    <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base text-white/90">{cost}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
