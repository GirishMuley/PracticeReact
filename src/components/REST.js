import React, { useEffect, useState } from "react";
import axios from "axios";

const REST = () => {
  //POST GET PUT OR PATCH DELETE Request
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  //POST Request
  const postData = () => {
    axios
      .post("https://6569a007de53105b0dd75dfc.mockapi.io/users", {
        name: name,
        age: 26,
        hobbies: ["coding", "games", "F1 race"],
      })
      .then((res) => {
        console.log(res.data);
      })
      .then((err) => {
        console.error(err);
      });
  };

  //PUT Request
  const updateData = (id) => {
    axios
      .put(`https://6569a007de53105b0dd75dfc.mockapi.io/users/${id}`, {
        name: "updated",
        age: 29,
        hobbies: ["updated", "game"],
      })
      .then((res) => {
        console.log(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  };

  //DELETE Request
  const deleteData = (id) => {
    axios
      .delete(`https://6569a007de53105b0dd75dfc.mockapi.io/users/${id}`)
      .then((res) => {
        console.log(res.data);
        getData();
      })
      .then((err) => {
        console.log(err);
      });
  };

  //GET Request
  const getData = () => {
    axios
      .get("https://6569a007de53105b0dd75dfc.mockapi.io/users")
      .then((res) => {
        setUsers(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={postData}>Post Data</button>

        {users.map((user) => {
          return (
            <>
              <h2>{`${user.id}. ${user.name}`}</h2>
              <button onClick={() => updateData(user.id)}>Update</button>
              <button onClick={() => deleteData(user.id)}>Delete</button>
            </>
          );
        })}
      </div>
    </>
  );
};

export default REST;
