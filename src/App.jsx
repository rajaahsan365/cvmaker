import { useState } from "react";
import "./App.css";
import LanguagesSection from "./components/links-section/LanguagesSection";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import DashboardPage from "./pages/dashboard-page/DashboardPage";
import HomePage from "./pages/home-page/HomePage";
import LoginSignupPage from "./pages/LoginSignupPage/LoginSignupPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header2 from "./components/header/Header2";
import EditAccount from "./components/edit-account/EditAccount";
import CreateUpdateCV from "./pages/create-update-cv-page/CreateUpdateCV";
import ErrorPage from "./pages/error-page/ErrorPage";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import Design1 from "./components/cv-templates/design1/Design1";
import Formik1 from "./components/Formik";
import Design2 from "./components/cv-templates/design2/Design2";
import Design3 from "./components/cv-templates/design3/Design3";
import Design4 from "./components/cv-templates/design4/Design4";
import { useGlobalContext } from "./components/context-api/Context";
// import Formik from "./components/Formik";

function App() {
  const navigate = useNavigate();
  const { userDetail } = useGlobalContext();

  return (
    <div className="App">
      <ToastContainer autoClose={2000} />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formik" element={<Formik1 />} />
        <Route path="/design1" element={<Design1 />} />
        <Route path="/design2" element={<Design2 />} />
        <Route path="/design3" element={<Design3 />} />
        <Route path="/design4" element={<Design4 />} />
        <Route path="/login" element={<LoginSignupPage />} />
        <Route
          path="/dashboard"
          element={
            Object.keys(userDetail).length === 0 ? (
              <LoginSignupPage />
            ) : (
              <DashboardPage />
            )
          }
        />
        <Route
          path="/cv"
          element={
            Object.keys(userDetail).length === 0 ? (
              <LoginSignupPage />
            ) : (
              <CreateUpdateCV />
            )
          }
        />
        {/* <Route path="/editAccount" element={<EditAccount />} /> */}
        <Route path="/update/:id" element={<CreateUpdateCV />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <LanguagesSection />
      <Footer />
    </div>
  );
}

export default App;
