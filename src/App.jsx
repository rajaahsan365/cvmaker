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

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginSignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/editAccount" element={<EditAccount />} />
        <Route path="/cv" element={<CreateUpdateCV />} />
      </Routes>
      <LanguagesSection />
      <Footer />
    </div>
  );
}

export default App;
