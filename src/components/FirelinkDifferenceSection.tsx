
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from 'lucide-react';

interface Advantage {
  issue: string;
  problem: string;
  firelink: string;
}

const FirelinkDifferenceSection = () => {
  const advantages: Advantage[] = [
    {
      issue: "Generic Automation Developers",
      problem: "Lack lead gen industry knowledge, require extensive direction",
      firelink: "Deep lead gen expertise, proactive solution design"
    },
    {
      issue: "Subscription-Based Tools",
      problem: "Monthly fees that drain profits without solving your unique challenges",
      firelink: "Custom solutions built for your specific lead gen processes"
    },
    {
      issue: "Virtual Assistants",
      problem: "Inconsistent performance, limited by working hours",
      firelink: "24/7 automated systems that never sleep or make errors"
    }
  ];
  
  const keyBenefits = [
    "Industry-specific solutions for lead generation agencies",
    "Full ownership of your custom automation systems",
    "No management overhead",
    "Scales with your client base without adding costs",
    "Transforms your business from service provider to scalable system"
  ];

  const scrollToBookCall = () => {
    const element = document.getElementById('book-a-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="section-container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text text-center">
          The Firelink Difference
        </h2>
        
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto text-xl">
          Firelink offers specialized automation for lead generation agencies that generic developers or VAs cannot match.
        </p>
        
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left bg-gray-100 border border-gray-200 font-semibold text-gray-700">The Issue</th>
                <th className="p-4 text-left bg-gray-100 border border-gray-200 font-semibold text-gray-700">The Problem</th>
                <th className="p-4 text-left bg-gray-100 border border-gray-200 font-semibold text-gray-700">The Firelink Solution</th>
              </tr>
            </thead>
            <tbody>
              {advantages.map((advantage, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="p-4 border border-gray-200">{advantage.issue}</td>
                  <td className="p-4 border border-gray-200">
                    <div className="flex items-start">
                      <X className="h-5 w-5 text-red-500 flex-shrink-0 mr-2 mt-0.5" />
                      <span>{advantage.problem}</span>
                    </div>
                  </td>
                  <td className="p-4 border border-gray-200">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-0.5" />
                      <span>{advantage.firelink}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center text-firelink-dark">Key Benefits:</h3>
          <ul className="space-y-3">
            {keyBenefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <span className="bg-firelink-purple/10 p-1 rounded-full mr-3 flex-shrink-0">
                  <Check className="h-4 w-4 text-firelink-purple" />
                </span>
                <span className="text-gray-700 text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 text-center">
            <Button onClick={scrollToBookCall} className="cta-button text-base group">
              Book Your Strategy Call
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirelinkDifferenceSection;
