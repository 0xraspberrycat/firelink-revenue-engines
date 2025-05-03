
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import BookCallSection from "@/components/BookCallSection";

const Video = () => {
  const scrollToBookCall = () => {
    const element = document.getElementById('book-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* VSL Video Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.youtube.com/embed/kZIsBrQAYrE"
              title="Sales Automation System"
              className="w-full h-full"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Close 20-30% More B2B Deals Without Spending an Extra Dollar on Marketing
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-8">
            The Exact Sales Automation System That Slashed 80% of Workload for $20K+/Month Businesses
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-10 text-left">
            <p className="text-lg leading-relaxed mb-6">
              Read this guide to see exactly how forward-thinking businesses are leaving their competitors behind. 
              You'll discover how companies like Outreach Insider increased closed deals by 21% while reducing 
              operations by 80%, and how The Deal Lab scaled to $400,000/month without adding a single sales 
              team member – all by implementing the Revenue Engine system.
            </p>
            
            <Button onClick={scrollToBookCall} className="cta-button group text-base">
              Book Your Strategy Session
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* The Problem Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Is Your Manual Sales Process Killing Your Business?</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-bold mb-3 text-firelink-dark">The Costly Reality of Manual Processes</h3>
            <p className="mb-6">
              You might still be manually processing leads, or piecing together follow ups, hoping to close the deal "next week". 
              Your competitors are now automating everything, closing deals in hours that used to take them days - or weeks.
            </p>
            
            <h3 className="text-xl font-bold mb-3 text-firelink-dark">Your Market Position is at Risk</h3>
            <p className="mb-4">
              Every day that you keep running this system, you're not just losing money – you're losing status in your industry.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Your competitor's sales teams know where their leads are coming from</li>
              <li>They know how many leads they will be talking to tomorrow</li>
              <li>They know their pain points without ever having talked to them</li>
              <li>They spend 6 hours a day selling while you might be spending 6 hours a day drowning in admin work</li>
            </ul>
            
            <h3 className="text-xl font-bold mb-3 text-firelink-dark">The Professional Perception Problem</h3>
            <p className="mb-4">
              This cascades down your business: when larger clients interact with your sales process, they immediately recognize 
              you're operating like it's 2010. Even worse, your existing clients are sitting ducks.
            </p>
            <p>
              Without the protective moat of an automated, sophisticated sales system, they'll inevitably be poached by 
              competitors who can demonstrate greater professionalism and efficiency. Your client relationships have zero 
              protection against competitors with modern sales automation that can pinpoint their exact pain point and offer immediate relief.
            </p>
          </div>
        </section>

        {/* Solution Section */}
        <section className="max-w-4xl mx-auto mb-16 bg-firelink-dark text-white p-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">The Revenue Engine Solution</h2>
          
          <ul className="list-disc pl-6 mb-6 space-y-3">
            <li>The Revenue Engine eliminates these threats and transforms you into the dominant player in your space</li>
            <li>Weaponizing your sales process into a 24/7 revenue-generating machine</li>
            <li>Creates a system your competitors simply cannot match without significant investment</li>
          </ul>
          
          <p className="text-lg font-semibold text-center">
            This is not about "efficiency". It's about running a sophisticated operation that your leads expect.
          </p>
        </section>

        {/* Blueprint Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center gradient-text">See Our Exact Implementation Blueprint</h2>
          <p className="text-center mb-8">
            In this guide we show how it works and below I am sharing our exact implementation blueprint 
            that enterprise clients pay us to build for them - whether you implement it yourself or have us build it for you.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center">The 5-Step Sales Automation Blueprint</h3>
            <p className="italic mb-6 text-center">
              Transform your business from looking amateur to enterprise-ready with our exact technical implementation process
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-firelink-purple text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Establish Your Command Center</h4>
                  <p>
                    Most B2B businesses look unprofessional because leads slip through cracks between systems. 
                    Set up Close.com as your central command center with custom API connections that capture every interaction. 
                    This gives you the same enterprise-level visibility that Fortune 500 companies have, without needing their massive IT departments.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-firelink-purple text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Create Your 24/7 Sales Team</h4>
                  <p>
                    Stop embarrassing yourself by taking days to respond when competitors reply in minutes. 
                    Your close rate will DOUBLE if your time to lead is under 10 minutes. Build automated lead flow 
                    systems that instantly create qualified leads in your CRM and begin nurturing them while your 
                    competitors employees are, literally, asleep. Every lead gets instant attention with your perfect messaging.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-firelink-purple text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Establish Enterprise-Level Communication</h4>
                  <p>
                    Nothing screams 'small-time operation' like disjointed team communication. Build custom Slack 
                    workflows that instantly notify your team about new leads with all relevant information. 
                    This creates the seamless, professional experience that large clients expect – and that amateur businesses can't deliver.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-firelink-purple text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">4</div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Deploy Frictionless Deal-Closing</h4>
                  <p>
                    The difference between stragglers and The Deal Lab going from 50,000/mo to 400,000/mo was their 
                    ability to close deals on the spot. Implement an automated proposal and contract system that 
                    generates custom documents during your sales call – eliminating the amateur 'I'll send you something later' that kills deals.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-firelink-purple text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">5</div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Execute Perfect Onboarding Sequences</h4>
                  <p>
                    Top companies don't make clients chase them after signing. Build automated client onboarding 
                    that instantly creates communication channels, sends welcome materials, and sets up payment processing. 
                    This creates the white-glove experience that separates serious players from struggling businesses.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button onClick={scrollToBookCall} className="cta-button group text-base">
                Get Your Implementation Plan
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">What's Your Leaky Sales Pipeline Costing You?</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-6">
              Let's look at some real numbers: Let's say you're generating 300 leads per month but only closing 10 deals 
              at $5,000 each, your sales pipeline is leaking money at every stage.
            </p>
            
            <p className="font-semibold mb-4">Here's what happens when you implement the Revenue Engine:</p>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-firelink-orange pl-4 py-1">
                <h4 className="font-bold">1. Lead Response Time</h4>
                <p>Reduce from 24+ hours to under 5 minutes (63% of leads never get follow-up within an hour, and those leads are 7x less likely to qualify)</p>
              </div>
              
              <div className="border-l-4 border-firelink-orange pl-4 py-1">
                <h4 className="font-bold">2. Follow-Up Consistency</h4>
                <p>Increase from 20% of leads getting proper nurturing to 95%+ (adding 3-5 more qualified conversations per week)</p>
              </div>
              
              <div className="border-l-4 border-firelink-orange pl-4 py-1">
                <h4 className="font-bold">3. Proposal Speed</h4>
                <p>Cut from 3+ days to same-day delivery (eliminating the 40% of deals lost to 'thinking it over')</p>
              </div>
              
              <div className="border-l-4 border-firelink-orange pl-4 py-1">
                <h4 className="font-bold">4. Onboarding Friction</h4>
                <p>Eliminate the 15% of clients who get buyer's remorse during manual onboarding</p>
              </div>
            </div>
            
            <p className="mb-4 font-semibold">
              Just plugging these four leaks typically adds 3-4 additional closed deals monthly without a single extra marketing dollar.
            </p>
            
            <p className="mb-4 text-xl text-firelink-orange font-bold text-center">
              That's $15,000-$20,000 in monthly revenue you're currently leaving on the table.
            </p>
            
            <p className="mb-4">
              But the bigger cost is market positioning. While you're letting these leaks continue, your competitors are already implementing these systems.
            </p>
            
            <p className="font-semibold">
              Every week you delay puts you further behind the curve, making recovery increasingly difficult.
            </p>
          </div>
        </section>

        {/* Book Call Section */}
        <BookCallSection />
      </div>
      
      <footer className="bg-firelink-dark text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Firelink. All rights reserved.</p>
          <div className="mt-4">
            <Link to="/" className="text-white hover:text-firelink-purple transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Video;
