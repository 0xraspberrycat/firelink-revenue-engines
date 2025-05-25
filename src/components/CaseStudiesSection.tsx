
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
      industry: "Cold Email Agency",
      highlight: "80% reduction in operational workload within 3 months",
      results: [
        "CEO stepped away from daily operations",
        "Fully automated backend in Close.com",
        "Automated client onboarding, campaign tracking, and reporting",
        "Took a vacation while agency ran smoothly"
      ]
    },
    {
      client: "The Deal Lab",
      industry: "Real Estate",
      highlight: "Scaled to $400K/month seamlessly",
      results: [
        "Automated sales pipeline management",
        "Streamlined lead qualification process",
        "Reduced manual follow-up by 90%",
        "Increased conversion rates through automation"
      ]
    },
    {
      client: "Core Conversions",
      industry: "SaaS",
      highlight: "Achieved rapid growth in 90 days",
      results: [
        "Implemented automated proposal generation",
        "Reduced sales cycle time by 50%",
        "Increased team productivity by 200%",
        "Scaled operations without additional headcount"
      ]
    },
    {
      client: "Spitz PR",
      industry: "Public Relations",
      highlight: "Turned operations from negative to positive",
      results: [
        "Automated client onboarding process",
        "Implemented intelligent follow-up sequences",
        "Reduced operational costs by 60%",
        "Improved client satisfaction through consistency"
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
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">Case Studies</h2>
        <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
          Real results from clients who transformed their operations with FireLink.
        </p>
        
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
            Book a strategy call to see exactly how our automated systems could transform your sales operations.
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
