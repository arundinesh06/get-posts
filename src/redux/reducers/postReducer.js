import { postActionTypes } from "../actionTypes/postActionTypes";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  posts: [],
  comments: [],
  postCreated: false,
  activePost: {},
  error: null,
};
export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case postActionTypes.FETCH_POSTS_START:
      return { ...state, loading: true };
    case postActionTypes.FETCH_POSTS_SUCCESS:
      return { ...state, posts: payload, loading: false };
    case postActionTypes.CREATE_POST_START:
      return { ...state, postCreated: false, loading: true };
    case postActionTypes.CREATE_POST_SUCCESS:
      toast.success("You made a new post !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return {
        ...state,
        postCreated: true,
        posts: [payload, ...state.posts],
        loading: false,
      };
    case postActionTypes.SET_ACTIVE_POST:
      return { ...state, activePost: payload };
    case postActionTypes.EDIT_POST_START:
      return { ...state, loading: true };
    case postActionTypes.EDIT_POST_SUCCESS:
      const updatedPosts = state.posts.map((post) => {
        if (post.id === state.activePost.id) {
          return {
            ...post,
            title: state.activePost.title,
            body: state.activePost.body,
          };
        }
        return post;
      });
      toast.success("Post updated !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return { ...state, loading: false, posts: updatedPosts };
    case postActionTypes.EDIT_POST_FAILED:
      toast.error("Failed to update post !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return {
        ...state,
        loading: false,
        error: "Unabale to updated custom resource",
      };
    case postActionTypes.DELETE_POST_START:
      return { ...state, loading: true };
    case postActionTypes.DELETE_POST_SUCCESS:
      const latestPosts = state.posts.filter((post) => post.id !== payload);
      toast.success("Post deleted !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return { ...state, posts: latestPosts, loading: false };
    case postActionTypes.FETCH_COMMENTS:
      return { ...state, comments: payload };
    default:
      return state;
  }
};
