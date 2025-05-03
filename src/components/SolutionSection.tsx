
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="solution" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title text-center">More Money, Less Work: <br />AI-Powered Systems That Scale</h2>
        <p className="section-subtitle text-center max-w-2xl mx-auto">We build systems that deliver:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="border-2 border-transparent hover:border-firelink-purple transition-all duration-300 bg-white shadow-lg hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold gradient-text">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
