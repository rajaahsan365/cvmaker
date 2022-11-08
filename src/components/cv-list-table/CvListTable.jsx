import React, { useEffect, useState } from "react";
import { objectIsEmpty } from "../../assets/utils";
import { useGlobalContext } from "../context-api/Context";

const CvListTable = () => {
  const [cvListDetail, setCVListDetail] = useState([]);
  const { getAllValue } = useGlobalContext();

  const abc = async () => {
    const res = await getAllValue();
    const d = res.map(({ cv_detail }) => cv_detail);
    console.log("🚀 ~ file: CvListTable.jsx ~ line 12 ~ abc ~ d", d);
    setCVListDetail([...cvListDetail, ...d]);
  };

  console.log(
    "🚀 ~ file: CvListTable.jsx ~ line 18 ~ abc ~ ----",
    cvListDetail
  );

  useEffect(() => {
    abc();
  }, []);

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
            {Object.entries(cvListDetail).map(([key, value], ind) => (
              <tr key={key}>
                <th scope="row">{value.name}</th>
                <td>{value.language}</td>
                <td>{value.time}</td>
                <td>@fat</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default CvListTable;
