import React from "react";
type ListUserProps = {
  Listname: { name: string; fname: string }[];
};
const ListUser = (props: ListUserProps) => {
  return (
    <>
      {props.Listname.map((itm) => (
        <h1>{itm.name}</h1>
      ))}
    </>
  );
};

export default ListUser;
