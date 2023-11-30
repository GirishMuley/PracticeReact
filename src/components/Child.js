import React from "react";

const Child = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      {/* lefting a props */}
      <button className="btn" onClick={() => props.changeName("Muley")}>
        Change Name
      </button>
    </>
  );
};

export default Child;
