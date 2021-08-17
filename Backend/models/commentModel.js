import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const commentSchema = new mongoose.Schema({
  // type: String,
  comment: String,
  commentedBy: {
    type: ObjectId,
    ref: "User",
  },
  post: {
    type: ObjectId,
    ref: "Post",
  },
});

const Comment = mongoose.model("comment", commentSchema);

export { Comment, commentSchema };
