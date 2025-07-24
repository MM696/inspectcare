import { useNavigate } from "react-router-dom";
import "./dashboard.css"; 

function Dashboard() {
  const navigate = useNavigate();
  console.log("Dashboard mounted");

  return (
    <div className="dashboard-container">
      {/* Navigation Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <button onClick={() => navigate(-1)} className="nav-button">
          ⬅ Back
        </button>
        <button onClick={() => navigate("/")} className="nav-button">
          🏠 Home
        </button>
      </div>

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
          onClick={() => navigate("/BookAppointmentpage")}
        >
          Doctors
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
