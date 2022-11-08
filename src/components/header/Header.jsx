import React from "react";
import { Link } from "react-router-dom";
import { objectIsEmpty } from "../../assets/utils";
import { auth } from "../../firebase";
import { useGlobalContext } from "../context-api/Context";

const Header = () => {
  const { userDetail } = useGlobalContext();

  const logout = () => {
    auth
      .signOut()
      .then(function () {
        // Sign-out successful.
        console.log(
          "🚀 ~ file: LoginSignupPage.jsx ~ line 60 ~ Sign-out successful."
        );
      })
      .catch(function (error) {
        console.log(
          "🚀 ~ file: LoginSignupPage.jsx ~ line 63 ~ logout ~ error",
          error
        );
        // An error happened.
      });
  };
  return (
    <header className="bg-dark ">
      <div className="container">
        <div className="row">
          <section className="col-3 align-items-center">
            <Link className="text-light" to={"/"}>
              Create, maintain, publish, and share your CVs for free
            </Link>
          </section>

          <section className="col-9 d-flex justify-content-end align-items-center">
            <ul className="nav navbar navbar-left d-flex d-inline-flex">
              <li>
                <select
                  className="form-select bg-dark text-light border-0 shadow-none"
                  defaultValue={""}
                >
                  <option value="" disabled>
                    Select Language
                  </option>
                  <option value="english">English</option>
                  <option value="urdu">Urdu</option>
                  <option value="chinese">Chinese</option>
                </select>
              </li>

              {!objectIsEmpty(userDetail) ? (
                <>
                  <li>{userDetail?.email}</li>
                  <li>
                    <Link to="/dashboard" className="h5 text-success">
                      Upgrade to Premium <i className="bi bi-star-fill" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/editAccount">Edit Account</Link>
                  </li>
                  <li>
                    <button
                      className="btn text-white"
                      type="button"
                      onClick={() => logout()}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <Link
                  to="login"
                  className="text-decoration-none text-light d-flex"
                >
                  <i className="bi bi-file-lock-fill"></i>
                  <span className="ps-2">Login/Signup</span>
                </Link>
              )}
            </ul>
          </section>
        </div>
      </div>
    </header>
  );
};

export default Header;
