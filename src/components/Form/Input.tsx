import React from "react";

import "./Form.css";

interface Props {
  name: string;
  type?: string;
  placeholder: string;
  value?: string;
  values?: string[];
  valueChanged: (event: any) => void;
}

export const Input: React.FC<Props> = (props) => {
  const type = props.type || "text";
  return (
    <input
      className="Input"
      name={props.name}
      placeholder={props.placeholder}
      type={type}
      value={props.value}
      onChange={props.valueChanged}
      autoComplete="off"
    ></input>
  );
};
