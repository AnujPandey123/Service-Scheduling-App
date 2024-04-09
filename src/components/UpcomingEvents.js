import React from 'react';
import './UpcomingEvents.css';

function UpcomingEvents({ events }) {
  return (
    <div className="upcoming-events-container">
      <h3>Upcoming Events:</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <p>{event.service}</p>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpcomingEvents;