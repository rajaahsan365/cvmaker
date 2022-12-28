import React from "react";
import "./Design3.scss";

const Design3 = ({ cvRecord = {} }) => {
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
    <div className="design3" id="design3" style={{ minWidth: "750px" }}>
      <div className="container">
        <div className="header">
          <div className="full-name">
            <span className="first-name">{first_name}</span>
            <span className="last-name ms-2">{last_name}</span>
          </div>
          <div className="contact-info">
            <span className="email">Email: </span>
            <span className="email-val">{email}</span>
            <span className="separator"></span>
            <span className="phone">Phone: </span>
            <span className="phone-val">{phone_no}</span>
          </div>

          <div className="about">
            <span className="desc">{about_you}</span>
          </div>
        </div>
        <div className="details">
          {/* experience */}
          <div className="section">
            <div className="section__title">Experience</div>
            <div className="section__list">
              {experiences?.map((obj, ind) => (
                <div className="section__list-item" key={ind}>
                  <div className="left">
                    <div className="name">{obj?.company_name}</div>
                    <div className="duration">{`${obj.start_date} to ${obj?.end_date}`}</div>
                  </div>
                  <div className="right">
                    <div className="name">{obj?.job_title}</div>
                    <div className="desc">{obj?.job_description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* education */}
          <div className="section">
            <div className="section__title">Education</div>
            <div className="section__list">
              {educations?.map((obj, ind) => (
                <div className="section__list-item" key={ind}>
                  <div className="left">
                    <div className="name">{obj?.institue_name}</div>
                    <div className="duration">{`${obj.start_date} to ${obj?.end_date}`}</div>
                  </div>
                  <div className="right">
                    <div className="name">{obj?.degree_name}</div>
                    <div className="desc">{obj?.subjects}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* personal info */}
          <div className="section">
            <div className="section__title">Personal Info</div>
            <div className="section__list">
              <table id="cellExpand" className=" mt-3">
                <tbody>
                  <tr>
                    <th>
                      Contact
                    </th>
                    <td className="text-secondary">{phone_no}</td>
                  </tr>
                  <tr>
                    <th>
                      Mail
                    </th>
                    <td className="text-secondary">{email}</td>
                  </tr>
                  <tr>
                    <th>
                      Religion
                    </th>
                    <td className="text-secondary">{religion}</td>
                  </tr>
                  <tr>
                    <th>
                      Home
                    </th>
                    <td className="text-secondary">{address}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* skills */}
          <div className="section">
            <div className="section__title">Skills</div>
            <div className="skills">
              {skills?.map((obj, ind) => {
                return (
                  <div className="skills__item" key={ind}>
                    <div className="left">
                      <div className="name">{obj?.name}</div>
                    </div>
                    <div className="right">
                      <div className="progress w-50 ms-4 my-2">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          aria-label="Success example"
                          style={{ width: ` ${obj?.value}%` }}
                          aria-valuenow={`${obj?.value}`}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="section">
            <div className="section__title">Interests</div>
            <div className="section__list">
              <div className="section__list-item">{hobbies}</div>
            </div>
          </div>
          <div className="section">
            <div className="section__title">Reference</div>
            <div className="section__list">
              <div className="section__list-item">{reference}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design3;
