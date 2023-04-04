// importation

import {
    FAIL_POST,
    LOAD_POST,
    ONE_POST,
    SUCC_POST,
  } from "../ActionsTypes/post";
  
  // initialState
  const initialState = {
    allPosts: [],
    errors: null,
    load: false,
    onePost: {},
  };
  
  // pure function
  
  const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOAD_POST:
        return { ...state, load: true };
      case SUCC_POST:
        return { ...state, load: false, allPosts: payload.allPosts };
      case FAIL_POST:
        return { ...state, load: false, errors: payload };
      case ONE_POST:
        return { ...state, load: false, onePost: payload.onePost };
      default:
        return state;
    }
  };
  
  
  export default postReducer;