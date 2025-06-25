import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";
import { Link } from "react-router-dom";

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    navigate("/login");
  };

  return (
    <div className="signup-layout">
      <div className="signup-left">
        <img
          src="https://i.ibb.co/ZGJ0g5T/inspectcare-graphic.png" // Replace with your actual image URL or local import
          alt="InspectCare"
          className="signup-illustration"
        />
        <h3 className="brand-name">InspectCare</h3>

        <button type="submit">Get Started</button>
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
        </form>
      </div>
    </div>
  );
}
