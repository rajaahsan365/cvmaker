import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateCVModal from "../../components/create-cv-modal/CreateCVModal";
import Header2 from "../../components/header/Header2";
import img1 from "./../../assets/images/template1.png";
import img2 from "./../../assets/images/template2.png";
import img3 from "./../../assets/images/template3.png";
import img4 from "./../../assets/images/template4.png";

const HomePage = () => {
  const [img, setImg] = useState(1);
  const navigate = useNavigate();

  setInterval(() => {
    img < 3 ? setImg(img + 1) : setImg(1);
  }, 3000);
  return (
    <div className="">
      <div className="bg-success">
        {/* Top Section ----------------------
        ------------------------------------------------------------------------------*/}
        <section className="container text-light">
          {/* logo section */}
          <Header2 />

          {/* Button Section */}

          <div className="row">
            <div className="col-sm-8 text-center text-md-start">
              Create beautiful, professional resumes in minutes,<h4>free</h4>
            </div>
            <div className="col-sm-4 my-3 text-center text-md-start">
              <button
                className="btn btn-primary rounded-5 py-1 px-2"
                type="button"
                onClick={() => navigate("/cv")}
              >
                <i className="bi bi-file-text me-2"></i>
                Create Resume
              </button>
            </div>
          </div>

          {/* slide show section */}
          <div className="my-3 text-center text-md-start">
            <img src={img2} alt="" className="w-50" />
          </div>
        </section>
      </div>

      <div className="container py-5">
        {/* Top Section ----------------------
        ------------------------------------------------------------------------------*/}
        <section>
          <div className="py-5 text-center">
            <img src={img1} alt="" className="w-50" />
          </div>
          <p>A wide range of templates to choose from</p>
          <div className="row justify-content-center">
            <div className="col-md-6 text-center col-12 mt-2 col-4 pt-3">
              <img src={img3} className="w-50" alt="" />
            </div>
            <div className="col-md-6 text-center col-12 mt-2 col-4 pt-3">
              <img src={img4} className="w-50" alt="" />
            </div>
            <div className="col-md-6 text-center col-12 mt-2 col-4 pt-3">
              <img src={img2} className="w-50" alt="" />
            </div>
            <div className="col-md-6 text-center col-12 mt-2 col-4 pt-3">
              <img src={img1} className="w-50" alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
