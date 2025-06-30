import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUpForm from "./pages/signupform";
import LoginForm from "./pages/LoginForm";
<<<<<<< HEAD
// import Dashboard from "./pages/Dashboard";
=======
import Dashboard from "./pages/Dashboard";
import Symptoms from "./pages/Symptoms";
import Result from "./pages/Resultpage"; // make sure this is the right path
>>>>>>> 161c345ecfe4c2ff1a82084368937d39ec216d26
import "./App.css";

function App() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [score, setScore] = useState(0);
  const [severity, setSeverity] = useState("");

  return (
    <BrowserRouter basename="/flesisaf-inspectcare">
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
<<<<<<< HEAD
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
=======
        <Route path="/dashboard" element={<Dashboard />} />

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
>>>>>>> 161c345ecfe4c2ff1a82084368937d39ec216d26
      </Routes>
    </BrowserRouter>
  );
}

export default App;
