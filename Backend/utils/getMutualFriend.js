import express from "express";
import asynchandler from "express-async-handler";
import createError from "http-errors";
import User from "../models/userModel.js";

const getMutualFriend = asynchandler(async (peopleUserMayKnow, _id) => {
  try {
    const mutaulFriends = (arrA, arrB) => {
      return arrA.filter((x) => arrB.includes(x));
    };
    const user = await User.findOne({ _id: _id }).populate("friendRequests");
    const myFriends = user.friends;

    const mu = peopleUserMayKnow.map((people) => {
      return {
        ...people,
        mutualFriend: mutaulFriends(people.friends, myFriends),
      };
    });

    return mu;
  } catch (err) {
    console.log(err);
  }
});

export { getMutualFriend };

// for (let i = 0; i < 20; i++) {
//     generateRandomUser();
//   }
