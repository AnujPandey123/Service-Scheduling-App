import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <ul class='lsit'>
        <li><Link to="/schedule-form">Schedule Form</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/notification">Notification</Link></li>
        <li><Link to="/roster-management">Roster Management</Link></li>
        <li><Link to="/mobile-friendly">Mobile Friendly</Link></li>
        <li><Link to="/gps-tracking">GPS Tracking</Link></li>
        <li><Link to="/picture-upload">Picture Upload</Link></li>
        <li><Link to="/digital-signature">Digital Signature</Link></li>
        <li><Link to="/client-feedback">Client Feedback</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
