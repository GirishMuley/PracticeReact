import React from "react";

const Add = () => {
  const getValue = (event) => {
    console.log(event.target.name);
  };

  const addNums = (num1, num2) => {
    console.log(num1 + num2);
  };
  return (
    <>
      <input placeholder="Enter value" onChange={getValue} name="input" />
      <button onClick={() => addNums(2, 3)}>Add</button>
    </>
  );
};

export default Add;
