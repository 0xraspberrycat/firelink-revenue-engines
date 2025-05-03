
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
    <section id="book-call" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Book Your Strategy Call
        </h2>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-6" style={{ height: "600px" }}>
          <Cal
            namespace="intro"
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
