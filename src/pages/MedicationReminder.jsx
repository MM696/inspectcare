<<<<<<< HEAD
import React, { useState } from "react";
import "./medication.css";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const token = localStorage.getItem('token');

  const handleSave = (e) => {
    e.preventDefault();
    fetch('https://health-inspector.onrender.com/med/create', {
      method:'POST',
      body: JSON.stringify(formData),
      headers:{
        'Content-Type':'application/json',
        Authorization:'Bearer '+token
      },
      credentials:"include"
    })
   .then((res) => {
    alert("Medication Saved!");
    
    localStorage.setItem("medication", JSON.stringify(formData));
    alert("Medication Saved!");
   });
  };

  const handlePrev = () => {
    console.log("Previous page");
  };

  const handleNext = () => {
    console.log("Next page");
  };

  return (
    <div className="medication-container">
      <button className="nav-button left-button" onClick={handlePrev}>
        ←
      </button>
      <button className="nav-button right-button" onClick={handleNext}>
        →
      </button>

      <h1>
        <img src="no image found" alt="med-icon" /> Medication
      </h1>

      <form onSubmit={handleSave}>
        <div className="medication-form">
          <input
            name="medicationName"
            onChange={handleChange}
            value={formData.medicationName}
            placeholder="Medication Name"
          />
          <input
            name="prescribingDoctor"
            onChange={handleChange}
            value={formData.prescribingDoctor}
            placeholder="Prescribing Doctor"
          />
          <input
            name="dosage"
            onChange={handleChange}
            value={formData.dosage}
            placeholder="Dosage"
          />
        </div>
        <div className="medication-form">
          <input
            name="timeOfDay"
            onChange={handleChange}
            value={formData.timeOfDay}
            placeholder="Time of the day"
          />
          <input
            type="date"
            name="startDate"
            onChange={handleChange}
            value={formData.startDate}
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
          />
          <input
            name="medicationLocation"
            onChange={handleChange}
            value={formData.medicationLocation}
            placeholder="Medication Location"
          />
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

        <textarea
          name="instructions"
          onChange={handleChange}
          value={formData.instructions}
          placeholder="Instructions"
        />

        <div className="button-group">
          <button type="submit" className="save-btn">
            Save
          </button>
          <button type="button" className="update-btn">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default MedicationReminder;
=======
import React, { useState } from "react";
import "./medication.css";

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

  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/med/create", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to save medication");
        return res.json();
      })
      .then((data) => {
        alert("Medication Saved!");
        console.log(data);
      })
      .catch((err) => {
        alert("Error saving medication: " + err.message);
      });
  };

  const handlePrev = () => {
    console.log("Previous page");
  };

  const handleNext = () => {
    console.log("Next page");
  };

  return (
    <div className="medication-container">
      <button className="nav-button left-button" onClick={handlePrev}>
        ←
      </button>
      <button className="nav-button right-button" onClick={handleNext}>
        →
      </button>

      <h1>
        <img src="no image found" alt="med-icon" /> Medication
      </h1>

      <form onSubmit={handleSave}>
        <div className="medication-form">
          <input
            name="medicationName"
            onChange={handleChange}
            value={formData.medicationName}
            placeholder="Medication Name"
          />
          <input
            name="prescribingDoctor"
            onChange={handleChange}
            value={formData.prescribingDoctor}
            placeholder="Prescribing Doctor"
          />
          <input
            name="dosage"
            onChange={handleChange}
            value={formData.dosage}
            placeholder="Dosage"
          />
        </div>
        <div className="medication-form">
          <input
            name="timeOfDay"
            onChange={handleChange}
            value={formData.timeOfDay}
            placeholder="Time of the day"
          />
          <input
            type="date"
            name="startDate"
            onChange={handleChange}
            value={formData.startDate}
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
          />
          <input
            name="medicationLocation"
            onChange={handleChange}
            value={formData.medicationLocation}
            placeholder="Medication Location"
          />
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

        <textarea
          name="instructions"
          onChange={handleChange}
          value={formData.instructions}
          placeholder="Instructions"
        />

        <div className="button-group">
          <button type="submit" className="save-btn">
            Save
          </button>
          <button type="button" className="update-btn">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default MedicationReminder;
>>>>>>> 24e08b35400381a0e33233aeeeef9a5c4db3d9be
