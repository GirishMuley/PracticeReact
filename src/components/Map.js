import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Map = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  // return id multiple of id*2
  const mapData = () => {
    let mappedArray = users.map((user) => user.id * 2);
    console.log(mappedArray);
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

      <h2>Map array mutiply by 2</h2>

      <button className="btn" onClick={mapData}>
        MappedArray
      </button>
    </>
  );
};

export default Map;
