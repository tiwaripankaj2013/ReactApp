import React, { useState } from "react";
import { contextData } from "./contextData";
import { UserList } from "./userList";

const UseContextHook = () => {
  const [data, setData] = useState([
    { id: "#1", name: "Pankaj Kumar", email: "pankaj@gmail.com" },
    { id: "#2", name: "Prem Kumar", email: "rakesh@gmail.com" },
    { id: "#3", name: "Praveen sharma", email: "prakash@gmail.com" },
    { id: "#4", name: "Prakash Kumar", email: "shyam@gmail.com" },
    { id: "#5", name: "Neha Singh", email: "neha@gmail.com" },
  ]);

  return (
    <>
      <p>useContext hooks example</p>
      <contextData.Provider value={data}>
        <UserList />
      </contextData.Provider>
    </>
  );
};

export default UseContextHook;
