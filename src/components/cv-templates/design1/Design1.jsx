import React from "react";
import "./Design1.scss";

const Design1 = ({ cvRecord = {} }) => {
  const {
    first_name = "",
    last_name = "",
    phone_no = "",
    email = "",
    religion = "",
    address = "",
    about_you = "",
    social_links = [],
    educations = [],
    experiences = [],
    skills = [],
    hobbies = "",
    reference = "",
  } = cvRecord;

  return (
    <div id="design1" style={{ minWidth: "750px" }}>
      <div className="header">
        <p id="name">{`${first_name} ${last_name}`}</p>
        <p id="email">{email}</p>
      </div>
      <div className="right py-2 px-3">
        <p>{about_you}</p>

        {/* Experiences */}
        {experiences.length >= 1 && (
          <>
            <h3>Professional Experience</h3>
            {experiences.map((obj, ind) => {
              return (
                <div key={ind} className="ps-3">
                  <h4 id="company-name">{obj?.company_name}</h4>
                  <p id="job-title">
                    <strong>{obj?.job_title}</strong>
                  </p>
                  <h6 id="job-responsibilities">{`(${obj?.start_date} to ${obj?.end_date})`}</h6>
                  <p>{obj?.job_description}</p>
                </div>
              );
            })}
          </>
        )}

        {/* Education */}
        {educations.length >= 1 && (
          <>
            <h3>Educational Qualifications</h3>
            <table className="ms-3">
              <thead>
                <tr id="heading">
                  <td>Qualification</td>
                  <td>Institute</td>
                  <td>Subjects</td>
                  <td>Period</td>
                </tr>
              </thead>
              <tbody>
                {educations.map((obj, ind) => {
                  return (
                    <tr key={ind}>
                      <td>{obj?.degree_name}</td>
                      <td>{obj?.institue_name}</td>
                      <td>{obj?.subjects}</td>
                      <td>{`${obj?.start_date} to ${obj?.end_date}`}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}

        {/* skills */}
        {skills.length >= 1 && (
          <>
            <h3>Technical Skills</h3>
            {skills?.map((obj, ind) => {
              return (
                <div className="ms-3 w-50" key={ind}>
                  <li className="skill-percentage text-capitalize text-secondary h6">
                    {obj?.name}
                  </li>

                  <div className="progress w-50 ms-4 my-2">
                    <div
                      className="progress-bar bg-secondary"
                      role="progressbar"
                      aria-label="Success example"
                      style={{ width: ` ${obj?.value}%` }}
                      aria-valuenow={`${obj?.value}`}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              );
            })}
          </>
        )}

        {/* Personal Info */}
        <h3>Personal Information:</h3>
        <div className="mx-4 mt-3">
          <div className="row">
            <div className="col-1 h6 me-5">Contact</div>
            <div className="text-secondary col-8">{phone_no}</div>
          </div>
          <div className="row">
            <div className="col-1 h6 me-5">Mail</div>
            <div className="text-secondary col-8">{email}</div>
          </div>
          <div className="row">
            <div className="col-1 h6 me-5">Religion</div>
            <div className="text-secondary col-8">{religion}</div>
          </div>
          <div className="row">
            <div className="col-1 h6 me-5">Home</div>
            <div className="text-secondary col-8">{address}</div>
          </div>
        </div>

        {/*Social  */}
        {social_links.length >= 1 && (
          <>
            <h3>Social Account</h3>
            {social_links.map((obj, ind) => {
              return (
                <div className="row ms-3" key={ind}>
                  <div className="col-1 h6">{obj?.name}</div>
                  <div className="text-secondary col-8 ms-5">{obj?.value}</div>
                </div>
              );
            })}
          </>
        )}
        {hobbies && (
          <>
            <h3>Hobbies</h3>
            <p className="ms-3">{hobbies}</p>
          </>
        )}
      </div>
      {reference && (
        <div id="footer" className="ps-3">
          <h3>Reference</h3>
          <p className="ms-3">{reference}</p>
        </div>
      )}
    </div>
  );
};

export default Design1;
