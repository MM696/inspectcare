import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import flexisaflogo from "../assets/flexisaf-logo.jpg";

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoggingIn, setIsLoggingIn] = useState(false); // ✅ New state
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
    setIsLoggingIn(true); // ✅ Start loading

    const userData = {
      email: formData.email.trim(),
      password: formData.password,
    };

    fetch("https://health-inspector.onrender.com/api/auth/login", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const text = await res.text();

        try {
          const data = JSON.parse(text);
          if (data.jwtToken) {
            localStorage.setItem("token", data.jwtToken);
            alert("Login successful!");
            navigate("/dashboard");
          } else {
            alert("Invalid email or password.");
          }
        } catch (err) {
          console.error("Response is not valid JSON:", text);
          alert(text);
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Something went wrong. Please try again.");
      })
      .finally(() => {
        setIsLoggingIn(false); // ✅ Stop loading
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

          <button type="submit" className="login-btn" disabled={isLoggingIn}>
            {isLoggingIn ? "Logging in..." : "Login"}
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
