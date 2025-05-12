
import { X } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      title: "Manual Campaign Monitoring",
      description: "Hours spent daily checking on campaign performance that should have been automated."
    },
    {
      title: "Inconsistent Client Reporting",
      description: "Late or missed client updates leading to retention issues and churn."
    },
    {
      title: "Response Filtering Overload",
      description: "Missing valuable leads buried in an avalanche of notifications."
    },
    {
      title: "Limited Team Bandwidth",
      description: "Unable to scale operations because your team is tied up with repetitive tasks."
    },
    {
      title: "No Anomaly Detection",
      description: "Missing opportunities to fix underperforming campaigns before they waste budget."
    },
    {
      title: "Scattered Key Metrics",
      description: "Valuable data spread across multiple platforms without a unified view."
    }
  ];

  return (
    <section id="problem" className="bg-black text-white py-16 md:py-20">
      <div className="section-container max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Your Lead Gen Agency is Running <span className="text-gray-300">You</span>
          </h2>
          
          <p className="text-lg text-white/70">
            Lead generation agencies face operational challenges that waste time, lose clients, and limit growth potential.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="flex flex-col w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33%-1.5rem)] p-8 bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all rounded-lg"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-black p-2 rounded-full">
                  <X className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{problem.title}</h3>
              </div>
              <p className="text-gray-300 pl-11">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
