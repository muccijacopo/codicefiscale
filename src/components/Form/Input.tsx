import React from "react";

import "./Form.css";

interface Props {
  name: string;
  value: string;
  valueChanged: (event: any) => void;
}

export const Input: React.FC<Props> = (props) => {
  return (
    <input
      className="Input"
      value={props.value}
      onChange={props.valueChanged}
    ></input>
  );
};
