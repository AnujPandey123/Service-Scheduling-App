import React, { useState } from 'react';
import './RosterManagement.css';

function RosterManagement() {
  const [technicians, setTechnicians] = useState([]);

  // Function to add a new technician
  const addTechnician = (name, availability) => {
    const newTechnician = {
      id: new Date().getTime(),
      name: name,
      availability: availability
    };
    setTechnicians([...technicians, newTechnician]);
  };

  // Function to remove a technician
  const removeTechnician = (id) => {
    const confirmed = window.confirm('Are you sure you want to remove this technician?');
    if (confirmed) {
      setTechnicians(technicians.filter(technician => technician.id !== id));
    }
  };

  return (
    <div className="roster-management-container">
      <h2>Roster Management</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const availability = e.target.availability.value;
        addTechnician(name, availability);
        e.target.reset();
      }}>
        <label>
          Technician Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Availability:
          <input type="text" name="availability" required />
        </label>
        <button type="submit">Add Technician</button>
      </form>
      <div>
        <h3>Technicians:</h3>
        <ul>
          {technicians.map(technician => (
            <li key={technician.id}>
              {technician.name} - {technician.availability}
              <button onClick={() => removeTechnician(technician.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RosterManagement;
