import {
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "../constants/userConstant";
import axios from "axios";

const registerUser =
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

const loginUser = (emailandpassword) => async (dispatch, getstate) => {
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
    console.log(data);
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

export { registerUser, loginUser };
