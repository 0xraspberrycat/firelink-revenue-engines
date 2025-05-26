
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, DollarSign, BarChart3 } from "lucide-react";

const SolutionSection = () => {
  const scrollToBookCall = () => {
    document.getElementById('book-a-call')?.scrollIntoView({ behavior: 'smooth' });
  };

  const pillars = [
    {
      title: "TIME",
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      problem: "Your reps are spending too much time on administrative tasks (data input, CRM management, etc)",
      causes: [
        "Human error",
        "Things aren't tracked as well as they should be", 
        "Your reps are spending time doing this instead of revenue generating activities"
      ],
      solution: "Automated system that acts as a personal assistant, handling all administrative responsibilities for your sales team",
      features: [
        "Pipeline/CRM tracking/updating",
        "Prospect research", 
        "Lead briefing",
        "Assigning leads",
        "Proposal generator",
        "Invoice generator",
        "Automated call summary system"
      ],
      benefit: "Save up to 10 hours per week per rep so they can focus on revenue generating activities"
    },
    {
      title: "REVENUE", 
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      problem: "Losing money from low show rates, close rates, and leads falling through the cracks",
      causes: [],
      solution: "Comprehensive lead nurturing and pipeline optimization system",
      features: [
        "Nurture sequences",
        "Confirmation reminders",
        "Lead briefing",
        "Lead scoring model", 
        "Post call nurture sequences",
        "Automated pipeline updates",
        "Automated tasks and reminders for long term nurturing"
      ],
      benefit: "Maximize the ROI on your leads by converting up to 30% more"
    },
    {
      title: "DATA",
      icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
      problem: "Unable to make accurate business decisions due to inaccurate data and reporting", 
      causes: [],
      solution: "Know all of your numbers, every step of the way with AI analysis",
      features: [
        "Automated dashboard reporting",
        "All in one dashboard",
        "Live pipeline insights",
        "Lead pipeline tracking", 
        "Which reps are performing best",
        "KPI tracking"
      ],
      benefit: "Know every single metric within your business at a glance so you know exactly what decisions to make"
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
            Three Pillars of Sales Automation
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            FireLink's automation system is built on three core pillars that transform your sales operations from manual chaos into an efficient, revenue-generating machine.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="space-y-12 mb-16">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-8">
              <div className="flex items-center space-x-4 mb-6">
                {pillar.icon}
                <h3 className="text-2xl font-bold text-white">Pillar {index + 1}: {pillar.title}</h3>
              </div>
              
              {/* Problem */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-red-400 mb-3">Problem:</h4>
                <p className="text-gray-300 mb-3">{pillar.problem}</p>
                {pillar.causes.length > 0 && (
                  <div>
                    <p className="text-gray-400 mb-2">This causes:</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {pillar.causes.map((cause, i) => (
                        <li key={i}>{cause}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Solution:</h4>
                <p className="text-gray-300 mb-4">{pillar.solution}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {pillar.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefit */}
              <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                <h4 className="text-lg font-semibold text-green-400 mb-2">Benefit:</h4>
                <p className="text-gray-300">{pillar.benefit}</p>
              </div>
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
