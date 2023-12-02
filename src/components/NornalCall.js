import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NormalCall = () => {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  });

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <ul>
        <li onClick={() => navigate("/normal-call")}>NormalCall</li>
        <li onClick={() => navigate("/cached-call")}>CachedCall</li>
      </ul>
      <h1>NormalCall</h1>
      {data.map((item) => {
        return (
          <h2>
            {item.id}.{item.title}
          </h2>
        );
      })}
    </div>
  );
};

export default NormalCall;
