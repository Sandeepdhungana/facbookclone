import {
  POST_SUBMISSION_FAIL,
  POST_SUBMISSION_REQUEST,
  POST_SUBMISSION_SUCCESS,
  POST_GET_REQUEST,
  POST_GET_SUCCESS,
  POST_GET_FAIL,
  POST_SUBMISSON_DATA_RECEIVED,
  POST_LIKEUNLIKE_REQUEST,
  POST_LIKEUNLIKE_SUCCESS,
  POST_LIKEUNLIKE_FAIL,
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAIL,
} from "../constants/postConstant";
import { SOCKET_COMMENT_RECEIVED } from "../constants/socketConstants";

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

    case SOCKET_COMMENT_RECEIVED:
      const { postId, comments } = action.payload;

      const index = state.posts.findIndex((post) => post._id === postId);
      const newPosts = [...state.posts];
      newPosts[index].comments = comments;
      console.log("new post is", newPosts);
      return {
        posts: newPosts,
        ...state,
      };
    case POST_SUBMISSON_DATA_RECEIVED:
      return {
        ...state.postGet,
        posts: [action.payload, ...state.posts],
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

const postLikeUnlikeReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_LIKEUNLIKE_REQUEST:
      return {
        loading: true,
      };
    case POST_LIKEUNLIKE_SUCCESS:
      return {
        ...state,
        likesData: action.payload,
      };

    case POST_LIKEUNLIKE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
const postAddCommentReducer = (state = [], action) => {
  switch (action.type) {
    case POST_COMMENT_REQUEST:
      return {
        loading: true,
      };
    case POST_COMMENT_SUCCESS:
      return {
        ...state,
        comment: action.payload,
      };
    case POST_COMMENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export {
  postSubmissionReducer,
  postGetReducer,
  postLikeUnlikeReducer,
  postAddCommentReducer,
};

// const {
//   liked,
//   data: { likes, _id },
// } = action.payload;
// const userFromStorage = localStorage.getItem("userDetails")
//   ? JSON.parse(localStorage.getItem("userDetails"))
//   : "";
// if (!liked) {
//   state.posts.forEach(
//     (post) => post._id === _id && post.likes.push(userFromStorage?._id)
//   );
// } else {
//   state.posts.forEach(
//     (post) => post._id === _id && post.likes.pop(userFromStorage?._id)
//   );
// }
// return state;
