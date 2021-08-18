import mongoose from "mongoose";
import { commentSchema } from "./commentModel.js";
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
  postCaption: {
    type: String,
  },
  postImage: {
    type: String,
  },
  comments: [
    {
      type: ObjectId,
      ref: "Comment",
    },
  ],
  postedBy: {
    type: ObjectId,
    ref: "User",
  },
  postedIn: {
    type: Number,
    default: Date.now(),
  },
  likes: [
    {
      type: ObjectId,
      ref: "User",
    },
  ],
});

const Post = mongoose.model("post", postSchema);
export default Post;
