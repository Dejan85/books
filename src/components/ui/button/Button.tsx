import React, { memo } from "react";
import { ButtonProps } from "./types";

const Button = (props: ButtonProps) => {
  const { type, disabled, value, text, onClick } = props;
  return (
    <button
      type={type}
      disabled={disabled}
      value={value}
      className="button"
      onClick={() => onClick}
    >
      {text}
    </button>
  );
};

export default memo(Button);
