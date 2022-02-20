import React from "react";

interface InputProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  value: any;
  placeholder: string;
}

const Inputes: React.FC<InputProps> = ({ onChange, placeholder, value }) => {
  return (
    <div className="input-wrapper">
      <input value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

export default Inputes;
