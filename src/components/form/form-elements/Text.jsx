import React, { createElement } from "react";

const Text = (props) => {
  const { inputType, text, className="" } = props;

  const tag = createElement(inputType, {className}, text);
  return tag;
};

export default Text;
