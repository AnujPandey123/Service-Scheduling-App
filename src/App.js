import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Calendar from './components/Calendar';
import ScheduleForm from './components/ScheduleForm';
import Notification from './components/Notification';
import RosterManagement from './components/RosterManagement';
import MobileFriendly from './components/MobileFriendly';
import GPSTracking from './components/GPSTracking';
import PictureUpload from './components/PictureUpload';
import DigitalSignature from './components/DigitalSignature';
import ClientFeedback from './components/ClientFeedback';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/schedule-form" element={<ScheduleForm />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/roster-management" element={<RosterManagement />} />
          <Route path="/mobile-friendly" element={<MobileFriendly />} />
          <Route path="/gps-tracking" element={<GPSTracking />} />
          <Route path="/picture-upload" element={<PictureUpload />} />
          <Route path="/digital-signature" element={<DigitalSignature />} />
          <Route path="/client-feedback" element={<ClientFeedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
