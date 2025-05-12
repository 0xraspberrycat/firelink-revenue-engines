import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Mail, ArrowUpRight } from "lucide-react";
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
            Book Your <span className="gradient-text">Strategy Call</span>
          </h2>
          <p className="text-lg text-gray-600">
            Schedule a 45-minute call to discover how our AI-powered systems can transform your lead generation operations.
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
          <h3 className="text-xl font-semibold mb-6 text-center">Contact Us</h3>
          <div className="flex justify-center gap-10">
            <div className="w-1/2">
              <h4 className="font-medium text-gray-800 mb-4">Email Us:</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="mailto:ermiasauto@gmail.com"
                    className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    <span>ermiasauto@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:paulxautomation@gmail.com"
                    className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    <span>paulxautomation@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="w-1/2">
              <h4 className="font-medium text-gray-800 mb-4">Find Us on X:</h4>
              <div className="flex flex-col gap-3">
                <Button 
                  variant="outline" 
                  className="justify-start text-gray-700 hover:text-gray-900"
                  asChild
                >
                  <a href="https://x.com/ErmiasAuto" target="_blank" rel="noopener noreferrer">
                    <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                    Ermias
                    <ArrowUpRight className="ml-auto h-4 w-4" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="justify-start text-gray-700 hover:text-gray-900"
                  asChild
                >
                  <a href="https://x.com/paulautomates" target="_blank" rel="noopener noreferrer">
                    <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                    Paul
                    <ArrowUpRight className="ml-auto h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCallSection;