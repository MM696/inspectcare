import React from "react";
import { Button } from "../components/button";
import { Lightbulb, Target, HeartHandshake } from "lucide-react";
import "../pages/landingpage.css";
import { useNavigate } from "react-router-dom";
import twitterIcon from "../assets/twitter.png";
import facebookIcon from "../assets/facebook.png";
import linkedinIcon from "../assets/linkedin.png";
import logo from "../assets/InspectCare-logo.png";
import heroImage from "../assets/flexisaf-logo.jpg"; // ✅ fixed import

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo-landingpage">
          <img src={logo} alt="inspectcare-logo" />
          InspectCare
        </h1>
        <nav className="nav-buttons">
          <button className="nav-btn login" onClick={() => navigate("/login")}>
            login
          </button>
          <button
            className="nav-btn signup"
            onClick={() => navigate("/signup")}
          >
            sign up
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text-block">
            <h2 className="hero-title">Your Digital Health Ally</h2>
            <p className="hero-text">
              Monitor symptoms, stay ahead of health risks, and take charge of
              your well-being with InspectCare.
            </p>
            <button
              className="get-started-btn"
              onClick={() => navigate("/signup")}
            >
              Get started
            </button>
            <div className="hero-features">
              <div>🫀 Cardiovascular tracking</div>
              <div>⏱️ Real-time symptom alerts</div>
              <div>📊 Personalized insights</div>
            </div>
          </div>

          <div className="hero-img-container">
            <img
              src={heroImage} // ✅ fixed image source
              alt="Health monitoring"
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="info-section">
        <div className="info-card">
          <Lightbulb className="info-icon blue" />
          <h3 className="info-title blue">About Us</h3>
          <p className="info-text">
            InspectCare is an advanced symptom checker system for cardiovascular
            diseases, designed to assist users with early detection and
            proactive health management. Our target audience includes:
            individuals concerned about heart health, patients at risk of
            cardiovascular diseases, healthcare providers, and health-conscious
            users.
          </p>
        </div>
        <div className="info-card">
          <Target className="info-icon green" />
          <h3 className="info-title green">Our Mission</h3>
          <p className="info-text">
            Deliver proactive health solutions that empower everyday people with
            real-time insights.
          </p>
        </div>
        <div className="info-card">
          <HeartHandshake className="info-icon purple" />
          <h3 className="info-title purple">Our Vision</h3>
          <p className="info-text">
            A healthier world where early detection and digital care are
            accessible to all.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          {/* Subscribe Form */}
          <div className="footer-subscribe">
            <h4>Subscribe to our newsletter</h4>
            <form
              className="subscribe-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Enter your name"
                className="subscribe-input"
                required
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="subscribe-input"
                required
              />
              <button type="submit" className="subscribe-button">
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="social-media">
            <h4>Follow us</h4>
            <div className="social-icons">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>

          <p>
            &copy; {new Date().getFullYear()} InspectCare. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
