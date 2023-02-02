import * as yup from "yup";

export const basicSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  body: yup.string().required("Post body is required"),
  // .matches(passwordRules, { message: "Please create a stronger password" }),
});
