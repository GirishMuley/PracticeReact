import React, { useContext } from "react";
import { UserData } from "../context/GlobalContext";

const Set = () => {
  let { name } = useContext(UserData);
  return (
    <>
      <div>
        <h1>The Name is {name}</h1>
      </div>
    </>
  );
};

export default Set;
