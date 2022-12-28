import React from "react";
const Password = ({ ...props }) => {
  //
  const [passwordType, setPasswordType] = React.useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <div className="input-group">
      <input type={passwordType} className="form-control" {...props} />
      <div className="input-group-btn">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={togglePassword}
        >
          {passwordType === "password" ? (
            <i className="bi bi-eye-slash"></i>
          ) : (
            <i className="bi bi-eye"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default Password;
