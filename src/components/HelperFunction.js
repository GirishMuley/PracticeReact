import React, { useEffect } from "react";
import { getUsers } from "../helpers/GetAllUsers";
import { Sum } from "../helpers/Sum";

const HelperFunction = () => {
  const getUsersHelper = async () => {
    let data = await getUsers(`posts`);
    console.log(data);
  };

  const addTwoNumsHelper = () => {
    let sum = Sum(2, 3);
    console.log(sum);
  };
  useEffect(() => {
    getUsersHelper();
  }, []);
  return (
    <>
      <div>
        <h1>Helper Function</h1>
        <button onClick={addTwoNumsHelper}>Add</button>
      </div>
    </>
  );
};

export default HelperFunction;
