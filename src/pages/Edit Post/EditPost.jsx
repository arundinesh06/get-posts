import React from "react";
import styles from "./EditPost.module.scss";
import EditPostForm from "../../components/EditPostForm";
import Loader from "../../components/Loader";
import { useSelector } from "react-redux";

const EditPost = () => {
  const loading = useSelector((state) => state.posts.loading);
  return (
    <div className={styles.container}>
      <h1 style={{ marginBottom: 20 }}>Edit post</h1>
      <div className={styles["form-wrapper"]}>
        <EditPostForm />
        {loading ? <Loader /> : ""}
      </div>
    </div>
  );
};

export default EditPost;
