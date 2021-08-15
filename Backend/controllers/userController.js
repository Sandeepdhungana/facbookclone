import express from "express";
import asynchandler from "express-async-handler";
import createError from "http-errors";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

// Register User
const registerUser = asynchandler(async (req, res) => {
  const { nameandpassword, dateofbirth, gender } = req.body;
  const { firstname, surname, email, password } = nameandpassword;
  const { day, month, year } = dateofbirth;

  // Check if user with same email already exist in the database
  const userExists = await User.findOne({ email });
  // if the user exists throw error
  if (userExists) {
    throw createError(400, "User already exists");
  }
  // if the user doesnot exist create a new user in the database
  const user = await User.create({
    firstname,
    surname,
    email,
    password,
    dateofbirth: {
      day,
      month,
      year,
    },
    gender,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      firstname: user.firstname,
      surname: user.surname,
      email: user.email,
      dateofbirth: user.dateofbrith,
      profilePic: user.profilePic,
      gender: user.gender,
      coverPic: user.coverPic,
      friends: user.friends,
      friendRequests: user.friendRequests,
      posts: user.posts,
      token: generateToken(user._id),
    });
  } else {
    throw createError(400, "Invalid User Data");
  }
});

// Login User
const loginUser = asynchandler(async (req, res) => {
  const { emailandpassword } = req.body;
  const { email, password } = emailandpassword;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstname: user.firstname,
      surname: user.surname,
      email: user.email,
      dateofbirth: user.dateofbrith,
      profilePic: user.profilePic,
      coverPic: user.coverPic,
      friends: user.friends,
      friendRequests: user.friendRequests,
      posts: user.posts,
      token: generateToken(user._id),
    });
  } else {
    throw createError(401, "Invalid Email or Password");
  }
});

export { registerUser, loginUser };
