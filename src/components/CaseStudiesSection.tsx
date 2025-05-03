
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section id="case-studies" className="py-14 bg-gray-50">
      <div className="section-container max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-text text-center">Our Client Success Stories</h2>
        
        <Accordion type="single" collapsible className="mb-8">
          {caseStudies.map((study, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="mb-3 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-firelink-dark">{study.name}</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <div className="mb-4">
                  <h4 className="font-medium text-gray-500 mb-2 text-sm">Before:</h4>
                  <ul className="space-y-1.5">
                    {study.before.map((item, i) => (
                      <li key={i} className="text-gray-700 flex items-start text-sm">
                        <span className="h-4 w-4 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5 text-xs">-</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-2">
                  <h4 className="font-medium text-gray-500 mb-2 text-sm">Results:</h4>
                  <ul className="space-y-1.5">
                    {study.results.map((item, i) => (
                      <li key={i} className="text-gray-700 flex items-start text-sm">
                        <span className="h-4 w-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5 text-xs">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-8">
          <Button asChild className="cta-button text-base group">
            <a href="#book-call">
              Book Your Strategy Call
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
