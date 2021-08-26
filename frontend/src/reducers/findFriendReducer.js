import {
  FIND_FRIEND_FAIL,
  FIND_FRIEND_REQUEST,
  FIND_FRIEND_SUCCESS,
} from "../constants/findFriendConstant";

const findFriendReducer = (state = {}, action) => {
  switch (action.type) {
    case FIND_FRIEND_REQUEST:
      return {
        loading: true,
      };
    case FIND_FRIEND_SUCCESS:
      return {
        loading: false,
        friends: action.payload,
      };
    case FIND_FRIEND_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export { findFriendReducer };
