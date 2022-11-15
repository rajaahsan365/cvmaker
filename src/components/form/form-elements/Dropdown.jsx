import React from "react";
import Select from "react-select";
const Dropdown = ({ isMulti, onChange, ...otherProps }) => {
  console.log(
    "🚀 ~ file: Dropdown.jsx ~ line 4 ~ Dropdown ~ otherProps",
    otherProps
  );

  const handleChange = (value) => {
    // this is going to call setFieldValue and manually update values.topcis
    onChange(otherProps.name, value);
  };
  return (
    <>
      <Select
        isMulti={isMulti ? isMulti : false}
        // className="basic-multi-select"
        // classNamePrefix="select"
        onChange={handleChange}
        {...otherProps}
      />
    </>
  );
};

export default Dropdown;
