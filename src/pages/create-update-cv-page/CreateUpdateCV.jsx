import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  getDateandTime
} from "../../assets/utils";
import { useGlobalContext } from "../../components/context-api/Context";
import Header2 from "../../components/header/Header2";
import cvFormFields from "../../Json-Form/CVForm.json";
import CreateCVModal from "../../components/create-cv-modal/CreateCVModal";
import CvDownloadModal from "../../components/context-api/cvdownload-modal/CvDownloadModal";
import FormContainer from "../../components/form/FormContainer";
import { getFieldsByCategory } from "../../components/form/utility/formUtils";
const CreateUpdateCV = () => {
  const cvCategoryName = [
    { name: "Basic Information", type: "Basic Information" },
    { name: "Work Experience", type: "Work Experience" },
    { name: "Education", type: "Education" },
    { name: "Social", type: "Social" },
    { name: "Skills", type: "Skills" },
    { name: "Hobbies", type: "Hobbies" },
    { name: "References", type: "References" },
  ];

  const {
    cvDetail,
    setCvDetail,
    getRecordById,
    addData,
    updateRecord,
    cvListDetail,
    setCVListDetail,
  } = useGlobalContext();

  const [selectOption, setSelectOption] = useState({
    name: "Basic Information",
    type: "Basic Information",
  });

  const { id } = useParams();

  useEffect(() => {
    getRecordByApi();
  }, [id]);

  const [cvRecord, setCvRecord] = useState({});

  const getRecordByApi = async () => {
    const data = await getRecordById(id);
    setCvRecord({ ...data.cv_content });
    setCvDetail({ ...data.cv_detail });
  };

  const onFormSubmit = (value) => {
    const data = {
      cv_detail: cvDetail,
      cv_content: value,
    };

    id ? updateRecord(id, data) : addData(data);
    setCvRecord(value);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCvDetail({
      time: getDateandTime(),
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <Header2 color="dark" />

      <div className="d-flex form-group align-items-center">
        <div className=" h5">Resume Name:</div>
        <div className="ms-2">
          <input
            type="text"
            className="form-control"
            name="name"
            value={cvDetail.name}
            id="name"
            required
            placeholder="Resume Name"
            onChange={(e) => handleChange(e)}
          />
        </div>
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
                onClick={() => setSelectOption({ name, type })}
                key={ind}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
        {/* right side */}
        <div className="right col-md-9 col-6">
          <p className="fs-4">{selectOption.name}</p>
          <FormContainer
            initialFieldValues={
              id != undefined ? cvRecord : cvFormFields
            }
            formData={getFieldsByCategory(cvFormFields, selectOption.type)}
            formValidation={cvFormFields}
            onFormSubmit={onFormSubmit}
          >
            {/* button group */}
            <div className="text-md-end mt-5">
              <button className="btn btn-primary ms-2 mb-2" type="submit">
                Save <i className="bi bi-file-earmark-fill" />
              </button>

              <button
                type="button"
                className="btn btn-danger ms-2 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#cvdownloadmodal"
                // onClick={() => onFormSubmit()}
              >
                <i className="bi bi-eye me-1" />
                Preview and Download
              </button>
            </div>
          </FormContainer>
        </div>
      </section>

      {/* Download Cv */}
      <CvDownloadModal cvRecord={cvRecord} />
    </div>
  );
};

export default CreateUpdateCV;
