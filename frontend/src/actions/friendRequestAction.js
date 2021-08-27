import axios from "axios";
import {
  CANCEL_FRIEND_REQUEST_FAIL,
  CANCEL_FRIEND_REQUEST_REQUEST,
  CANCEL_FRIEND_REQUEST_SUCCESS,
  CONFIRM_FRIEND_FAIL,
  CONFIRM_FRIEND_REQUEST,
  CONFIRM_FRIEND_SUCCESS,
  DELETE_FRIEND_FAIL,
  DELETE_FRIEND_REQUEST,
  DELETE_FRIEND_SUCCESS,
  REMOVE_FRIEND_FAIL,
  REMOVE_FRIEND_REQUEST,
  REMOVE_FRIEND_SUCCESS,
  SEND_FRIEND_REQUEST_FAIL,
  SEND_FRIEND_REQUEST_REQUEST,
  SEND_FRIEND_REQUEST_SUCCESS,
} from "../constants/friendRequesConstant";

// removefriend
// cancelrequest
// confirmrequest
// sendrequest
// Deleterequest

const sendFriendRequestAction = (friendId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SEND_FRIEND_REQUEST_REQUEST,
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

    const { data } = await axios.post(
      "http://localhost:5000/api/findfriends/sendrequest",
      { friendId },
      config
    );

    if (data) {
      dispatch({
        type: SEND_FRIEND_REQUEST_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    dispatch({
      type: SEND_FRIEND_REQUEST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
const cancelFriendRequestAction = (friendId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CANCEL_FRIEND_REQUEST_REQUEST,
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

    const { data } = await axios.post(
      "http://localhost:5000/api/findfriends/cancelrequest",
      { friendId },
      config
    );

    if (data) {
      dispatch({
        type: CANCEL_FRIEND_REQUEST_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    dispatch({
      type: CANCEL_FRIEND_REQUEST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
const deleteFriendRequestAction = (friendId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_FRIEND_REQUEST,
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

    const { data } = await axios.post(
      "http://localhost:5000/api/findfriends/cancelrequest",
      { friendId },
      config
    );

    if (data) {
      dispatch({
        type: DELETE_FRIEND_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    dispatch({
      type: DELETE_FRIEND_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
const confirmFrienRequestAction = (friendId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CONFIRM_FRIEND_REQUEST,
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

    const { data } = await axios.post(
      "http://localhost:5000/api/findfriends/confirmrequest",
      { friendId },
      config
    );

    if (data) {
      dispatch({
        type: CONFIRM_FRIEND_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    dispatch({
      type: CONFIRM_FRIEND_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
const removeFriendAction = (friendId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REMOVE_FRIEND_REQUEST,
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

    const { data } = await axios.post(
      "http://localhost:5000/api/findfriends/removefriend",
      { friendId },
      config
    );

    if (data) {
      dispatch({
        type: REMOVE_FRIEND_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    dispatch({
      type: REMOVE_FRIEND_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export {
  sendFriendRequestAction,
  cancelFriendRequestAction,
  confirmFrienRequestAction,
  removeFriendAction,
  deleteFriendRequestAction
};
