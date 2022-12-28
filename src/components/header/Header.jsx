import React from "react";
import { Link } from "react-router-dom";
import { objectIsEmpty } from "../../assets/utils";
import { auth } from "../../firebase";
import { useGlobalContext } from "../context-api/Context";
import { toast } from "react-toastify";

const Header = () => {
  const { userDetail, setCVListDetail } = useGlobalContext();

  const logout = () => {
    auth
      .signOut()
      .then(function () {
        // Sign-out successful.
        toast.success("Logout Successfully");
        setCVListDetail([]);
      })
      .catch(function (error) {
        toast.error(error);
        // An error happened.
      });
  };
  return (
    <header className="bg-dark ">
      <div className="container">
        <div className="row p-2">
          <section className="col-sm-6 align-items-center text-sm-start text-center mt-2 ">
            <Link className="text-light" to={"/"}>
              Create, maintain, publish, and share your CVs for free
            </Link>
          </section>

          <section className="col-sm-6 d-flex justify-content-center justify-content-md-end">
            <ul className="nav navbar navbar-left d-sm-flex d-inline-flex">
              {/* <li>
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
              </li> */}

              {!objectIsEmpty(userDetail) ? (
                <>
                  <li>
                    <Link to="/dashboard" className="h5 text-success">
                      Dashboard
                    </Link>
                  </li>
                  <li>{userDetail?.email}</li>
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
