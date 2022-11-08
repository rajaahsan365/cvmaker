import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light ">
      <div className="container d-flex justify-content-between align-items-center">
        <section>CV Maker @ 2010-2022 All rights reserved</section>
        <section>
          <ul className="list-unstyled d-flex">
            <li>
              <a href="" className="text-decoration-none text-light ps-5">
                Data deletion
              </a>
            </li>
            <li>
              <a href="" className="text-decoration-none text-light ps-5">
                Terms & Privacy Policy
              </a>
            </li>
            <li>
              <a href="" className="text-decoration-none text-light ps-5">
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
