import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUpForm from "./pages/signupform";
import LoginForm from "./pages/Loginform";
import Dashboard from "./pages/dashboard";
import Symptoms from "./pages/Symptoms";
import Result from "./pages/Resultpage";
import MedicationReminder from "./pages/MedicationReminder";
import MedicationSummary from "./pages/MedicationSummary";
import BookAppointmentpage from "./pages/BookAppointmentpage";
import BookingConfirmation from "./pages/BookingConfirmation";
import AmbulanceBooking from "./pages/AmbulanceBooking";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ import
import "./App.css";

function App() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [score, setScore] = useState(0);
  const [severity, setSeverity] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  return (
    <BrowserRouter basename="/flexisaf-inspectcare">
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />

        {/* 🔒 Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/symptoms"
          element={
            <ProtectedRoute>
              <Symptoms
                setSelectedSymptoms={setSelectedSymptoms}
                setScore={setScore}
                setSeverity={setSeverity}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/result"
          element={
            <ProtectedRoute>
              <Result
                selectedSymptoms={selectedSymptoms}
                score={score}
                severity={severity}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/BookAppointmentpage"
          element={
            <ProtectedRoute>
              <BookAppointmentpage
                setAppointmentDate={setAppointmentDate}
                setAppointmentTime={setAppointmentTime}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/BookingConfirmation"
          element={
            <ProtectedRoute>
              <BookingConfirmation
                appointmentDate={appointmentDate}
                appointmentTime={appointmentTime}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/MedicationReminder"
          element={
            <ProtectedRoute>
              <MedicationReminder />
            </ProtectedRoute>
          }
        />
        <Route
          path="/MedicationSummary"
          element={
            <ProtectedRoute>
              <MedicationSummary />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ambulance"
          element={
            <ProtectedRoute>
              <AmbulanceBooking />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
