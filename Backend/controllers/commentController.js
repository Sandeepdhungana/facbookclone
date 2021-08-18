import express from "express";
import asynchandler from "express-async-handler";
import createError from "http-errors";
import { Comment } from "../models/commentModel.js";
import Post from "../models/postModel.js";

const addComment = asynchandler(async (req, res) => {
  const { postId, commentsFromFrontend } = req.body;
  try {
    const post = await Post.findOne({ _id: postId });

    if (post) {
      const comment = await Comment.create({
        comment: commentsFromFrontend,
        commentedBy: req.user._id,
        post: post._id,
      });
      const savedComment = await comment.save();
      await post.comments.push(savedComment._id);
      post.save();
      const newComment = await Comment.find({ _id: savedComment._id })
        .populate("commentedBy")
        .sort({ _id: -1 });
      console.log(newComment);
      res.status(200).json(newComment);
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
    const { postId } = req.params;
    // console.log(postId);
    const post = await Post.findOne({ _id: postId });
    // console.log(post);

    const comments = await Comment.find({ post: postId })
      .populate({
        path: "commentedBy",
        select: "-password -friends -friendRequests -posts -email -dateofbirth",
      })
      .sort({ _id: -1 });
    res.json(comments);
  } catch (err) {
    console.log(err);
  }
});

export { addComment, sendComment };
