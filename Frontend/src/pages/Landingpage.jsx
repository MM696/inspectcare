import React from "react";
import { useNavigate } from "react-router-dom";
import { Lightbulb, Target, HeartHandshake } from "lucide-react";

import logo from "../assets/logo-inspectCare.png";
import heroImage from "../assets/flexisaf-logo.jpg";
import twitterIcon from "../assets/twitter.png";
import facebookIcon from "../assets/facebook.png";
import linkedinIcon from "../assets/linkedin.png";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate(path);
    } else {
      alert("Please log in to access this feature.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("You have been logged out.");
    navigate("/login");
  };

  return (
    <div className="landing-font min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-pink-500 relative overflow-x-hidden">
      {/* Navbar */}
      <header className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl mx-4 mt-4 px-8 py-4 flex justify-between items-center relative z-10 hover:bg-white/15 hover:-translate-y-0.5 transition-all duration-300">
        <h1 className="flex items-center text-3xl font-bold text-white gap-3">
          <img src={logo} alt="InspectCare logo" className="w-12 h-12 object-contain rounded-lg shadow-md" />
          InspectCare
        </h1>
        <nav className="flex gap-3 items-center">
          {localStorage.getItem("token") ? (
            <button 
              className="bg-white/10 backdrop-blur-lg border border-white/20 px-6 py-3 text-white font-semibold rounded-xl hover:bg-white/30 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <button
                className="bg-white/10 backdrop-blur-lg border border-white/20 px-6 py-3 text-white font-semibold rounded-xl hover:bg-white/30 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-white font-semibold rounded-xl border border-white/40 hover:from-cyan-500 hover:to-blue-600 hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl transition-all duration-300"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-10 px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto relative z-10">
          <div className="text-center lg:text-left max-w-2xl">
            <h2 className="text-4xl md:text-5xl p-6 lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-cyan-300 to-indigo-400 drop-shadow-lg animate-fade-in-up">
              Your Digital Health Ally
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Monitor symptoms, stay ahead of health risks, and take charge of
              your well-being with InspectCare.
            </p>
            <button
              className="btn-primary text-lg px-8 py-4 rounded-xl mb-8 animate-fade-in-up border-2 border-white/70 text-white hover:border-white hover:bg-white/15"
              onClick={() => navigate("/signup")}
              style={{animationDelay: '0.4s'}}
            >
              Get Started
            </button>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="glass-card px-6 py-3 text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/25 hover:-translate-y-1 transition-all duration-300">
                🫀 Cardiovascular Tracking
              </div>
              <div className="glass-card px-6 py-3 text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/25 hover:-translate-y-1 transition-all duration-300">
                ⏱️ Real-Time Alerts
              </div>
              <div className="glass-card px-6 py-3 text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/25 hover:-translate-y-1 transition-all duration-300">
                📊 Personalized Insights
              </div>
            </div>
          </div>
          <div className="max-w-lg w-full animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <img 
              src={heroImage} 
              alt="Health monitoring" 
              className="w-full h-auto object-contain rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-16 max-w-7xl mx-auto relative" id="about-us">
        <div className="glass-card p-10 hover:-translate-y-2 hover:bg-white/15 transition-all duration-300 relative overflow-hidden group animate-fade-in-up">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          <div className="w-12 h-12 mb-6 p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Lightbulb className="w-full h-full text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white font-inter">About Us</h3>
          <p className="text-white/90 leading-relaxed">
            InspectCare blends smart symptom tracking with instant cardiovascular guidance, keeping you informed and confident about every heartbeat.
          </p>
        </div>
        <div className="glass-card p-10 hover:-translate-y-2 hover:bg-white/15 transition-all duration-300 relative overflow-hidden group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          <div className="w-12 h-12 mb-6 p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Target className="w-full h-full text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white font-inter">Our Mission</h3>
          <p className="text-white/90 leading-relaxed">
            Deliver proactive health solutions that empower everyday people with
            real-time insights.
          </p>
        </div>
        <div className="glass-card p-10 hover:-translate-y-2 hover:bg-white/15 transition-all duration-300 relative overflow-hidden group animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          <div className="w-12 h-12 mb-6 p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <HeartHandshake className="w-full h-full text-purple-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white font-inter">Our Vision</h3>
          <p className="text-white/90 leading-relaxed">
            A healthier world where early detection and digital care are
            accessible to all.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-card mx-4 mb-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/30"></div>
        <div className="relative z-10 p-16">
          <div className="flex flex-wrap justify-center gap-16 max-w-6xl mx-auto mb-12">
            <div className="text-center flex-1 min-w-64">
              <h2 className="text-2xl font-bold text-white font-inter mb-4">InspectCare</h2>
              <p className="text-blue-200 leading-relaxed">
                Hassle-free health monitoring and proactive symptom checking.
              </p>
            </div>

            <div className="text-center flex-1 min-w-48">
              <h4 className="font-bold text-white mb-6 text-lg">Product</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => handleNavigation("/dashboard")}
                    className="text-blue-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/medreminder")}
                    className="text-blue-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Alerts & Reminders
                  </button>
                </li>
              </ul>
            </div>

            <div className="text-center flex-1 min-w-48">
              <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about-us" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center flex-1 min-w-80">
              <h4 className="font-bold text-white mb-6 text-lg">SUBSCRIBE TO OUR NEWSLETTER</h4>
              <form className="flex flex-col gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  className="glass-input border rounded-xl p-2 border-white/40 bg-white/10 text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
                  placeholder="Your name"
                  required
                />
                <input
                  type="email"
                  className="glass-input border p-2 rounded-xl border-white/40 bg-white/10 text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
                  placeholder="Your email"
                  required
                />
                <button type="submit" className="btn-primary rounded-xl p-2 border-2 border-white/40 hover:border-white hover:bg-white/15">
                  <span className="text-white">Subscribe</span>
                </button>
              </form>
            </div>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 opacity-85 hover:opacity-100 hover:scale-110 transition-all duration-200"
            >
              <img src={twitterIcon} alt="Twitter" className="w-full h-full" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 opacity-85 hover:opacity-100 hover:scale-110 transition-all duration-200"
            >
              <img src={facebookIcon} alt="Facebook" className="w-full h-full" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 opacity-85 hover:opacity-100 hover:scale-110 transition-all duration-200"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-full h-full" />
            </a>
          </div>

          <div className="text-center text-blue-200 text-sm">
            <p className="mb-4">
              &copy; {new Date().getFullYear()} InspectCare. All rights reserved.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Code of Conduct</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 w-15 h-15 bg-gradient-accent text-white text-2xl rounded-full flex items-center justify-center shadow-2xl z-50 backdrop-blur-sm border border-white/20 hover:-translate-y-1 hover:scale-110 transition-all duration-300"
        title="Back to Top"
      >
        ⬆
      </a>
    </div>
  );
};

export default LandingPage;
