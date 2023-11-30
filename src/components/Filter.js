import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Map = () => {
  const [users, setUsers] = useState([]);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  //   //return an array which include a letter
  //   const mapData = () => {
  //     let filteredData = users.filter((user) => {
  //       return user.name.includes("a");
  //     });

  //     console.log(filteredData);
  //   };

  //return 5 filter data
  //   const mapData = () => {
  //     let filteredData = users.filter((user) => {
  //       return user.id <= 5;
  //     });

  //     setUsers(filteredData);
  //   };

  //return 5 numbers with it's square
  //   const mapData = () => {
  //     let numbersLessThanFive = numbers
  //       .filter((number) => {
  //         return number <= 5;
  //       })
  //       .map((filtered) => {
  //         return filtered * filtered;
  //       });
  //     setNumbers(numbersLessThanFive);
  //   };

  //return square less than 50
  const mapData = () => {
    let numbersLessThan50 = numbers
      .map((number) => {
        return number * number;
      })
      .filter((number) => {
        return number <= 50;
      });
    setNumbers(numbersLessThan50);
  };
  return (
    <>
      <h2>Map and Filter</h2>
      <div className="row">
        {users.map((user) => (
          <div className="card">
            <div className="container">
              <p>{user.name}</p>
              <p>{user.username}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>Numbers</h2>
      <div className="row">
        {numbers.map((number) => (
          <div className="card">
            <div className="container">
              <p>{number}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>Map array mutiply by 2</h2>

      <button className="btn" onClick={mapData}>
        filteredData
      </button>
    </>
  );
};

export default Map;
