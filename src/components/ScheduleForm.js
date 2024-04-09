import React, { useState } from 'react';
import './ScheduleForm.css';

function ScheduleForm() {
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const eventDetails = `${date} at ${time} - ${service}`;
    setUpcomingEvents((prevEvents) => [...prevEvents, eventDetails]);
    setService('');
    setDate('');
    setTime('');
  };

  return (
    <div className="schedule-form-container">
      <h2 className="schedule-form-title">Schedule Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Service:
            <input type="text" className="schedule-form-input" value={service} onChange={(e) => setService(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Date:
            <input type="date" className="schedule-form-input" value={date} onChange={(e) => setDate(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Time:
            <input type="time" className="schedule-form-input" value={time} onChange={(e) => setTime(e.target.value)} />
          </label>
        </div>
        <button type="submit" className="schedule-form-button">Schedule</button>
      </form>
      <div className="upcoming-events-container">
        <h3>Upcoming Events</h3>
        <ul>
          {upcomingEvents.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ScheduleForm;
