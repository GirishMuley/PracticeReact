import React from "react";
import HigherOrder from "./HigherOrder";

const Posts = ({ data }) => {
  return (
    <div>
      <h1>Hello from Post</h1>
      {data.slice(0, 10).map((user) => {
        return <p>{user.title}</p>;
      })}
    </div>
  );
};

const PostsComponent = HigherOrder("Posts", Posts, "posts");

export default PostsComponent;
