import React from "react";

const LanguagesSection = () => {
  return (
    <div className="d-md-flex justify-content-evenly align-items-center py-5">
      <div>
        <ul className="list-unstyled">
          <li>
            <i className="bi bi-lock pe-3 text-danger" />
            Secure 256 bit SSL encryption
          </li>
          <li>
            <i className="bi bi-browser-chrome pe-3" />
            Available on the Chrome webstore
          </li>
          <li>
            <i className="bi bi-twitter pe-3" />
            Follow updates at @cvmaker
          </li>
        </ul>
      </div>
      <div className="w-50">
        <p>
          English العربية Български Čeština Dansk Deutsch Eesti keel ქართული
          Dutch Español فارسی Français Galician Έλληνικά Hrvatski Hungarian
          Italiano עברית 한국어 Norsk Polski Português (br) Português (pt) Român
          Pусский Slovenščina Slovenský Shqip Suomi Svenska Türkçe Українська
          Tiếng Việt മലയാളം 中文 繁體中文
        </p>
      </div>
      <div>
        <ul className="list-unstyled">
          <li>
            <h5>Links</h5>
          </li>
          <li>Help</li>
          <li>Resume Tips</li>
          <li>Language Credits</li>
          <li>Jobs by Rulla</li>
        </ul>
      </div>
    </div>
  );
};

export default LanguagesSection;
