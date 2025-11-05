import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import flexisafLogo from "../assets/flexisaf-logo1.png";
import doctorImage from "../assets/mission-img.jpg";

const MedicationSummary = () => {
  const [medication, setMedication] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("medication");
    if (stored) {
      setMedication(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col lg:flex-row relative overflow-hidden">
      <div className="absolute inset-0 bg-grain-texture pointer-events-none"></div>

      {/* Left panel */}
      <div className="flex-1 glass-card border-r border-white/20 flex flex-col items-center justify-center px-6 py-8 relative z-10 animate-fade-in-up text-blue-500">
        <img
          src={flexisafLogo}
          alt="InspectCare"
          className="w-48 sm:w-56 md:w-64 lg:w-72 rounded-2xl shadow-2xl object-contain mb-4"
        />
        <h1 className="text-4xl font-extrabold font-inter text-shadow mb-3 text-center">
          Medication Summary
        </h1>
        <p className="text-center max-w-sm">
          Review your saved medication details, dosage guidance, and alert setup so you stay consistent.
        </p>
        <div className="flex gap-4 mt-6 flex-wrap justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-3 border border-blue-400/60 text-blue-500 bg-blue-600/20 rounded-xl hover:bg-blue-600/30 transition-all duration-300"
          >
            ⬅ Back
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-5 py-3 border border-blue-400/60 text-blue-500 bg-blue-600/20 rounded-xl hover:bg-blue-600/30 transition-all duration-300"
          >
            🏠 Dashboard
          </button>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 bg-white/5 backdrop-blur-lg flex items-center justify-center relative z-10">
        <div
          className="glass-card w-full max-w-3xl animate-fade-in-up text-blue-500 px-6 py-8"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="glass-card border border-blue-400/40 rounded-2xl px-6 py-6 space-y-3 w-full">
              <p className="text-sm uppercase tracking-wide text-blue-400">
                Your regimen snapshot
              </p>
              <h2 className="text-3xl font-extrabold font-inter">
                Here is what we have on record
              </h2>
              <p className="text-blue-400">
                Keep these details handy and share them with your care provider so you always stay aligned on treatment.
              </p>
              <p className="text-sm text-blue-300">
                Last updated: {medication?.updatedAt ? new Date(medication.updatedAt).toLocaleString() : "Not available"}
              </p>
            </div>
          </div>

          <div className="mt-8">
            {medication ? (
              <div className="glass-card border border-blue-400/40 rounded-2xl px-6 py-6 space-y-4">
                <ul className="space-y-3 text-sm">
                  <li>
                    <strong className="text-blue-200">Medication Name:</strong> {medication.medicationName}
                  </li>
                  <li>
                    <strong className="text-blue-200">Dosage:</strong> {medication.dosage}
                  </li>
                  <li>
                    <strong className="text-blue-200">Frequency:</strong> {medication.frequency}
                  </li>
                  <li>
                    <strong className="text-blue-200">Prescribing Doctor:</strong> {medication.prescribingDoctor}
                  </li>
                  <li>
                    <strong className="text-blue-200">Time of Day:</strong> {medication.timeOfDay}
                  </li>
                  <li>
                    <strong className="text-blue-200">Start Date:</strong> {medication.startDate}
                  </li>
                  <li>
                    <strong className="text-blue-200">End Date:</strong> {medication.endDate}
                  </li>
                  <li>
                    <strong className="text-blue-200">Medication Location:</strong> {medication.medicationLocation}
                  </li>
                  <li>
                    <strong className="text-blue-200">Alert Type:</strong> {medication.alertType}
                  </li>
                  <li>
                    <strong className="text-blue-200">Instructions:</strong> {medication.instructions}
                  </li>
                </ul>
              </div>
            ) : (
              <p className="text-blue-400 text-center">No medication data found. Create a reminder to see it here.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicationSummary;
