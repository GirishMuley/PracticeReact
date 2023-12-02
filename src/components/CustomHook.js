import React from "react";
import useData from "../hooks/useJSONPlaceholder";
const CustomHook = () => {
  let { users, posts } = useData();
  return (
    <>
      <div>
        <h1>Users</h1>
        {users?.map((item) => {
          return <h3>{item.name}</h3>;
        })}

        <h1>Posts</h1>
        {posts?.splice(0, 10).map((item) => {
          return <h3>{item.title}</h3>;
        })}
      </div>
    </>
  );
};

export default CustomHook;
