import React, { memo } from "react";
import { MainContainerProps } from "./types";

const MainContainer = (props: MainContainerProps): JSX.Element => {
  const { children } = props;
  const className: string = "container";

  return <div className={className}>{children}</div>;
};

export default memo(MainContainer);
