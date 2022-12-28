import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { objectIsEmpty } from "../../assets/utils";
import DeleteButton from "../../delete/DeleteButton";
import { useGlobalContext } from "../context-api/Context";

const CvListTable = () => {
  const {
    userDetail,
    getAllValue,
    cvListDetail,
    setCVListDetail,
    handleDelete,
    duplicateRecord,
  } = useGlobalContext();

  const [cvKeys, setCvKeys] = useState([]);

  const getRecords = async () => {
    let res = {};
    res = await getAllValue();
    if (typeof res == "object") {
      const cvDatas = Object.values(res);
      setCvKeys([...Object.keys(res)]);
      setCVListDetail([...cvDatas]);
      console.log(
        "🚀 ~ file: CvListTable.jsx:24 ~ getRecords ~ cvDatas",
        cvDatas
      );
    }
  };

  useEffect(() => {
    getRecords();
  }, [userDetail]);

  const callback = (id) => {
    getRecords();
  };

  const onDelete = (ind) => {
    handleDelete(cvKeys[ind], () => callback(cvKeys[ind]));
  };
  const onDuplicate = (ind) => {
    duplicateRecord(cvKeys[ind], () => callback(cvKeys[ind]));
  };
  console.log("cvListDetail:", cvListDetail);

  return (
    <>
      {!objectIsEmpty(cvListDetail) && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#Name</th>
              <th scope="col">Last Modified</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {cvListDetail?.map(({ cv_detail }, ind) => (
              <tr key={ind}>
                <td scope="row">{cv_detail.name}</td>
                <td>{cv_detail.time}</td>
                <td>
                  <Link
                    className="btn p-1"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Edit"
                    to={`/update/${cvKeys[ind]}`}
                  >
                    <i className="bi bi-pencil-square text-primary h5" />
                  </Link>
                  <button
                    className="btn p-1"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Duplicate"
                    onClick={() => onDuplicate(ind)}
                  >
                    <i className="bi bi-clipboard-fill text-secondary h5" />
                  </button>
                  <DeleteButton onDelete={() => onDelete(ind)}>
                    <i className="bi bi-trash3-fill text-danger h5" />
                  </DeleteButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default CvListTable;
