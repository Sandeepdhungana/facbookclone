import {
  CONFIRM_FRIEND_FAIL,
  CONFIRM_FRIEND_REQUEST,
  CONFIRM_FRIEND_SUCCESS,
  REMOVE_FRIEND_FAIL,
  REMOVE_FRIEND_REQUEST,
  CANCEL_FRIEND_REQUEST_FAIL,
  CANCEL_FRIEND_REQUEST_REQUEST,
  CANCEL_FRIEND_REQUEST_SUCCESS,
  REMOVE_FRIEND_SUCCESS,
  SEND_FRIEND_REQUEST_FAIL,
  SEND_FRIEND_REQUEST_REQUEST,
  SEND_FRIEND_REQUEST_SUCCESS,
  DELETE_FRIEND_FAIL,
  DELETE_FRIEND_REQUEST,
  DELETE_FRIEND_SUCCESS,
} from "../constants/friendRequestConstant";

const sendFreiendRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case SEND_FRIEND_REQUEST_REQUEST:
      return {
        loading: true,
      };
    case SEND_FRIEND_REQUEST_SUCCESS:
      return {
        loading: false,
        sent: action.payload,
      };
    case SEND_FRIEND_REQUEST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const cancelFreiendRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case CANCEL_FRIEND_REQUEST_REQUEST:
      return {
        loading: true,
      };
    case CANCEL_FRIEND_REQUEST_SUCCESS:
      return {
        loading: false,
        cancel: action.payload,
      };
    case CANCEL_FRIEND_REQUEST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
const deleteFreiendRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_FRIEND_REQUEST:
      return {
        loading: true,
      };
    case DELETE_FRIEND_SUCCESS:
      return {
        loading: false,
        delete: action.payload,
      };
    case DELETE_FRIEND_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
const confirmFriendRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case CONFIRM_FRIEND_REQUEST:
      return {
        loading: true,
      };
    case CONFIRM_FRIEND_SUCCESS:
      return {
        loading: false,
        confirm: action.payload,
      };
    case CONFIRM_FRIEND_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
const removeFreiendReducer = (state = {}, action) => {
  switch (action.type) {
    case REMOVE_FRIEND_REQUEST:
      return {
        loading: true,
      };
    case REMOVE_FRIEND_SUCCESS:
      return {
        loading: false,
        remove: action.payload,
      };
    case REMOVE_FRIEND_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export {
  removeFreiendReducer,
  cancelFreiendRequestReducer,
  sendFreiendRequestReducer,
  confirmFriendRequestReducer,
  deleteFreiendRequestReducer
};
