import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/symptoms.css";

const ResultPage = ({ selectedSymptoms, score, severity }) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>InspectCare</h1>

      <div className="result-header">
        <button className="result-button">RESULT</button>
      </div>

      <div className="result-summary">
        <h2>Based on your selections, here’s what we found:</h2>
        <ul>
          {selectedSymptoms.length > 0 ? (
            selectedSymptoms.map((symptom, index) => (
              <li key={index}>
                <strong>{symptom}</strong>
              </li>
            ))
          ) : (
            <li>No symptoms selected.</li>
          )}
        </ul>
        <p className="severity-level">
          Severity Level: <strong>{severity}</strong>
        </p>
        <p>
          Total Score: <strong>{score}</strong>
        </p>
      </div>

      <div className="card warning-card">
        <h3>⚠️ Possible indications of Cardiovascular issues</h3>
        <p>
          <strong>
            If you selected symptoms like chest pain, abnormal ECG, or murmurs,
          </strong>{" "}
          these can be signs of underlying heart problems.
        </p>
        <p>
          <strong>Warning:</strong> These symptoms should never be ignored.
          Please seek medical attention promptly.
        </p>
      </div>

      <div className="footer-note">
        <small>
          🔹 Important Reminder: This app is a screening tool and does not
          replace professional medical advice. If you’re experiencing severe
          symptoms like chest pain, shortness of breath at rest, fainting, or
          cold sweats, call emergency services immediately.
        </small>
      </div>

      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <button
          className="get-result-button"
          onClick={() => navigate("/symptoms")}
        >
          Back to Symptom Checker
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
