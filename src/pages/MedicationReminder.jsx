import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MedicationReminder = () => {
  const [formData, setFormData] = useState({
    medicationName: "",
    dosage: "",
    frequency: "",
    timeOfDay: "",
    startDate: "",
    endDate: "",
  });

  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://health-inspector.onrender.com/med/create", {
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

  return (
    <div className="flex bg-gradient-to-b from-blue-100 via-white to-blue-50 min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex flex-col items-center justify-center flex-1 p-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">
              Medication Reminder
            </h2>
            <input
              type="text"
              name="medicationName"
              value={formData.medicationName}
              onChange={handleChange}
              placeholder="Medication Name"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="dosage"
              value={formData.dosage}
              onChange={handleChange}
              placeholder="Dosage (e.g., 500mg)"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              placeholder="Frequency (e.g., twice a day)"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="timeOfDay"
              value={formData.timeOfDay}
              onChange={handleChange}
              placeholder="Time of Day (e.g., 8AM & 8PM)"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <label className="block mb-1 font-semibold">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <label className="block mb-1 font-semibold">End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Set Reminder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MedicationReminder;
