import React from "react";

const KeysInReact = () => {
  const details = [
    {
      id: 1,
      name: "Girish",
      age: 26,
    },
    {
      id: 2,
      name: "Shailesh",
      age: 29,
    },
    {
      id: 3,
      name: "Vishal",
      age: 28,
    },
    {
      id: 4,
      name: "Onkar",
      age: 24,
    },
    {
      id: 5,
      name: "shubham",
      age: 25,
    },
  ];
  return (
    <>
      {/* removing  Each child in a list should have a unique "key" prop. Error using key */}
      {/* {details.map((detail) => (
        <div className="card" key={detail.id}>
          <div className="container">
            <p>{detail.name}</p>
            <p>{detail.age}</p>
          </div>
        </div>
      ))} */}

      {/* removing  Each child in a list should have a unique "key" prop. Error using index */}
      {details.map((detail, index) => (
        <div className="card" key={index}>
          <div className="container">
            <p>{detail.name}</p>
            <p>{detail.age}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default KeysInReact;
