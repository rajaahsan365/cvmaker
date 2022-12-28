import React from "react";
import "./Design4.scss";

const Design4 = ({ cvRecord = {} }) => {
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
    <div className="design4" id="design4" style={{ minWidth: "750px" }}>
      <div id="doc2" className="yui-t7">
        <div id="inner">
          <div id="hd">
            <div className="yui-gc">
              <div className="yui-u first">
                <h1>{`${first_name} ${last_name}`}</h1>
              </div>

              <div className="yui-u">
                <div className="contact-info">
                  <h3>
                    <a href="">{email}</a>
                  </h3>
                  <h3>{phone_no}</h3>
                </div>
              </div>
            </div>
          </div>

          <div id="bd">
            <div id="yui-main">
              {/* Skills */}
              <div className="yui-gf">
                <div className="yui-u first">
                  <h2>Technical</h2>
                </div>
                <div className="yui-u">
                  <div className="talent row">
                    {skills?.map((obj, ind) => {
                      return (
                        <React.Fragment key={ind}>
                          <li className="skill-percentage text-capitalize text-secondary h6 col-4">
                            {obj?.name}
                          </li>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="yui-gf">
                <div className="yui-u first">
                  <h2>Experience</h2>
                </div>

                <div className="yui-u">
                  {experiences?.map((obj, ind) => (
                    <div className="job" key={ind}>
                      <h2>{obj?.institue_name}</h2>
                      <h3>{obj?.job_title}</h3>
                      <h4>{`${obj.start_date} to ${obj?.end_date}`}</h4>
                      <p>{obj?.job_description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="yui-gf">
                <div className="yui-u first">
                  <h2>Education</h2>
                </div>
                {educations.map((obj, ind) => {
                  return (
                    <div className="yui-u my-3" key={ind}>
                      <h2>{obj?.institue_name}</h2>
                      <h3>
                        {obj?.degree_name}{" "}
                        <strong>{`(${obj.start_date} to ${obj?.end_date})`}</strong>
                      </h3>
                      <p>{obj?.subjects}</p>
                    </div>
                  );
                })}
              </div>

              {/* hobbies */}
              <div className="yui-gf">
                <div className="yui-u first">
                  <h2>Hobbies</h2>
                </div>
                <p>{hobbies}</p>
              </div>

              {/* Reference */}
              <div className="yui-gf">
                <div className="yui-u first">
                  <h2>Reference</h2>
                </div>
                <p>{reference}</p>
              </div>
            </div>
          </div>
        </div>

        <div id="ft">
          <p>
            {`${first_name} ${last_name}`} &mdash; <a>{email}</a> &mdash;
            {phone_no}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Design4;
