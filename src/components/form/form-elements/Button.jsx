import React from "react";
const Button = ({ className = "", children, ...props }) => {
  const buttonClass = `btn ${className}`;
  return (
    <button className={buttonClass} {...props}>
      {props.iconName && <i className={`bi bi-${props.iconName} me-2`} />}
      {children}
    </button>
  );
};

export default Button;
