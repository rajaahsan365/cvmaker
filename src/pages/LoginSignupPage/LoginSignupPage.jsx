import React, { useEffect, useState } from "react";
import Header2 from "../../components/header/Header2";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

import loginFields from "../../Json-Form/LoginForm.json";
import signupFields from "../../Json-Form/SignUpForm.json";
import FormContainer from "../../components/form/FormContainer";


const LoginSignupPage = () => {
  const signInUser = (data, { resetForm }) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        resetForm();
        toast.success("Signup Successfully");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Error " + err.message);
      });
  };

  const navigate = useNavigate();

  const loginUser = ({ email, password }, { resetForm }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        resetForm();
        toast.success("Login Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Error " + error.message);
      });
  };

  return (
    <>
      <Header2 color="dark" />
      <div className=" vh-75">
        {/* form section */}
        <div className="row p-5 justify-content-center">
          {/*Login section */}
          <div className="login p-3 border rounded rounded-3 col-md-5 m-1">
            <p className="py-2">Member login</p>
            {/* Login Form------------------------------------------------
                                        -------------------------------------------- */}

            <FormContainer 
              initialFieldValues={loginFields} 
              formData={loginFields}
              formValidation={loginFields}
              onFormSubmit={loginUser}
              />
            
          </div>

          {/* signup section */}
          <div className="signup p-5 border rounded rounded-3 col-md-5 m-1">
            <p className="py-2"> Not a member yet? Join now</p>

            {/* SignUp Form */}
            <FormContainer
              initialFieldValues={signupFields}
              formData={signupFields}
              formValidation={signupFields}
              onFormSubmit={signInUser}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignupPage;
