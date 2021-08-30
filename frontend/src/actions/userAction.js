import {
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "../constants/userConstant";
import axios from "axios";
// /api/user/updateprofile
const registerUserAction =
  (nameandpassword, dateofbirth, gender, showCreateModal) =>
  async (dispatch) => {
    try {
      dispatch({
        type: REGISTER_USER_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/user/register",
        { nameandpassword, dateofbirth, gender },
        config
      );
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userDetails", JSON.stringify(data));
      if (data) {
        showCreateModal();
      }
    } catch (err) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

const loginUserAction = (emailandpassword) => async (dispatch, getstate) => {
  try {
    dispatch({
      type: LOGIN_USER_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:5000/api/user/login",
      { emailandpassword },
      config
    );
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userDetails", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
const updateUserAction =
  (firstname, surname, email, password, profilePic, coverPic, showWriteModal) =>
  async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_USER_REQUEST,
      });

      if (profilePic) {
        try {
          const {
            data: { url },
          } = await axios.post(
            "https://api.cloudinary.com/v1_1/facebookclone/image/upload",
            profilePic
          );
          profilePic = url;
        } catch (error) {
          console.log(error);
        }
      }
      if (coverPic) {
        try {
          const {
            data: { url },
          } = await axios.post(
            "https://api.cloudinary.com/v1_1/facebookclone/image/upload",
            coverPic
          );
          coverPic = url;
        } catch (error) {
          console.log(error);
        }
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
        "http://localhost:5000/api/user/updateprofile",
        { firstname, surname, email, password, profilePic, coverPic },
        config
      );
      if (data) {
        showWriteModal();
      }
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: data,
      });

      localStorage.setItem("userDetails", JSON.stringify(data));
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

export { registerUserAction, loginUserAction, updateUserAction };
