import Button from "./form-elements/Button";
import Password from "./form-elements/Password";

export const inputTypes = {
  text: <input className="form-control" />,
  textarea: <textarea rows={20}></textarea>,
  "text-editor": <textarea rows={6} className="form-control"></textarea>,
  h1: <h1></h1>,
  h2: <h2></h2>,
  h3: <h3></h3>,
  h4: <h4></h4>,
  p: <p></p>,
  // file: <Upload />,
  password: <Password />,
  date: <input type="date" className="form-control" />,
  button: <Button type="button"></Button>,
  hidden: <input type="hidden"></input>,
  submit: <h1></h1>,
  // dropdown: <Dropdown />,
  // tableInput: <TableInput />,
  // SelectableTable: <SelectableTableInput />,
  // "async-dropdown": <AsyncDropdown />,
};
export const getInputType = ({ inputType }) => {
  const output = inputTypes[inputType] ? (
    inputTypes[inputType]
  ) : (
    <input className="form-control" />
  );
  return output;
};