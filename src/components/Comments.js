import React from "react";
import Comment from "./Comment";
import styles from "./Comments.module.scss";

const Comments = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Comments;
