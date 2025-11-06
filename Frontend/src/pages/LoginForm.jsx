import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import flexisafLogo from "../assets/flexisaf-logo1.png";
import AppAlertDialog from "../components/AppAlertDialog";

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [alertState, setAlertState] = useState({
    open: false,
    title: "",
    description: "",
    tone: "info",
    actionLabel: "Got it",
    onClose: null,
  });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    if (!alertState.open && alertState.onClose) {
      alertState.onClose();
      setAlertState((prev) => ({ ...prev, onClose: null, actionLabel: "Got it" }));
    }
  }, [alertState.open]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const showAlert = ({ title, description, tone = "info", actionLabel = "Got it", onClose = null }) => {
    setAlertState({ open: true, title, description, tone, actionLabel, onClose });
  };

  const handleAlertChange = (open) => {
    setAlertState((prev) => ({ ...prev, open }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: formData.email,
      password: formData.password,
    };

    setIsLoggingIn(true);

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "https://inspectcare.onrender.com";
      const res = await fetch(`${apiBaseUrl}/api/auth/login`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        const message = data?.message || "Invalid email or password.";
        throw new Error(message);
      }

      if (!data?.jwtToken) {
        throw new Error("Invalid email or password.");
      }

      localStorage.setItem("token", data.jwtToken);
      if (typeof login === "function") {
        login(data.jwtToken);
      }

      showAlert({
        title: "Login successful",
        description: "Welcome back! Redirecting to your dashboard.",
        tone: "success",
        actionLabel: "Continue",
        onClose: () => navigate("/dashboard"),
      });
    } catch (error) {
      console.error("Login error:", error);
      showAlert({
        title: "Login failed",
        description: error.message || "Something went wrong. Please try again.",
        tone: "error",
      });
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col lg:flex-row relative overflow-hidden">
      <AppAlertDialog
        open={alertState.open}
        onOpenChange={handleAlertChange}
        title={alertState.title}
        description={alertState.description}
        tone={alertState.tone}
        actionLabel={alertState.actionLabel}
      />
      <div className="absolute inset-0 bg-grain-texture pointer-events-none"></div>

      <div className="flex-1 glass-card border-r border-white/20 flex flex-col items-center justify-center px-4 py-3 lg:px-6 lg:py-5 relative z-10 animate-fade-in-up">
        <img
          src={flexisafLogo}
          alt="InspectCare"
          className="w-48 sm:w-56 md:w-64 lg:w-96 rounded-2xl shadow-2xl object-contain mb-3"
        />
        <h3 className="text-4xl font-extrabold text-blue-500 font-inter text-shadow mb-3">
          Welcome Back
        </h3>
        <p className="text-blue-500 text-center max-w-xs">
          Access your personalized insights and stay ahead of your health goals.
        </p>
      </div>

      <div className="flex-1 bg-white/5 backdrop-blur-lg flex items-center justify-center px-4 py-3 lg:px-6 lg:py-5 relative z-10">
        <form
          className="glass-card w-full max-w-md animate-fade-in-up text-blue-500 px-5 py-7"
          style={{ animationDelay: "0.4s" }}
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl font-extrabold text-blue-500 mb-4 text-center font-inter">
            Log in to InspectCare
          </h2>
          <p className="text-blue-500 text-center mb-8 text-lg">
            We’re glad to see you again
          </p>

          <div className="space-y-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
              className="glass-input w-full border border-blue-400/50 rounded-xl px-4 py-3 bg-blue-500/10 text-blue-500 placeholder:text-blue-200/70 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
              className="glass-input w-full border border-blue-400/50 rounded-xl px-4 py-3 bg-blue-500/10 text-blue-500 placeholder:text-blue-200/70 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full text-lg px-4 py-2 border-2 rounded-xl text-blue-100 bg-blue-600 hover:bg-blue-700 hover:text-blue-100 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? "Logging in..." : "Login"}
            </button>
          </div>

          <div className="flex justify-between items-center mt-6 text-sm">
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-blue-300 hover:text-blue-100 transition-colors duration-200"
            >
              Forgot Password?
            </button>
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-blue-300 hover:text-blue-100 transition-colors duration-200"
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
