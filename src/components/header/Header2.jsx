import React from "react";

const Header2 = ({ imgName = "logo" }) => {
  return (
    <div className={`container py-5`}>
      <div className="py-2 row">
        <div className="col-sm-8 text-dark">
          <img src={`src/assets/images/${imgName}.png`} alt="" />
        </div>

        <div className="col-sm-4 d-flex justify-content-sm-between justify-content-evenly">
          <div className="text-center">
            <h3>33,246,234</h3>
            downloads
          </div>
          <div className="text-center">
            <h3>12,314,142</h3>
            saved CVs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
