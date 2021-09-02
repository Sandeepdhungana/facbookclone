import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const messageSchema = new mongoose.Schema(
  {
    convserationId: {
      type: ObjectId,
      ref: "Conversation",
    },
    messageText: {
      type: String,
    },
    sentBy: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamp: true }
);

const Message = mongoose.model("message", messageSchema);

export default Message;
