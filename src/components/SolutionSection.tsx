
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SolutionSection = () => {
  const systems = [
    {
      title: "Campaign Monitoring",
      description: "Automated alerts for underperforming campaigns and prospect responses",
      icon: "📊"
    },
    {
      title: "Response Filtering",
      description: "Smart filtering that prioritizes high-intent responses and removes time-wasters",
      icon: "🔍"
    },
    {
      title: "Client Reporting",
      description: "Automated reporting that shows clients their ROI in real time",
      icon: "📈"
    },
    {
      title: "Lead Qualification",
      description: "Automated scoring and segmentation based on engagement signals",
      icon: "⭐"
    },
    {
      title: "Performance Dashboard",
      description: "Complete overview of all active campaigns and metrics",
      icon: "📱"
    },
    {
      title: "Follow-up System",
      description: "Intelligent sequences that adapt to prospect engagement levels",
      icon: "📧"
    },
    {
      title: "Client Retention",
      description: "Transparent reporting builds trust and extends relationships",
      icon: "🤝"
    },
    {
      title: "Time Reclaimed",
      description: "Eliminate manual monitoring and get back 15+ hours every week",
      icon: "⏰"
    }
  ];

  const scrollToBookCall = () => {
    document.getElementById('book-a-call')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="lead-gen-offer" className="py-16 bg-black text-white">
      <div className="section-container max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Lead Gen Automation Engine: Make More Money In Less Time
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Transform your manual lead generation process into a fully automated revenue machine.
            Your team will close more deals while doing less work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-7 rounded-lg border border-gray-800 h-full"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gray-800 p-2 rounded-md flex-shrink-0">
                  <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-3 text-white">{item.title}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button onClick={scrollToBookCall} className="bg-white hover:bg-gray-200 text-gray-900 px-8 py-6 text-lg font-bold rounded-md group">
            Get Your Custom Automation System
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
