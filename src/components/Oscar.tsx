import React from "react";
type OscarProps = {
  children: React.ReactNode;
};
const Oscar = (props: OscarProps) => {
  return <>{props.children}</>;
};

export default Oscar;
