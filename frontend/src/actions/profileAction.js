import {
  PROFILE_GET_FAIL,
  PROFILE_GET_REQUEST,
  PROFILE_GET_SUCCESS,
} from "../constants/profileConstant";
import axios from "axios";

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

export { profileGetAction };
