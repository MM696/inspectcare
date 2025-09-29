import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MedicationReminder() {
  const [formData, setFormData] = useState({
    medicationName: "",
    prescribingDoctor: "",
    dosage: "",
    timeOfDay: "",
    startDate: "",
    frequency: "",
    endDate: "",
    medicationLocation: "",
    alertType: "push",
    instructions: "",
  });

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { medicationName, startDate, endDate, prescribingDoctor, dosage } =
      formData;

    if (
      !medicationName ||
      !startDate ||
      !endDate ||
      !prescribingDoctor ||
      !dosage
    ) {
      alert("Please fill in all required fields.");
      return false;
    }

    if (endDate < startDate) {
      alert("End date cannot be before start date.");
      return false;
    }

    return true;
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    fetch("https://health-inspector.onrender.com/med/create", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Medication Saved!");
        console.log(data);
        navigate("/dashboard");
      })
      .catch((error) => console.error("Save error:", error));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    fetch("https://health-inspector.onrender.com/med/update", {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Medication Updated!");
        console.log(data);
      })
      .catch((error) => console.error("Update error:", error));
  };

  const handlePrev = () => {
    navigate("/dashboard");
  };

  return (
    <div className="medication-container">
      {/* Top Back Button */}
      <div className="top-nav">
        <button className="nav-button" onClick={handlePrev}>
          ← Back to Dashboard
        </button>
      </div>

      <h1 className="med-header">
        <span role="img" aria-label="pill">
          💊
        </span>{" "}
        Medication Reminder
      </h1>

      <form onSubmit={handleSave}>
        <div className="medication-form">
          <input
            name="medicationName"
            onChange={handleChange}
            value={formData.medicationName}
            placeholder="Medication Name"
            required
          />
          <input
            name="prescribingDoctor"
            onChange={handleChange}
            value={formData.prescribingDoctor}
            placeholder="Prescribing Doctor"
            required
          />
          <input
            name="dosage"
            onChange={handleChange}
            value={formData.dosage}
            placeholder="Dosage"
            required
          />
        </div>

        <div className="medication-form">
          <input
            name="timeOfDay"
            onChange={handleChange}
            value={formData.timeOfDay}
            placeholder="Time of Day"
          />
          <input
            type="date"
            name="startDate"
            onChange={handleChange}
            value={formData.startDate}
            required
          />
          <input
            name="frequency"
            onChange={handleChange}
            value={formData.frequency}
            placeholder="Frequency"
          />
        </div>

        <div className="medication-form">
          <input
            type="date"
            name="endDate"
            onChange={handleChange}
            value={formData.endDate}
            required
          />
          <input
            name="medicationLocation"
            onChange={handleChange}
            value={formData.medicationLocation}
            placeholder="Medication Location"
          />
          <div className="select-group">
            <label>Alert Type:</label>
            <select
              name="alertType"
              value={formData.alertType}
              onChange={handleChange}
            >
              <option value="push">Push Notification</option>
              <option value="email">Email</option>
              <option value="sms">SMS</option>
            </select>
          </div>
        </div>

        <textarea
          name="instructions"
          onChange={handleChange}
          value={formData.instructions}
          placeholder="Special Instructions"
        />

        <div className="button-group">
          <button type="submit" className="save-btn">
            Save
          </button>
          <button type="button" className="update-btn" onClick={handleUpdate}>
            Update
          </button>
          <button type="reset" className="reset-btn">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default MedicationReminder;
