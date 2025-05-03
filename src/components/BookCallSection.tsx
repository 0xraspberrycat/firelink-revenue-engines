
import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const BookCallSection = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace": "intro"});
      cal("ui", {
        "hideEventTypeDetails": false,
        "layout": "month_view",
        "theme": "dark"
      });
    })();
  }, []);

  return (
    <section id="book-call" className="py-8 bg-gradient-to-b from-firelink-light to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Schedule Your Strategy Call</h2>
        
        {/* Cal.com embed container with reduced whitespace */}
        <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="calendar-container" style={{ height: "600px", width: "100%" }}>
            <Cal 
              namespace="intro"
              calLink="team/firelink/intro"
              style={{
                width: "100%",
                height: "100%",
                overflow: "auto"
              }}
              config={{
                "layout": "month_view"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCallSection;
