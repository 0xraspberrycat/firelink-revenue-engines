
import { Link } from "react-router-dom";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import Header from "@/components/Header";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <div className="container mx-auto px-4 pt-24 py-12">
        {/* Confirmation Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-firelink-dark">
            You're all set! Your call is confirmed
          </h1>
          <p className="text-xl mb-8 text-gray-700">
            Here's what to expect next:
          </p>
        </div>

        {/* Video Message */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Watch this short 2-minute message from the FireLink Team
          </h2>
          <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.youtube.com/embed/5fm4pvb0kTA"
              title="Message from FireLink Team"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Preparation Tips */}
        <div className="max-w-3xl mx-auto mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-firelink-dark">
            To get the most from our call, please:
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Check your email for the call details and press "Yes" (or "attending")</li>
            <li>Be in a quiet place with good internet connection</li>
            <li>Have information about your current processes ready</li>
            <li>Prepare any specific questions you have</li>
            <li>Test your video/audio before the call</li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-firelink-dark">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md p-6">
            <AccordionItem value="faq-1">
              <AccordionTrigger className="text-lg font-semibold">
                What exactly is included in these services?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="mb-4">
                  Our automation services include everything needed to transform your sales process from manual to automated:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Custom Automation Development:</strong> We build tailored workflows specific to your business needs using your existing tools</li>
                  <li><strong>Integration Setup:</strong> We connect all your key systems (CRM, email, calendars, etc.) to create a seamless flow of information</li>
                  <li><strong>Team Training:</strong> We provide comprehensive training so your team can manage and modify automations as needed</li>
                  <li><strong>Implementation Support:</strong> We work alongside you for 30 days after launch to ensure everything runs smoothly</li>
                  <li><strong>ROI Tracking:</strong> We set up metrics to track exactly how much time and money your new automations are saving</li>
                </ul>
                <p>
                  Unlike other agencies, we don't charge extra for revisions or ongoing support during the implementation period—everything above is included in our standard service package.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-2">
              <AccordionTrigger className="text-lg font-semibold">
                How soon can I expect to see results?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="mb-4">
                  Most clients see measurable results within the first 2-4 weeks:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Week 1:</strong> We implement your first automation</li>
                  <li><strong>Week 2:</strong> Your team starts saving 5-10 hours per week on manual tasks</li>
                  <li><strong>Weeks 3-4:</strong> Response rates typically improve by 30-40% with consistent follow-up</li>
                  <li><strong>Month 2:</strong> Full implementation leads to 50%+ reduction in manual work and measurable ROI</li>
                </ul>
                <p>
                  The exact timeline depends on your specific situation, but we prioritize quick wins to deliver value immediately while building toward larger automation systems.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-3">
              <AccordionTrigger className="text-lg font-semibold">
                How is your approach different from others?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="mb-4">
                  FireLink differs from other automation providers in three key ways:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Speed to Implementation:</strong> We focus on getting working solutions in place within days, not months</li>
                  <li><strong>Business-First Approach:</strong> We prioritize revenue and time-saving outcomes over technical complexity</li>
                  <li><strong>Knowledge Transfer:</strong> We ensure your team fully understands and can maintain the systems we build</li>
                </ul>
                <p>
                  Most other agencies either build systems that are too complex for you to manage yourself, or they use one-size-fits-all templates. We create custom solutions you can actually understand and use without needing our help forever.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-4">
              <AccordionTrigger className="text-lg font-semibold">
                What should I prepare before our call?
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="mb-4">
                  To make the most of our time together, please consider:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>A brief overview of your current sales process from lead generation to close</li>
                  <li>Your biggest bottlenecks or time-consuming manual tasks</li>
                  <li>Any specific metrics you're looking to improve (response time, close rate, etc.)</li>
                  <li>Questions about how automation might help with specific challenges</li>
                </ul>
                <p>
                  No need for detailed documentation—just come prepared to discuss your current situation and what you'd like to improve.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Contact Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xl font-bold mb-4 text-firelink-dark">
            Have questions before our call?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <a href="mailto:paul@jpstrategies.xyz">
                <Mail className="h-4 w-4" />
                <span>paul@jpstrategies.xyz</span>
              </a>
            </Button>
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <a href="tel:+16122254718">
                <Phone className="h-4 w-4" />
                <span>+1 (612) 225-4718</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <footer className="bg-firelink-dark text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Firelink. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-4">
            <Link to="/" className="text-white hover:text-firelink-purple transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ThankYou;
