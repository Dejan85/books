import React from "react";
import { InputProps } from "./types";

const Input = (props: InputProps) => {
  const { placeholder, value, onChange, type, name, id } = props;
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      name={name}
      id={id}
      className="input"
    />
  );
};

export default Input;
