import {
  POST_SUBMISSION_FAIL,
  POST_SUBMISSION_REQUEST,
  POST_SUBMISSION_SUCCESS,
  POST_GET_REQUEST,
  POST_GET_SUCCESS,
  POST_GET_FAIL,
} from "../constants/postConstant";

const postSubmissionReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_SUBMISSION_REQUEST:
      return {
        loading: true,
      };
    case POST_SUBMISSION_SUCCESS:
      return {
        loading: false,
        postsFromSubmissioin: action.payload,
      };
    case POST_SUBMISSION_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const postGetReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_GET_REQUEST:
      return {
        // loading: action.payload,
        loading: true,
        posts: [],
      };
    case POST_GET_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
      };
    case POST_GET_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export { postSubmissionReducer, postGetReducer };
