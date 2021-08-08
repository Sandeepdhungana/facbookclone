import express from "express";
import asynchandler from "express-async-handler";
import createError from "http-errors";
import Post from "../models/postModel.js";

const getPostFromFrontend = asynchandler(async (req, res) => {
  const { postImage, postCaption } = req.body;
  if (!postImage && !postCaption) {
    throw createError(401, "Post atleast Image or caption");
  }
  console.log(postImage);
  const post = await Post.create({
    postImage,
    postCaption,
    postedBy: req.user,
  });

  if (post) {
    res.status(201).json({
      message: "Photo successfully posted",
    });
    console.log("post added");
  } else {
    throw createError(400, "Invalid User Data");
  }
});
const sendPostToFrontend = asynchandler(async (req, res) => {
  const post = await Post.find({})
    .sort("-postedIn")
    .populate("postedBy")
    .select("-password");
  if (post) {
    res.status(201).json(post);
  } else {
    throw createError(400, "Invalid Post Data");
  }
});


// const postAddLike = asynchandler(async (req, res) => {
//   const postId = req.params.postid;
//   const post = await Post.findByIdAndUpdate(postId, {
//     $addToSet: { like: req.user },
//   });
// });

// const postDislike = asynchandler(async (req, res) => {
//   const postId = req.params.postid;
//   const post = await Post.findByIdAndUpdate(postId, {
//     $pull: { like: req.user },
//   });
// });

// const postAddComment = asynchandler(async (req, res) => {
//   const postId = req.params.postid;
//   const comment = req.body.comment
//   const post = await Post.findByIdAndUpdate(postId,{$push:{comments: comment}})
// })
// const postRemoveComment = asynchandler(async (req, res) => {
//   const postId = req.params.postid;
//   const comment = req.body.comment
//   const post = await Post.findByIdAndUpdate(postId,{$push:{comments: comment}})
// })

export { sendPostToFrontend, getPostFromFrontend };
