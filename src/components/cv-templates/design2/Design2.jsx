import React from "react";

const Design2 = ({ cvRecord = {} }) => {
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
    <div className="m-0 p-0" style={{ minWidth: "750px" }} id="design2">
      <div className="row">
        {/* left Side */}
        <div className="col-5 p-2">
          {/* name section */}
          <div className="my-3 d-flex">
            {/* <div className="img w-25 text-danger me-4">
              <svg height="200" width="600" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="50" r="50" fill="#79C99E" />
              </svg>
            </div> */}
            <h2 className="ms-3">{`${first_name} ${last_name}`}</h2>
          </div>

          {/* Personal Info Section */}
          <table id="cellExpand" className="mx-3 mt-3">
            <tbody>
              <tr>
                <th>
                  {/* <span className="dot"></span> */}
                  Contact
                </th>
                <td className="text-secondary">{phone_no}</td>
              </tr>
              <tr>
                <th>
                  {/* <span className="dot"></span> */}
                  Mail
                </th>
                <td className="text-secondary">{email}</td>
              </tr>
              <tr>
                <th>
                  {/* <span className="dot"></span> */}
                  Religion
                </th>
                <td className="text-secondary">{religion}</td>
              </tr>
              <tr>
                <th>
                  {/* <span className="dot"></span> */}
                  Home
                </th>
                <td className="text-secondary">{address}</td>
              </tr>
            </tbody>
          </table>

          {/* About Yourself */}
          <p className="m-3 text-secondary">{about_you}</p>

          {/* Social Links */}
          <table className="m-3">
            <tbody>
              {social_links?.map((obj, ind) => (
                <tr key={ind}>
                  <th className="text-capitalize">
                    {/* <span className="dot"></span> */}

                    {obj?.name}
                  </th>
                  <td className="text-secondary">
                    {/* <span className="dot"></span> */}

                    {obj?.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Side */}
        <div className="col-7 bg-dark">
          {/* Education */}
          <div className="m-5">
            <h5 className="text-success my-3">Education</h5>
            {educations.map((obj, ind) => {
              return (
                <div className="ps-2 py-3 d-flex" key={ind}>
                  <span className="dot bg-white mt-2"></span>
                  <div>
                    <h5 className="text-white">{obj?.institute_name}</h5>
                    <h6 className="text-white">
                      {`${obj?.degree_name} (${obj?.start_date} to ${obj?.end_date})`}
                    </h6>
                    <p className="text-secondary text-justify">
                      Subjects:
                      <span className="text-white ms-2">{obj?.subjects}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Experiences */}
          <div className="m-5">
            <h5 className="text-success my-3">Experience</h5>
            <div>
              {experiences?.map((obj, ind) => (
                <div key={ind} className="ps-2 py-3 row">
                  <div className=" text-white col-3 d-flex">
                    <span className="dot bg-white mt-2"></span>
                    <div>
                      <h6 className="text-capitalize text-white">
                        {obj?.company_name}
                      </h6>
                      <p className="text-secondary">{`${obj.start_date} to ${obj?.end_date}`}</p>
                    </div>
                  </div>
                  <div className="text-secondary col-8">
                    <h6 className="text-white">{obj?.job_title}</h6>
                    <p className="text-secondary">{obj?.job_description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="m-5">
            <h5 className="text-success my-3">Skills</h5>
            {skills?.map((obj, ind) => {
              return (
                <React.Fragment key={ind}>
                  <li className="skill-percentage text-capitalize text-secondary h6">
                    {obj?.name}
                  </li>

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
                </React.Fragment>
              );
            })}
          </div>

          {/* Hobbies */}
          <div className="m-5">
            <h5 className="text-success my-3">Hobbies</h5>
            <p className="text-white ps-2">{hobbies}</p>
          </div>

          {/* Reference */}
          <div className="m-5">
            <h5 className="text-success my-3">Reference</h5>
            <p className="text-white ps-2">{reference}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design2;
