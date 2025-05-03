
import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const BookCallSection = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace": "intro"});
      cal("ui", {
        "hideEventTypeDetails": false,
        "layout": "column_view",
        "theme": "dark",
        "hideBranding": true
      });
    })();
  }, []);

  return (
    <section id="book-call" className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Schedule Your Strategy Call</h2>
        
        {/* Cal.com embed container with responsive sizing */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="calendar-container" style={{ height: "650px", width: "100%" }}>
            <Cal 
              namespace="intro"
              calLink="team/firelink/intro"
              style={{
                width: "100%",
                height: "100%",
                overflow: "auto"
              }}
              config={{
                "layout": "column_view"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Add Cal.com types to window object
declare global {
  interface Window {
    Cal?: any;
  }
}

export default BookCallSection;
