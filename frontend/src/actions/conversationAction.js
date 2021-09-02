import axios from "axios";
import {
  CONVERSATION_CREATE_FAIL,
  CONVERSATION_CREATE_REQUEST,
  CONVERSATION_CREATE_SUCCESS,
  CONVERSATION_GET_FAIL,
  CONVERSATION_GET_REQUEST,
  CONVERSATION_GET_SUCCESS,
} from "../constants/conversationConstant";

const conversationCreateAction = (friendId) => async (dispatch) => {
  try {
    dispatch({
      type: CONVERSATION_CREATE_REQUEST,
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
      "http://localhost:5000/api/conversation/create",
      { friendId },
      config
    );

    dispatch({
      type: CONVERSATION_CREATE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: CONVERSATION_CREATE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
const conversationGetAction = () => async (dispatch) => {
  try {
    dispatch({
      type: CONVERSATION_GET_REQUEST,
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
      "http://localhost:5000/api/conversation/get",
      config
    );

    dispatch({
      type: CONVERSATION_GET_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: CONVERSATION_GET_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export { conversationCreateAction, conversationGetAction };
