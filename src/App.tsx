import React from "react";
import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import ListUser from "./components/ListUser";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import Register from "./components/Register";
import Status from "./components/Status";
import Style from "./components/Style";
import User from "./components/User";
import { Box } from "./Context/Box";
import { ThemContextProvider } from "./Context/ThemContext";
import { Users } from "./Context/Users";
import { UserContextProvider } from "./Context/UserContext";
import DomRef from "./components/DomRef";
import { Timer } from "./components/Timer";
// import { Listgener } from "./components/generics/Listgener";
import { Random } from "./components/Random";
import { Toal } from "./components/Toal";
import { StyleButton } from "./components/StyleButton";
import { log } from "console";
import { Text } from "./components/Text";
// import { Private } from "./components/auth/private";

function App() {
  const fullname = {
    name: "nada",
    fname: "khdm",
  };
  const Listname = [
    {
      name: "nada",
      fname: "khdm",
    },
    {
      name: "nada2",
      fname: "khdm2",
    },
  ];
  return (
    <div className="App">
      <Greet name="ali" num={180} isbool={true} />
      <Person name={fullname} />
      <ListUser Listname={Listname} />
      <Status status="loading" />
      <Oscar>
        <Heading>hello world</Heading>
      </Oscar>
      <br />
      <Button
        handleclick={(event, id) => {
          console.log("gfgfgfg", event, id);
        }}
      />
      <Input value="" />
      <Style style={{ border: "1px  solid red" }} />
      {/* <Register /> */}
      {/* <User/> */}
      <ThemContextProvider>
        <Box />
      </ThemContextProvider>
      <UserContextProvider>
        <Users />
      </UserContextProvider>
      <DomRef />
      <Timer />
      {/* <Private isLoggedIn={true} component={Profile}/> */}
      {/* <Listgener
        items={[1,2,3]}
        onclick={(item) => {
          console.log(item);
        }}
      /> */}
      <Random value={10} isPsetive />
      <Toal position='center'/>
      {/* <StyleButton variant="primary" onclick={()=>{console.log("hello")}}>hello world</StyleButton>
  <Text as="" size="20"/> */}
 
    </div>
  );
}

export default App;
