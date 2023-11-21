import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../app/features/post/postSlice";

const Posts = () => {
  const data = useSelector((state) => state);
  const { isLoading, posts, error } = data.posts;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
 

  return (
    <div className="grid grid-cols-3 gap-5 p-5">
      {posts.map((post) => {
        return (
          <article className=" bg-black text-white p-4">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p>{post.body}</p>
          </article>
        );
      })}
    </div>
  );
};

export default Posts;
