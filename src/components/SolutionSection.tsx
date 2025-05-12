
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
    },
    {
      title: "Automated Onboarding",
      description: "Streamlined client setup with templated workflows and documentation",
      icon: "🚀"
    }
  ];

  const scrollToBookCall = () => {
    document.getElementById('book-a-call')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solution" className="py-16 bg-black text-white">
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

        <div className="flex flex-wrap justify-center gap-6">
          {systems.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33%-1.5rem)] p-8 bg-transparent border border-gray-700 hover:border-gray-500 transition-all rounded-lg"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-transparent p-2 rounded-full border border-gray-700">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-gray-300 pl-11">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button onClick={scrollToBookCall} className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg font-bold rounded-md group">
            Get Your Custom Automation System
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
