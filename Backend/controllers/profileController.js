import express from "express";
import asynchandler from "express-async-handler";
import createError from "http-errors";
import Post from "../models/postModel.js";
import User from "../models/userModel.js";

const getUserProfile = asynchandler(async (req, res) => {
  const { profileId } = req.params;
  try {
    let user = await User.findById(
      { _id: profileId },
      { friends: { $slice: -9 } }
    )
      .select("-password -email -friendRequests -posts")
      .populate("friends");
    const post = await Post.find({ postedBy: user._id }).populate("postedBy");

    const postImages = post.map((post) => {
      return post.postImage.length && post.postImage;
    });
    // let friends = user.friends.map((friend, i) => {
    //   return {
    //     firstname: friend.firstname,
    //     surname: friend.surname,
    //     _id: friend._id,
    //     profilePic: friend.profilePic,
    //   };
    // });
    console.log(user);

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
