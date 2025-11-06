import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import flexisafLogo from "../assets/flexisaf-logo1.png";
import AppAlertDialog from "../components/AppAlertDialog";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const [signingUp, setSigningUp] = useState(false);
  const [alertState, setAlertState] = useState({
    open: false,
    title: "",
    description: "",
    tone: "info",
    actionLabel: "Got it",
    onClose: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!alertState.open && alertState.onClose) {
      alertState.onClose();
      setAlertState((prev) => ({ ...prev, onClose: null, actionLabel: "Got it" }));
    }
  }, [alertState.open]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const showAlert = ({ title, description, tone = "info", actionLabel = "Got it", onClose = null }) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setAlertState({ open: true, title, description, tone, actionLabel, onClose });
  };

  const handleAlertChange = (open) => {
    setAlertState((prev) => ({ ...prev, open }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullname, email, username, password, confirmPassword, agreed } = formData;

    if (!fullname || !email || !username || !password || !confirmPassword || !agreed) {
      showAlert({
        title: "Incomplete form",
        description: "Please fill in all fields and agree to the privacy policy.",
        tone: "error",
      });
      return;
    }

    if (password !== confirmPassword) {
      showAlert({
        title: "Password mismatch",
        description: "Passwords do not match. Please double-check and try again.",
        tone: "error",
      });
      return;
    }

    const userData = { fullname, email, username, password, confirmPassword, agreed };
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "https://inspectcare.onrender.com";
    const endpoint = `${apiBaseUrl}/api/user/create`;

    setSigningUp(true);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const responseBody = await res.json().catch(() => null);

      if (!res.ok) {
        const errorMessage = responseBody?.message || "Signup failed";
        throw new Error(errorMessage);
      }

      showAlert({
        title: "Account created",
        description:
          responseBody?.message || "Your InspectCare account has been created successfully. You can now sign in.",
        tone: "success",
        actionLabel: "Go to Login",
        onClose: () => navigate("/login"),
      });
    } catch (error) {
      console.error("[Signup] Error:", error);
      showAlert({
        title: "Signup failed",
        description: error.message || "Something went wrong. Please try again shortly.",
        tone: "error",
      });
    } finally {
      setSigningUp(false);
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
      {/* Background Texture */}
      <div className="absolute inset-0 bg-grain-texture pointer-events-none"></div>
      
      {/* Left Side - Branding */}
      <div className="flex-1 glass-card border-r border-white/20 flex flex-col p-6 items-center justify-center relative z-10 animate-fade-in-up">
        <img
          src={flexisafLogo}
          alt="InspectCare"
          className="w-48 sm:w-56 md:w-64 lg:w-full rounded-2xl shadow-2xl object-contain"
        />
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 bg-white/5 backdrop-blur-lg flex items-center justify-center p-6 relative z-10">
        <form 
          className="glass-card w-full max-w-md animate-fade-in-up text-blue-500" 
          style={{animationDelay: '0.4s'}}
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl font-extrabold text-blue-500 mb-4 text-center font-inter">
            Create Your InspectCare Account
          </h2>
          <p className="text-blue-500 text-center mb-8 text-lg">
            Join us for better health
          </p>

          <div className="space-y-6">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="glass-input w-full border border-blue-400/50 rounded-xl px-4 py-3 bg-blue-500/10 text-blue-500 placeholder:text-blue-200/70 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="glass-input w-full border border-blue-400/50 rounded-xl px-4 py-3 bg-blue-500/10 text-blue-500 placeholder:text-blue-200/70 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
              className="glass-input w-full border border-blue-400/50 rounded-xl px-4 py-3 bg-blue-500/10 text-blue-500 placeholder:text-blue-200/70 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <input
              type="password"
              name="password"
              placeholder="Set your password"
              onChange={handleChange}
              required
              className="glass-input w-full border border-blue-400/50 rounded-xl px-4 py-3 bg-blue-500/10 text-blue-500 placeholder:text-blue-200/70 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter password"
              onChange={handleChange}
              required
              className="glass-input w-full border border-blue-400/50 rounded-xl px-4 py-3 bg-blue-500/10 text-blue-500 placeholder:text-blue-200/70 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="flex items-center text-blue-500 text-sm">
              <input
                type="checkbox"
                name="agreed"
                onChange={handleChange}
                required
                className="mr-3 scale-125"
              />
              I agree with{' '}
              <a href="#" className="text-blue-500  hover:text-blue-500 transition-colors duration-200 ml-1">
                Privacy Policy
              </a>
            </label>

            <button 
              type="submit" 
              className="w-full text-lg px-6 py-4 border-2 rounded-xl text-blue-100 bg-blue-600 hover:bg-blue-700 hover:text-blue-100 transition-all duration-300"
              disabled={signingUp}
            >
              {signingUp ? "Signing up..." : "Get Started"}
            </button>
          </div>
          <p className="text-center text-blue-500 mt-6 text-sm">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-blue-300 hover:text-blue-100 underline transition-colors duration-200"
            >
              Log in
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
