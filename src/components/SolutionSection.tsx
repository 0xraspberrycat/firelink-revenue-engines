
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from 'lucide-react';

const SolutionSection = () => {
  const solutions = [
    {
      title: "Wake Up to New Qualified Appointments",
      setup: "What if there was a tireless assistant who worked 24/7, never took vacations, and had perfect memory of every conversation with every prospect?",
      payoff: "Our AI-powered lead response system engages with prospects instantly, nurtures them based on their unique needs, and books meetings on your calendar while you sleep.",
      tiedown: "We've invested over $300,000 developing this system that handles your prospects better than most salespeople. How much more could you earn if quality appointments appeared on your calendar without you spending a minute finding them?"
    },
    {
      title: "Effortless Knowledge Transfer",
      setup: "Picture never losing critical information when a team member is sick, quits, or goes on vacation—because every bit of valuable knowledge is captured and instantly accessible.",
      payoff: "Our system automatically transcribes, categorizes, and stores every client interaction so nothing falls through the cracks, even during team transitions.",
      tiedown: "Most businesses lose thousands each month through knowledge gaps when team members transition. Wouldn't it be valuable to never worry about this expensive problem again?"
    },
    {
      title: "Deals That Close Themselves",
      setup: "Imagine if you could identify the exact moment a prospect is most likely to buy, and instantly deliver the perfect proposal without you having to lift a finger.",
      payoff: "Our intelligent proposal system triggers at the perfect psychological moment, generating custom-tailored offers that maximize your close rate.",
      tiedown: "Our clients have seen up to 37% increases in conversion rates using this system alone. How much more revenue would that mean for your business?"
    },
    {
      title: "Revenue That Grows While You Sleep",
      setup: "What if your business had a brilliant strategist working 24/7, analyzing your clients and identifying the perfect moments to offer additional services?",
      payoff: "Our upsell detection system automatically identifies clients ready for additional services and triggers perfectly-timed offers that increase lifetime value.",
      tiedown: "This single component has added an average of $2,850 per client for our customers. With your current client base, how transformative would that be?"
    },
    {
      title: "Seamless Client Experience",
      setup: "Imagine if every client interaction felt like your business had a perfect memory—never asking for the same information twice, always knowing exactly where things stand.",
      payoff: "Our context preservation system ensures flawless handoffs between team members with complete information transfer.",
      tiedown: "Clients pay premium prices for premium experiences. How much more could you charge if your service felt magically seamless compared to your competitors?"
    },
    {
      title: "Freedom From Payment Chasing",
      setup: "Picture never having an awkward payment conversation again. No more reminders, no more excuses, just money appearing in your account like clockwork.",
      payoff: "Our automated payment security system reduces defaults and late payments without your involvement.",
      tiedown: "The average business loses 7-10% of revenue to payment issues. How much would you save if that problem simply disappeared?"
    },
    {
      title: "Total Business Visibility",
      setup: "What if you had a brilliant analyst watching every aspect of your business 24/7, alerting you only when something needs your attention?",
      payoff: "Our business command center monitors critical metrics and alerts you to problems before they affect your bottom line.",
      tiedown: "Most business problems cost 10x more to fix than to prevent. Wouldn't you sleep better knowing potential issues are caught before they become expensive disasters?"
    }
  ];

  const scrollToBookCall = () => {
    const element = document.getElementById('book-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solution" className="py-16 bg-gray-50">
      <div className="section-container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-text text-center">More Money, Less Work: <br />The Revenue Engine Solution</h2>
        
        <div className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
          <p className="text-xl mb-4">Imagine having a business that makes money while you sleep...</p>
          <p className="mb-4">Imagine waking up to find new qualified appointments already booked on your calendar. Client documents perfectly organized without you lifting a finger. Proposals that generated and sent themselves at precisely the right moment. And payments that arrived automatically—no chasing, no hassle.</p>
          <p className="mb-4">This isn't fantasy—it's what happens when you replace human dependencies with intelligent systems that work around the clock.</p>
          <p className="text-xl font-medium">This is what we build for you: a complete Revenue Engine that runs without you.</p>
        </div>
        
        <h3 className="text-2xl font-semibold mb-6 text-center">Here's what your new Revenue Engine delivers:</h3>
        
        <div className="bg-white p-8 rounded-lg max-w-5xl mx-auto shadow-sm border border-gray-100">
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <div key={index} className="animate-fade-in p-4 border-b border-gray-100 last:border-b-0" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mr-3" />
                  <h3 className="text-xl font-bold gradient-text">{solution.title}</h3>
                </div>
                <div className="pl-9">
                  <p className="text-gray-700 mb-2"><span className="font-medium">Setup:</span> {solution.setup}</p>
                  <p className="text-gray-700 mb-2"><span className="font-medium">Payoff:</span> {solution.payoff}</p>
                  <p className="text-gray-700"><span className="font-medium">Tiedown:</span> {solution.tiedown}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-firelink-dark text-white p-8 rounded-lg text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Is Your Business Ready for True Freedom?</h3>
          <p className="text-lg mb-6">
            Most consultants and agency owners spend years trapped in operational chaos, watching their freedom and profits drain away day by day. The few who break free do it by building systems that work without them.
          </p>
          <p className="text-xl font-medium mb-6">Which path will you choose?</p>
          <Button onClick={scrollToBookCall} className="bg-white text-firelink-dark hover:bg-gray-200 text-base group">
            BOOK YOUR REVENUE ENGINE STRATEGY CALL
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
