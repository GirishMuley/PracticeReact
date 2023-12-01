import React, { useState } from "react";
import Set from "./Set";
import SetName from "./SetName";
import { UserData } from "../context/GlobalContext";
const Name = () => {
  const [name, setName] = useState("Girish");
  return (
    <>
      <div>
        <UserData.Provider value={{ name, setName }}>
          <Set />
          <SetName />
        </UserData.Provider>
      </div>
    </>
  );
};

export default Name;
