import {
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAIL,
} from "../constants/commentConstant";

const addCommentReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT_REQUEST:
      return {
        loading: true,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        comment: action.payload,
      };
    case ADD_COMMENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const getCommentReducer = (state = [], action) => {
  switch (action.type) {
    case GET_COMMENT_REQUEST:
      return {
        loading: true,
      };
    case GET_COMMENT_SUCCESS:
      return {
        ...state,
        comment: action.payload,
      };
    case GET_COMMENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { addCommentReducer, getCommentReducer };
