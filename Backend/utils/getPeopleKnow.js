import express from "express";
import asynchandler from "express-async-handler";
import createError from "http-errors";
import User from "../models/userModel.js";

const getFriendKnow = asynchandler(async (_id) => {
  try {
    function randomizeUser(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    // const randomizeUser = (array) => {
    //   return array;
    // };
    const user = await User.findOne({ _id: _id });

    // function to return users who are not friend, friendRequestSent, friendRequest, isnotMe
    const isFriend = (userId) => {
      return user.friends.includes(userId);
      777;
    };
    const isFriendRequestSent = (userId) => {
      return user.friendRequestSent.includes(userId);
    };
    const isFriendRequest = (userId) => {
      return user.friendRequests.includes(userId);
    };
    const isMe = (userId) => {
      return new String(user._id).valueOf() === new String(userId).valueOf();
    };

    const allUsers = await User.find({}).select(
      "-password -posts -dateofbirth -friendRequests"
    );

    const withoutFriend = allUsers.filter((user) => !isFriend(user._id));
    const withoutFriendReqeustSent = withoutFriend.filter(
      (user) => !isFriendRequestSent(user._id)
    );
    const withoutFriendRequest = withoutFriendReqeustSent.filter(
      (user) => !isFriendRequest(user)
    );
    const peopleUserMayKnow = randomizeUser(
      withoutFriendRequest.filter((user) => !isMe(user._id))
    ).map((people) => {
      return {
        firstname: people.firstname,
        surname: people.surname,
        profilePic: people.profilePic,
        _id: people._id,
        friends: people.friends,
      };
    });

    // randomizeUser(
    //   allUsers.forEach((user) => {
    //     console.log(`${user.firstname} is a friend ${isFriend(user._id)}`);
    //     console.log(
    //       `${user.firstname} is in FriendRequestSent ${isFriendRequestSent(
    //         user._id
    //       )}`
    //     );
    //     console.log(
    //       `${user.firstname} is in FriendRequest ${isFriendRequest(user._id)}`
    //     );
    //     console.log(`${user.firstname} is me ${isMe(user._id)}`);
    //     console.log(
    //       "___________________________________________________________________"
    //     );
    //   })
    // );

    // return peopleUserMayKnow.slice(0, 10);
    return peopleUserMayKnow;
  } catch (err) {
    console.log(err);
  }
});

export { getFriendKnow };

// for (let i = 0; i < 20; i++) {
//     generateRandomUser();
//   }
