import express from "express";
import asynchandler from "express-async-handler";
import createError from "http-errors";
import User from "../models/userModel.js";

const getFriendKnow = asynchandler(async (_id) => {
  try {
    // function randomizeUser(array) {
    //   for (let i = array.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [array[i], array[j]] = [array[j], array[i]];
    //   }
    //   return array;
    // }
    const randomizeUser = (array) => {
      return array;
    };
    const user = await User.findOne({ _id: _id });

    const myFriends = user.friends;
    const myFriendRequest = user.friendRequests;
    const myFriendRequestSent = user.friendRequestSent;
    const allUsers = await User.find({}).select(
      "-password -posts -dateofbirth -friendRequests"
    );

    // console.log(allUsers);

    const union = [
      ...new Set([...myFriends, ...myFriendRequest, ...myFriendRequestSent]),
    ];
    // console.log(union);
    // console.log(myFriends);
    // console.log("____________________________________________");
    // console.log(myFriendRequest);
    // console.log("____________________________________________");
    // console.log(myFriendRequestSent);

    let peopleUserMayKnow = randomizeUser(
      allUsers
        .filter(
          (friends) =>
            !(
              new String(friends._id).valueOf() === new String(_id).valueOf()
            ) && !union.includes(friends._id)
        )
        .map((people) => {
          return {
            firstname: people.firstname,
            surname: people.surname,
            profilePic: people.profilePic,
            _id: people._id,
            friends: people.friends,
          };
        })
    );

    let testUser = randomizeUser(
      allUsers.forEach((user) => {
        // console.log(
        //   new String(user._id).valueOf() === new String(_id).valueOf()
        // );
        // console.log(union);
        // console.log(user._id);
        // console.log(!union.includes(user._id));
      })
    );

    return peopleUserMayKnow.slice(0, 10);
  } catch (err) {
    console.log(err);
  }
});

export { getFriendKnow };

// for (let i = 0; i < 20; i++) {
//     generateRandomUser();
//   }
