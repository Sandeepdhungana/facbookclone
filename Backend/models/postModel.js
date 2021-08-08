import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const likeSchema = new mongoose.Schema({
  likedBy: {
    type: ObjectId,
    ref: "User",
  },
  reaction: {
    type: String,
    default: "Like",
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
      type: String,
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
    type: Date,
    default: Date.now,
  },
  likes: [likeSchema],
});

const Post = mongoose.model("post", postSchema);
export default Post;
