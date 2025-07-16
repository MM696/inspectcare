import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import flexisaflogo from "../assets/flexisaf-logo.jpg";

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace this with actual login logic
      console.log("Logging in with:", formData);
      await new Promise((res) => setTimeout(res, 1500)); // simulate delay
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
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

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? <FaSpinner className="spinner" /> : "Login"}
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
