import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/postActions";
import Loader from "./Loader";
import styles from "./Posts.module.scss";
import { fetchComments } from "../redux/actions/postActions";

const Posts = ({ posts }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.posts.loading);
  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
    dispatch(fetchComments());
  }, []);
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
      {loading ? <Loader /> : ""}
    </div>
  );
};

export default Posts;
