import React from "react";

const SubContainer = (props) => {
  const { children } = props;

  return <div className="sub-container">{children}</div>;
};

export default SubContainer;
