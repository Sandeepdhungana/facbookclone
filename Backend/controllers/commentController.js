import express from "express";
import asynchandler from "express-async-handler";
import createError from "http-errors";
import { Comment } from "../models/commentModel.js";
import Post from "../models/postModel.js";

const addComment = asynchandler(async (req, res) => {
  const { postId, commentsFromFrontend } = req.body;
  console.log(postId, commentsFromFrontend);
  try {
    const post = await Post.findOne({ _id: postId });

    if (post) {
      const comment = await Comment.create({
        comment: commentsFromFrontend,
        commentedBy: req.user._id,
        post: post._id,
      });
      const savedComment = await comment.save();
      // console.log("the saved commment is is", savedComment._id);

      const comt = await post.comments.push(savedComment);
      post.save();
      res.status(200).json(savedComment);
    } else {
      console.log("Cannot find post");
      createError(400, "No such kind of post exists");
    }
  } catch (err) {
    console.log(err);
  }
});

const sendComment = asynchandler(async (req, res) => {
  try {
    console.log(req.body);
    const { postId } = req.body;
    // console.log(postId);
    const post = await Post.findOne({ _id: postId });
    // console.log(post);

    const comments = await Comment.find({ post: postId }).populate({
      path: "commentedBy",
      select: "-password -friends -friendRequests -posts -email -dateofbirth",
    });
    // console.log(comments);
    res.json(comments);
  } catch (err) {
    console.log(err);
  }
});

export { addComment, sendComment };
