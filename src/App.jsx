import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUpForm from "./pages/signupform";
import LoginForm from "./pages/Loginform";
import Dashboard from "./pages/dashboard";
import Symptoms from "./pages/Symptoms";
import Result from "./pages/Resultpage"; // make sure this is the right path
import MedicationReminder from "./pages/MedicationReminder";
import MedicationSummary from "./pages/MedicationSummary";
import BookAppointmentpage from "./pages/BookAppointmentpage";
import BookingConfirmation from "./pages/BookingConfirmation";
import AmbulanceBooking from "./pages/AmbulanceBooking";
import "./App.css";

function App() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [score, setScore] = useState(0);
  const [severity, setSeverity] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/MedicationReminder" element={<MedicationReminder />} />
        <Route path="/MedicationSummary" element={<MedicationSummary />} />
        <Route path="/ambulance" element={<AmbulanceBooking />} />
        <Route
          path="/BookAppointmentpage"
          element={
            <BookAppointmentpage
              setAppointmentDate={setAppointmentDate}
              setAppointmentTime={setAppointmentTime}
            />
          }
        />
        <Route
          path="/BookingConfirmation"
          element={
            <BookingConfirmation
              appointmentDate={appointmentDate}
              appointmentTime={appointmentTime}
            />
          }
        />
        {/* Pass props correctly to Symptoms page */}
        <Route
          path="/symptoms"
          element={
            <Symptoms
              setSelectedSymptoms={setSelectedSymptoms}
              setScore={setScore}
              setSeverity={setSeverity}
            />
          }
        />
        {/* Route for the result page with props */}
        <Route
          path="/result"
          element={
            <Result
              selectedSymptoms={selectedSymptoms}
              score={score}
              severity={severity}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
