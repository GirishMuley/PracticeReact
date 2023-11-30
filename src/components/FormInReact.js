import React, { useState } from "react";

const FormInReact = () => {
  const [objData, setObjData] = useState({});
  const getInputs = (value, name) => {
    let data = { [name]: value };
    setObjData({ ...objData, ...data });
  };
  const submit = (event) => {
    event.preventDefault();
    console.log(objData);
  };
  return (
    <>
      <form onSubmit={submit}>
        <div>
          <input
            placeholder="Write your name..."
            name="name"
            type="text"
            onChange={(event) =>
              getInputs(event.target.value, event.target.name)
            }
          />
          <br />
          <input
            placeholder="Write your age..."
            name="age"
            type="number"
            onChange={(event) =>
              getInputs(event.target.value, event.target.name)
            }
          />
          <br />
          <input
            placeholder="Write your Hobbies..."
            name="hobbies"
            type="text"
            onChange={(event) =>
              getInputs(event.target.value, event.target.name)
            }
          />
          <br />
          <input
            placeholder="Write a Date..."
            name="date"
            type="date"
            onChange={(event) =>
              getInputs(event.target.value, event.target.name)
            }
          />
          <br />
          <button type="submit" className="btn">
            Submit
          </button>
          <button type="reset" className="btn">
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default FormInReact;
