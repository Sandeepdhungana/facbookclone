import express from "express";
import asynchandler from "express-async-handler";
import createError from "http-errors";
import Post from "../models/postModel.js";
import User from "../models/userModel.js";

const getPostFromFrontend = asynchandler(async (req, res) => {
  const { postImage, postCaption } = req.body;
  if (!postImage && !postCaption) {
    throw createError(401, "Post atleast Image or caption");
  }
  // console.log("I am a user that is posting a post", req.user);
  const post = await Post.create({
    postImage,
    postCaption,
    postedBy: req.user,
  });
  // Uncomment this part
  // const user = await User.findById(req.user);
  // if (user) {
  //   user.posts.push(post._id);
  //   user.save();
  // } else {
  //   throw createError(400, "User Not found");
  // }
  if (post) {
    res.status(201).json(post);
  } else {
    throw createError(400, "Invalid User Data");
  }
});

const deletePost = asynchandler(async (req, res) => {
  const { postId, userId } = req.body;
  if (userId === req.user._id) {
    const post = findByIdAndRemove(postId);
    res.status(200).json(post);
  } else {
    createError(400, "Unable to Delete Post");
  }
});

const sendPostToFrontend = asynchandler(async (req, res) => {
  try {
    const post = await Post.find({})
      .sort("-postedIn")
      .populate("postedBy")
      .select("-password");

    if (post) {
      res.status(201).json(post);
    } else {
      throw createError(400, "Invalid Post Data");
    }
  } catch (e) {
    console.log(e);
  }
});

const postLikeUnlike = asynchandler(async (req, res) => {
  const { postId, liked } = req.body;
  console.log(liked);

  try {
    if (!liked) {
      const post = await Post.findByIdAndUpdate(
        postId,
        {
          $addToSet: { likes: req.user._id },
        },
        { new: true }
      );
      const { likes, _id } = post;
      res.status(201).json({
        likes,
        _id,
      });
    } else {
      const post = await Post.findByIdAndUpdate(
        postId,
        {
          $pull: { likes: req.user._id },
        },
        { new: true }
      );
      const { likes, _id } = post;
      res.status(201).json({
        likes,
        _id,
      });
    }
  } catch (err) {
    console.log(err);
  }
});

const postAddComment = asynchandler(async (req, res) => {
  const { postId, comment } = req.body;
  console.log(postId, comment);

  try {
    const post = await Post.findByIdAndUpdate(postId, { new: true })
      .sort({ "comments.commentedAt": -1 })
      .populate("comments.commentedBy");

    console.log(post);
    post.comments.unshift({
      comment,
      commentedBy: req.user,
    });
    post.save();
    const { comments } = post;
    res.json(comments);
  } catch (err) {
    console.log(err);
  }
  // const { comments } = post;
  // console.log(comments);
});

// const postRemoveComment = asynchandler(async (req, res) => {
//   const postId = req.params.postid;
//   const comment = req.body.comment
//   const post = await Post.findByIdAndUpdate(postId,{$push:{comments: comment}})
// })

export {
  sendPostToFrontend,
  getPostFromFrontend,
  postLikeUnlike,
  postAddComment,
};
