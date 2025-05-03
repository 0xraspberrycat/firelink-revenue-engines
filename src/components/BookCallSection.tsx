import { Card } from "@/components/ui/card";
import { useEffect } from "react";

const BookCallSection = () => {
  useEffect(() => {
    // Cal.com embed initialization function
    (function (C, A, L) {
      let p = function (a, ar) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Initialize Cal after function is defined
    if (window.Cal) {
      window.Cal("init", "intro", { origin: "https://cal.com" });
      window.Cal.ns.intro("inline", {
        elementOrSelector: "#my-cal-inline",
        config: { layout: "month_view" },
        calLink: "team/firelink/intro",
      });
      window.Cal.ns.intro("ui", { hideEventTypeDetails: false, layout: "month_view" });
    }

    return () => {
      // No need for cleanup as we're using inline initialization
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