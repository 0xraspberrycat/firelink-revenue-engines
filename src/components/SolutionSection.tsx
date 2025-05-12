
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Check } from 'lucide-react';

const SolutionSection = () => {
  const features = [
    {
      title: "Campaign Monitoring",
      description: "Automated systems that detect issues and pause campaigns before wasting your budget."
    },
    {
      title: "Response Filtering",
      description: "AI-powered filtering to prioritize the most promising responses from your campaigns."
    },
    {
      title: "Automated Reporting",
      description: "Generate and deliver client-ready reports without manual input."
    },
    {
      title: "KPI Dashboards",
      description: "Real-time metrics that give you complete visibility into campaign performance."
    },
    {
      title: "Client Communication",
      description: "Automated updates that keep clients informed and satisfied."
    },
    {
      title: "Lead Assignment",
      description: "Intelligent distribution of qualified responses to the right team members."
    }
  ];

  const benefits = [
    "80% reduction in campaign monitoring time",
    "Faster response to promising leads",
    "Improved client retention through consistent reporting",
    "Ability to manage more campaigns without adding headcount",
    "Clear visibility into campaign performance metrics"
  ];

  const keyDifferences = [
    "Complete team replacement at $3-7/hour equivalent cost",
    "Full ownership of your systems with zero ongoing fees",
    "Zero management required - systems run autonomously",
    "Industry-specific knowledge built into every solution",
    "Public reputation tied to your results"
  ];

  const scrollToBookCall = () => {
    const element = document.getElementById('book-a-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solution" className="py-16 bg-white border-t border-gray-100">
      <div className="section-container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
          Lead Gen Automation Engine
        </h2>
        
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-lg text-gray-600">
            Firelink builds intelligent systems specifically for lead generation agencies that automate campaign monitoring, 
            reporting, and client communication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left column - Feature Cards */}
          <div className="lg:col-span-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Complete Automation Package</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 transition-all hover:shadow-md">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-5 w-5 text-gray-800 flex-shrink-0 mr-3" />
                    <h4 className="text-lg font-bold text-gray-800">{feature.title}</h4>
                  </div>
                  <p className="text-gray-600 pl-8">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right column - Results */}
          <div className="lg:col-span-4">
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-4">
              <h3 className="text-lg font-bold mb-4 text-gray-800">Expected Results</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-gray-800 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-900 text-white rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">The Firelink Difference</h3>
              <ul className="space-y-3">
                {keyDifferences.map((difference, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-3 flex-shrink-0 mt-1" />
                    <span className="text-white/90 text-sm">{difference}</span>
                  </li>
                ))}
              </ul>
              
              <Button onClick={scrollToBookCall} className="w-full mt-6 bg-white text-gray-900 hover:bg-gray-100 group">
                Book Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
