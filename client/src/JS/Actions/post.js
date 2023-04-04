// importation
import axios from "axios";
import {
  FAIL_POST,
  LOAD_POST,
  ONE_POST,
  SUCC_POST,
} from "../ActionsTypes/post";

// get all posts
export const getPosts = () => async (dispatch) => {
  dispatch({ type: LOAD_POST });
  try {
    let result = await axios.get("api/post/all");
    dispatch({ type: SUCC_POST, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_POST, payload: error.response });
  }
};

// add post

export const addPost = (newPost) => async (dispatch) => {
  try {
    await axios.post("api/post/add", newPost);
    dispatch(getPosts());
  } catch (error) {
    dispatch({ type: FAIL_POST, payload: error.response });
  }
};

// delete post

export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/post/${id}`);
    dispatch(getPosts());
  } catch (error) {
    dispatch({ type: FAIL_POST, payload: error.response });
  }
};

// edit post

export const editPost = (id, newPost) => async (dispatch) => {
  try {
    await axios.put(`/api/post/${id}`, newPost);
    dispatch(getPosts());
  } catch (error) {
    dispatch({ type: FAIL_POST, payload: error.response });
  }
};

// get one post

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: LOAD_POST });
  try {
    let result = await axios.get(`/api/post/${id}`);
    dispatch({ type: ONE_POST, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_POST, payload: error.response });
  }
};

