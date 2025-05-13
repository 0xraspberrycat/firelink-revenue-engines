
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

interface CaseStudy {
  client: string;
  industry?: string;
  highlight: string;
  results: string[];
}

const CaseStudiesSection = () => {
  const caseStudies: CaseStudy[] = [
    {
      client: "Outreach Insider",
      industry: "B2B Lead Generation",
      highlight: "80% reduction in operational workload",
      results: [
        "Automated campaign monitoring with issue detection",
        "Streamlined client reporting system",
        "CEO's first uninterrupted vacation while business ran smoothly",
        "Continued growth without additional team members"
      ]
    },
    {
      client: "The Deal Lab",
      industry: "Real Estate Lead Gen",
      highlight: "43% revenue increase",
      results: [
        "Founder reclaimed 15+ hours weekly",
        "Automated campaign performance tracking",
        "Improved lead quality through response filtering",
        "Maintained work-life balance while scaling"
      ]
    },
    {
      client: "Core Conversions",
      industry: "SaaS Lead Generation",
      highlight: "40% revenue increase in 120 days",
      results: [
        "Handled 3x more lead gen campaigns",
        "Implemented real-time KPI dashboards",
        "Automated response filtering and qualification",
        "Founder focused on strategy and growth"
      ]
    },
    {
      client: "Profit Path",
      industry: "Growth Strategy Agency",
      highlight: "35% increase in client retention",
      results: [
        "Automated client onboarding process",
        "Implemented performance analytics dashboard",
        "Streamlined communication between team members",
        "Reduced operational overhead by 25%"
      ]
    },
    {
      client: "Spitz PR",
      industry: "PR Agency",
      highlight: "Doubled revenue in 90 days",
      results: [
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
    <section id="case-studies" className="py-20 bg-white border-t border-gray-100">
      <div className="section-container max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">Client Success Stories</h2>
        
        <div className="grid grid-cols-1 gap-10 mb-16">
          {caseStudies.map((study, index) => (
            <Card 
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all hover:shadow-lg"
            >
              <CardHeader className="bg-gray-50 px-8 py-6 border-b border-gray-100">
                <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">{study.industry}</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{study.client}</h3>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="bg-gray-100 rounded-lg p-5 mb-8">
                  <p className="text-gray-800 font-bold text-xl">{study.highlight}</p>
                </div>
                
                <h4 className="font-medium text-gray-600 mb-4 text-base uppercase tracking-wider">Key Results</h4>
                <ul className="space-y-4">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-gray-800 mr-4 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">{result}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 bg-gray-50 p-10 rounded-xl border border-gray-100">
          <h3 className="text-3xl font-bold mb-5 text-gray-900">Ready for similar results?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Book a strategy call to see exactly how our automated systems could transform your lead generation operations.
          </p>
          <Button onClick={scrollToBookCall} className="bg-black text-white hover:bg-gray-800 text-lg py-6 px-8 h-auto group">
            Book Your Strategy Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
