
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
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-6">
        <Cal
          calLink="team/firelink/intro"
          style={{ width: "100%", height: "600px", overflow: "hidden" }}
          config={{
            layout: "month_view",
          }}
        />
      </div>
    </div>
  );
};

export default BookCallSection;
