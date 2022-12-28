import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light ">
      <div className=" row justify-content-between align-items-center">
        <section className="col-sm-6 text-center my-2">
          CV Maker @ 2010-2022 All rights reserved
        </section>
        <section className="col-sm-6 text-center my-2">
          <ul className="list-unstyled d-flex flex-wrap justify-content-center">
            <li>
              <a href="" className="text-decoration-none text-light ps-4 mt-2">
                Terms & Privacy Policy
              </a>
            </li>
            <li>
              <a href="" className="text-decoration-none text-light ps-4 mt-2">
                Contact
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
