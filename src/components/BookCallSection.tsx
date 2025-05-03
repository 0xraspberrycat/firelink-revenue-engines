
import { BookerEmbed } from "@calcom/atoms";

type BookerProps = {
  eventTypeSlug?: string;
  calUsername?: string;
};

const BookCallSection = () => {
  const eventSlug = "intro"; // Your Cal.com event slug
  const calUsername = "team/firelink"; // Your Cal.com username or team name
  
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-6">
        <BookerEmbed
          eventSlug={eventSlug}
          view="month_view"
          username={calUsername}
          customClassNames={{
            bookerContainer: "border-subtle border",
          }}
          onCreateBookingSuccess={() => {
            console.log("booking created successfully");
          }}
        />
      </div>
    </div>
  );
};

export default BookCallSection;
