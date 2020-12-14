import React from "react";

interface Props {
  name: string;
  type?: string;
  placeholder: string;
  value?: string;
  values?: string[];
  style?: any;
  valueChanged: (event: any) => void;
}

export const Input: React.FC<Props> = ({
  type,
  name,
  placeholder,
  value,
  valueChanged,
  style,
}) => {
  const inputType = type || "text";
  return (
    <input
      className="Input"
      style={style}
      name={name}
      placeholder={placeholder}
      type={inputType}
      value={value}
      onChange={valueChanged}
      autoComplete="off"
    ></input>
  );
};
