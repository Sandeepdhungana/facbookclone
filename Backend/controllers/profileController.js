import express from "express";
import asynchandler from "express-async-handler";
import createError from "http-errors";
import Post from "../models/postModel.js";
import User from "../models/userModel.js";

const getUserProfile = asynchandler(async (req, res) => {
  const { profileId } = req.params;
  try {
    const user = await User.findById({ _id: profileId });
    const post = await Post.find({ postedBy: user._id }).populate("postedBy");

    const postImages = post.map((post) => {
      return post.postImage.length && post.postImage;
    });
    console.log(postImages);
    res.status(200).json({
      user,
      post,
      postImages,
    });
  } catch (err) {
    console.log(err);
  }
  //   console.log(user._id);
});

export { getUserProfile };
