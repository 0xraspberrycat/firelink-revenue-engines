
import { X } from 'lucide-react';

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
    <section id="problem" className="bg-firelink-dark text-white py-16">
      <div className="section-container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Your Lead Gen Agency is Running <span className="text-firelink-purple">You</span>
        </h2>
        
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          Lead generation agencies face operational challenges that waste time, lose clients, and limit growth potential.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-firelink-purple">Key Issues:</h3>
          <div className="space-y-4 mb-10">
            {issues.map((issue, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-3 bg-white/5 p-4 rounded-md animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-lg">{issue}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-4 text-firelink-purple">This Costs You:</h3>
          <div className="space-y-4">
            {costs.map((cost, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-3 bg-white/5 p-4 rounded-md animate-fade-in"
                style={{ animationDelay: `${(index + issues.length) * 0.15}s` }}
              >
                <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-lg">{cost}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
