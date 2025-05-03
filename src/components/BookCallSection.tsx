import { useEffect, useRef } from "react";

const BookCallSection = () => {
  const calendarRef = useRef(null);
  
  useEffect(() => {
    // Simple approach - directly inject the Cal.com script with basic options
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.Cal && calendarRef.current) {
        // Initialize with minimal configuration to avoid issues
        window.Cal("init");
        
        // Use standard embed approach (most reliable for mobile)
        window.Cal("inline", {
          elementOrSelector: "#my-cal-inline",
          calLink: "team/firelink/intro",
          config: {
            layout: "month_view",
            theme: "dark",
            hideEventTypeDetails: false,
            hideBranding: true
          }
        });
      }
    };
    
    document.head.appendChild(script);
    
    return () => {
      // Clean up on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="book-call" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-700 text-lg mb-8">
          Let's discuss how we can transform your business operations
        </p>
        
        {/* Mobile-optimized container */}
        <div className="w-full max-w-4xl mx-auto">
          <div 
            id="my-cal-inline" 
            ref={calendarRef}
            style={{
              minHeight: "600px",
              width: "100%",
              overflow: "hidden",
              borderRadius: "8px"
            }}
            data-mobile-ready="true"
          ></div>
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