import express from "express";
import asynchandler from "express-async-handler";
import User from "../models/userModel.js";
import generateRandomUser from "../utils/generateRandomUser.js";
import { getFriendRequest } from "../utils/getFriendRequests.js";
import { getMutualFriend } from "../utils/getMutualFriend.js";
import { getFriendKnow } from "../utils/getPeopleKnow.js";

const findFriend = asynchandler(async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user }).populate(
      "friendRequests"
    );

    // for (let i = 0; i < 30; i++) {
    //   generateRandomUser(i);
    // }

    const myFriendRequest = await getFriendRequest(req.user._id);
    const peopleUserMayKnow = await getFriendKnow(req.user._id);
    const mutualFriend = await getMutualFriend(peopleUserMayKnow, req.user._id);
    // console.log(peopleUserMayKnow);
    // console.log(mutualFriend);

    res.status(200).json({
      myFriendRequest,
      peopleUserMayKnow: mutualFriend,
    });
  } catch (err) {
    console.log(err);
  }
});
const myFriend = asynchandler(async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("friends");
    const friends = user.friends;
    const myFriends = friends.map((friend) => {
      return {
        firstname: friend.firstname,
        surname: friend.surname,
        profilePic: friend.profilePic,
        _id: friend._id,
      };
    });
    res.status(200).json(myFriends);
  } catch (err) {
    console.log(err);
  }
});

const sendFriendRequest = asynchandler(async (req, res) => {
  const { friendId } = req.body;
  const myId = req.user._id;
  try {
    await User.findByIdAndUpdate(
      myId,
      { $addToSet: { friendRequestSent: friendId } },
      { new: true }
    );
    await User.findByIdAndUpdate(
      friendId,
      { $addToSet: { friendRequests: myId } },
      { new: true }
    );
  } catch (err) {
    console.log(err);
  }
});
const cancelFriendRequest = asynchandler(async (req, res) => {
  const { friendId } = req.body;
  const myId = req.user.id;
  console.log("fried request cancelled");
  try {
    await User.findByIdAndUpdate(
      myId,
      { $pull: { friendRequestSent: friendId } },
      { new: true }
    );
    await User.findByIdAndUpdate(
      friendId,
      { $pull: { friendRequests: myId } },
      { new: true }
    );
  } catch (err) {
    console.log(err);
  }
});
const deleteFriendRequest = asynchandler(async (req, res) => {
  const { friendId } = req.body;
  const myId = req.user.id;
  try {
    await User.findByIdAndUpdate(
      myId,
      { $pull: { friendRequests: friendId } },
      { new: true }
    );
    await User.findByIdAndUpdate(
      friendId,
      { $pull: { friendRequestSent: myId } },
      { new: true }
    );
  } catch (err) {
    console.log(err);
  }
});

const confirmFriendRequest = asynchandler(async (req, res) => {
  const { friendId } = req.body;
  const myId = req.user.id;
  try {
    await User.findByIdAndUpdate(
      myId,
      { $addToSet: { friends: friendId } },
      { new: true }
    );
    await User.findByIdAndUpdate(
      friendId,
      { $addToSet: { friends: myId } },
      { new: true }
    );

    // Delete user from list

    await User.findByIdAndUpdate(
      myId,
      { $pull: { friendRequests: friendId } },
      { new: true }
    );
    await User.findByIdAndUpdate(
      friendId,
      { $pull: { friendRequestSent: myId } },
      { new: true }
    );
  } catch (err) {
    console.log(err);
  }
});
const removeFriend = asynchandler(async (req, res) => {
  const { friendId } = req.body;
  const myId = req.user.id;
  try {
    await User.findByIdAndUpdate(
      myId,
      { $pull: { friends: friendId } },
      { new: true }
    );
    await User.findByIdAndUpdate(
      friendId,
      { $pull: { friends: myId } },
      { new: true }
    );
  } catch (err) {
    console.log(err);
  }
});

export {
  findFriend,
  sendFriendRequest,
  confirmFriendRequest,
  cancelFriendRequest,
  removeFriend,
  deleteFriendRequest,
  myFriend,
};
