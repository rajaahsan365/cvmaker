import React, { useState } from "react";
import CreateCVModal from "../../components/create-cv-modal/CreateCVModal";
import CvListTable from "../../components/cv-list-table/CvListTable";

const DashboardPage = () => {
  const [accordianIsOpen, setAccordianIsOpen] = useState(true);

  return (
    <div className="container my-5">
      <p className="my-4">Your CVs</p>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        create a new cv
      </button>
      <p className="my-4">
        You haven't created any CVs yet. Go ahead and create one.
      </p>

      <CvListTable />

      {/* Accordian SEction */}
      <div className="accordian d-flex justify-content-center my-5">
        <div className="accordion-item border border-1 p-5 w-50">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button form-control"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              onClick={() => setAccordianIsOpen(!accordianIsOpen)}
            >
              <div className="d-flex justify-content-between">
                <p className="fs-1 h1">
                  Go <span className="text-success h1 me-2">Premium</span>
                  <i className="bi bi-heart-fill h2" />
                </p>
                <div>
                  {accordianIsOpen ? (
                    <i className="bi bi-caret-down-fill" />
                  ) : (
                    <i className="bi bi-caret-up-fill" />
                  )}
                </div>
              </div>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              CV Maker is absolutely FREE with no restrictions, but you can get
              a lot more out of it and support its continued development by
              going premium for a nominal annual subscription fee.
              <div className="d-md-flex mt-4">
                <div className="w-50">
                  <p className="fs-3">Free</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Basic templates</li>
                    <li className="list-group-item">
                      Add custom plain sections to your CV
                    </li>
                    <li className="list-group-item">Basic rich text editor</li>
                    <li className="list-group-item">$0</li>
                  </ul>
                </div>
                <div className="w-50">
                  <p className="fs-3">Premium</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <i className="bi bi-star-fill text-success me-2"></i>
                      Premium templates in addition to the free ones
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-star-fill text-success me-2"></i>
                      Add custom plain and special sections (similar to
                      education and work) to your CV
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-star-fill text-success me-2"></i>
                      Advanced rich text editor. Choose fonts, text colors and
                      more
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-star-fill text-success me-2"></i>
                      One-click e-mail. Send your resume directly to your e-mail
                      easily from your mobile or tablet that doesn't allow file
                      downloads
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-star-fill text-success me-2"></i>
                      Continued access to upcoming premium features and
                      templates
                    </li>
                    <li className="list-group-item">
                      <i className="bi bi-star-fill text-success me-2"></i>
                      $16 / year
                    </li>
                  </ul>
                  <button className="btn btn-success text-light mt-3">
                    <h4>
                      Upgrade to Premium<i className="bi bi-heart-fill"></i>
                    </h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateCVModal />
    </div>
  );
};

export default DashboardPage;
