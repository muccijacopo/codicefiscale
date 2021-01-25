import React from 'react';

import classes from './Form.module.scss';

interface Props {
  name: string;
  type?: string;
  placeholder: string;
  value?: string;
  values?: string[];
  style?: any;
  valueChanged: (event: any) => void;
}

export function Input({ type, name, placeholder, value, valueChanged, style }: Props) {
  const inputType = type || 'text';
  return (
    <input
      className={classes.input}
      style={style}
      name={name}
      placeholder={placeholder}
      type={inputType}
      value={value}
      onChange={valueChanged}
      autoComplete="off"
    ></input>
  );
}
