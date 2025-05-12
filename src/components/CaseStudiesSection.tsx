
import { ArrowRight, X, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface CaseStudy {
  client: string;
  before: string[];
  results: string[];
}

const CaseStudiesSection = () => {
  const caseStudies: CaseStudy[] = [
    {
      client: "Outreach Insider",
      before: [
        "CEO trapped in daily operations",
        "Manual campaign monitoring consuming hours daily",
        "Inconsistent client reporting",
        "Limited visibility into campaign performance"
      ],
      results: [
        "80% reduction in operational workload",
        "Automated campaign monitoring with issue detection",
        "Streamlined client reporting system",
        "CEO's first uninterrupted vacation while business ran smoothly",
        "Continued growth without additional team members"
      ]
    },
    {
      client: "The Deal Lab",
      before: [
        "Manual processes creating bottlenecks",
        "Growth limited by founder's bandwidth",
        "Team overwhelmed by campaign monitoring",
        "Inconsistent response handling"
      ],
      results: [
        "43% revenue increase ($280K to $400K monthly)",
        "Founder reclaimed 15+ hours weekly",
        "Automated campaign performance tracking",
        "Improved lead quality through response filtering",
        "Maintained work-life balance while scaling"
      ]
    },
    {
      client: "Core Conversions",
      before: [
        "Operational inefficiencies in campaign management",
        "Manual lead tracking and qualification",
        "Founder pulled into daily operations",
        "Limited campaign performance visibility"
      ],
      results: [
        "40% revenue increase in 120 days",
        "Handled 3x more lead gen campaigns",
        "Implemented real-time KPI dashboards",
        "Automated response filtering and qualification",
        "Founder focused on strategy and growth"
      ]
    },
    {
      client: "Spitz PR",
      before: [
        "Operating at a loss due to inefficient processes",
        "30+ hours spent on manual campaign monitoring",
        "Constant firefighting and missed opportunities",
        "Poor client reporting and communication"
      ],
      results: [
        "Doubled revenue in 90 days",
        "25% higher client retention rate",
        "Implemented automated client reporting",
        "Created custom dashboards for performance tracking",
        "Founder reclaimed evenings and weekends"
      ]
    }
  ];

  const scrollToBookCall = () => {
    const element = document.getElementById('book-a-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="case-studies" className="py-16 bg-gray-50">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 gradient-text text-center">Client Success Stories</h2>
        
        <div className="space-y-6">
          {caseStudies.map((study, index) => (
            <Card 
              key={index}
              className="mb-4 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="px-5 py-4 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-firelink-dark">{study.client}</h3>
              </div>
              <CardContent className="px-5 py-4">
                <div className="mb-5">
                  <h4 className="font-medium text-gray-500 mb-3 text-lg">Before Firelink:</h4>
                  <ul className="space-y-2">
                    {study.before.map((item, i) => (
                      <li key={i} className="text-gray-700 flex items-start text-base">
                        <span className="h-5 w-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 text-sm">
                          <X className="h-3 w-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-3">
                  <h4 className="font-medium text-gray-500 mb-3 text-lg">After Firelink:</h4>
                  <ul className="space-y-2">
                    {study.results.map((item, i) => (
                      <li key={i} className="text-gray-700 flex items-start text-base">
                        <span className="h-5 w-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 text-sm">
                          <CheckCircle className="h-3 w-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button onClick={scrollToBookCall} className="cta-button text-lg group">
            Book Your Strategy Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
