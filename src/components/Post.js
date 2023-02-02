import React, { useState } from "react";
import styles from "./Post.module.scss";
import { FaComments } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import Comments from "./Comments";
import Comment from "./Comment";
import { useNavigate } from "react-router-dom";
import { setActivePost, deletePost } from "../redux/actions/postActions";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showComments, setShowComments] = useState(false);
  const comments = useSelector((state) => state.posts.comments);
  const postComments = comments.filter(
    (comment) => comment.postId === post.userId
  );
  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.content}>{post.body}</p>
      <div className={styles["post-info"]}>
        <div className={styles.comments} onClick={toggleComments}>
          <FaComments
            style={{ color: "teal", marginRight: "4", fontSize: "20" }}
          />
          <span className={styles.count}>{postComments.length}</span>
          <span className={styles.toggle}>
            {showComments ? "Hide Comments" : "Show Comments"}
          </span>
        </div>
        <div className={styles["post-controls"]}>
          <FaRegEdit
            style={{
              color: "teal",
              marginRight: "10",
              fontSize: "20",
              cursor: "pointer",
            }}
            onClick={() => {
              dispatch(setActivePost(post));
              navigate(`/${post.id}/edit`);
            }}
          />
          <MdDeleteOutline
            style={{ color: "teal", fontSize: "22", cursor: "pointer" }}
            onClick={() => {
              dispatch(deletePost(post.id));
            }}
          />
        </div>
      </div>
      {showComments ? (
        <Comments>
          {postComments.map((comment) => {
            return <Comment comment={comment} key={comment.id} />;
          })}
        </Comments>
      ) : (
        ""
      )}
    </div>
  );
};

export default Post;
