import { useNavigate } from "react-router-dom";
import flexisafLogo from "../assets/flexisaf-logo1.png";

function Dashboard() {
  const navigate = useNavigate();

  const shortcuts = [
    {
      label: "Check Symptoms",
      icon: "🩺",
      action: () => navigate("/symptoms"),
      delay: "0.1s",
    },
    {
      label: "Medication Reminders",
      icon: "💊",
      action: () => navigate("/MedicationReminder"),
      delay: "0.2s",
    },
    {
      label: "Book a Doctor",
      icon: "👨‍⚕️",
      action: () => navigate("/BookAppointmentpage"),
      delay: "0.3s",
    },
    {
      label: "Upcoming Appointments",
      icon: "📅",
      action: () => navigate("/BookingConfirmation"),
      delay: "0.4s",
    },
    {
      label: "Medication Summary",
      icon: "📋",
      action: () => navigate("/MedicationSummary"),
      delay: "0.5s",
    },
    {
      label: "Request Ambulance",
      icon: "🚑",
      action: () => navigate("/ambulance"),
      delay: "0.6s",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col lg:flex-row relative overflow-hidden">
      <div className="absolute inset-0 bg-grain-texture pointer-events-none"></div>

      {/* Left panel */}
      <div className="flex-1 glass-card border-r border-white/20 flex flex-col items-center justify-center px-6 py-8 relative z-10 animate-fade-in-up">
        <img
          src={flexisafLogo}
          alt="InspectCare"
          className="w-48 sm:w-56 md:w-64 lg:w-80 rounded-2xl shadow-2xl object-contain mb-4"
        />
        <h1 className="text-4xl font-extrabold text-blue-500 font-inter text-shadow mb-3 text-center">
          Welcome to Your Dashboard
        </h1>
        <p className="text-blue-500 text-center max-w-sm">
          Manage your health tools, appointments, and reminders—all tailored to keep you ahead of every heartbeat.
        </p>
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto px-5 py-3 border border-blue-400/60 text-blue-500 bg-blue-600/20 rounded-xl hover:bg-blue-600/30 transition-all duration-300"
          >
            ⬅ Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full sm:w-auto px-5 border border-blue-400/60 text-blue-500 bg-blue-600/20 rounded-xl hover:bg-blue-600/30 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span role="img" aria-label="home" className="text-lg">
              🏠
            </span>
            <span>Home</span>
          </button>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 bg-white/5 backdrop-blur-lg flex items-center justify-center px-6 py-8 relative z-10">
        <div
          className="glass-card w-full max-w-3xl animate-fade-in-up text-blue-500"
          style={{ animationDelay: "0.4s" }}
        >
          <h2 className="text-3xl font-extrabold text-blue-500 mb-2 text-center font-inter">
            Quick Actions
          </h2>
          <p className="text-blue-400 text-center mb-8">
            Jump into the tools you need with a single tap.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {shortcuts.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="w-full h-32 glass-card border border-blue-400/50 text-blue-500 flex flex-col items-center justify-center gap-2 rounded-2xl hover:border-blue-200 hover:bg-blue-500/20 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: item.delay }}
              >
                <span className="text-3xl">{item.icon}</span>
                <span className="text-base font-semibold text-center px-4">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
