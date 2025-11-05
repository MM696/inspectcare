import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import flexisafLogo from "../assets/flexisaf-logo1.png";

const emergencyOptions = [
  "Cardiac Arrest",
  "Accident/Injury",
  "Stroke",
  "Respiratory Distress",
  "Other",
];

const AmbulanceBooking = () => {
  const [location, setLocation] = useState("");
  const [emergencyType, setEmergencyType] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const navigate = useNavigate();

  const handleBooking = () => {
    if (!location || !emergencyType) {
      alert("Please provide your location and select an emergency type before booking.");
      return;
    }

    alert(
      `🚑 Ambulance is on its way to ${location} for a ${emergencyType} emergency. Stay calm and keep your phone close.`
    );
  };

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
          Request Emergency Help
        </h1>
        <p className="text-center max-w-sm">
          Our dispatch team is available 24/7. Share your location and the nature of the emergency so help arrives fast.
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
      <div className="flex-1 bg-white/5 backdrop-blur-lg flex items-center justify-center px-6 py-8 relative z-10">
        <div
          className="glass-card w-full max-w-3xl animate-fade-in-up text-blue-500"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="space-y-3 mb-8">
            <p className="text-sm uppercase tracking-wide text-blue-400">
              Rapid response
            </p>
            <h2 className="text-3xl font-extrabold font-inter">
              Provide details so we can dispatch quickly
            </h2>
            <p className="text-blue-400">
              Keep calm, describe the situation clearly, and remain reachable. Our team will contact you if we need more information.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wide text-blue-400">
                Where should the ambulance go?
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter your current location"
                className="glass-input w-full border border-blue-400/50 rounded-xl px-4 py-3 bg-blue-500/10 text-blue-500 placeholder:text-blue-200/70 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wide text-blue-400">
                What type of emergency is this?
              </label>
              <select
                value={emergencyType}
                onChange={(e) => setEmergencyType(e.target.value)}
                className="glass-input w-full border border-blue-400/50 rounded-xl px-4 py-3 bg-blue-500/10 text-blue-500 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select emergency type</option>
                {emergencyOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wide text-blue-400">
                Additional details (optional)
              </label>
              <textarea
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                rows={3}
                placeholder="E.g. patient age, condition, nearby landmarks"
                className="glass-input w-full border border-blue-400/50 rounded-2xl px-4 py-3 bg-blue-500/10 text-blue-500 placeholder:text-blue-200/70 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleBooking}
                className="px-8 py-3 border-2 border-blue-400/60 rounded-xl text-blue-100 bg-blue-600 hover:bg-blue-700 hover:text-blue-50 transition-all duration-300"
              >
                Call Ambulance Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbulanceBooking;
