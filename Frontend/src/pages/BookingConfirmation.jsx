import React from "react";
import { useNavigate } from "react-router-dom";
import flexisafLogo from "../assets/flexisaf-logo1.png";
import tick from "../assets/tick.jpg";

const BookingConfirmation = ({ appointmentDate, appointmentTime }) => {
  const navigate = useNavigate();

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
          Appointment Confirmed
        </h1>
        <p className="text-center max-w-sm">
          Your booking is secured. Review the details and prepare for your upcoming session.
        </p>
        <div className="flex gap-4 mt-6 flex-wrap justify-center">
          <button
            onClick={() => navigate("/BookAppointmentpage")}
            className="px-5 py-3 border border-blue-400/60 text-blue-500 bg-blue-600/20 rounded-xl hover:bg-blue-600/30 transition-all duration-300"
          >
            ⬅ Modify Booking
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
          <div className="flex flex-col items-center gap-4">
            <img
              src={tick}
              alt="Booking Confirmed"
              className="w-32 h-32 rounded-full shadow-xl object-cover border-4 border-blue-400/40"
            />
            <h2 className="text-3xl font-extrabold text-blue-500 text-center">
              Booking Confirmed
            </h2>
            <p className="text-blue-400 text-center">
              You’ve successfully scheduled your appointment. We’ll send you reminders so you never miss a session.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="glass-card border border-blue-400/40 rounded-2xl px-6 py-6">
              <h3 className="text-xl font-semibold text-blue-400 uppercase tracking-wide mb-3">
                Appointment Details
              </h3>
              <div className="space-y-3 text-sm">
                <p>
                  <strong className="text-blue-200">Date:</strong> {appointmentDate || "Not provided"}
                </p>
                <p>
                  <strong className="text-blue-200">Time:</strong> {appointmentTime || "Not provided"}
                </p>
                <p>
                  <strong className="text-blue-200">Contact:</strong>{" "}
                  <a href="tel:09012212233" className="underline hover:text-blue-200">
                    09012212233
                  </a>
                </p>
              </div>
            </div>

            <div className="glass-card border border-blue-400/40 rounded-2xl px-6 py-6">
              <h3 className="text-xl font-semibold text-blue-400 uppercase tracking-wide mb-3">
                Location
              </h3>
              <p className="mb-3 text-sm">
                Maitama District Hospital, 61 Aguiyi Ironsi St, Maitama, Abuja 904101, Nigeria
              </p>
              <a
                href="https://www.google.com/maps?q=Maitama+District+Hospital+Abuja"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-blue-400/60 rounded-xl text-blue-500 hover:bg-blue-500/15 transition-colors duration-200"
              >
                Open in Google Maps ➜
              </a>
            </div>

            <div className="text-center text-blue-300 text-sm italic">
              Tip: Consider arriving 10 minutes early to allow for check-in and paperwork.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
