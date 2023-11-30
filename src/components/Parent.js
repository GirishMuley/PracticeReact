import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [name, setName] = useState("Girish");

  const changeName = (value) => {
    console.log(value);
    setName(value);
  };
  return (
    <>
      <Child name={name} changeName={changeName} />
    </>
  );
};

export default Parent;
