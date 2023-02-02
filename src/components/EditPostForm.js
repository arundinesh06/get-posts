import React, { useState, useReducer } from "react";
import styles from "./NewPostForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setActivePost, editPost } from "../redux/actions/postActions";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { basicSchema } from "../Schemas/addPostFormSchema";

const EditPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postCreated = useSelector((state) => state.posts.postCreated);
  const activePost = useSelector((state) => state.posts.activePost);
  const onSubmit = (values, actions) => {
    dispatch(
      setActivePost({
        id: activePost.id,
        title: values.title,
        body: values.body,
      })
    );
    dispatch(editPost(JSON.stringify(formData)))
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
    // actions.resetForm();
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      title: activePost.title,
      body: activePost.body,
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  const formData = {
    id: activePost.id,
    userId: 10,
    title: values.title,
    body: values.body,
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["form-controls"]}>
        <div className={styles["form-control"]}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.title && touched.title ? "input-error" : ""}
          />
        </div>
        {errors.title && touched.title && (
          <p className={styles.error}>{errors.title}</p>
        )}
        <div className={styles["form-control"]}>
          <textarea
            id="body"
            name="body"
            placeholder="Content"
            value={values.body}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.title && touched.title ? "input-error" : ""}
          />
        </div>
        {errors.body && touched.body && (
          <p className={styles.error}>{errors.body}</p>
        )}
        <button className={styles.button} disabled={isSubmitting}>
          Create
        </button>
      </div>
    </form>
  );
};

export default EditPostForm;
