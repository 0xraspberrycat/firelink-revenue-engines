
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

  const emails = [
    "ermiasauto@gmail.com",
    "paulxautomation@gmail.com"
  ];
  
  const socialProfiles = [
    {
      platform: "X",
      name: "Ermias",
      url: "https://x.com/ErmiasAuto"
    },
    {
      platform: "X",
      name: "Paul",
      url: "https://x.com/paulautomates"
    }
  ];

  return (
    <section id="book-a-call" className="pt-16 pb-8 md:pt-16 md:pb-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight text-gray-900 heading-grain">
            Book Your <span className="gradient-text">Strategy Call</span>
          </h2>
          <p className="text-lg text-gray-600">
            Schedule a 45-minute call to discover how our AI-powered systems can transform your lead generation operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-7 gap-6 mb-12">
          <div className="md:col-span-4">
            <div className="card-grain bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm" style={{ height: "480px" }}>
              <Cal
                calLink="team/firelink/intro"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{
                  layout: "month_view",
                }}
              />
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-1 gap-6">
            <div className="card-grain bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-5 text-gray-800">Email Us:</h3>
              <ul className="space-y-3">
                {emails.map((email, index) => (
                  <li key={index}>
                    <a 
                      href={`mailto:${email}`}
                      className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Mail className="h-5 w-5 mr-3" />
                      <span>{email}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="card-grain bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-5 text-gray-800">Find Us on X:</h3>
              <ul className="space-y-3">
                {socialProfiles.map((profile, index) => (
                  <li key={index}>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-gray-700 hover:text-gray-900"
                      asChild
                    >
                      <a href={profile.url} target="_blank" rel="noopener noreferrer">
                        <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                        </svg>
                        {profile.name}
                        <ArrowUpRight className="ml-auto h-4 w-4" />
                      </a>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCallSection;
