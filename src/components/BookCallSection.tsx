
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
    <section id="book-a-call" className="pt-16 pb-8 md:pt-20 md:pb-8 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight text-gray-900 heading-grain">
            Book Your <span className="gradient-text">Strategy Call</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Schedule a 45-minute call to discover how our AI-powered systems can transform your lead generation operations.
          </p>
        </div>
        
        <div className="card-grain bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm" style={{ height: "600px" }}>
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
