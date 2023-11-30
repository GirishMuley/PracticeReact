import React, { useState } from "react";

const Styling = () => {
  const style = {
    internal: {
      color: "blue",
    },
    light: {
      backgroundColor: "black",
      color: "black",
    },
    dark: {
      backgroundColor: "white",
      color: "white",
    },
  };
  const [theme, setTheme] = useState(false);
  const toggle = () => {
    setTheme(!theme);
  };
  return (
    <>
      <div style={theme ? style.light : style.dark}>
        <h1 className="red">External Styling</h1>
        <h1 style={style.internal}>Internal Styling</h1>
        <h1 style={{ color: "green" }}>Inline Styling</h1>
      </div>
      <button className="btn" onClick={toggle}>
        Change Mode
      </button>
    </>
  );
};

export default Styling;
