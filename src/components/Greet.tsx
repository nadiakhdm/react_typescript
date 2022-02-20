import React from "react";
type GreetProps = {
  name: string;
  num?: Number;
  isbool: Boolean;
};
const Greet = (props: GreetProps) => {
  return (
    <>
      {props.isbool ? (
        <div>
          {props.name}-{props.num}-{props.isbool}
        </div>
      ) : null}
    </>
  );
};

export default Greet;
