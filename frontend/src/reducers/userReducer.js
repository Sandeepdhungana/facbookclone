import {
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  ONLINE_USER_ADDED,
  ONLINE_USER_REMOVED,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "../constants/userConstant";

const registerUserReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        loading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        loading: false,
        userDetails: action.payload,
      };
    case REGISTER_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        loading: false,
        userDetails: action.payload,
      };
    case LOGIN_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const onlineUserReducer = (state = {}, action) => {
  switch (action.type) {
    case ONLINE_USER_ADDED:
      return {
        onlineUsers: action.payload,
      };
    case ONLINE_USER_REMOVED:
      return {
        onlineUsers: action.payload,
      };
    default:
      return state;
  }
};

export { registerUserReducer, loginUserReducer, onlineUserReducer };
