import React from "react";
const Button = ({ className = "", buttonName, ...props }) => {
  const buttonClass = `btn ${className}`;
  return (
    <button className={buttonClass} {...props}>
      {props?.iconname && <i className={`bi bi-${props.iconname} me-2`} />}
      {buttonName}
    </button>
  );
};

export default Button;
