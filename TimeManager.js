import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './TimeManager.css'; // Import your custom CSS

const localizer = momentLocalizer(moment);

const TimeManager = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: new Date(),
    end: new Date()
  });

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      setEvents([
        ...events,
        {
          start,
          end,
          title
        }
      ]);
    }
  };

  const handleDelete = (event) => {
    setEvents(events.filter(e => e !== event));
  };

  return (
    <div className="time-manager-container">
      <h1>Time Manager</h1>
      <div className="calendar-container">
        <Calendar
          selectable
          localizer={localizer}
          events={events}
          defaultView="month"
          defaultDate={new Date()}
          style={{ height: 500 }}
          onSelectEvent={(event) => {
            if (window.confirm(`Do you want to delete this event: ${event.title}?`)) {
              handleDelete(event);
            }
          }}
          onSelectSlot={handleSelect}
        />
      </div>
    </div>
  );
};

export default TimeManager;
