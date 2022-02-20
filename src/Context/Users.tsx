import { useContext } from "react";
import { UserContext } from "./UserContext";
export const Users = () => {
  const usercontext = useContext(UserContext);
  const Handlelogin = () => {
    if (usercontext) {
      usercontext.setUser({ name: "ali", email: "nadia" });
    }
  };
  const HandlelogOut = () => {
    if (usercontext) {
      usercontext.setUser(null);
    }
  };
  return (
    <div>
      <button onClick={Handlelogin}>Handlelogin</button>
      <button onClick={HandlelogOut}>Handlelogin</button>
      <div>name:{usercontext.user?.name}</div>
      <div>email:{usercontext.user?.email}</div>
    </div>
  );
};
