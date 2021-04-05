import React, { memo } from "react";

const SubContainer = (props) => {
  const { children } = props;

  return <div className="sub-container">{children}</div>;
};

export default memo(SubContainer);
