import asynchandler from "express-async-handler";
import Post from "../models/postModel.js";

const generateRandomPost = asynchandler(async (i, id) => {
  try {
    const postImage = "";
    const postCaption = `Test post ${i}`;

    const post = await Post.create({
      postImage,
      postCaption,
      postedBy: id,
    });
  } catch (err) {
    console.log(err);
  }
});

export default generateRandomPost;
