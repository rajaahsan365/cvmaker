import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useState } from "react";
import Design1 from "../../cv-templates/design1/Design1";
import { useParams } from "react-router-dom";
import Design2 from "../../cv-templates/design2/Design2";
import Design3 from "../../cv-templates/design3/Design3";
import Design4 from "../../cv-templates/design4/Design4";

const CvDownloadModal = ({ cvRecord }) => {
  const [templateName, setTemplateName] = useState(1);
  const handleDownload = () => {
    const domElement = document.getElementById(`design${templateName}`);
    html2canvas(domElement).then((canvas) => {
      var doc = new jsPDF("l", "pt", "a4", true);
      doc.html(document.querySelector(`#design${templateName}`), {
        callback: function (pdf) {
          pdf.save(`${new Date().toISOString()}.pdf`);
        },
      });
    });
  };

  const designs = [
    { name: "Design 1", value: 1 },
    { name: "Design 2", value: 2 },
    { name: "Design 3", value: 3 },
    { name: "Design 4", value: 4 },
  ];

  const defaultDetail = {
    first_name: "Ahsan",
    last_name: "Zulfiqar",
    phone_no: "0313-5708277",
    email: "ahsan@gmail.com",
    religion: "Islam",
    address: "P.M Staff Colony Islamabad G-5",
    about_you:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    social_links: [
      { name: "Facebook", value: "www.facebook.com" },
      { name: "linkedIn", value: "www.linkedin.com" },
    ],
    educations: [
      {
        institue_name: "National University of Modern Languages",
        degree_name: "Master in Computer Science",
        start_date: "12-12-2020",
        end_date: "12-12-2022",
        subjects: "Math,Computer,Statistics",
      },
      {
        institue_name:
          "Islamabad Modal Postgraduate College for Boys, H-8 Islamabad",
        degree_name: "Bachlor in Computer Science",
        start_date: "12-12-2020",
        end_date: "12-12-2022",
        subjects: "Math,Computer,Statistics",
      },
    ],
    experiences: [
      {
        company_name: "Centangle",
        job_title: "React Frontend Developer",
        start_date: "12-12-2020",
        end_date: "12-12-2022",
        job_description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        company_name: "Technologix H-9 Islamabad",
        job_title: "Asp .Net",
        start_date: "12-12-2020",
        end_date: "12-12-2022",
        job_description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
    skills: [
      { name: "Html", value: "30" },
      { name: "Javascript", value: 40 },
      { name: "CSS", value: 40 },
      { name: "React", value: 40 },
    ],
    hobbies: "Cricket Football Pubg",
    reference: "Will be Provided on Demand",
  };

  return (
    <>
      <div
        className="modal fade"
        id="cvdownloadmodal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header  align-items-start">
              {/* choose cv template */}
              <div>
                <h5 className="modal-title" id="exampleModalLabel">
                  Choose Resume Template:
                </h5>
                <div className="d-flex justify-content-between">
                  {designs.map(({ name, value }, id) => (
                    <div className="form-check me-4" key={id}>
                      <input
                        className="form-check-input"
                        type="radio"
                        value={value}
                        name="template"
                        id={`flexRadioDefault${value}`}
                        checked={templateName == value}
                        onChange={(e) => setTemplateName(e.target.value)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`flexRadioDefault${value}`}
                      >
                        {name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body overflow-auto">
              {templateName == 1 && (
                <Design1 cvRecord={cvRecord ? cvRecord : defaultDetail} />
              )}
              {templateName == 2 && (
                <Design2 cvRecord={cvRecord ? cvRecord : defaultDetail} />
              )}
              {templateName == 3 && (
                <Design3 cvRecord={cvRecord ? cvRecord : defaultDetail} />
              )}
              {templateName == 4 && (
                <Design4 cvRecord={cvRecord ? cvRecord : defaultDetail} />
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => handleDownload()}
              >
                Download <i className="bi bi-save-fill" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CvDownloadModal;
