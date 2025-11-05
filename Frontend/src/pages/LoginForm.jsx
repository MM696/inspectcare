import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import flexisafLogo from "../assets/flexisaf-logo.jpg";

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: formData.email,
      password: formData.password,
    };

    setIsLoggingIn(true);

    fetch("https://health-inspector.onrender.com/api/auth/login", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.jwtToken) {
          localStorage.setItem("token", data.jwtToken);
          alert("Login successful!");
          navigate("/dashboard");
        } else {
          alert("Invalid email or password.");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Something went wrong. Please try again.");
      })
      .finally(() => setIsLoggingIn(false));
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col lg:flex-row relative overflow-hidden">
      <div className="absolute inset-0 bg-grain-texture pointer-events-none"></div>

      <div className="flex-1 glass-card border-r border-white/20 flex flex-col items-center justify-center p-12 relative z-10 animate-fade-in-up">
        <img
          src={flexisafLogo}
          alt="InspectCare"
          className="max-w-sm mb-8 rounded-2xl shadow-2xl"
        />
        <h3 className="text-4xl font-extrabold text-white font-inter text-shadow mb-4">
          Welcome Back
        </h3>
        <p className="text-blue-500 text-center max-w-xs">
          Access your personalized insights and stay ahead of your health goals.
        </p>
      </div>

      <div className="flex-1 bg-white/5 backdrop-blur-lg flex items-center justify-center p-12 relative z-10">
        <form
          className="glass-card p-10 w-full max-w-md animate-fade-in-up text-blue-500"
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
              className="w-full text-lg px-4 py-4 border-2 rounded-xl text-blue-100 bg-blue-600 hover:bg-blue-700 hover:text-blue-100 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
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
