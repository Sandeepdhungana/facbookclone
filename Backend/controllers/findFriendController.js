import express from "express";
import asynchandler from "express-async-handler";
import createError from "http-errors";
import User from "../models/userModel.js";
import generateRandomUser from "../utils/generateRandomUser.js";
import { getFriendRequest } from "../utils/getFriendRequests.js";
import { getFriendKnow } from "../utils/getPeopleKnow.js";

const findFriend = asynchandler(async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user }).populate(
      "friendRequests"
    );

    const myFriendRequest = await getFriendRequest(req.user._id);
    let peopleUserMayKnow = await getFriendKnow(req.user._id)

    res.status(200).json({
      myFriendRequest,
      peopleUserMayKnow,
    });
  } catch (err) {
    console.log(err);
  }
});

export { findFriend };

// for (let i = 0; i < 20; i++) {
//     generateRandomUser();
//   }
