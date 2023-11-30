import React from "react";

const InlineConditionalExpressions = () => {
  let age = 26;
  let name = "Girish";
  return (
    <>
      {age > 26 ? (
        <h1>You are now old</h1>
      ) : name === "Girish" && age === 26 ? (
        <>
          <h1>I am 26 years old</h1> <h1>Girish is my name</h1>
        </>
      ) : (
        <>
          <h1>I am less than 26 years old</h1> <h1>Girish is not my name</h1>
        </>
      )}
    </>
  );
};

export default InlineConditionalExpressions;
