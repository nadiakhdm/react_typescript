import React from "react";
import { useState } from "react";
type UserProps = {
  name: string;
  email: string;
};
const User = (props: UserProps) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const handleLogin = () => {
    setUser({ name: "nadia", email: "ffff#cvcv" });
  };
  const handleLogOut = () => {
    setUser(null);
  };
  return (
    <>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogOut}>logout</button>
      <div className="">{user ?.name }</div>
      <div className="">{user ?.email }</div>
    </>
  );
};

export default User;
