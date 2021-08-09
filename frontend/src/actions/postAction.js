import axios from "axios";
import Pusher from "pusher";

import {
  POST_SUBMISSION_FAIL,
  POST_SUBMISSION_REQUEST,
  POST_SUBMISSION_SUCCESS,
  POST_GET_REQUEST,
  POST_GET_SUCCESS,
  POST_GET_FAIL,
} from "../constants/postConstant";

// we can invoke sync and async function with dispatch if we have installed redux-thunk. In this case async
const postSubmissionAction =
  (postCaption, postImage, showWriteModal) => async (dispatch, getState) => {
    // first upload to cloudinary server
    try {
      dispatch({
        type: POST_SUBMISSION_REQUEST,
      });
      console.log("PostImage.has() returns", postImage);

      if (postImage) {
        const {
          data: { url },
        } = await axios.post(
          "https://api.cloudinary.com/v1_1/facebookclone/image/upload",
          postImage
        );
        postImage = url;
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
        showWriteModal();
      }
    } catch (err) {
      console.log("post my photo");
      dispatch({
        type: POST_SUBMISSION_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

const postGetAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_GET_REQUEST,
    });

    const {
      loginUser: {
        userDetails: { token },
      },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get("http://localhost:5000/api/post", config);
    dispatch({
      type: POST_GET_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: POST_GET_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
export { postSubmissionAction, postGetAction };
