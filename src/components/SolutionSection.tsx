
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const SolutionSection = () => {
  const systems = [
    {
      title: "Make More Money",
      items: [
        {
          title: "Campaign Monitoring",
          description: "Automated alerts for underperforming campaigns and prospect responses"
        },
        {
          title: "Response Filtering",
          description: "Smart filtering that prioritizes high-intent responses and removes time-wasters"
        },
        {
          title: "Client Reporting",
          description: "Automated reporting that shows clients their ROI in real time"
        },
        {
          title: "Lead Qualification",
          description: "Automated scoring and segmentation based on engagement signals"
        }
      ]
    },
    {
      title: "In Less Time",
      items: [
        {
          title: "Performance Dashboard",
          description: "Complete overview of all active campaigns and metrics"
        },
        {
          title: "Follow-up System",
          description: "Intelligent sequences that adapt to prospect engagement levels"
        },
        {
          title: "Client Retention",
          description: "Transparent reporting builds trust and extends relationships"
        },
        {
          title: "Time Reclaimed",
          description: "Eliminate manual monitoring and get back 15+ hours every week"
        }
      ]
    }
  ];

  const scrollToBookCall = () => {
    document.getElementById('book-a-call')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="lead-gen-offer" className="py-16 bg-gray-50">
      <div className="section-container max-w-5xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center gradient-text heading-grain">
            Lead Gen Automation Engine
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our complete automation system replaces manual processes with intelligent workflows that run 24/7, enabling you to scale your agency without adding headcount.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {systems.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 heading-grain">{column.title}</h3>
              <div className="grid grid-cols-1 gap-4">
                {column.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="card-grain bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
                  >
                    <h4 className="font-bold text-xl mb-3 text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
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
