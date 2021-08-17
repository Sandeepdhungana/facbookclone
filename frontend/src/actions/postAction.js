import axios from "axios";

import {
  POST_SUBMISSION_FAIL,
  POST_SUBMISSION_REQUEST,
  POST_SUBMISSION_SUCCESS,
  POST_GET_REQUEST,
  POST_GET_SUCCESS,
  POST_GET_FAIL,
  POST_LIKEUNLIKE_SUCCESS,
  POST_LIKEUNLIKE_FAIL,
  POST_LIKEUNLIKE_REQUEST,
} from "../constants/postConstant";
import socket from "../socket";

// we can invoke sync and async function with dispatch if we have installed redux-thunk. In this case async
const postSubmissionAction =
  (postCaption, postImage, showWriteModal) => async (dispatch, getState) => {
    // first upload to cloudinary server
    try {
      dispatch({
        type: POST_SUBMISSION_REQUEST,
      });

      try {
        if (postImage) {
          const {
            data: { url },
          } = await axios.post(
            "https://api.cloudinary.com/v1_1/facebookclone/image/upload",
            postImage
          );
          postImage = url;
        }
      } catch (error) {
        console.log(error);
      }

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
        "http://localhost:5000/api/post",
        { postCaption, postImage },
        config
      );

      if (data) {
        dispatch({
          type: POST_SUBMISSION_SUCCESS,
          payload: data,
        });
        socket.emit("POST_SUBMISSON_DATA_RECEIVED", data);

        showWriteModal();
      }
    } catch (err) {
      dispatch({
        type: POST_SUBMISSION_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

const postGetAction = (newPost) => async (dispatch, getState) => {

};

const postLikeUnlikeAction = (postId, liked) => async (dispatch) => {
  try {
    dispatch({
      type: POST_LIKEUNLIKE_REQUEST,
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

    const likeStatus = {
      postId,
      liked,
    };
    const { data } = await axios.post(
      "http://localhost:5000/api/post/likeunlike",
      likeStatus,
      config
    );

    dispatch({
      type: POST_LIKEUNLIKE_SUCCESS,
      payload: {
        postIdd: postId,
        data,
      },
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: POST_LIKEUNLIKE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
export { postSubmissionAction, postGetAction, postLikeUnlikeAction };
