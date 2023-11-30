import React from "react";

const Controllers = () => {
  // uncontrolled component code
  //   let name = React.createRef();
  //   let age = React.createRef();

  //   const submit = () => {
  //     console.log(name.current.value);
  //     console.log(age.current.value);
  //   };

  // uncontrolled component code ends

  // controlled component code start
  const getName = (event) => {
    console.log(event.target.value);
  };
  const getAge = (event) => {
    console.log(event.target.value);
  };
  //   controlled component code ends
  return (
    <>
      {/* uncontrolled component code start */}
      {/* <div>
        <input placeholder="Name" ref={name} />
        <input placeholder="Name" ref={age} />
        <button onClick={submit}>Submit</button>
      </div> */}

      {/* uncontrolled component code ends */}

      {/* controlled component code start */}
      <div>
        <input placeholder="Name" onChange={getName} />
        <input placeholder="Name" onChange={getAge} />
        <button>Submit</button>
      </div>
      {/* controlled component code ends  */}
    </>
  );
};

export default Controllers;
