import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  console.log("Dashboard mounted");

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-hero relative overflow-x-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-grain-texture pointer-events-none"></div>
      
      <div className="relative z-10 p-8">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-8 gap-4">
          <button 
            onClick={() => navigate(-1)} 
            className="glass-card px-6 py-3 text-white font-semibold rounded-xl hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
          >
            ⬅ Back
          </button>
          <button 
            onClick={() => navigate("/")} 
            className="glass-card px-6 py-3 text-white font-semibold rounded-xl hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
          >
            🏠 Home
          </button>
        </div>
=======
    <div className="dashboard-container">
      {/* Navigation Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <button onClick={() => navigate(-1)} className="nav-button">
          ⬅ Back
        </button>
        <button onClick={() => navigate("/")} className="nav-button">
          🏠 Home
        </button>
      </div>
>>>>>>> 76415a76b24dd3adb86d456122c204d525784a4e

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-center text-white text-shadow font-inter">
          InspectCare
        </h1>

        <div className="glass-card p-8 mb-12 flex items-center gap-6 justify-center flex-wrap hover:bg-white/15 hover:-translate-y-0.5 transition-all duration-300">
          <span 
            role="img" 
            aria-label="user" 
            className="text-5xl bg-gradient-accent p-4 rounded-full shadow-lg"
          >
            👤
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">How Are You Feeling Today?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <button
            className="glass-card p-8 text-white text-center min-h-36 flex flex-col items-center justify-center gap-4 hover:bg-white/20 hover:-translate-y-2 hover:scale-105 transition-all duration-300 relative overflow-hidden group animate-fade-in-up"
            onClick={() => navigate("/symptoms")}
            style={{animationDelay: '0.1s'}}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>
            <div className="text-4xl mb-2">🩺</div>
            <div className="text-lg font-semibold">Check Symptoms</div>
          </button>
          
          <button
            className="glass-card p-8 text-white text-center min-h-36 flex flex-col items-center justify-center gap-4 hover:bg-white/20 hover:-translate-y-2 hover:scale-105 transition-all duration-300 relative overflow-hidden group animate-fade-in-up"
            onClick={() => navigate("/MedicationReminder")}
            style={{animationDelay: '0.2s'}}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>
            <div className="text-4xl mb-2">💊</div>
            <div className="text-lg font-semibold">Med Reminders</div>
          </button>
          
          <button
            className="glass-card p-8 text-white text-center min-h-36 flex flex-col items-center justify-center gap-4 hover:bg-white/20 hover:-translate-y-2 hover:scale-105 transition-all duration-300 relative overflow-hidden group animate-fade-in-up"
            onClick={() => navigate("/BookAppointmentpage")}
            style={{animationDelay: '0.3s'}}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>
            <div className="text-4xl mb-2">👨‍⚕️</div>
            <div className="text-lg font-semibold">Doctors</div>
          </button>
          
          <button
            className="glass-card p-8 text-white text-center min-h-36 flex flex-col items-center justify-center gap-4 hover:bg-white/20 hover:-translate-y-2 hover:scale-105 transition-all duration-300 relative overflow-hidden group animate-fade-in-up"
            onClick={() => navigate("/BookingConfirmation")}
            style={{animationDelay: '0.4s'}}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>
            <div className="text-4xl mb-2">📅</div>
            <div className="text-lg font-semibold">Appointments</div>
          </button>
          
          <button
            className="glass-card p-8 text-white text-center min-h-36 flex flex-col items-center justify-center gap-4 hover:bg-white/20 hover:-translate-y-2 hover:scale-105 transition-all duration-300 relative overflow-hidden group animate-fade-in-up"
            onClick={() => navigate("/MedicationSummary")}
            style={{animationDelay: '0.5s'}}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>
            <div className="text-4xl mb-2">📋</div>
            <div className="text-lg font-semibold">Check Medications</div>
          </button>
          
          <button
            className="glass-card p-8 text-white text-center min-h-36 flex flex-col items-center justify-center gap-4 hover:bg-white/20 hover:-translate-y-2 hover:scale-105 transition-all duration-300 relative overflow-hidden group animate-fade-in-up"
            onClick={() => navigate("/ambulance")}
            style={{animationDelay: '0.6s'}}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>
            <div className="text-4xl mb-2">🚑</div>
            <div className="text-lg font-semibold">Ambulance</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
