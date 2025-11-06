import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import flexisafLogo from "../assets/flexisaf-logo1.png";
import doctorImage from "../assets/mission-img1.png";

const BookAppointmentpage = ({ setAppointmentDate, setAppointmentTime }) => {
  const navigate = useNavigate();

  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedTime, setSelectedTime] = useState("8:00AM");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const timeSlots = ["8:00AM", "12:00PM", "4:00AM"];

  const getDaysInMonth = (month, year) => {
    const monthIndex = months.indexOf(month);
    return new Date(year, monthIndex + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);

  const handleBookAppointment = () => {
    const formattedDate = `${selectedMonth} ${selectedDay}, ${selectedYear}`;
    setAppointmentDate(formattedDate);
    setAppointmentTime(selectedTime);
    navigate("/BookingConfirmation");
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
          Book Your Care Team
        </h1>
        <p className="text-center max-w-sm">
          Reserve a session with one of our trusted specialists and stay ahead of your wellness goals.
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
          className="glass-card w-full max-w-4xl animate-fade-in-up text-blue-500"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex flex-col gap-6 lg:flex-row justify-center items-center">
            <img
              src={doctorImage}
              alt="Dr. Peace Thomas"
              className="w-full max-w-xs rounded-2xl shadow-2xl object-contain"
            />
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-wide text-blue-400">
                Recommended Specialist
              </p>
              <h2 className="text-3xl font-extrabold font-inter">Dr. Peace Thomas</h2>
              <p className="text-blue-400">Consultant Nephrologist • 13 years of experience</p>
              <p>
                Dr. Thomas focuses on preventative care, early detection, and compassionate follow-up to keep patients confident about every step of their treatment journey.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              { label: "Patients", value: "300" },
              { label: "Years Experience", value: "6" },
              { label: "Certifications", value: "7" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card border border-blue-400/40 rounded-2xl px-5 py-4 text-center"
              >
                <p className="text-xs uppercase tracking-wide text-blue-400 mb-1">{stat.label}</p>
                <p className="text-2xl font-semibold text-blue-200">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-6">
            <div className="glass-card border border-blue-400/40 rounded-2xl px-6 py-6">
              <h3 className="text-xl font-semibold text-blue-400 uppercase tracking-wide mb-3">Biography</h3>
              <p>
                Dr. Peace Thomas is an infectious disease specialist serving patients at Maitama District Hospital, Abuja. She completed her specialist training at V.N. Karazin Kharkiv National University and is known for her patient-first approach and evidence-based care.
              </p>
            </div>

            <div className="glass-card border border-blue-400/40 rounded-2xl px-6 py-6">
              <h3 className="text-xl font-semibold text-blue-400 uppercase tracking-wide mb-3">Working Hours</h3>
              <div className="flex flex-wrap gap-3">
                {timeSlots.map((time) => {
                  const isActive = selectedTime === time;
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`px-4 py-3 rounded-xl border transition-all duration-300 ${
                        isActive
                          ? "border-blue-200 bg-blue-600 text-blue-50 shadow-lg"
                          : "border-blue-400/40 bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="glass-card border border-blue-400/40 rounded-2xl px-6 py-6">
              <h3 className="text-xl font-semibold text-blue-400 uppercase tracking-wide mb-3">Pick Your Date</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-wide text-blue-400">Month</label>
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="glass-input w-full border border-blue-400/50 rounded-xl px-4 py-3 bg-blue-500/10 text-blue-500 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-wide text-blue-400">Year</label>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                    className="glass-input w-full border border-blue-400/50 rounded-xl px-4 py-3 bg-blue-500/10 text-blue-500 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {Array.from({ length: 5 }, (_, i) => {
                      const year = new Date().getFullYear() + i;
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-wide text-blue-400">Day</label>
                  <select
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(parseInt(e.target.value))}
                    className="glass-input w-full border border-blue-400/50 rounded-xl px-4 py-3 bg-blue-500/10 text-blue-500 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleBookAppointment}
                className="px-8 py-3 border-2 border-blue-400/60 rounded-xl text-blue-100 bg-blue-600 hover:bg-blue-700 hover:text-blue-50 transition-all duration-300"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentpage;
