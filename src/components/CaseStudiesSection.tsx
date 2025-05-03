
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface CaseStudy {
  name: string;
  before: string[];
  results: string[];
}

const CaseStudiesSection = () => {
  const caseStudies: CaseStudy[] = [
    {
      name: "Outreach Insider: From Operational Chaos to Freedom",
      before: [
        "CEO Caiden trapped in day-to-day operations",
        "No time for strategic growth initiatives",
        "Constant firefighting preventing scalability"
      ],
      results: [
        "80% reduction in operational workload",
        "Took first uninterrupted vacation in years",
        "Business continued growing while Caiden was completely disconnected"
      ]
    },
    {
      name: "The Deal Lab: 43% Revenue Growth Without Adding Stress",
      before: [
        "Manual processes creating bottlenecks",
        "Growth limited by founder's bandwidth",
        "Team overwhelmed by repetitive tasks"
      ],
      results: [
        "Scaled from $280K to $400K monthly (43% increase)",
        "Founder Kellen reclaimed 15+ hours weekly",
        "Maintained work-life balance during rapid growth phase"
      ]
    },
    {
      name: "Core Conversions: Double the Results, Half the Work",
      before: [
        "Operational inefficiencies draining resources",
        "Manual lead tracking creating missed opportunities",
        "Founder Nick constantly pulled into daily operations"
      ],
      results: [
        "40% revenue increase in just 120 days",
        "Handled 3× more leads with the same team size",
        "Nick focused on strategy while systems handled operations"
      ]
    },
    {
      name: "Spitz PR: From Losing Money to Doubling Revenue",
      before: [
        "Operating at a consistent loss",
        "30+ hours weekly spent on manual processes",
        "Founder Carson constantly putting out fires"
      ],
      results: [
        "DOUBLED revenue in 90 days",
        "Increased close rate by 25% with automated follow-up",
        "Carson reclaimed evenings and weekends while the business thrived"
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center mb-16">Our Client Success Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="h-2 bg-gradient-to-r from-firelink-purple to-firelink-secondary"></div>
              <CardHeader className="bg-white pb-2">
                <CardTitle className="text-xl font-bold text-firelink-dark">{study.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 bg-white">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-500 mb-3">Before:</h4>
                  <ul className="space-y-2">
                    {study.before.map((item, i) => (
                      <li key={i} className="text-gray-700 flex items-start">
                        <span className="h-5 w-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">-</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-500 mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((item, i) => (
                      <li key={i} className="text-gray-700 flex items-start">
                        <span className="h-5 w-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild className="cta-button text-lg group">
            <a href="#book-call">
              Book Your Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
