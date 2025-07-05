import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import flexisafLogo from "../assets/flexisaf-logo.jpg";
import "./form.css";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const navigate = useNavigate();

  // ✅ Add this function to fix the "handleChange not defined" error
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, username, password, confirmPassword, agreed } =
      formData;

    if (
      fullName &&
      email &&
      username &&
      password &&
      confirmPassword &&
      agreed
    ) {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      localStorage.setItem(
        "user",
        JSON.stringify({ email, password, username, fullName })
      );

      alert("Account created!");
      navigate("/login");
    } else {
      alert("Please fill in all fields and agree to the policy.");
    }
  };

  return (
    <div className="signup-layout">
      <div className="signup-left">
        <img
          src={flexisafLogo}
          alt="InspectCare"
          className="signup-illustration"
        />
        <h3 className="brand-name">InspectCare</h3>
      </div>

      <div className="signup-right">
        <form className="form-box" onSubmit={handleSubmit}>
          <h2>Sign up</h2>
          <p className="subtext">Join us for better health</p>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Set your password"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter password"
            onChange={handleChange}
            required
          />

          <label className="checkbox-container">
            <input
              type="checkbox"
              name="agreed"
              onChange={handleChange}
              required
            />
            I agree with <a href="#">Privacy and Policy</a>
          </label>

          <button type="submit" className="get-started-button">
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}
