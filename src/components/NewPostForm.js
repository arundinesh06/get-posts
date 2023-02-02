import React, { useState, useReducer } from "react";
import styles from "./NewPostForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../redux/actions/postActions";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { basicSchema } from "../Schemas/addPostFormSchema";

const NewPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postCreated = useSelector((state) => state.posts.postCreated);
  const activePost = useSelector((state) => state.posts.activePost);
  const onSubmit = (values, actions) => {
    dispatch(createPost(JSON.stringify(formData)))
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
    actions.resetForm();
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
      title: "",
      body: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  const formData = {
    userId: 10,
    title: values.title,
    body: values.body,
  };
  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   dispatch(createPost(JSON.stringify(postData)))
  //     .then(() => {
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["form-controls"]}>
        <div className={styles["form-control"]}>
          {/* <label htmlFor="title">Title</label> */}
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
          {errors.title && touched.title && (
            <p className={styles.error}>{errors.title}</p>
          )}
        </div>

        <div className={styles["form-control"]}>
          {/* <label htmlFor="body">Body</label> */}
          <textarea
            id="body"
            name="body"
            placeholder="Content"
            value={values.body}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.title && touched.title ? "input-error" : ""}
          />
          {errors.body && touched.body && (
            <p className={styles.error}>{errors.body}</p>
          )}
        </div>

        <button className={styles.button} disabled={isSubmitting}>
          Create
        </button>
      </div>
    </form>
  );
};

export default NewPostForm;
