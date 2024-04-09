import React, { useState, useEffect } from 'react';
import './Notification.css';

function Notification({ message }) {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    const newNotification = {
      id: new Date().getTime(),
      message: message
    };
    setNotifications([...notifications, newNotification]);
    setTimeout(() => removeNotification(newNotification.id), 5000);
  };

  const removeNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  useEffect(() => {
    if (message) {
      addNotification(message);
    }
  }, [message]);

  return (
    <div>
      <h2>Notifications</h2>
      <div>
        {notifications.map(notification => (
          <div key={notification.id} className="notification">
            <p>{notification.message}</p>
            <button onClick={() => removeNotification(notification.id)}>Dismiss</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notification;
