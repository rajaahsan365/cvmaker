import { useState } from "react";
import "./App.css";
import LanguagesSection from "./components/links-section/LanguagesSection";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import DashboardPage from "./pages/dashboard-page/DashboardPage";
import HomePage from "./pages/home-page/HomePage";
import LoginSignupPage from "./pages/LoginSignupPage/LoginSignupPage";
import { Routes, Route } from "react-router-dom";
import Header2 from "./components/header/Header2";
import EditAccount from "./components/edit-account/EditAccount";
import CreateUpdateCV from "./pages/create-update-cv-page/CreateUpdateCV";
import ErrorPage from "./pages/error-page/ErrorPage";
// import Formik from "./components/Formik";

function App() {
  // Tooltip
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginSignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/editAccount" element={<EditAccount />} />
        <Route path="/cv" element={<CreateUpdateCV />} />
        <Route path="/update/:id" element={<CreateUpdateCV />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <LanguagesSection />
      <Footer />
    </div>
  );
}

export default App;
