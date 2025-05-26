
import { X } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      title: "Sales Teams Drowning in Admin Tasks",
      description: "Closers spend 70% of their time on non-revenue generating administrative work instead of closing deals."
    },
    {
      title: "Leads Falling Through the Cracks",
      description: "Low show rates and poor follow-up sequences cause you to lose money on qualified prospects."
    },
    {
      title: "Flying Blind Without Data",
      description: "Inaccurate reporting and scattered metrics make it impossible to make informed business decisions."
    }
  ];

  return (
    <section id="problem" className="bg-black text-white py-16 md:py-20">
      <div className="section-container max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Your Sales Process is <span className="text-gray-300">Costing You Money</span>
          </h2>
          
          <p className="text-lg text-white/70">
            Manual sales processes lead to inefficiencies, lost leads, and reduced revenue.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="flex flex-col w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33%-1.5rem)] p-8 bg-transparent border border-gray-700 hover:border-gray-500 transition-all rounded-lg"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-transparent p-2 rounded-full border border-gray-700">
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
