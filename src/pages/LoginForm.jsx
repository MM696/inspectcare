import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import flexisaflogo from "../assets/flexisaf-logo.jpg";

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
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
          console.log("Saved token:", localStorage.getItem("token"));
          alert("Login successful!");
          console.log("Navigating to dashboard...");
          navigate("/Dashboard");
        } else {
          alert("Invalid email or password.");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex justify-center items-center p-4 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-grain-texture pointer-events-none"></div>
      
      <div className="glass-card p-12 w-full max-w-md relative z-10 animate-fade-in-up">
        <img 
          src={flexisaflogo} 
          alt="Logo" 
          className="w-32 h-32 mx-auto mb-8 rounded-xl shadow-lg object-contain" 
        />

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="glass-input w-full"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            className="glass-input w-full"
          />

          <button type="submit" className="btn-primary w-full text-lg py-4">
            Login
          </button>

          <div className="text-center mt-6">
            <Link 
              to="/forgot-password" 
              className="text-blue-300 hover:text-white transition-colors duration-200 text-sm"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="text-center text-blue-200 text-sm">
            Don't have an account?{' '}
            <Link 
              to="/signup" 
              className="text-blue-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;