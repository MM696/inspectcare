import React, { useEffect, useState } from "react";
import "./MedicationSummary.css";

const MedicationSummary = () => {
  const [medication, setMedication] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("medication");
    if (stored) {
      setMedication(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="medication-summary-container">
      <button className="nav-button left">←</button>

      <h1 className="title">Medication</h1>

      {medication ? (
        <div className="summary-box">
          <ul className="summary-list">
            <li>
              <strong>Medication Name:</strong> {medication.medicationName}
            </li>
            <li>
              <strong>Dosage:</strong> {medication.dosage}
            </li>
            <li>
              <strong>Frequency:</strong> {medication.frequency}
            </li>
            <li>
              <strong>Prescribing Doctor:</strong>{" "}
              {medication.prescribingDoctor}
            </li>
            <li>
              <strong>Time of Day:</strong> {medication.timeOfDay}
            </li>
            <li>
              <strong>Start Date:</strong> {medication.startDate}
            </li>
            <li>
              <strong>End Date:</strong> {medication.endDate}
            </li>
            <li>
              <strong>Medication Location:</strong>{" "}
              {medication.medicationLocation}
            </li>
            <li>
              <strong>Alert Type:</strong> {medication.alertType}
            </li>
            <li>
              <strong>Instructions:</strong> {medication.instructions}
            </li>
          </ul>
        </div>
      ) : (
        <p>No medication data found.</p>
      )}

      <button className="nav-button right">→</button>
    </div>
  );
};

export default MedicationSummary;
