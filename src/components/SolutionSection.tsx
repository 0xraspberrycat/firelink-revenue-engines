
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SolutionSection = () => {
  const scrollToBookCall = () => {
    document.getElementById('book-a-call')?.scrollIntoView({ behavior: 'smooth' });
  };

  const coreFeatures = [
    {
      title: "Automated Lead Generation",
      description: "Double your client acquisition with the same effort. Our cold email automation system turns your outreach into a consistent revenue machine.",
      icon: "🚀"
    },
    {
      title: "Lightning-Fast Response Times",
      description: "Minimize speed-to-lead with instant follow-ups that convert prospects while they're still hot.",
      icon: "⚡"
    },
    {
      title: "Complete CRM Setup",
      description: "Custom-built client relationship management system tailored to your business needs and workflow.",
      icon: "📊"
    },
    {
      title: "Daily Campaign Reporting",
      description: "Get actionable insights every morning with comprehensive performance metrics for all campaigns.",
      icon: "📈"
    },
    {
      title: "24/7 Campaign Monitoring",
      description: "Intelligent system that continuously monitors your campaigns and alerts you to potential issues before they impact performance.",
      icon: "🔔"
    },
    {
      title: "Client Portal & Weekly Reports",
      description: "Keep your clients informed with automated weekly performance reports and a dedicated client portal.",
      icon: "📱"
    },
    {
      title: "Slack Integration",
      description: "Seamless onboarding of new clients directly into your Slack workspace.",
      icon: "💬"
    }
  ];

  const essentialAutomations = [
    {
      title: "Client Onboarding",
      description: "Streamlined process from sign-up to campaign launch",
      number: "1"
    },
    {
      title: "Agency Dashboard",
      description: "Custom metrics dashboard focused on your business growth",
      number: "2"
    },
    {
      title: "Campaign Monitor",
      description: "Real-time performance tracking with automatic issue detection",
      number: "3"
    },
    {
      title: "Client Reporting",
      description: "Weekly automated reports sent directly to clients",
      number: "4"
    },
    {
      title: "Out-of-Office Retargeting",
      description: "Never miss an opportunity with intelligent follow-up sequences",
      number: "5"
    }
  ];

  return (
    <section id="solution" className="py-16 bg-black text-white">
      <div className="section-container max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Double Your Clients, Double Your Cash
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Our Cold Email Automation System transforms your manual outreach into a fully automated revenue machine.
          </p>
        </div>

        {/* Core Features */}
        <h3 className="text-2xl font-bold mb-8 text-center">Core Features</h3>
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {coreFeatures.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] p-8 bg-transparent border border-gray-700 hover:border-gray-500 transition-all rounded-lg"
            >
              <div className="flex items-start space-x-4 mb-4">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-gray-300 pl-11">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Essential Automations */}
        <h3 className="text-2xl font-bold mb-8 text-center">5 Essential Automations Included</h3>
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {essentialAutomations.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(45%-1.5rem)] p-8 bg-transparent border border-gray-700 hover:border-gray-500 transition-all rounded-lg"
            >
              <div className="flex items-start space-x-4 mb-4">
                <span className="flex items-center justify-center w-8 h-8 bg-purple-600 rounded-full text-white font-bold">{item.number}</span>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-gray-300 pl-12">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button onClick={scrollToBookCall} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg font-bold rounded-md group">
            Get Your Automation System
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
