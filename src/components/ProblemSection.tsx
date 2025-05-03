
import { Check } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    "Appointment setters require constant training and monitoring",
    "Closers are inconsistent and need continuous management",
    "Financial and legal documentation is scattered across systems",
    "Client information gets lost between team handoffs",
    "Meetings that could be automated consume your calendar"
  ];

  return (
    <section id="problem" className="bg-firelink-dark text-white py-14">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Your Business is Running You <span className="text-firelink-purple">(Not the Other Way Around)</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-3">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-2 bg-white/5 p-3 rounded-md animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Check className="h-5 w-5 text-firelink-purple flex-shrink-0 mt-0.5" />
                <p className="text-base">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
