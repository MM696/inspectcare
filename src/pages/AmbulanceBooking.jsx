import React, { useState } from "react";
import "./ambulance.css"; // Make sure this file exists
import ambulance from "../assets/ambulance.jpg";

const AmbulanceBooking = () => {
  const [location, setLocation] = useState("");
  const [emergencyType, setEmergencyType] = useState("");

  const handleBooking = () => {
    if (!location || !emergencyType) {
      alert("Please fill in all fields before booking.");
      return;
    }
    alert(
      `🚑 Ambulance has been called to ${location} for ${emergencyType} emergency.`
    );
  };

  return (
    <div className="ambulance-container">
      <h1>Ambulance</h1>
      <img src={ambulance} alt="ambulance" className="ambulance-image" />

      <input
        className="ambulance-input"
        type="text"
        placeholder="Enter your location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <select
        className="ambulance-select"
        value={emergencyType}
        onChange={(e) => setEmergencyType(e.target.value)}
      >
        <option value="">Select Emergency Type</option>
        <option value="Cardiac Arrest">Cardiac Arrest</option>
        <option value="Accident/Injury">Accident/Injury</option>
        <option value="Stroke">Stroke</option>
        <option value="Other">Other</option>
      </select>

      <button className="ambulance-button" onClick={handleBooking}>
        Call Ambulance Now
      </button>
    </div>
  );
};

export default AmbulanceBooking;
