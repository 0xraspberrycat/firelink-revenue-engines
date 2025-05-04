
import { X } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    "Appointment setters require constant training and monitoring",
    "Closers are inconsistent and need continuous management",
    "Financial and legal documentation is scattered across systems",
    "Client information gets lost between team handoffs",
    "Meetings that could be automated consume your calendar"
  ];

  return (
    <section id="problem" className="bg-firelink-dark text-white py-16">
      <div className="section-container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Your Business is Running You <span className="text-firelink-purple">(Not the Other Way Around)</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-3 bg-white/5 p-4 rounded-md animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-lg">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
