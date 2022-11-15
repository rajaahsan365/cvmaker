import React from "react";
const Button = ({ className = "", children, ...props }) => {
  const buttonClass = `btn ${className}`;
  return (
    <button className={buttonClass} {...props}>
      {props?.iconname && <i className={`bi bi-${props.iconname} me-2`} />}
      {children}
    </button>
  );
};

export default Button;
