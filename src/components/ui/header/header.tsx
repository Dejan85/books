import React, { memo } from "react";
import { PropsInterface } from "./types";

const Header = (props: PropsInterface): JSX.Element => {
  const { tag: Tag, text } = props || {};
  const className = "header";
  return <Tag className={className}>{text}</Tag>;
};

export default memo(Header);
