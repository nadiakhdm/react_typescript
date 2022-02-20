import React from "react";
type StatusProps = {
  status: "loading"|"error"|"success";
};
const Status = (props: StatusProps) => {
  let message;
  if (props.status === "error") {
    message = "this is error";
  } else if (props.status === "success") {
    message = "this is success";
  } else if (props.status === "loading") {
    message = "this is loading";
  }
  return (
    <>
      <h1 className="">{message}</h1>
    </>
  );
};

export default Status;
