import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import flexisaflogo from "../assets/flexisaf-logo.jpg";

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Get stored user from localStorage

    const userData = {
      email: formData.email,
      password: formData.password
    }
    fetch('http://localhost:8080/api/auth/login', {
      method:'POST',
      body: JSON.stringify(userData),
      headers:{
        'Content-Type':'application/json'
      },
      credentials:"include"
    }
  )
    .then(res => res.json())
    .then(data =>{
        localStorage.setItem('token',data.jwtToken)
        if (formData.email == data.email) {
          alert("Login successful!");
          navigate("/dashboard");
        } else {
          alert("Invalid email or password.");
        }
    });
  
  };

  return (
    <div className="login-container">
      <div className="form-box">
        <img src={flexisaflogo} alt="Logo" className="logo" />

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />

          <button type="submit" className="login-btn">
            Login
          </button>

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <div className="signup-redirect">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
