import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/bookingconfirmation.css"; // External CSS
import tick from "../assets/tick.jpg";

const BookingConfirmation = ({ appointmentDate, appointmentTime }) => {
  const navigate = useNavigate();

  return (
    <div className="booking-container">
      <div className="booking-image-wrapper">
        <img src={tick} alt="Booking Confirmed" className="booking-image" />
      </div>

      <h2 className="booking-title">Booking Confirmed</h2>
      <p className="booking-subtext">
        You’ve successfully booked your appointment. Please find the information
        below.
      </p>

      <div className="booking-box">
        <p>
          <strong>Date:</strong> {appointmentDate || "Not provided"}
        </p>
        <p>
          <strong>Time of Appointment:</strong>{" "}
          {appointmentTime || "Not provided"}
        </p>
        <p>
          <strong>Phone Number:</strong>{" "}
          <a href="tel:09012212233">09012212233</a>
        </p>
      </div>

      <div className="booking-box">
        <p>
          <strong>Location of Hospital:</strong>
          <br />
          Maitama District Hospital, 61 Aguiyi Ironsi St, Maitama, Abuja 904101,
          Nigeria
        </p>
        <p>
          <a
            href="https://www.google.com/maps?q=Maitama+District+Hospital+Abuja"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
          </a>
        </p>
      </div>

      <button className="booking-button" onClick={() => navigate("/dashboard")}>
        Go to Dashboard
      </button>
    </div>
  );
};

export default BookingConfirmation;
