
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
    <section id="solution" className="py-14 bg-white">
      <div className="section-container max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 gradient-text text-center">More Money, Less Work: <br />AI-Powered Systems That Scale</h2>
        <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto text-sm">We build systems that deliver:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="border border-gray-100 hover:border-firelink-purple transition-all duration-300 bg-white shadow-sm hover:shadow-md animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-2 pt-4">
                <CardTitle className="text-base font-bold gradient-text">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
