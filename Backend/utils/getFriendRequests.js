import express from "express";
import asynchandler from "express-async-handler";
import createError from "http-errors";
import User from "../models/userModel.js";

const getFriendRequest = asynchandler(async (_id) => {
  try {
    const user = await User.findOne({ _id: _id }).populate("friendRequests");

    let myFriendRequest = user.friendRequests.map((friend, i) => {
      return {
        _id: friend._id,
        firstname: friend.firstname,
        surname: friend.surname,
        profilePic: friend.profilePic,
      };
    });


    return myFriendRequest.slice(0, 10);
  } catch (err) {
    console.log(err);
  }
});

export { getFriendRequest };

// for (let i = 0; i < 20; i++) {
//     generateRandomUser();
//   }
