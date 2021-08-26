import express from "express";
import asynchandler from "express-async-handler";
import createError from "http-errors";
import User from "../models/userModel.js";

const getFriendKnow = asynchandler(async (_id) => {
  try {
    const user = await User.findOne({ _id: _id })
      .populate("friends")
      .populate("friendRequests");
    // .populate("friendRequests");

    const myFriends = user.friends;
    const myFriendRequest = user.friendRequests;
    const allUsers = await User.find({}).select(
      "-password -posts -dateofbirth -friends -friendRequests"
    );

    const union = [...new Set([...myFriends, ...myFriendRequest])];
    const peopleUserMayKnow = union
      .filter((friends) => !allUsers.includes(friends._id))
      .map((people) => {
        return {
          firstname: people.firstname,
          surname: people.surname,
          profilePic: people.profilePic,
          _id: people._id,
        };
      });

    return peopleUserMayKnow.slice(0, 10);
  } catch (err) {
    console.log(err);
  }
});

export { getFriendKnow };

// for (let i = 0; i < 20; i++) {
//     generateRandomUser();
//   }
