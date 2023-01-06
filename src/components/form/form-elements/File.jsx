import React from "react";
import { useState } from "react";
import { getFileIcon, getFileTypes } from "../utility/formUtils";

const File = (props) => {
  const {
    inputType,
    name,
    onChange,
    formActions,
    accept = "",
    value,
    className,
    ...other
  } = props;

  const { values } = formActions;
  const acceptType = accept ? accept : getFileTypes(inputType);

  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(values[name]);
  const handleChange = (event) => {
    onChange(name, event.currentTarget.files[0]);
    setFile(event.currentTarget.files[0]);
    setIsLoading(true);
  };

  return (
    <>
      <input
        className={`form-control form-control-sm ${className}`}
        type="file"
        name={name}
        accept={acceptType}
        onChange={handleChange}
        {...other}
      />
      <div className="py-2">
        {file &&
          (file.type.split("/")[0] == "image" ? (
            <img
              src={URL.createObjectURL(file)}
              alt="Image"
              onLoad={() => setIsLoading(false)}
              style={{
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "3px",
                width: "70px",
              }}
            />
          ) : (
            getFileIcon(file)
          ))}
      </div>
    </>
  );
};

export default File;
