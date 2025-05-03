// Card component no longer needed
import { useEffect } from "react";

const BookCallSection = () => {
  useEffect(() => {
    // Cal.com embed initialization function with proper mobile handling
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

    // Initialize Cal with mobile optimizations
    const initCal = () => {
      if (window.Cal) {
        window.Cal("init", "intro", { origin: "https://cal.com" });
        
        // Use the latest embed API with improved mobile support
        window.Cal.ns.intro("inline", {
          elementOrSelector: "#my-cal-inline",
          config: { 
            layout: "month_view",
            hideEventTypeDetails: false,
            theme: "dark",
            hideBranding: true
          },
          calLink: "team/firelink/intro",
        });
        
        // Set UI parameters with mobile optimizations
        window.Cal.ns.intro("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
          hideBranding: true,
          styles: {
            body: {
              background: "transparent"
            },
            branding: {
              brandColor: "#000000"
            },
            enabledDateButton: {
              backgroundColor: "#000000"
            }
          }
        });
      }
    };

    // Wait for DOM and Cal script to load properly
    if (document.readyState === "complete") {
      // If document already loaded, initialize with a delay
      setTimeout(initCal, 300);
    } else {
      // Otherwise wait for window to load completely
      window.addEventListener("load", () => setTimeout(initCal, 300));
    }

    return () => {
      window.removeEventListener("load", initCal);
    };
  }, []);

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
          <div className="w-full">
            {/* Responsive container with proper aspect ratio */}
            <div className="relative w-full" style={{ height: "700px", maxHeight: "80vh" }}>
              <div 
                className="absolute inset-0 w-full h-full" 
                id="my-cal-inline"
              ></div>
            </div>
            {/* Fallback for mobile */}
            <noscript>
              <p className="text-center mt-4">
                Please enable JavaScript to view our booking calendar.
              </p>
            </noscript>
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