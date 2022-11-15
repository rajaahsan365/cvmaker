import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { objectIsEmpty } from "../../assets/utils";
import { useGlobalContext } from "../context-api/Context";

const CvListTable = () => {
  const {
    getAllValue,
    cvListDetail,
    setCVListDetail,
    handleDelete,
    duplicateRecord,
  } = useGlobalContext();
  const [cvKeys, setCvKeys] = useState([]);
  const [render, setRender] = useState(false);

  const getRecords = async () => {
    const res = await getAllValue();
    const cvDatas = Object.values(res);
    setCvKeys([...Object.keys(res)]);
    setCVListDetail([...cvDatas]);
  };

  useEffect(() => {
    getRecords();
  }, []);

  const callback = (id) => {
    getRecords();
  };

  const onDelete = (ind) => {
    handleDelete(cvKeys[ind], () => callback(cvKeys[ind]));
  };
  const onDuplicate = (ind) => {
    duplicateRecord(cvKeys[ind]);
    setRender(!render);
  };

  return (
    <>
      {!objectIsEmpty(cvListDetail) && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#Name</th>
              <th scope="col">Language</th>
              <th scope="col">Last Modified</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {cvListDetail.map(({ cv_detail }, ind) => (
              <tr key={ind}>
                <th scope="row">{cv_detail.name}</th>
                <td>{cv_detail.language}</td>
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
                  <button
                    onClick={() => onDelete(ind)}
                    className="btn p-1"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Delete"
                  >
                    <i className="bi bi-trash3-fill text-danger h5" />
                  </button>
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
