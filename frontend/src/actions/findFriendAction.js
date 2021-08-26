import axios from "axios";
import {
  FIND_FRIEND_FAIL,
  FIND_FRIEND_REQUEST,
  FIND_FRIEND_SUCCESS,
} from "../constants/findFriendConstant";

const findFriendAction = (newPost) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FIND_FRIEND_REQUEST,
    });

    const localstorageitem = localStorage.getItem("userDetails")
      ? JSON.parse(localStorage.getItem("userDetails"))
      : null;

    const { token } = localstorageitem;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      "http://localhost:5000/api/findfriend",
      config
    );
    dispatch({
      type: FIND_FRIEND_SUCCESS,
      payload: data,
    });

    // console.log(data);
  } catch (err) {
    dispatch({
      type: FIND_FRIEND_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export { findFriendAction };
