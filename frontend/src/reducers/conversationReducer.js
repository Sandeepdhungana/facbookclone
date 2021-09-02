import {
  CONVERSATION_CREATE_FAIL,
  CONVERSATION_CREATE_REQUEST,
  CONVERSATION_CREATE_SUCCESS,
  CONVERSATION_GET_FAIL,
  CONVERSATION_GET_REQUEST,
  CONVERSATION_GET_SUCCESS,
} from "../constants/conversationConstant";

// const conversationCreateReducer = (state = [], action) => {
//   switch (action.type) {
//     case CONVERSATION_CREATE_REQUEST:
//       return {
//         loading: true,
//       };
//     case CONVERSATION_CREATE_SUCCESS:
//       return {
//         conversations: [...state.conversations, action.payload],
//       };
//     case CONVERSATION_CREATE_FAIL:
//       return {
//         loading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

const conversationGetReducer = (state = [], action) => {
  switch (action.type) {
    case CONVERSATION_GET_REQUEST:
      return {
        loading: true,
      };
    case CONVERSATION_GET_SUCCESS:
      return {
        conversations: action.payload,
      };
    case CONVERSATION_CREATE_SUCCESS:
      return {
        conversations: [action.payload, ...state.conversations],
      };
    case CONVERSATION_GET_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { conversationGetReducer };
