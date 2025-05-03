
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const SolutionSection = () => {
  const solutions = [
    {
      title: "Wake Up to New Qualified Appointments",
      description: "Leads are responded to, nurtured, and booked while you sleep"
    },
    {
      title: "Effortless Knowledge Transfer",
      description: "Every sales and onboarding call is AI-transcribed so nothing falls through cracks"
    },
    {
      title: "Deals That Close Themselves",
      description: "Proposals generate automatically at the moment of highest interest"
    },
    {
      title: "Revenue That Grows While You Sleep",
      description: "Upsell triggers identify perfect moments to offer additional services, increasing lifetime value without extra effort"
    },
    {
      title: "Seamless Client Experience",
      description: "Handoffs between team members happen flawlessly with complete context preservation"
    },
    {
      title: "Freedom From Payment Chasing",
      description: "Systems that secure payments and reduce defaults without your involvement"
    },
    {
      title: "Total Business Visibility",
      description: "Command centers that alert you to problems before they affect your bottom line"
    }
  ];

  return (
    <section id="solution" className="py-16 bg-gray-50">
      <div className="section-container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-text text-center">More Money, Less Work: <br />AI-Powered Systems That Scale</h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto text-xl">We build systems that deliver:</p>
        
        <div className="bg-white p-10 rounded-lg max-w-5xl mx-auto shadow-sm border border-gray-100">
          <div className="space-y-10">
            {solutions.map((solution, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-bold gradient-text mb-3">{solution.title}</h3>
                <p className="text-gray-600 text-lg">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
