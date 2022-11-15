import React from "react";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context-api/Context";

const CreateCVModal = () => {
  const {
    cvListDetail,
    setCVListDetail,
    cvDetail,
    setCvDetail,
    writeUserData,
  } = useGlobalContext();

  const navigate = useNavigate();

  const ref = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cvDetail);
    setCVListDetail({ ...cvListDetail, [cvDetail.name]: cvDetail });
    navigate("/cv");
  };
  return (
    <div className="modal" tabIndex="-1" id="exampleModal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create a CV</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          {/* body */}
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <div className="modal-body w-50">
              <div>
                <label htmlFor="exampleDataList" className="form-label h5">
                  Enter a name for your CV
                </label>
                <br />
                <input
                  type="text"
                  name="cv_name"
                  className="form-control"
                  value={cvDetail.name}
                  onChange={(e) =>
                    setCvDetail({ ...cvDetail, name: e.target.value })
                  }
                />
              </div>

              {/* language */}
              <div className="my-3">
                <label htmlFor="exampleDataList" className="form-label h5">
                  Language
                </label>
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  defaultValue={""}
                  onChange={(e) =>
                    setCvDetail({ ...cvDetail, language: e.target.value })
                  }
                >
                  <option disabled value={""}>
                    Select Language
                  </option>
                  <option value="english">English</option>
                  <option value="urdu">Urdu</option>
                  <option value="chinese">Chinese</option>
                </select>
              </div>
              {/* Industry */}
              <div>
                <label htmlFor="exampleDataList" className="form-label h5">
                  Industry
                </label>
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  defaultValue={""}
                  onChange={(e) =>
                    setCvDetail({ ...cvDetail, industry: e.target.value })
                  }
                >
                  <option disabled value={""}>
                    Open this select menu
                  </option>
                  <option value="i1">Industry 1</option>
                  <option value="i2">Industry 2</option>
                  <option value="i3">Industry 3</option>
                </select>
              </div>
            </div>
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
                data-bs-dismiss="modal"
                className="btn btn-primary"
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

export default CreateCVModal;
