
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
    <section id="problem" className="bg-firelink-dark text-white py-24">
      <div className="section-container max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Your Lead Gen Agency is Running <span className="text-firelink-purple">You</span>
          </h2>
          
          <p className="text-xl text-white/70">
            Lead generation agencies face operational challenges that waste time, lose clients, and limit growth potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-firelink-purple flex items-center gap-3">
              <span className="inline-block w-8 h-0.5 bg-firelink-purple"></span>
              Key Issues
            </h3>
            <div className="space-y-4">
              {issues.map((issue, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <X className="h-6 w-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-white/80">{issue}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-firelink-purple flex items-center gap-3">
              <span className="inline-block w-8 h-0.5 bg-firelink-purple"></span>
              This Costs You
            </h3>
            <div className="space-y-4">
              {costs.map((cost, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 animate-fade-in"
                  style={{ animationDelay: `${(index + issues.length) * 0.15}s` }}
                >
                  <X className="h-6 w-6 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-white/80">{cost}</p>
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
