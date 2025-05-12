
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const SolutionSection = () => {
  const systems = [
    {
      title: "Campaign Monitoring",
      description: "Automated alerts for underperforming campaigns and immediate notification when prospects respond"
    },
    {
      title: "Response Filtering",
      description: "Smart filtering that prioritizes high-intent responses and removes time-wasting messages"
    },
    {
      title: "Client Reporting",
      description: "Automated reporting that shows clients their ROI and campaign performance in real time"
    },
    {
      title: "Performance Dashboard",
      description: "Complete overview of all active campaigns, response rates, and conversion metrics"
    },
    {
      title: "Lead Qualification",
      description: "Automated scoring and segmentation of leads based on engagement signals"
    },
    {
      title: "Follow-up System",
      description: "Intelligent follow-up sequences that adapt to prospect engagement levels"
    }
  ];

  const benefits = [
    {
      title: "Client Retention",
      description: "Transparent reporting builds trust and extends client relationships"
    },
    {
      title: "Time Reclaimed",
      description: "Eliminate manual monitoring and get back 15+ hours every week"
    }
  ];

  const scrollToBookCall = () => {
    document.getElementById('book-a-call')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="lead-gen-offer" className="py-16 bg-gray-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center gradient-text heading-grain">
            Lead Gen Automation Engine
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our complete automation system replaces manual processes with intelligent workflows that run 24/7, enabling you to scale your agency without adding headcount.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          {/* Top two rows with 6 equal cards */}
          {systems.map((system, index) => (
            <div 
              key={index} 
              className="card-grain col-span-1 md:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <h3 className="font-bold text-xl mb-3 text-gray-900">{system.title}</h3>
              <p className="text-gray-600">{system.description}</p>
            </div>
          ))}

          {/* Bottom row with 2 larger cards */}
          {benefits.map((benefit, index) => (
            <div 
              key={`benefit-${index}`}
              className="card-grain col-span-1 md:col-span-3 bg-white p-7 rounded-xl border border-gray-100 shadow-sm flex flex-col"
            >
              <h3 className="font-bold text-xl mb-3 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 mb-3">{benefit.description}</p>
              <div className="mt-auto">
                <Button
                  onClick={scrollToBookCall}
                  variant="outline" 
                  className="mt-2 border-gray-300 hover:bg-gray-50 text-gray-700 group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button onClick={scrollToBookCall} className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg font-bold rounded-md group">
            Get Your Custom Automation System
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
