import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  postAddCommentReducer,
  postGetReducer,
  postLikeUnlikeReducer,
  postSubmissionReducer,
} from "./reducers/postReducer";
import thunk from "redux-thunk";
import { loginUserReducer, registerUserReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  postSubmission: postSubmissionReducer,
  registerUser: registerUserReducer,
  loginUser: loginUserReducer,
  postGet: postGetReducer,
  postLikeUnlike: postLikeUnlikeReducer,
  postAddComment: postAddCommentReducer,
});

const loginuserDetailsFromStorage = localStorage.getItem("userDetails")
  ? JSON.parse(localStorage.getItem("userDetails"))
  : null;

const initialState = {
  loginUser: { userDetails: loginuserDetailsFromStorage },
  postSubmission: { loading: false },
  // postLikeUnlike: [],
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
