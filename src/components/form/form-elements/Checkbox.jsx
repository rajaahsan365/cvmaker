import React from "react";

const Checkbox = ({ name, options, parentClass, ...otherProps }) => {
  return (
    <>
      <div className={`form-check ${parentClass ? parentClass : "d-flex "}`}>
        {options.map((ind, key) => {
          return (
            <div className="me-5" key={key}>
              <input
                type="checkbox"
                className="form-check-input"
                name={name}
                value={ind.value}
                id={ind.value}
                {...otherProps}
              />

              <label htmlFor={ind.value} className="form-check-label ">
                {ind.label}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Checkbox;
