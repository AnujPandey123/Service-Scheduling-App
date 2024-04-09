import React from 'react';
import './MobileFriendly.css';
function MobileFriendly() {
  return (
    <div>
      <h2>Mobile Friendly Adjustments</h2>
      <p>This app is designed to be responsive and mobile-friendly.</p>
      <p>Here are some adjustments made for mobile devices:</p>
      <ul>
        <li>Responsive layout: Elements adjust their size and position based on screen size.</li>
        <li>Touch-friendly: Buttons and other interactive elements are easy to tap on touch screens.</li>
        <li>Viewport meta tag: The viewport is configured to scale the content properly on mobile devices.</li>
        <li>Media queries: CSS rules adjust styling based on screen size breakpoints.</li>
      </ul>
    </div>
  );
}

export default MobileFriendly;
