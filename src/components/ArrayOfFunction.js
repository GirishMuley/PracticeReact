import React, { useEffect } from "react";

const ArrayOfFunction = () => {
  const fnArray = [
    {
      fn: function add(a, b) {
        return a + b;
      },
    },
    {
      fn: function sub(a, b) {
        return a - b;
      },
    },
    {
      fn: function mult(a, b) {
        return a * b;
      },
    },
    {
      fn: function div(a, b) {
        return a / b;
      },
    },
  ];

  //   const fnArray = [
  //     function fn(a, b) {
  //       return a + b;
  //     },
  //     function fn(a, b) {
  //       return a - b;
  //     },
  //     function fn(a, b) {
  //       return a * b;
  //     },
  //     function fn(a, b) {
  //       return a / b;
  //     },
  //   ];

  const mainFn = () => {
    let result = fnArray.map((fn) => {
      return fn.fn(6, 3);
    });

    console.log(result);
  };
  useEffect(() => {
    mainFn();
  });
  return (
    <>
      <div>
        <h1>
          Write a function which takes array of multiple function and execute
          them one by one, in left to right manner
        </h1>
        <h1>By - Zomato</h1>
      </div>
    </>
  );
};

export default ArrayOfFunction;
