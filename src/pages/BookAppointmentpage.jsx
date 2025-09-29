import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookAppointmentpage = ({ setAppointmentDate, setAppointmentTime }) => {
  const navigate = useNavigate();

  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedTime, setSelectedTime] = useState("8:00AM"); // default selected time

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (month, year) => {
    const monthIndex = months.indexOf(month);
    return new Date(year, monthIndex + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);

  const handleBookAppointment = () => {
    const formattedDate = `${selectedMonth} ${selectedDay}, ${selectedYear}`;
    setAppointmentDate(formattedDate);
    setAppointmentTime(selectedTime);
    navigate("/BookingConfirmation");
  };

  return (
    <div className="appointment-container">
      <button className="nav-arrow left" onClick={() => navigate(-1)}>
        ←
      </button>

      <h1 className="app-title">InspectCare</h1>

      <p className="greeting">Hello</p>
      <p className="sub-text">Your Health is our priority.</p>

      <h2 className="section-title">Recommended Doctor</h2>

      <div className="doctor-info">
        <img
          src="/assets/doctor.png"
          alt="Dr. Peace Thomas"
          className="doctor-img"
        />
        <div className="doctor-details">
          <h3>Dr. Peace Thomas</h3>
          <p>13 years of experience</p>
          <p>Consultant Nephrologist</p>
        </div>
      </div>

      <div className="stats-box">
        <div>
          <h4>Patients</h4>
          <p>300</p>
        </div>
        <div>
          <h4>Years Experience</h4>
          <p>6</p>
        </div>
        <div>
          <h4>Certifications</h4>
          <p>7</p>
        </div>
      </div>

      <div className="biography">
        <h3>BIOGRAPHY</h3>
        <p>
          Dr. Peace Thomas is an infectious disease doctor who serves patients
          at Maitama District Hospital, Abuja. She earned her specialist degree
          at V.N. Karazin Kharkiv National University.
        </p>
      </div>

      <div className="working-hours">
        <h3>Working Hours</h3>
        <div className="time-options">
          {["8:00AM", "12:00PM", "4:00AM"].map((time) => (
            <button
              key={time}
              className={selectedTime === time ? "active" : ""}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="schedules">
        <h3>Schedules</h3>
        <div className="selectors">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
          >
            {Array.from({ length: 5 }, (_, i) => {
              const year = new Date().getFullYear() + i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>

          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(parseInt(e.target.value))}
          >
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className="dashboard-button" onClick={handleBookAppointment}>
        Book Appointment
      </button>
    </div>
  );
};

export default BookAppointmentpage;
