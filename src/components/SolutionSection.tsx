
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SolutionSection = () => {
  const scrollToBookCall = () => {
    document.getElementById('book-a-call')?.scrollIntoView({ behavior: 'smooth' });
  };

  const coreFeatures = [
    {
      title: "Done For You",
      description: "Handles technical setup so you focus on selling and scaling.",
      icon: "🚀"
    },
    {
      title: "CRM Automation",
      description: "Transforms your CRM into an automated sales engine.",
      icon: "⚡"
    },
    {
      title: "Intelligent Follow-Up",
      description: "Ensures perfect follow-up timing without manual intervention.",
      icon: "📊"
    },
    {
      title: "Instant Proposals",
      description: "Generates customized quotes the moment a prospect shows interest.",
      icon: "📈"
    },
    {
      title: "Seamless Onboarding",
      description: "Automates client onboarding after payment.",
      icon: "🔔"
    }
  ];

  const revenueEngineComponents = [
    "CRM setup with automated tracking",
    "Complete pipeline visibility",
    "AI-powered follow-up sequences",
    "Instant proposal generation",
    "Automated lead qualification",
    "24/7 sales operations",
    "Seamless client onboarding",
    "Automated task management",
    "Real-time performance tracking"
  ];

  return (
    <section id="solution" className="py-16 bg-black text-white">
      <div className="section-container max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Automated Systems
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            FireLink builds complete, powerful systems to automate every step of the sales cycle, allowing you to focus on selling and scaling.
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

        {/* Revenue Engine */}
        <div className="bg-gray-900 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Revenue Engine</h3>
          <p className="text-lg text-gray-300 mb-8 text-center">
            Transforms manual sales processes into a fully automated revenue machine, enabling more deals with less work.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {revenueEngineComponents.map((component, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-gray-300">{component}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button onClick={scrollToBookCall} className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg font-bold rounded-md group">
            Get Your Automation System
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
