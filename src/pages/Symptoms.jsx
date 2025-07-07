import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./symptoms.css";

const symptomData = [
  { name: "Chest pain", score: 30 },
  { name: "Shortness of breath", score: 30 },
  { name: "Rapid heartbeat", score: 30 },
  { name: "Cold sweats", score: 30 },
  { name: "Shoulder/Arm pain", score: 30 },
  { name: "Jaw/Neck pain", score: 30 },
  { name: "Dizziness", score: 30 },
  { name: "Nausea", score: 30 },
  { name: "Changes in ECG", score: 30 },
  { name: "High blood pressure", score: 25 },
  { name: "Unusual fatigue", score: 25 },
  { name: "Persistent cough", score: 25 },
  { name: "Swollen ankles", score: 25 },
  { name: "Heart murmur", score: 15 },
  { name: "Abnormal ECG", score: 15 },
];

function Symptoms({ setScore, setSeverity, setSelectedSymptoms }) {
  const [selectedSymptoms, updateSelectedSymptoms] = useState([]);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [episodeDuration, setEpisodeDuration] = useState("");
  const [familyHistory, setFamilyHistory] = useState("");

  const navigate = useNavigate();

  const toggleSymptom = (name) => {
    updateSelectedSymptoms((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };

  const handleGetResult = () => {
    const total = selectedSymptoms.reduce((acc, symptom) => {
      const found = symptomData.find((s) => s.name === symptom);
      return acc + (found ? found.score : 0);
    }, 0);

    const severityLevel =
      total >= 100
        ? "Severe"
        : total >= 70
        ? "Moderate"
        : total > 0
        ? "Mild"
        : "None";

    setScore(total);
    setSeverity(severityLevel);
    setSelectedSymptoms(selectedSymptoms);
    navigate("/result");
  };

  return (
    <div className="container">
      <h1>InspectCare</h1>

      <div>
        <label>Select your gender:</label>
        <div className="button-group">
          <button
            className={gender === "Male" ? "active" : ""}
            onClick={() => setGender("Male")}
          >
            Male
          </button>
          <button
            className={gender === "Female" ? "active" : ""}
            onClick={() => setGender("Female")}
          >
            Female
          </button>
        </div>
      </div>

      <div>
        <label>How old are you?</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter age"
        />
      </div>

      <div>
        <h2>Please select the symptoms or signs you are experiencing</h2>
        <div className="symptom-grid">
          {symptomData.map((symptom, idx) => (
            <button
              key={idx}
              className={`symptom-button ${
                selectedSymptoms.includes(symptom.name) ? "active" : ""
              }`}
              onClick={() => toggleSymptom(symptom.name)}
            >
              {symptom.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label>How long does each episode last?</label>
        <input
          type="text"
          value={episodeDuration}
          onChange={(e) => setEpisodeDuration(e.target.value)}
          placeholder="E.g 1 hour, 2 days"
        />
      </div>

      <div>
        <label>Any history of cardiovascular disease in your family?</label>
        <input
          type="text"
          value={familyHistory}
          onChange={(e) => setFamilyHistory(e.target.value)}
          placeholder="Yes/No"
        />
      </div>

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <button className="get-result-button" onClick={handleGetResult}>
          Get Result
        </button>
      </div>
    </div>
  );
}

export default Symptoms;
