import React, { useState, useEffect } from 'react';
import './Calendar.css';
import ScheduleForm from './ScheduleForm';
import UpcomingEvents from './UpcomingEvents';
import Notification from './Notification';

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEventPopup, setShowEventPopup] = useState(null);

  const getDaysArray = (year, month) => {
    const numDays = new Date(year, month + 1, 0).getDate();
    const days = Array.from({ length: numDays }, (_, i) => new Date(year, month, i + 1));
    const eventsForDays = days.map(day => {
      const eventsForDay = events.filter(event => new Date(event.date).setHours(0, 0, 0, 0) === new Date(day).setHours(0, 0, 0, 0));
      return { day, eventsForDay };
    });
    return eventsForDays;
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
    const eventsForDay = events.filter(event => new Date(event.date).setHours(0, 0, 0, 0) === new Date(day).setHours(0, 0, 0, 0));
    setSelectedEvents(eventsForDay);
    setShowModal(true);
  };

  const handleSchedule = (eventDetails) => {
    const formattedDate = selectedDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const newEvent = { ...eventDetails, date: formattedDate };
    setEvents([...events, newEvent]);
  };
  
  useEffect(() => {
    const checkUpcomingEvents = () => {
      const currentTime = new Date(); // Current system date and time
      const upcomingEvent = events.find(
        (event) => new Date(event.date + 'T' + event.time).getTime() === currentTime.getTime()
      );
      if (upcomingEvent) {
        setShowEventPopup(upcomingEvent);
        setEvents(events.filter((event) => event !== upcomingEvent));
      }
    };
    checkUpcomingEvents();
    const interval = setInterval(checkUpcomingEvents, 60000);
    return () => clearInterval(interval);
  }, [events]);

  const addNotification = (message) => {
    const newNotification = {
      id: new Date().getTime(),
      message: message
    };
    setUpcomingEvents([...upcomingEvents, newNotification]);
    setTimeout(() => removeNotification(newNotification.id), 5000);
  };

  const removeNotification = (id) => {
    setUpcomingEvents(upcomingEvents.filter(notification => notification.id !== id));
  };

  const clearUpcomingEvents = () => {
    setUpcomingEvents([]);
  };

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const daysArray = getDaysArray(currentYear, currentMonth);

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Calendar</h2>
      <div>
        <h3>{currentDate.toLocaleString('default', { month: 'long' })} {currentYear}</h3>
        <div className="calendar-days-container">
          {daysArray.map(({ day, eventsForDay }) => (
            <div
              key={day.getTime()}
              onClick={() => handleDateClick(day)}
              className={`calendar-date-box ${selectedDate && day.toDateString() === selectedDate.toDateString() ? 'selected' : ''} ${eventsForDay.length > 0 ? 'has-event' : ''}`}
            >
              {day.getDate()}
              {eventsForDay.length > 0 && (
                <div className="event-count">{eventsForDay.length}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="scheduled-events-container">
        <h3>Scheduled Events:</h3>
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
      <ScheduleForm setEvents={setEvents} />
      <UpcomingEvents events={upcomingEvents} />
      <Notification scheduledEvents={events} />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Events on {selectedDate && selectedDate.toDateString()}:</h2>
            <ul>
              {selectedEvents.map((event, index) => (
                <li key={index}>
                  <p>{event.service}</p>
                  <p>Date: {event.date}</p>
                  <p>Time: {event.time}</p>
                </li>
              ))}
            </ul>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
      {showEventPopup && (
        <div className="event-popup">
          <h2>Upcoming Event:</h2>
          <p>Service: {showEventPopup.service}</p>
          <p>Date: {showEventPopup.date}</p>
          <p>Time: {showEventPopup.time}</p>
          <button onClick={() => setShowEventPopup(null)}>Close</button>
        </div>
      )}
      <div>
        <button onClick={clearUpcomingEvents}>Clear Upcoming Events</button>
      </div>
    </div>
  );
}

export default Calendar;
