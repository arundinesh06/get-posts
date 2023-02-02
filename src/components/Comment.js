import React from "react";
import styles from "./Comment.module.scss";
import { BiUserCircle } from "react-icons/bi";

const Comment = ({ comment }) => {
  return (
    <div className={styles.container}>
      <div className={styles["user-wrap"]}>
        <div className={styles.avatar}>
          <BiUserCircle style={{ color: "#fff", fontSize: "2rem" }} />
        </div>
      </div>

      <div className={styles.body}>
        <p className={styles.name}>{comment.name}</p>
        <p className={styles.content}>{comment.body}</p>
      </div>
    </div>
  );
};

export default Comment;
