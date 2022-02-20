import React from "react";
type InputProps = {
  value: string;

};
const Input = ({value}: InputProps) => {
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <>
      <input type="text" value={value} onChange={onChangeInput} />
    </>
  );
};
export default Input;
