import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  OnePostGetReducer,
  postGetReducer,
  postLikeUnlikeReducer,
  postSubmissionReducer,
} from "./reducers/postReducer";
import thunk from "redux-thunk";
import {
  loginUserReducer,
  onlineUserReducer,
  registerUserReducer,
} from "./reducers/userReducer";
import {
  addCommentReducer,
  getCommentReducer,
} from "./reducers/commentReducer";
import { profileGetReducer } from "./reducers/profileReducer";
import {
  findFriendReducer,
  myFriendGetReducer,
} from "./reducers/findFriendReducer";
import {
  cancelFreiendRequestReducer,
  confirmFriendRequestReducer,
  deleteFreiendRequestReducer,
  removeFreiendReducer,
  sendFreiendRequestReducer,
} from "./reducers/friendRequestReducer";
import {
  conversationGetReducer,
} from "./reducers/conversationReducer";

const reducer = combineReducers({
  postSubmission: postSubmissionReducer,
  registerUser: registerUserReducer,
  loginUser: loginUserReducer,
  postGet: postGetReducer,
  postLikeUnlike: postLikeUnlikeReducer,
  addComments: addCommentReducer,
  getComments: getCommentReducer,
  profileGet: profileGetReducer,
  findFriend: findFriendReducer,
  sendFriendRequest: sendFreiendRequestReducer,
  cancelFriendRequest: cancelFreiendRequestReducer,
  confirmFriendRequest: confirmFriendRequestReducer,
  deleteFriendRequest: deleteFreiendRequestReducer,
  removeFriend: removeFreiendReducer,
  onlineUser: onlineUserReducer,
  myFriend: myFriendGetReducer,
  onePostGet: OnePostGetReducer,
  conversationGet: conversationGetReducer,
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
  findFriend: {
    loading: true,
  },
  onePostGet: {
    postedBy: "",
    likes: [],
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
