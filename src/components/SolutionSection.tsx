
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from 'lucide-react';

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
    },
    {
      title: "Business Intelligence",
      description: "Proactive alerts about campaign performance and improvement opportunities."
    }
  ];

  const traditional = {
    approach: "Hire virtual assistants for campaign monitoring",
    issues: [
      "High training and management costs",
      "Human error and inconsistency",
      "Limited by working hours",
      "Constant turnover"
    ]
  };

  const firelink = {
    approach: "Automated systems that work 24/7 for a fraction of the cost",
    benefits: [
      "No management required",
      "Consistent, error-free performance",
      "Works around the clock",
      "Scales with your business"
    ]
  };

  const scrollToBookCall = () => {
    const element = document.getElementById('book-a-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solution" className="py-16 bg-gray-50">
      <div className="section-container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">
          Lead Gen Automation Engine
        </h2>
        
        <div className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          <p className="text-xl mb-6">
            Firelink builds intelligent systems specifically for lead generation agencies that automate campaign monitoring, reporting, and client communication.
          </p>
        </div>
        
        <h3 className="text-2xl font-semibold mb-6 text-center">Key Features:</h3>
        
        <div className="bg-white p-8 rounded-lg max-w-5xl mx-auto shadow-sm border border-gray-100 mb-12">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="animate-fade-in p-4 border-b border-gray-100 last:border-b-0" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mr-3" />
                  <h3 className="text-xl font-bold gradient-text">{feature.title}</h3>
                </div>
                <div className="pl-9">
                  <p className="text-gray-700 text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-6 text-center">Comparison:</h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h4 className="text-xl font-semibold mb-4 text-firelink-dark">Traditional Approach:</h4>
            <p className="text-lg mb-4">{traditional.approach}</p>
            <ul className="space-y-2">
              {traditional.issues.map((issue, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-firelink-purple">
            <h4 className="text-xl font-semibold mb-4 text-firelink-purple">Firelink Solution:</h4>
            <p className="text-lg mb-4">{firelink.approach}</p>
            <ul className="space-y-2">
              {firelink.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-firelink-dark text-white p-8 rounded-lg text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Ready to Automate Your Lead Gen Agency?</h3>
          <p className="text-lg mb-6">
            Most lead gen agencies struggle with operational chaos, watching their freedom and profits drain away day by day. 
            The few who break free do it by building systems that work without them.
          </p>
          <p className="text-xl font-medium mb-6">Which path will you choose?</p>
          <Button onClick={scrollToBookCall} className="bg-white text-firelink-dark hover:bg-gray-200 text-base group">
            BOOK YOUR STRATEGY CALL
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
