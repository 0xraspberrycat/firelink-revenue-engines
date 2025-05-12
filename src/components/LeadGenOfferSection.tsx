
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from 'lucide-react';

const LeadGenOfferSection = () => {
  const components = [
    "Campaign monitoring system with auto-pause functionality",
    "Response filtering and qualification automation",
    "Custom KPI dashboards for agency and clients",
    "Automated client reporting on schedule",
    "Lead assignment and distribution system",
    "Performance anomaly detection",
    "Custom integrations with your existing tools"
  ];

  const results = [
    "80% reduction in campaign monitoring time",
    "Faster response to promising leads",
    "Improved client retention through consistent reporting",
    "Ability to manage more campaigns without adding headcount",
    "Clear visibility into campaign performance metrics"
  ];

  const scrollToBookCall = () => {
    const element = document.getElementById('book-a-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="lead-gen-offer" className="py-16 bg-white">
      <div className="section-container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">
          The Lead Gen Automation Package
        </h2>
        
        <p className="text-center text-gray-700 mb-12 text-xl max-w-3xl mx-auto">
          A complete automation solution designed specifically for lead generation agencies.
        </p>
        
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h3 className="text-2xl font-semibold mb-6 text-firelink-dark">What's Included:</h3>
            <ul className="space-y-4">
              {components.map((component, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-firelink-purple/10 p-1 rounded-full mr-3 flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-firelink-purple" />
                  </span>
                  <span className="text-gray-700">{component}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h3 className="text-2xl font-semibold mb-6 text-firelink-dark">Expected Results:</h3>
            <ul className="space-y-4">
              {results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-green-100 p-1 rounded-full mr-3 flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </span>
                  <span className="text-gray-700">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
            Ready to transform your lead gen agency from chaotic to automated?
          </p>
          <Button onClick={scrollToBookCall} className="cta-button text-base group">
            Book Your Strategy Call
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeadGenOfferSection;
