import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../../data/dummyData";

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((post) => post.id === Number(id));

  return <div>{post.id}</div>;
};

export default PostDetail;
