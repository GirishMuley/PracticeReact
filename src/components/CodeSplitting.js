import React from "react";
// import { add } from "./Math";
const CodeSplitting = () => {
  const additon = () => {
    //Dynamic Import
    import("./Math").then((math) => {
      console.log(math.add(2, 3));
    });
  };

  return (
    <>
      <div>
        <button className="btn" onClick={additon}>
          ADD
        </button>
      </div>
    </>
  );
};

export default CodeSplitting;
