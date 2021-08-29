import {
  PROFILE_GET_FAIL,
  PROFILE_GET_REQUEST,
  PROFILE_GET_SUCCESS,
} from "../constants/profileConstant";
import axios from "axios";
import {
  UPDATE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "../constants/userConstant";

const profileGetAction = (profileId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROFILE_GET_REQUEST,
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
      `http://localhost:5000/api/profile/${profileId}`,
      config
    );

    dispatch({
      type: PROFILE_GET_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_GET_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

const updateProfileAction =
  (
    firstname = "",
    surname = "",
    profilePic = "",
    password = "",
    newPassword = "",
    coverPic = "",
  ) =>
  async (dispatch, getState) => {
    // first upload to cloudinary server
    try {
      dispatch({
        type: UPDATE_USER_REQUEST,
      });

      try {
        if (profilePic) {
          const {
            data: { url },
          } = await axios.post(
            "https://api.cloudinary.com/v1_1/facebookclone/image/upload",
            profilePic
          );
          profilePic = url;
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
        "http://localhost:5000/api/profile/updateprofilepic",
        { profilePic, coverPic, firstname, surname, password, newPassword },
        config
      );

      if (data) {
        dispatch({
          type: UPDATE_USER_SUCCESS,
          payload: data,
        });
      }
    } catch (err) {
      dispatch({
        type: UPDATE_USER_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

export { profileGetAction, updateProfileAction };
