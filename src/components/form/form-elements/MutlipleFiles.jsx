import React from "react";
import { useState } from "react";
import { getFileIcon, getFileTypes } from "../utility/formUtils";

const MutlipleFiles = (props) => {
  const {
    inputType,
    name,
    onChange,
    accept = "",
    formActions,
    value,
    className,
    ...other
  } = props;

  const acceptType = accept ? accept : getFileTypes(inputType);
  const { values } = formActions;
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState(values[name] ? values[name] : {});

  //   Handle onChange
  const handleChange = (event) => {
    onChange(name, event.currentTarget.files);
    setFiles({ ...files, ...event.currentTarget.files });
    setIsLoading(true);
  };

  //  Delete
  const handleDelete = (event) => {
    delete files[event];
    onChange(name, files);
    setFiles({ ...files });
  };

  return (
    <>
      <input
        className={`form-control form-control-sm ${className}`}
        type="file"
        accept={acceptType}
        name={name}
        multiple={true}
        onChange={handleChange}
      />
      <div className="py-2 d-flex flex-wrap">
        {Object.keys(files) != 0 &&
          Object.keys(files).map((file, ind) => (
            <div className="me-3 " key={ind}>
              {getFileIcon(files[file])}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="currentColor"
                className="bi bi-trash-fill text-danger mx-1"
                style={{ cursor: "pointer" }}
                viewBox="0 0 16 16"
                onClick={() => handleDelete(file)}
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>
              <br />
              <small>
                {files[file].name.length <= 5
                  ? files[file].name
                  : files[file].name.substring(0, 5) + "..."}
              </small>
            </div>
          ))}
      </div>
    </>
  );
};

export default MutlipleFiles;
