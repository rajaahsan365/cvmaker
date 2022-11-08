import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getFieldsByCategory } from "../../assets/utils";
import { useGlobalContext } from "../../components/context-api/Context";
import InputForm from "../../components/form/InputForm";
import Header2 from "../../components/header/Header2";
import cvFormFields from "../../Json-Form/CVForm.json";

const CreateUpdateCV = () => {
  const [cvCategoryName, setCvCategoryName] = useState([
    { name: "Basic Information", type: "Basic Information" },
    { name: "Work Experience", type: "Work Experience" },
    { name: "Qualifications", type: "Qualifications" },
    { name: "Education", type: "Education" },
    { name: "Interests", type: "Interests" },
    { name: "References", type: "References" },
  ]);

  const [sectionForm, setSectionForm] = useState({
    name: "",
    type: false,
  });

  const { cvDetail, setcvListDetail, setCvDetail, writeUserData, addData } =
    useGlobalContext();

  const [selectOption, setSelectOption] = useState({
    name: "Basic Information",
    type: "Basic Information",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const addObj = {
      name: sectionForm.name,
      type: sectionForm.type ? "Special Section" : "Default Section",
    };
    setCvCategoryName([...cvCategoryName, addObj]);
  };

  const onFormSubmit = (value) => {
    const data = {
      cv_detail: cvDetail,
      cv_content: value,
    };
    console.log(
      "🚀 ~ file: CreateUpdateCV.jsx ~ line 43 ~ onFormSubmit ~ data",
      data
    );

    addData(data);
  };

  return (
    <div className="container">
      <Header2 />
      <h1>{cvDetail.name}</h1>
      {/* button group */}
      <div className="text-end">
        <button className="btn btn-success">
          Upgrade to Premium <i className="bi bi-heart-fill" />
        </button>
        <button className="btn btn-secondary ms-4">
          Help <i className="bi bi-info-circle" />
        </button>
        <button className="btn btn-secondary ms-4">
          Quick Preview <i className="bi bi-search" />
        </button>
        <button className="btn btn-secondary ms-4">
          Save <i className="bi bi-file-earmark-fill" />
        </button>
        <button className="btn btn-secondary ms-4">
          Save & Download <i className="bi bi-save-fill" />
        </button>
      </div>

      {/* form section */}
      <section className="row border rounded my-4 p-md-5 p-2">
        {/* left side */}
        <div className="left col-md-3 col-6">
          <ul className="list-group ">
            {cvCategoryName.map(({ name, type }, ind) => (
              <li
                className={`list-group-item btn text-start ${
                  name == selectOption.name ? "active" : ""
                }`}
                onClick={() => setSelectOption({ ...selectOption, name, type })}
                key={ind}
              >
                {name}
              </li>
            ))}
          </ul>
          <button
            className="btn btn-secondary my-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="bi bi-plus" />
            Add New Section
          </button>
        </div>
        {/* right side */}
        <div className="right col-md-9 col-6">
          <p className="fs-4">{selectOption.name}</p>
          <InputForm
            initialFieldValues={cvFormFields}
            formData={getFieldsByCategory(cvFormFields, selectOption.type)}
            onFormSubmit={onFormSubmit}
          />
        </div>
      </section>

      {/* <!-- Modal --> */}
      <div
        className="modal fade form"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <form
            className="form modal-content"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add New Section
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* body */}
            <div className="modal-body">
              <div className="my-3">
                <label htmlFor="section_name">Section Name</label>
                <br />
                <input
                  type="text"
                  name="section_name"
                  id="section_name"
                  className="form-control my-2"
                  onChange={(e) =>
                    setSectionForm({ ...sectionForm, name: e.target.value })
                  }
                  value={sectionForm.name}
                />
              </div>
              <div className="mb-3">
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  checked={sectionForm.type}
                  onChange={(e) =>
                    e.target.checked &&
                    setSectionForm({
                      ...sectionForm,
                      type: true,
                    })
                  }
                  value={sectionForm.type}
                />

                <label htmlFor="check">
                  Special section (like Education, Work)
                </label>
              </div>
            </div>
            {/* footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Ok
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUpdateCV;
