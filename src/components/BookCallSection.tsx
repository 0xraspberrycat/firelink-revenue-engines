
import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

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
    <section id="book-a-call" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your <span className="gradient-text">Strategy Call</span>
          </h2>
          <p className="text-xl text-gray-600">
            Schedule a 45-minute call to discover how our AI-powered systems can transform your lead generation operations.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg" style={{ height: "600px" }}>
          <Cal
            calLink="team/firelink/intro"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{
              layout: "month_view",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BookCallSection;
