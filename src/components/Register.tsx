import React from "react";
import { useState } from "react";
type RegisterProps = {};
const Register = (props: RegisterProps) => {
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(true);
  };
  const handleLogOut = () => {
    setLogin(false);
  };
  return (
    <>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogOut}>logout</button>
      <div className="">{login?"login":"logout"}</div>
    </>
  );
};

export default Register;
