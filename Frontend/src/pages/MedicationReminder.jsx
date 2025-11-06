import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import flexisafLogo from "../assets/flexisaf-logo1.png";

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
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "https://inspectcare.onrender.com/api";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { medicationName, startDate, endDate, prescribingDoctor, dosage } =
      formData;

    if (!medicationName || !startDate || !endDate || !prescribingDoctor || !dosage) {
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

    fetch(`${apiBaseUrl}/med/create`, {
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

    fetch(`${apiBaseUrl}/med/update/${id}`, {
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
          Medication Reminder
        </h1>
        <p className="text-center max-w-sm">
          Track your medication schedule, receive alerts, and keep every dose on track.
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
        <form
          onSubmit={handleSave}
          className="glass-card w-full max-w-4xl animate-fade-in-up text-blue-500"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="space-y-3 mb-8">
            <p className="text-sm uppercase tracking-wide text-blue-400">
              Stay on schedule
            </p>
            <h2 className="text-3xl font-extrabold font-inter">
              Set up your medication alerts
            </h2>
            <p className="text-blue-400">
              Log dosage details, alert preferences, storage information, and custom instructions in one place.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "medicationName", placeholder: "Medication Name", required: true },
                { name: "prescribingDoctor", placeholder: "Prescribing Doctor", required: true },
                { name: "dosage", placeholder: "Dosage (e.g. 5mg)", required: true },
              ].map((field) => (
                <input
                  key={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="glass-input w-full border border-blue-400/50 rounded-xl px-4 py-3 bg-blue-500/10 text-blue-500 placeholder:text-blue-200/70 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                name="timeOfDay"
                value={formData.timeOfDay}
                onChange={handleChange}
                placeholder="Preferred time"
                className="glass-input w-full border border-blue-400/50 rounded-xl px-4 py-3 bg-blue-500/10 text-blue-500 placeholder:text-blue-200/70 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="text-sm uppercase tracking-wide text-blue-400">   
                Start Date              
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  className="glass-input w-full border border-blue-400/50 rounded-xl px-4 py-3 bg-blue-500/10 text-blue-500 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
              
              <input
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
                placeholder="No. of times daily"
                className="glass-input w-full border border-blue-400/50 rounded-xl px-4 py-3 bg-blue-500/10 text-blue-500 placeholder:text-blue-200/70 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label className="text-sm uppercase tracking-wide text-blue-400">   
                End Date              
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
                className="glass-input w-full border border-blue-400/50 rounded-xl px-4 py-3 bg-blue-500/10 text-blue-500 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />               
               </label>
              <input
                name="medicationLocation"
                value={formData.medicationLocation}
                onChange={handleChange}
                placeholder="Meds. Location"
                className="glass-input w-full border border-blue-400/50 rounded-xl px-4 py-3 bg-blue-500/10 text-blue-500 placeholder:text-blue-200/70 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-wide text-blue-400">
                  Alert Type
                </label>
                <select
                  name="alertType"
                  value={formData.alertType}
                  onChange={handleChange}
                  className="glass-input w-full border border-blue-400/50 rounded-xl px-4 py-3 bg-blue-500/10 text-blue-500 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="push">Push Notification</option>
                  <option value="email">Email</option>
                  <option value="sms">SMS</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wide text-blue-400">
                Special Instructions
              </label>
              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                rows={4}
                placeholder="Optional notes for taking or storing this medication"
                className="glass-input w-full border border-blue-400/50 rounded-2xl px-4 py-3 bg-blue-500/10 text-blue-500 placeholder:text-blue-200/70 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-wrap gap-4 justify-end">
              <button
                type="submit"
                className="px-6 py-3 border-2 border-blue-400/60 rounded-xl text-blue-100 bg-blue-600 hover:bg-blue-700 hover:text-blue-50 transition-all duration-300"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleUpdate}
                className="px-6 py-3 border-2 border-blue-400/60 rounded-xl text-blue-500 bg-blue-600/20 hover:bg-blue-600/30 transition-all duration-300"
              >
                Update
              </button>
              <button
                type="reset"
                className="px-6 py-3 border-2 border-blue-400/60 rounded-xl text-blue-500 bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300"
              >
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MedicationReminder;
