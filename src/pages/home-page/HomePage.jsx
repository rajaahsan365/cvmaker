import React, { useState } from "react";
import CreateCVModal from "../../components/create-cv-modal/CreateCVModal";
import Header2 from "../../components/header/Header2";

const HomePage = () => {
  const [img, setImg] = useState(1);

  setInterval(() => {
    img < 3 ? setImg(img + 1) : setImg(1);
  }, 3000);
  return (
    <div className="">
      <div className="bg-cyan">
        {/* Top Section ----------------------
        ------------------------------------------------------------------------------*/}
        <section className="container text-light">
          {/* logo section */}
          <Header2 imgName="logohome" />

          {/* Button Section */}

          <div className="row">
            <div className="col-sm-8">
              Create beautiful, professional resumes in minutes,<h4>free</h4>
            </div>
            <div className="col-sm-4">
              <button
                className="btn btn-primary rounded-5 py-2 px-5"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i className="bi bi-file-text me-2"></i>
                Create a cv now
              </button>
            </div>
          </div>

          {/* slide show section */}
          <div>
            <img src={`src/assets/images/${1}.png`} alt="" />
          </div>
        </section>
      </div>

      <div className="container py-5">
        {/* Top Section ----------------------
        ------------------------------------------------------------------------------*/}
        <section>
          <div className="py-5 text-center">
            <img src="src\assets\images\press.png" alt="" />
          </div>
          <p>A wide range of templates to choose from</p>
          <div className="row">
            <div className="col-sm-6 pt-3">
              <img src="src\assets\images\mocca.png" alt="" />
            </div>
            <div className="col-sm-6 pt-3">
              <img src="src\assets\images\headline.png" alt="" />
            </div>

            <div className="col-md-3 col-4 pt-3">
              <img src="src\assets\images\literateur.png" alt="" />
            </div>
            <div className="col-md-3 col-4 pt-3">
              <img src="src\assets\images\elegant.png" alt="" />
            </div>
            <div className="col-md-3 col-4 pt-3">
              <img src="src\assets\images\bold.png" alt="" />
            </div>
            <div className="col-md-3 col-4 pt-3">
              <img src="src\assets\images\executive.png" alt="" />
            </div>
            <div className="col-md-3 col-4 pt-3">
              <img src="src\assets\images\finesse.png" alt="" />
            </div>
            <div className="col-md-3 col-4 pt-3">
              <img src="src\assets\images\metro.png" alt="" />
            </div>
          </div>
        </section>
      </div>

      <CreateCVModal />
    </div>
  );
};

export default HomePage;
