
import { Card } from "@/components/ui/card";
import { useEffect } from "react";

const BookCallSection = () => {
  useEffect(() => {
    // Dynamically load Cal.com script
    const calScript = document.createElement("script");
    calScript.src = "https://app.cal.com/embed/embed.js";
    calScript.async = true;
    document.head.appendChild(calScript);

    calScript.onload = () => {
      // Initialize Cal after script is loaded
      if (window.Cal) {
        window.Cal("init", "intro", { origin: "https://cal.com" });
        window.Cal.ns.intro("inline", {
          elementOrSelector: "#my-cal-inline",
          config: { layout: "month_view" },
          calLink: "team/firelink/intro",
        });
        window.Cal.ns.intro("ui", { hideEventTypeDetails: false, layout: "month_view" });
      }
    };

    return () => {
      // Cleanup script if component unmounts
      if (calScript.parentNode) {
        calScript.parentNode.removeChild(calScript);
      }
    };
  }, []);

  return (
    <section id="book-call" className="py-12 bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-2">Book Your Strategy Call</h2>
          <p className="text-center text-gray-600 mb-6">
            Let's discuss how we can transform your business operations
          </p>

          <Card className="shadow-xl border-t-4 border-t-firelink-purple">
            <div style={{ width: "100%", height: "600px", overflow: "scroll" }} id="my-cal-inline"></div>
          </Card>
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
