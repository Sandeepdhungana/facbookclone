import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const commentSchema = new mongoose.Schema({
  // type: String,
  comment: String,
  commentedBy: {
    type: ObjectId,
    ref: "User",
  },
});

const postSchema = new mongoose.Schema({
  postCaption: {
    type: String,
  },
  postImage: {
    type: String,
  },
  comments: [
    {
      comment: {
        type: String,
      },
      commentedBy: {
        type: ObjectId,
        ref: "User",
      },
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
