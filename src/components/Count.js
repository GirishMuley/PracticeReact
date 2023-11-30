import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [array, setArray] = useState([
    { name: "Girish", age: 26 },
    { name: "Muley", age: 25 },
  ]);
  const [object, setObject] = useState({
    name: "girish",
    age: 26,
  });
  const increment = () => {
    setCount((count) => count + 1);
    setName("Clicked");
    setIsVisible(!isVisible);
  };

  return (
    <>
      <h1>{count}</h1>
      <button className="btn" onClick={increment}>
        increment {isVisible ? name : "Click"}
      </button>
    </>
  );
};

export default Count;
