import React from "react";
import styles from "./NewPost.module.scss";
import NewPostForm from "../../components/NewPostForm";
import Loader from "../../components/Loader";
import { useSelector } from "react-redux";

const NewPost = () => {
  const loading = useSelector((state) => state.posts.loading);
  return (
    <div className={styles.container}>
      <h1 style={{ marginBottom: 20 }}>Create new post</h1>
      <div className={styles["form-wrapper"]}>
        <NewPostForm />
        {loading ? <Loader /> : ""}
      </div>
    </div>
  );
};

export default NewPost;
