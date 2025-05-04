
import { Check, X } from 'lucide-react';

const AlternativeSolutionsSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="section-container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-firelink-dark">
          Why Not Just Hire Cheap Developers or VAs?
        </h2>
        
        <p className="text-xl text-center mb-10 text-gray-700">
          That Fiverr "expert" or overseas team might seem affordable - until you see the real price you pay...
        </p>
        
        <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
          <div className="space-y-12 mt-4">
            <div>
              <div className="flex items-start mb-4">
                <div className="mr-4 mt-1">
                  <X className="h-6 w-6 text-red-500" />
                </div>
                <h4 className="font-bold text-gray-800 text-xl">The Fiverr/Upwork "Expert" Scam</h4>
              </div>
              
              <div className="ml-10 space-y-4">
                <p className="text-gray-700 text-lg">
                  Imagine paying $2,000 to someone who promises to solve your problem, only to discover they've just copied and pasted from ChatGPT and have no real expertise.
                </p>
                
                <p className="text-gray-700 text-lg">
                  This happens constantly with "experts" on platforms like Fiverr and Upwork. Just look at this actual quote we received:
                </p>
                
                <div className="bg-gray-100 p-6 rounded-lg my-6">
                  <img 
                    src="/public/lovable-uploads/2481bcc2-7c28-45c3-8330-2051a973c2fa.png" 
                    alt="Fiverr Quote" 
                    className="w-full rounded-lg shadow-sm"
                  />
                </div>
                
                <p className="text-gray-700 text-lg">
                  That's 20 days and $2,000 for something our team implements in 24 hours. How much revenue are you losing during those extra 19 days of waiting? And what happens after those 6 months of "full access" expire?
                </p>
                
                <p className="text-gray-700 text-lg font-medium">
                  The worst part? You don't even OWN what you paid for. Someone else retains ownership and control of the systems your business depends on!
                </p>
              </div>
            </div>
            
            <div>
              <div className="flex items-start mb-4">
                <div className="mr-4 mt-1">
                  <X className="h-6 w-6 text-red-500" />
                </div>
                <h4 className="font-bold text-gray-800 text-xl">The Monthly Recurring Revenue Trap</h4>
              </div>
              
              <div className="ml-10 space-y-4">
                <p className="text-gray-700 text-lg">
                  Most developers have one goal: lock you into paying them forever through monthly subscriptions or "access fees" to your own systems.
                </p>
                
                <p className="text-gray-700 text-lg">
                  Unlike offshore developers who hide behind fake profiles and have no reputation to protect, we're fully transparent and visible. Our team members are publicly known with established social media presences. We can't afford to deliver anything less than excellence.
                </p>
                
                <p className="text-gray-700 text-lg">
                  When someone has nothing to lose, how much do you think they value your success? We tie our reputation to your results, which is why we guarantee specific outcomes.
                </p>
              </div>
            </div>
            
            <div>
              <div className="flex items-start mb-4">
                <div className="mr-4 mt-1">
                  <X className="h-6 w-6 text-red-500" />
                </div>
                <h4 className="font-bold text-gray-800 text-xl">The Management Nightmare</h4>
              </div>
              
              <div className="ml-10 space-y-4">
                <p className="text-gray-700 text-lg">
                  Imagine spending hours every week explaining the same basic concepts to developers who never quite "get" your business.
                </p>
                
                <p className="text-gray-700 text-lg">
                  Offshore teams require constant supervision and direction. They don't understand your industry context or your unique business needs. What started as a time-saving solution becomes a second job.
                </p>
                
                <p className="text-gray-700 text-lg">
                  What's your hourly rate? Multiply that by the countless hours you'll spend managing offshore developers who don't understand your business—that's the real cost of "cheap" implementation.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-firelink-light p-8 rounded-lg border-l-4 border-firelink-purple">
            <h4 className="text-xl font-bold mb-4 gradient-text">The Firelink Difference:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-800 text-lg">Complete Team Replacement - Get the equivalent of 20+ appointment setters and VAs for a total of $3-7/hour</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-800 text-lg">Full Ownership - You own 100% of your systems with zero ongoing fees or hidden dependencies</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-800 text-lg">Zero Management Required - Systems run autonomously without your oversight or involvement</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-800 text-lg">Industry Context Built-In - We understand your business model from day one</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-800 text-lg">Public Reputation - We can't hide behind anonymous profiles - our success is tied to yours</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternativeSolutionsSection;
