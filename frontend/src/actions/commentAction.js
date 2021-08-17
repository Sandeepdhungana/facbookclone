import axios from "axios";

import {
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAIL,
} from "../constants/commentConstant";
import socket from "../socket";

const addCommentAction = (postId, comment) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_COMMENT_REQUEST,
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

    const comments = {
      postId,
      commentsFromFrontend: comment,
    };
    const { data } = await axios.post(
      "http://localhost:5000/api/comment",
      comments,
      config
    );
    dispatch({
      type: ADD_COMMENT_SUCCESS,
      payload: data,
    });
    socket.emit("COMMENT_RECEIVED", data);
  } catch (err) {
    console.log(err);
    dispatch({
      type: ADD_COMMENT_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

const getCommentAction = (postId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_COMMENT_REQUEST,
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
      "http://localhost:5000/api/comment",
      { postId },
      config
    );

    dispatch({
      type: GET_COMMENT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_COMMENT_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export { addCommentAction, getCommentAction };
