import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  postGetReducer,
  postLikeUnlikeReducer,
  postSubmissionReducer,
} from "./reducers/postReducer";
import thunk from "redux-thunk";
import { loginUserReducer, registerUserReducer } from "./reducers/userReducer";
import {
  addCommentReducer,
  getCommentReducer,
} from "./reducers/commentReducer";
import { profileGetReducer } from "./reducers/profileReducer";

const reducer = combineReducers({
  postSubmission: postSubmissionReducer,
  registerUser: registerUserReducer,
  loginUser: loginUserReducer,
  postGet: postGetReducer,
  postLikeUnlike: postLikeUnlikeReducer,
  addComments: addCommentReducer,
  getComments: getCommentReducer,
  profileGet: profileGetReducer,
});

const loginuserDetailsFromStorage = localStorage.getItem("userDetails")
  ? JSON.parse(localStorage.getItem("userDetails"))
  : null;

const initialState = {
  loginUser: { userDetails: loginuserDetailsFromStorage },
  postSubmission: { loading: false },
  getComments: {
    loading: false,
    comments: [],
    error: "",
  },
  profileGet: {
    loading: true,
    profile: {
      user: {},
      post: [],
      postImage: [],
    },
  },
  // postLikeUnlike: [],
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
