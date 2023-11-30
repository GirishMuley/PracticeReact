import React, { useState } from "react";

const DynamicInputs = () => {
  const [inputs, setInputs] = useState({});
  const getInputValues = (data) => {
    let { name, value } = data.target;
    let input = { [name]: value };
    setInputs({ ...inputs, ...input });
  };
  console.log(inputs);
  return (
    <>
      <div>
        <input placeholder="Name..." name="name" onChange={getInputValues} />
        <br />
        <input placeholder="Age..." name="age" onChange={getInputValues} />
        <br />
        <input
          placeholder="Year of experience..."
          name="year"
          onChange={getInputValues}
        />
        <br />
      </div>
      <button className="btn">Add New Group</button>
    </>
  );
};
export default DynamicInputs;
