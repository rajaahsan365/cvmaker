import React from "react";

const DeleteButton = ({ children, onDelete }) => {
  return (
    <>
      <button
        className="btn p-1"
        data-bs-toggle="modal"
        data-bs-target="#deleteModal"
      >
        {children}
      </button>

      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Are you sure to want Delete this?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={onDelete}
                aria-label="Close"
                data-bs-dismiss="modal"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteButton;
