import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import flexisafLogo from "../assets/flexisaf-logo.jpg";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullname, email, username, password, confirmPassword, agreed } = formData;

    if (!fullname || !email || !username || !password || !confirmPassword || !agreed) {
      return alert("Please fill in all fields and agree to the privacy policy.");
    }

    if (password !== confirmPassword) {
      return alert("Passwords do not match!");
    }

    const userData = { fullname, email, username, password };

    try {
      const res = await fetch("https://health-inspector.onrender.com/api/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Signup failed");
      }

      alert("Account created successfully!");
      navigate("/login");
    } catch (error) {
      alert(`Signup failed: ${error.message}`);
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col lg:flex-row relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-grain-texture pointer-events-none"></div>
      
      {/* Left Side - Branding */}
      <div className="flex-1 glass-card border-r border-white/20 flex flex-col items-center justify-center p-12 relative z-10 animate-fade-in-up">
        <img
          src={flexisafLogo}
          alt="InspectCare"
          className="max-w-sm mb-8 rounded-2xl shadow-2xl"
        />
        <h3 className="text-4xl font-extrabold text-white font-inter text-shadow">
          InspectCare
        </h3>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 bg-white/5 backdrop-blur-lg flex items-center justify-center p-12 relative z-10">
        <form 
          className="glass-card p-10 w-full max-w-md animate-fade-in-up" 
          style={{animationDelay: '0.4s'}}
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold text-white mb-2 text-center font-inter">
            Sign up
          </h2>
          <p className="text-white/80 text-center mb-8 text-lg">
            Join us for better health
          </p>

          <div className="space-y-6">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="glass-input w-full"
            />
            
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="glass-input w-full"
            />
            
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
              className="glass-input w-full"
            />
            
            <input
              type="password"
              name="password"
              placeholder="Set your password"
              onChange={handleChange}
              required
              className="glass-input w-full"
            />
            
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter password"
              onChange={handleChange}
              required
              className="glass-input w-full"
            />

            <label className="flex items-center text-white/90 text-sm">
              <input
                type="checkbox"
                name="agreed"
                onChange={handleChange}
                required
                className="mr-3 scale-125"
              />
              I agree with{' '}
              <a href="#" className="text-blue-300 hover:text-white transition-colors duration-200 ml-1">
                Privacy Policy
              </a>
            </label>

            <button 
              type="submit" 
              className="btn-primary w-full text-lg py-4"
            >
              Get Started
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
