import React, { useEffect, useState } from "react";
import Header2 from "../../components/header/Header2";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

import loginFields from "../../Json-Form/LoginForm.json";
import signupFields from "../../Json-Form/SignUpForm.json";
import InputForm from "../../components/form/InputForm";
import {
  getFormInitialValue,
  getFormValidationObject,
} from "../../assets/utils";

const LoginSignupPage = () => {
  const signInUser = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        const errorMessage = error.message;
        setError((error.signUpError = errorMessage));
      });
  };

  const navigate = useNavigate();

  const loginUser = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError((error.loginError = errorMessage));
      });
  };

  return (
    <>
      <Header2 />
      <div className="container vh-75">
        {/* form section */}
        <div className="d-flex py-3">
          {/*Login section */}
          <div className="login p-5 border rounded rounded-3 w-50 me-3">
            <p className="py-2">Member login</p>
            {/* Login Form------------------------------------------------
                                        -------------------------------------------- */}

            <InputForm
              initialFieldValues={getFormInitialValue(loginFields)}
              formData={loginFields}
              withValidation={true}
              formValidation={getFormValidationObject(loginFields)}
              onFormSubmit={loginUser}
            />
          </div>

          {/* signup section */}
          <div className="signup p-5 border rounded rounded-3 w-50">
            <p className="py-2"> Not a member yet? Join now</p>

            {/* SignUp Form */}
            <InputForm
              initialFieldValues={getFormInitialValue(signupFields)}
              formData={signupFields}
              formValidation={getFormValidationObject(signupFields)}
              withValidation={true}
              onFormSubmit={signInUser}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignupPage;
