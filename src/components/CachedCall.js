import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

const CachedCall = () => {
  const { data, isLoading } = useQuery("data", () => {
    return fetch("https://jsonplaceholder.typicode.com/albums").then(
      (response) => response.json()
    );
  });
  let navigate = useNavigate();
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <ul>
        <li onClick={() => navigate("/normal-call")}>NormalCall</li>
        <li onClick={() => navigate("/cached-call")}>CachedCall</li>
      </ul>
      <h1>CachedCall</h1>
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

export default CachedCall;
