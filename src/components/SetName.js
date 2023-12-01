import React, { useContext } from "react";
import { UserData } from "../context/GlobalContext";
const SetName = () => {
  let { setName } = useContext(UserData);
  return (
    <>
      <div>
        <button onClick={() => setName("Uday")}>Change the name</button>
      </div>
    </>
  );
};

export default SetName;
