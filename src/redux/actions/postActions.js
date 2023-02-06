import { postActionTypes } from "../actionTypes/postActionTypes";
import postAPI from "../../apis/postAPI";

// Fetch posts ------------------------------------------------
export const fetchPosts = () => async (dispatch) => {
  dispatch({
    type: postActionTypes.FETCH_POSTS_START,
  });
  try {
    const response = await postAPI.get("/posts");
    console.log(response);
    if (response) {
      dispatch({
        type: postActionTypes.FETCH_POSTS_SUCCESS,
        payload: response,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// Create post ------------------------------------------------
export const createPost = (post) => async (dispatch) => {
  dispatch({
    type: postActionTypes.CREATE_POST_START,
  });
  try {
    const response = await postAPI.post("/posts", post);
    if (response) {
      dispatch({
        type: postActionTypes.CREATE_POST_SUCCESS,
        payload: response,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// Set active post ------------------------------------------------
export const setActivePost = (post) => async (dispatch) => {
  dispatch({
    type: postActionTypes.SET_ACTIVE_POST,
    payload: post,
  });
};

// Edit post ------------------------------------------------
export const editPost = (post) => async (dispatch) => {
  console.log(post);
  const { id } = JSON.parse(post);
  console.log(id);
  dispatch({
    type: postActionTypes.EDIT_POST_START,
  });
  try {
    const response = await postAPI.put(`/posts/${id}`, post);
    if (response) {
      dispatch({
        type: postActionTypes.EDIT_POST_SUCCESS,
        payload: response,
      });
    }
  } catch (error) {
    dispatch({
      type: postActionTypes.EDIT_POST_FAILED,
    });
  }
};

// Delete post ------------------------------------------------
export const deletePost = (id) => async (dispatch) => {
  dispatch({
    type: postActionTypes.DELETE_POST_START,
  });
  const response = await postAPI.delete(`/posts/${id}`);
  if (response) {
    dispatch({
      type: postActionTypes.DELETE_POST_SUCCESS,
      payload: id,
    });
  }
};

// Fetch comments ------------------------------------------------
export const fetchComments = (id) => async (dispatch) => {
  const response = await postAPI.get(`/comments`);
  dispatch({
    type: postActionTypes.FETCH_COMMENTS,
    payload: response,
  });
};
