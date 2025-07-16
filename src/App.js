import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import CardDetails from "./components/CardDetails.jsx";
import Aboutus from "./components/Aboutus.jsx";
import CardSection from "./components/CardSection.jsx";
import Contact from "./components/Contact.jsx";
import Signup from "./components/login/Signup";
// 
//import AppRouter from "./AppRouter.js";
// import Home_V1 from "./components/homev4.js";
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/" />;
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/product" element={<ProtectedRoute><CardSection /></ProtectedRoute>} />
      <Route path="/product/:id" element={<ProtectedRoute><CardDetails /></ProtectedRoute>} />
      <Route path="/about" element={<ProtectedRoute><Aboutus /></ProtectedRoute>} />
      <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
      <Route path="*" element={<Signup />} /> 

    </Routes>
  );
}
