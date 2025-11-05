import React from "react";
import { useNavigate } from "react-router-dom";
import flexisafLogo from "../assets/flexisaf-logo1.png";

const ResultPage = ({ selectedSymptoms, score, severity }) => {
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
          Your Results Are Ready
        </h1>
        <p className="text-center max-w-sm">
          Review your summary, note the recommendations, and take the next
          step toward proactive care.
        </p>
        <div className="flex gap-4 mt-6 flex-wrap justify-center">
          <button
            onClick={() => navigate("/symptoms")}
            className="px-5 py-3 border border-blue-400/60 text-blue-500 bg-blue-600/20 rounded-xl hover:bg-blue-600/30 transition-all duration-300"
          >
            ⬅ Recheck Symptoms
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-5 py-3 border border-blue-400/60 text-blue-500 bg-blue-600/20 rounded-xl hover:bg-blue-600/30 transition-all duration-300"
          >
            Next ➡ Dashboard
          </button>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 bg-white/5 backdrop-blur-lg flex items-center justify-center px-6 py-8 relative z-10">
        <div
          className="glass-card w-full max-w-3xl animate-fade-in-up text-blue-500 px-6 py-8"
          style={{ animationDelay: "0.4s" }}
        >
          <h2 className="text-3xl font-extrabold text-blue-500 mb-3 text-center font-inter">
            Summary of Findings
          </h2>
          <p className="text-blue-400 text-center mb-8">
            Based on the details you provided, here’s a quick overview of your
            current risk indicators.
          </p>

          <div className="space-y-6">
            <div className="glass-card border border-blue-400/40 rounded-2xl px-6 py-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400 uppercase tracking-wide">
                Selected Symptoms
              </h3>
              {selectedSymptoms.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {selectedSymptoms.map((symptom) => (
                    <li
                      key={symptom}
                      className="px-3 py-2 rounded-xl bg-blue-500/10 border border-blue-400/30"
                    >
                      {symptom}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-blue-400">No symptoms were selected.</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-card border border-blue-400/40 rounded-2xl px-5 py-5 text-center">
                <p className="text-sm uppercase tracking-wide text-blue-400 mb-2">
                  Severity Level
                </p>
                <p className="text-2xl font-bold text-blue-200">{severity}</p>
              </div>
              <div className="glass-card border border-blue-400/40 rounded-2xl px-5 py-5 text-center">
                <p className="text-sm uppercase tracking-wide text-blue-400 mb-2">
                  Total Score
                </p>
                <p className="text-2xl font-bold text-blue-200">{score}</p>
              </div>
            </div>

            <div className="glass-card border border-blue-400/40 rounded-2xl px-6 py-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-400 uppercase tracking-wide">
                Guidance
              </h3>
              <p className="mb-3">
                <strong>⚠️ Possible indications of cardiovascular issues:</strong>
                {" "}
                Symptoms such as chest pain, abnormal ECG, or murmurs can be
                early warning signs and warrant prompt attention.
              </p>
              <p>
                <strong>Important:</strong> This tool does not replace medical
                advice. If you experience severe signs like chest pain, fainting,
                or cold sweats, seek emergency assistance immediately.
              </p>
            </div>

            <div className="text-center text-blue-200 text-sm italic">
              Stay proactive—share these results with your healthcare provider
              for a personalized assessment.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
