
import { Check, X } from 'lucide-react';

const AlternativeSolutionsSection = () => {
  return (
    <section className="bg-gray-50 py-14">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-firelink-dark">
          Why Not Just Hire an Agency or Outsource?
        </h2>
        
        <div className="bg-white p-8 rounded-lg shadow-sm mb-6">
          <div className="space-y-6 mt-4">
            <div className="flex items-start">
              <div className="mr-3 mt-1 text-red-500">
                <X className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">The ROI Question</h4>
                <p className="text-gray-600">If this problem is truly critical to your business growth, why risk a cheap solution? When something directly impacts your revenue, the ROI from doing it right far exceeds any initial savings.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-3 mt-1 text-red-500">
                <X className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Ownership Issues</h4>
                <p className="text-gray-600">Will you actually own the system once the developer leaves, or will they want to keep you on a retainer? Many businesses end up paying perpetually for access to their own systems.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-3 mt-1 text-red-500">
                <X className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Management Burden</h4>
                <p className="text-gray-600">You'll spend valuable time managing outsourced developers who don't understand your business context. They require constant direction because they don't "get it," offsetting any cost savings with your own time investment.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-3 mt-1 text-red-500">
                <X className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">The Execution Gap</h4>
                <p className="text-gray-600">Developers build what they're told to build. There's a critical gap between "I want something that achieves XYZ outcome" and knowing how to build a system that actually delivers that outcome.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-3 mt-1 text-red-500">
                <X className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Business Risk</h4>
                <p className="text-gray-600">Your sales system directly impacts your revenue. The cost of a poorly implemented system far outweighs the cost of building it properly the first time.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-firelink-light p-5 rounded border-l-4 border-firelink-purple">
            <p className="text-gray-800 font-medium">
              When your business depends on these systems to generate revenue, taking shortcuts creates more problems than it solves. The cheapest option today often becomes the most expensive mistake tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternativeSolutionsSection;
