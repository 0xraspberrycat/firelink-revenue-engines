
import { Check } from 'lucide-react';

const AgitationSection = () => {
  const costs = [
    "Strategy Sessions interrupted by emergencies",
    "Tens of hours each week on non-revenue generating work",
    "Crucial sales and client information lost in communication",
    "Deals dropping off between systems and handoffs",
    "Waking up to missed payments and contract problems",
    "The constant anxiety of knowing you can't truly disconnect",
    "A business that demands your presence instead of building your wealth"
  ];

  return (
    <section className="bg-gray-100 py-14">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text text-center">What This Really Costs You</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {costs.map((cost, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-2 bg-white p-3 rounded-lg shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-5 w-5 bg-gradient-to-r from-firelink-purple to-firelink-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="text-sm text-gray-700">{cost}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgitationSection;
