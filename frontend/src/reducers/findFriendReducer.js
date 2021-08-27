import {
  FIND_FRIEND_FAIL,
  FIND_FRIEND_REQUEST,
  FIND_FRIEND_SUCCESS,
} from "../constants/findFriendConstant";
import { REMOVE_USER } from "../constants/friendRequestConstant";

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
    case REMOVE_USER:
      const { friendId, peopleUserMayKnow } = action.payload;
      const newFriends = peopleUserMayKnow.filter(
        (people) => people._id !== friendId
      );
      console.log(state);
      return {
        ...state,
        friends: {
          myFriendRequest: state.friends.myFriendRequest,
          peopleUserMayKnow: newFriends,
        },
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
