import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const InnerHtml = () => {
  const data = `<p style="font-size: 25px color: red">This is my home</p>`;
  const [quill, setQuill] = useState("");
  const getQuillData = (value) => {
    setQuill(value);
  };
  return (
    <>
      <div>
        <div dangerouslySetInnerHTML={{ __html: data }}></div>
        <div dangerouslySetInnerHTML={{ __html: quill }}></div>

        <ReactQuill onChange={getQuillData} />
      </div>
    </>
  );
};

export default InnerHtml;
