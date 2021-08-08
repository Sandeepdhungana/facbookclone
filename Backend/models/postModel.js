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
// const Like = mongoose.model("lost", likeSchema);


const commentSchema = new mongoose.Schema({
  type: String,
  commentedBy: {
    type: ObjectId,
    ref: "User",
  },
});
// const Comment = mongoose.model("post", postSchema);


const postSchema = new mongoose.Schema({
  postCaption: {
    type: String,
  },
  postImage: {
    type: String,
  },
  comments: [commentSchema],
  postedBy: {
    type: ObjectId,
    ref: "User",
  },
  postedIn: {
    type: Number,
    default: Date.now(),
  },
  likes: [likeSchema],
});

const Post = mongoose.model("post", postSchema);
export default Post;
