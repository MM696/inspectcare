import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1 className="brand-title">InspectCare</h1>

      <div className="dashboard-header">
        <span role="img" aria-label="user" className="user-icon">
          👤
        </span>
        <h2>How Are You Feeling Today?</h2>
      </div>

      <div className="dashboard-grid">
        <button
          className="dashboard-button"
          onClick={() => navigate("/symptoms")}
        >
          Check Symptoms
        </button>
        <button
          className="dashboard-button"
          onClick={() => navigate("/MedicationReminder")}
        >
          Med Reminders
        </button>
        <button
          className="dashboard-button"
          onClick={() => navigate("/BookingConfirmation")}
        >
          Appointments
        </button>
      </div>
      <div className="dashboard-grid 2">
        <button
          className="dashboard-button"
          onClick={() => navigate("/BookAppointmentpage")}
        >
          Doctors
        </button>
        <button
          className="dashboard-button"
          onClick={() => navigate("/MedicationSummary")}
        >
          Check Medications
        </button>
        <button
          className="dashboard-button"
          onClick={() => navigate("/ambulance")}
        >
          Ambulance
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
