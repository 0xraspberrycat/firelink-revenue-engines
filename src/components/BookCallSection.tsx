// Card component no longer needed
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

    // Initialize Cal with improved styling
    setTimeout(() => {
      if (window.Cal) {
        window.Cal("init", "intro", { origin: "https://cal.com" });
        window.Cal.ns.intro("inline", {
          elementOrSelector: "#my-cal-inline",
          config: { 
            layout: "month_view",
            hideEventTypeDetails: false,
            theme: "dark"
          },
          calLink: "team/firelink/intro",
        });
        window.Cal.ns.intro("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
          styles: {
            branding: { brandColor: "#6366F1" }
          }
        });
      }
    }, 100); // Small delay to ensure DOM is ready

    return () => {
      // No need for cleanup as we're using inline initialization
    };
  }, []);

  return (
    <section id="book-call" className="py-12 bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-700 text-lg mb-8">
            Let's discuss how we can transform your business operations
          </p>
          <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100">
            <div className="bg-white">
              <div className="relative w-full" style={{ height: "600px", overflow: "hidden" }}>
                <div 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    position: "absolute",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                    borderRadius: "0.5rem",
                    borderLeft: "4px solid #6366F1"
                  }} 
                  id="my-cal-inline"
                ></div>
              </div>
            </div>
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