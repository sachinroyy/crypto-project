import { useState, useEffect } from "react";
import axios from "axios";

const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("https://crypto-venture-backend.onrender.com/api/event");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-[#5E65DC] p-6">
      <h1 className="text-4xl font-bold text-center text-[#0F1023] mb-8">
        Discover Upcoming Events 🌟
      </h1>

      {events.length === 0 ? (
        <p className="text-center text-gray-600">Loading events...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={event.EventImage}
                alt={event.EventName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {event.EventName}
                </h2>
                <p className="text-gray-600 mb-2">{event.EventLocation}</p>
                <p className="text-sm text-gray-500 mb-4">
                  {new Date(event.EventStartDate).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                  })}{" "}
                  -{" "}
                  {new Date(event.EventEndDate).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                  })}
                </p>
                <a
                  href={event.EventLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline font-semibold"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Event;
