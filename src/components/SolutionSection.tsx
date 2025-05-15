
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
      description: "Transparent reporting builds trust and extends client relationships",
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
                <span className="text-2xl">{item.icon}</span>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-gray-300 pl-11">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Exact Deliverables Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
            Exact Deliverables: Double Your Clients & Revenue
          </h3>
          
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-white">Core Promise</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> 
                  <span>Automating your cold email process</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> 
                  <span>Same effort but double the clients and double the cash</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> 
                  <span>Speed to lead as low as possible</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-white">Essential Systems</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> 
                  <span>CRM buildout (Google sheet)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> 
                  <span>Daily reporting for all campaigns</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> 
                  <span>Daily campaign monitoring with alerts</span>
                </li>
                <li className="flex items-start ml-6">
                  <span className="text-gray-400 mr-2">•</span> 
                  <span>Lead lists below 200</span>
                </li>
                <li className="flex items-start ml-6">
                  <span className="text-gray-400 mr-2">•</span> 
                  <span>Emails disconnect</span>
                </li>
                <li className="flex items-start ml-6">
                  <span className="text-gray-400 mr-2">•</span> 
                  <span>High bounce rates</span>
                </li>
                <li className="flex items-start ml-6">
                  <span className="text-gray-400 mr-2">•</span> 
                  <span>15-minute check frequency</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> 
                  <span>Weekly client reports & client portal</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> 
                  <span>Automatic onboarding into Slack</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-white">7 Core Automations</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> 
                  <span>Automated client onboarding</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> 
                  <span>Custom agency dashboard</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> 
                  <span>Daily campaign monitor</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> 
                  <span>Weekly client reports</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> 
                  <span>Out-of-office retargeting</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> 
                  <span>2 extra custom automations monthly</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">Maintenance Option</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">+</span> 
                  <span>Maintenance (optional) – $200/mo</span>
                </li>
                <li className="flex items-start ml-6">
                  <span className="text-gray-400 mr-2">•</span> 
                  <span>Support in case someone bungles something</span>
                </li>
                <li className="flex items-start ml-6">
                  <span className="text-gray-400 mr-2">•</span> 
                  <span>We cover hosting costs</span>
                </li>
                <li className="flex items-start ml-6">
                  <span className="text-gray-400 mr-2">•</span> 
                  <span>Minor repairs & fixes, eg if APIs change</span>
                </li>
              </ul>
            </div>
          </div>
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
