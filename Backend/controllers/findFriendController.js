import express from "express";
import asynchandler from "express-async-handler";
import User from "../models/userModel.js";
import { getFriendRequest } from "../utils/getFriendRequests.js";
import { getFriendKnow } from "../utils/getPeopleKnow.js";

const findFriend = asynchandler(async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user }).populate(
      "friendRequests"
    );

    const myFriendRequest = await getFriendRequest(req.user._id);
    let peopleUserMayKnow = await getFriendKnow(req.user._id);

    res.status(200).json({
      myFriendRequest,
      peopleUserMayKnow,
    });
  } catch (err) {
    console.log(err);
  }
});

const sendFriendRequest = asynchandler(async (req, res) => {
  const { friendId } = req.body.friendId;
  const myId = req.user.id;
  try {
    const me = await User.findOne(
      { _id: myId },
      { new: true },
      { $push: { friendRequestSent: { friendId } } }
    );
    const friend = await User.findOne(
      { _id: friendId },
      { new: true },
      { $push: { friendRequests: { myId } } }
    );

    res.status(200).json({
      sentRequest: true,
    });
  } catch (err) {
    console.log(err);
  }
});
const cancelFriendRequest = asynchandler(async (req, res) => {
  const { friendId } = req.body.friendId;
  const myId = req.user.id;
  try {
    const me = await User.findOne(
      { _id: myId },
      { new: true },
      { $pull: { friendRequestSent: { friendId } } }
    );
    const friend = await User.findOne(
      { _id: friendId },
      { new: true },
      { $pull: { friendRequests: { myId } } }
    );

    res.status(200).json({
      removedRequest: true,
    });
  } catch (err) {
    console.log(err);
  }
});
const deleteFriendRequest = asynchandler(async (req, res) => {
  const { friendId } = req.body.friendId;
  const myId = req.user.id;
  try {
    const me = await User.findOne(
      { _id: myId },
      { new: true },
      { $pull: { friendRequests: { friendId } } }
    );
    const friend = await User.findOne(
      { _id: friendId },
      { new: true },
      { $pull: { friendRequestSent: { myId } } }
    );

    res.status(200).json({
      deletedRequest: true,
    });
  } catch (err) {
    console.log(err);
  }
});

const confirmFriendRequest = asynchandler(async (req, res) => {
  const { friendId } = req.body.friendId;
  const myId = req.user.id;
  try {
    const me = await User.findOne(
      { _id: myId },
      { new: true },
      { $push: { friends: { friendId } } }
    );
    const friend = await User.findOne(
      { _id: friendId },
      { new: true },
      { $push: { friends: { myId } } }
    );

    res.status(200).json({
      confrimed: true,
    });
  } catch (err) {
    console.log(err);
  }
});
const removeFriend = asynchandler(async (req, res) => {
  const { friendId } = req.body.friendId;
  const myId = req.user.id;
  try {
    const me = await User.findOne(
      { _id: myId },
      { new: true },
      { $pull: { friends: { friendId } } }
    );
    const friend = await User.findOne(
      { _id: friendId },
      { new: true },
      { $pull: { friends: { myId } } }
    );

    res.status(200).json({
      removed: true,
    });
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
  deleteFriendRequest
};

// for (let i = 0; i < 20; i++) {
//     generateRandomUser();
//   }
