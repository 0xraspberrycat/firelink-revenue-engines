
import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Mail, ArrowUpRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookCallSection = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "light"
      });
    })();
  }, []);

  return (
    <section id="book-a-call" className="pt-16 pb-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight text-gray-900">
            Book Your <span className="text-gray-900">Free Strategy Call</span>
          </h2>
          <p className="text-lg text-gray-600">
            Schedule a 45-minute introduction call on Google Meet to discover how our AI-powered systems can transform your sales operations.
          </p>
        </div>
        
        <div className="mb-12 w-full">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm" style={{ height: "600px" }}>
            <Cal
              calLink="team/firelink/intro"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{
                layout: "month_view",
              }}
            />
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-6 text-center">Contact FireLink</h3>
          <div className="flex flex-col md:flex-row justify-center gap-10 items-stretch">
            
            <div className="md:w-1/3 flex flex-col">
              <h4 className="font-medium text-gray-800 mb-4">Email Us:</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="mailto:ermias@jpstrategies.xyz"
                    className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    <span>ermias@jpstrategies.xyz</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:paul@jpstrategies.xyz"
                    className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    <span>paul@jpstrategies.xyz</span>
                  </a>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCallSection;
