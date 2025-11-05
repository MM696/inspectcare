import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import flexisafLogo from "../assets/flexisaf-logo1.png";

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
    <div className="min-h-screen bg-gradient-hero flex flex-col lg:flex-row relative overflow-hidden">
      <div className="absolute inset-0 bg-grain-texture pointer-events-none"></div>

      {/* Left panel */}
      <div className="flex-1 glass-card border-r border-white/20 flex flex-col items-center justify-center px-6 py-8 relative z-10 animate-fade-in-up">
        <img
          src={flexisafLogo}
          alt="InspectCare"
          className="w-48 sm:w-56 md:w-64 lg:w-72 rounded-2xl shadow-2xl object-contain mb-4"
        />
        <h1 className="text-4xl font-extrabold text-blue-500 font-inter text-shadow mb-3 text-center">
          Symptom Checker
        </h1>
        <p className="text-blue-500 text-center max-w-sm">
          Select the signs you are experiencing so we can estimate your risk and suggest the next best step.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-5 py-3 border border-blue-400/60 text-blue-500 bg-blue-600/20 rounded-xl hover:bg-blue-600/30 transition-all duration-300"
        >
          ⬅ Back
        </button>
      </div>

      {/* Right panel */}
      <div className="flex-1 bg-white/5 backdrop-blur-lg flex items-center justify-center px-6 py-8 relative z-10">
        <div
          className="glass-card w-full max-w-4xl animate-fade-in-up text-blue-500"
          style={{ animationDelay: "0.4s" }}
        >
          <h2 className="text-3xl font-extrabold text-blue-500 mb-2 text-center font-inter">
            Tell Us About Your Symptoms
          </h2>
          <p className="text-blue-400 text-center mb-8">
            Complete the quick assessment below. You can change your answers at any time.
          </p>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                  Select your gender
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Male", value: "Male" },
                    { label: "Female", value: "Female" },
                  ].map((option) => {
                    const isActive = gender === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setGender(option.value)}
                        className={`px-4 py-3 rounded-xl border transition-all duration-300 ${
                          isActive
                            ? "border-blue-200 bg-blue-600 text-blue-50 shadow-lg"
                            : "border-blue-400/40 bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                  How old are you?
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Enter age"
                  className="glass-input w-full border border-blue-400/50 rounded-xl px-4 py-3 bg-blue-500/10 text-blue-500 placeholder:text-blue-200/70 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                Please select the symptoms or signs you are experiencing
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {symptomData.map((symptom) => {
                  const isSelected = selectedSymptoms.includes(symptom.name);
                  return (
                    <button
                      key={symptom.name}
                      type="button"
                      onClick={() => toggleSymptom(symptom.name)}
                      className={`glass-card border rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                        isSelected
                          ? "border-blue-200 bg-blue-600 text-blue-50 shadow-lg"
                          : "border-blue-400/40 bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
                      }`}
                    >
                      {symptom.name}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                  How long does each episode last?
                </label>
                <input
                  type="text"
                  value={episodeDuration}
                  onChange={(e) => setEpisodeDuration(e.target.value)}
                  placeholder="E.g. 1 hour, 2 days"
                  className="glass-input w-full border border-blue-400/50 rounded-xl px-4 py-3 bg-blue-500/10 text-blue-500 placeholder:text-blue-200/70 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                  Family history of cardiovascular disease?
                </label>
                <input
                  type="text"
                  value={familyHistory}
                  onChange={(e) => setFamilyHistory(e.target.value)}
                  placeholder="Yes / No"
                  className="glass-input w-full border border-blue-400/50 rounded-xl px-4 py-3 bg-blue-500/10 text-blue-500 placeholder:text-blue-200/70 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-blue-400 text-sm">
                Selected symptoms: {selectedSymptoms.length} / {symptomData.length}
              </p>
              <button
                type="button"
                onClick={handleGetResult}
                className="px-8 py-3 border-2 border-blue-400/60 rounded-xl text-blue-100 bg-blue-600 hover:bg-blue-700 hover:text-blue-50 transition-all duration-300"
              >
                Get Result
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Symptoms;
